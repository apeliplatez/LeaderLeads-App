export interface BlogPost {
    category: string;
    title: string;
    description: string;
    image: string;
    badgeVariant: 'default' | 'secondary' | 'destructive' | 'outline';
    dataAiHint: string;
    slug: string;
    publishedAt: string;
    author: {
        name: string;
        role: string;
        avatar?: string;
    };
    contentParagraphs: string[];
}

export const posts: BlogPost[] = [
    {
        category: 'TECNOLOGÍA & VENTAS',
        title: '¿Por qué tu empresa en Venezuela necesita un CRM en 2026? Mitos y Realidades',
        description: 'Descubra cómo superar el "Excel" como base de datos. Explicamos cómo la hiperinflación y la competencia obligan a tener trazabilidad de cada dólar en tu embudo B2B.',
        image: 'https://placehold.co/1200x630/17191E/00E5FF?text=CRM+en+Venezuela+2026',
        badgeVariant: 'default',
        dataAiHint: 'crm transition',
        slug: 'por-que-usar-crm-empresas-venezuela',
        publishedAt: '2026-03-10T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'En el dinámico ecosistema empresarial de Venezuela, la gestión dependiente de hojas de cálculo de Excel y blocs de notas ha dejado de ser competitiva. Las empresas locales operan ahora bajo una presión por rentabilidad máxima, y los métodos analógicos provocan la fuga silenciosa de miles de dólares en prospectos fríos.',
            'Un "Customer Relationship Management" (CRM) no es más que un sistema centralizado de control corporativo. Sin embargo, en nuestro país todavía existen gerentes que lo consideran un "lujo" de corporaciones internacionales. Esto representa el mito número uno: El CRM no es un lujo, es el único salvavidas frente a un mercado hiper-inflacionario donde cada contacto cuesta dinero en publicidad.',
            'INLINE_CTA_AUDITORIA',
            'La realidad es cruda: la mayoría de los leads en Venezuela llegan a través de WhatsApp. Cuando dependemos exclusivamente de un agente comercial interactuando con WhatsApp sin trazabilidad global, su rotación laboral significa la pérdida total de nuestra base histórica de clientes orgánicos.',
            'Implementar un CRM en 2026 obliga a tu fuerza de ventas a trabajar bajo un "pipeline" (embudo) estructurado. Esta estructura transparente es la única que permite a los Directores de Operaciones (COO) y CEOs visualizar cuánto dinero hay estancado en la mesa de negociaciones y por qué un prospecto lleva 15 días sin avanzar en el proceso de decisión de compra.',
            'INLINE_CTA_TRIAL',
            'Otro factor diferenciador vital: la cualificación B2B automatizada. Empresas venezolanas vanguardistas hoy son capaces de rastrear no sólo los correos abiertos, sino los clicks en cotizaciones PDF, reaccionando mucho más rápido que la competencia local aún anclada a los envíos masivos impersonales.',
            'En resumen, la madurez digital exige relegar el Excel a roles funcionales financieros y migrar la gestión operativa de relaciones al CRM. Quienes opten por este blindaje tecnológico en Venezuela escalarán sobre el estancamiento táctico de su competencia durante la segunda mitad de esta década.'
        ]
    },
    {
        category: 'PERFORMANCE',
        title: 'Clientify en Venezuela: El CRM ideal para Equipos de Ventas por WhatsApp',
        description: 'Análisis técnico de Clientify. Por qué su integración nativa con WhatsApp Business API salva negocios locales que operan 90% por chat.',
        image: 'https://placehold.co/1200x630/17191E/FF5E00?text=Clientify+WhatsApp',
        badgeVariant: 'secondary',
        dataAiHint: 'clientify platform',
        slug: 'clientify-crm-venezuela-whatsapp',
        publishedAt: '2026-03-11T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 2.'
        ]
    },
    {
        category: 'TECNOLOGÍA',
        title: 'Clientify vs Kommo (AmoCRM): ¿Cuál CRM domina el mercado venezolano?',
        description: 'Un cuadrante de evaluación objetivo. Precios en USD, integración de pagos locales, y curva de aprendizaje para agentes de ventas venezolanos.',
        image: 'https://placehold.co/1200x630/17191E/7828C8?text=Kommo+vs+Clientify',
        badgeVariant: 'destructive',
        dataAiHint: 'crm comparison',
        slug: 'clientify-vs-kommo-amocrm-venezuela',
        publishedAt: '2026-03-12T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 3.'
        ]
    },
    {
        category: 'ESCALABILIDAD',
        title: 'HubSpot B2B: Cuándo abandonar los CRMs básicos y escalar tu corporación',
        description: 'Orientado a C-Level. Explicar el concepto de "Customer Hub" y cómo justificar el ticket alto de HubSpot mediante el ROI cerrado.',
        image: 'https://placehold.co/1200x630/17191E/00E5FF?text=HubSpot+B2B',
        badgeVariant: 'default',
        dataAiHint: 'hubspot enterprise',
        slug: 'hubspot-empresas-b2b-venezuela',
        publishedAt: '2026-03-13T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 4.'
        ]
    },
    {
        category: 'GESTIÓN RH',
        title: 'Cómo lograr que tus vendedores sí usen el CRM (Y dejen de anotar en agendas)',
        description: 'El lado humano de la tecnología. Abordar el miedo del vendedor a ser "espiado" vs el control del director. Estrategias de incentivos.',
        image: 'https://placehold.co/1200x630/17191E/FF5E00?text=Adopcion+del+CRM',
        badgeVariant: 'secondary',
        dataAiHint: 'team management',
        slug: 'adopcion-crm-vendedores-venezuela',
        publishedAt: '2026-03-14T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 5.'
        ]
    },
    {
        category: 'SISTEMAS',
        title: 'Integrando tu CRM: WhatsApp, Instagram y Facturación en un solo Dashboard',
        description: 'Casos prácticos donde un DM de Instagram crea automáticamente un negocio en el embudo (Pipeline) sin intervención humana.',
        image: 'https://placehold.co/1200x630/17191E/7828C8?text=Integraciones+Omnicanal',
        badgeVariant: 'destructive',
        dataAiHint: 'api integration',
        slug: 'integrar-crm-whatsapp-instagram-ventas',
        publishedAt: '2026-03-15T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 6.'
        ]
    },
    {
        category: 'INTELIGENCIA ARTIFICIAL',
        title: 'Inteligencia Artificial B2B: El futuro de la gestión de clientes (CRM) en LATAM',
        description: 'Tendencias 2026. Cómo la IA resume conversaciones, califica leads automáticamente y predice los ingresos del próximo trimestre (Forecasting).',
        image: 'https://placehold.co/1200x630/17191E/00E5FF?text=IA+en+CRM',
        badgeVariant: 'default',
        dataAiHint: 'ai forecasting',
        slug: 'inteligencia-artificial-crm-b2b-latam',
        publishedAt: '2026-03-16T10:00:00Z',
        author: {
            name: 'Cesar Daniel Blanco',
            role: 'CEO & Consultor B2B'
        },
        contentParagraphs: [
            'Articulo programado para el Día 7.'
        ]
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
    return posts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
