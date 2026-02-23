import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import { Resend } from "resend";

admin.initializeApp();

// La llave se obtiene exclusivamente de las variables de entorno / Firebase Secrets
const RESEND_API_KEY = process.env.RESEND_API_KEY;
if (!RESEND_API_KEY) {
    console.warn("WARNING: RESEND_API_KEY is not set. Email functions will fail.");
}
const resend = new Resend(RESEND_API_KEY || "dummy_key");

/**
 * Endpoint Callable (Cloud Function v1)
 * Evita las anulaciones de seguridad local del Firewall / Analyzer y de Firestore Eventarc.
 */
export const sendWelcomeEmailCallable = functions.https.onCall(async (data, context) => {
    const email = data.email;
    const name = data.name;
    const formType = data.formType || "contacto";

    // Verificación de seguridad
    if (!email) {
        console.log("No se proporcionó email.");
        return { success: false, error: "Email requerido." };
    }

    let subject = "Hemos recibido tu solicitud - LeaderLeads";
    let html = "";

    switch (formType) {
        case "auditoria":
            subject = "Tu Auditoría B2B Gratuita está en proceso 🚀";
            html = `
        <div style="font-family: Arial, sans-serif; color: #17191E; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7828C8;">¡Hola ${name || "futuro cliente"}! 👋</h2>
          <p>Hemos recibido tu solicitud para una <strong>Auditoría Gratuita de tu Ecosistema de Ventas B2B</strong>.</p>
          <p>Sabemos que cada prospecto perdido es dinero que se queda sobre la mesa. Nuestro equipo de estrategias ya está revisando tu caso para identificar exactamente dónde están los cuellos de botella actuales en tu embudo de ventas.</p>
          <p>En las próximas horas, uno de nuestros especialistas se pondrá en contacto contigo para agendar tu sesión de diagnóstico de 45 minutos. En esta reunión te daremos un mapa claro y accionable sin compromisos.</p>
          <br/>
          <p style="color: #666; font-size: 14px;">Preparándonos para escalar juntos,</p>
          <p><strong>El Equipo de LeaderLeads</strong></p>
        </div>
            `;
            break;
        case "mes-gratis":
            subject = "¡Aplicación a Mes Gratis Recibida! Siguientes Pasos 🎁";
            html = `
        <div style="font-family: Arial, sans-serif; color: #17191E; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7828C8;">Felicidades por tomar acción, ${name || "futuro cliente"} 🎁</h2>
          <p>Hemos recibido correctamente tu aplicación para disfrutar de <strong>1 Mes Gratis</strong> en nuestro ecosistema líder de generación B2B.</p>
          <p>Estamos entusiasmados por la posibilidad de convertirnos en tu principal partner tecnológico. El siguiente paso es sencillo: evaluaremos detenidamente tu solicitud y contactaremos a tu equipo directivo en el menor tiempo posible para agendar una Llamada de Calibración.</p>
          <p>En esa sesión técnica definiremos los OKRs de tu prueba de 30 días con riesgo cero. ¡Prepárate para experimentar cómo debería funcionar un verdadero motor de ventas!</p>
          <br/>
          <p style="color: #666; font-size: 14px;">Nos vemos del otro lado,</p>
          <p><strong>El Equipo de LeaderLeads</strong></p>
        </div>
            `;
            break;
        case "contacto":
        default:
            subject = "Confirmación de Recepción - LeaderLeads";
            html = `
        <div style="font-family: Arial, sans-serif; color: #17191E; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #7828C8;">¡Hola ${name || "futuro cliente"}! 👋</h2>
          <p>Confirmamos la recepción de tu mensaje en la plataforma de <strong>LeaderLeads</strong>.</p>
          <p>Hemos derivado de forma prioritaria tu solicitud al área interna correspondiente. Ya sea que busques contratar servicios, explorar alianzas estratégicas o unirte a nuestro equipo de talentos, nos pondremos en contacto contigo a la brevedad.</p>
          <p>Si consideras que tienes información adicional de gran importancia, puedes responder a este mismo correo directamente.</p>
          <br/>
          <p style="color: #666; font-size: 14px;">Un saludo corporativo,</p>
          <p><strong>El Equipo de LeaderLeads</strong></p>
        </div>
            `;
            break;
    }

    try {
        console.log(`Enviando email automatizado al correo: ${email} usando la plantilla: ${formType}`);

        // Llama a la API de Resend para disparar el correo.
        const response = await resend.emails.send({
            from: "LeaderLeads CRM <onboarding@leaderleads.co>",
            reply_to: "ceo@leaderleads.co",
            to: [email],
            subject: subject,
            html: html,
        });

        if (response.error) {
            console.error("Error emitido por Resend:", response.error);
            return { success: false, error: response.error };
        } else {
            console.log(`Email enviado con éxito a ${email}. ID:`, response.data?.id);
            return { success: true, id: response.data?.id };
        }
    } catch (err) {
        console.error("Ocurrió un error en el Backend:", err);
        return { success: false, error: "Error de Servidor Interno" };
    }
});
