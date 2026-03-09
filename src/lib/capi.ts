export async function hashSHA256(str: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(str.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export function getCookie(name: string): string | undefined {
    if (typeof document === 'undefined') return undefined;
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) return match[2];
    return undefined;
}

export async function sendCAPIEvent(eventName: string, email: string, customData?: any) {
    if (!email) return;

    try {
        const hashedEmail = await hashSHA256(email);
        const fbp = getCookie('_fbp');
        const fbc = getCookie('_fbc');
        const eventId = `evt_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        const payload = {
            eventName: eventName,
            eventId: eventId,
            eventSourceUrl: window.location.href,
            userData: {
                em: [hashedEmail], // Meta requiere Hashes PII en Array
                fbp: fbp,
                fbc: fbc
            },
            customData: customData,
            attributionData: { attribution_share: "0.3" }, // Atribución requerida usualmente
            originalEventData: {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000)
            }
        };

        // Enviaremos a un endpoint unificado en el mismo dominio (Rewrite en Firebase)
        const endpointURL = process.env.NODE_ENV === 'development'
            ? 'http://127.0.0.1:5001/abstract-ring-466603-i7/us-central1/sendMetaConversion'
            : '/api/capi';

        await fetch(endpointURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        console.log(`🔒 Evento ${eventName} despachado vía S2S.`);
    } catch (e) {
        console.error('CAPI S2S Error:', e);
    }
}
