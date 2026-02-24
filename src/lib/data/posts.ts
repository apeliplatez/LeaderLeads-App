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
        category: 'ESTRATEGIA',
        title: 'Más allá de los Leads: Cómo construir una máquina de retención',
        description: 'Descubre por qué la verdadera rentabilidad no está en la primera venta, sino en la segunda, tercera y cuarta.',
        image: 'https://placehold.co/1200x630/17191E/00E5FF?text=Maquina+de+Retencion',
        badgeVariant: 'default',
        dataAiHint: 'strategy chart',
        slug: 'maquina-de-retencion',
        publishedAt: '2026-02-23T08:00:00Z',
        author: {
            name: "Equipo de Analytics",
            role: "LeaderLeads Strategy HQ"
        },
        contentParagraphs: [
            "El ecosistema B2B está colapsado de empresas compitiendo ferozmente por capturar el mismo conjunto limitado de Leads fríos. Los costos de adquisición en canales como Google Ads o LinkedIn Ads han aumentado de forma sostenida a lo largo de los años. Sin embargo, la obsesión exclusiva con la inyección constante de prospectos a la parte alta del embudo suele dejar una hemorragia invisible en la parte baja: la retención.",
            "Para construir una máquina financiera verdaderamente robusta, tu esfuerzo no debe terminar cuando el contrato se firma. Ese hito es literalmente el momento de arranque. Según las últimas métricas de la industria, retener a un cliente cuesta entre 5 y 7 veces menos que adquirir a uno nuevo. Tu enfoque debe mutar para centrarse en los 'Leading Indicators' (indicadores tempranos) de insatisfacción o adopción de tu producto/servicio en los primeros 30 días.",
            "INLINE_CTA_AUDITORIA",
            "Las métricas de rentabilidad escalan logarítmicamente cuando dominas el arte del Cross-Selling y Up-Selling. No se trata sólo de empujar contratos largos, sino de estar activamente mapeando la evolución de las necesidades de la empresa de tu cliente. Cuantos más problemas logres interceptar en base a la relación actual, mayor será su barrera mental para darse de baja de tus servicios."
        ]
    },
    {
        category: 'VENTAS HIGH-TICKET',
        title: 'Los 5 errores que matan tus ventas de alto valor (y cómo evitarlos)',
        description: 'Analizamos los fallos más comunes en ciclos de venta largos y te damos el plan para acelerar tus cierres.',
        image: 'https://placehold.co/1200x630/17191E/FF5E00?text=Ventas+High-Ticket',
        badgeVariant: 'secondary',
        dataAiHint: 'sales meeting',
        slug: 'errores-ventas-alto-valor',
        publishedAt: '2026-02-15T10:30:00Z',
        author: {
            name: "Dirección Comercial",
            role: "LeaderLeads Sales Team"
        },
        contentParagraphs: [
            "El B2B High-Ticket no funciona bajo la misma física que la venta por impulso. Aquí no compites con el bolsillo del prospecto, compites contra el Status Quo de la corporación. Uno de los peores errores es no identificar a todos los Stakeholders ocultos del proceso de compra.",
            "A veces le estás vendiendo tu solución increíble y disruptiva al CFO, pero resulta que el equipo de Operaciones es quien la va a sufrir/implementar. Si no te pones a ese equipo de tu lado temprano, vetarán y silenciarán tu victoria.",
            "INLINE_CTA_TRIAL",
            "La fricción debe eliminarse del Discovery. Un consultor que sólo inyecta su guion estándar se percibe instantáneamente como una pérdida de tiempo comercial. Hay que preguntar por diagnósticos específicos, y, más importante, hay que saber cuándo decir 'Nosotros no somos para ustedes'."
        ]
    },
    {
        category: 'TECNOLOGÍA',
        title: 'IA en Atención al Cliente: ¿Reemplazo o superpoder?',
        description: 'Cómo usar la inteligencia artificial para potenciar a tu equipo de soporte, no para sustituirlo.',
        image: 'https://placehold.co/1200x630/17191E/7828C8?text=IA+Atencion+al+Cliente',
        badgeVariant: 'destructive',
        dataAiHint: 'customer service',
        slug: 'ia-atencion-cliente',
        publishedAt: '2026-02-10T14:15:00Z',
        author: {
            name: "Equipo de Arquitectura IA",
            role: "LeaderLeads Tech HQ"
        },
        contentParagraphs: [
            "La narrativa popular asume que los LLMs vinieron para borrar a todos los operadores de atención al público de la faz del planeta. En la práctica real del B2B, eso es una falacia. Una red LLM excelente sin una heurística humana superior, es sólo un lorito erudito con alta latencia.",
            "Las corporaciones inteligentes no están reemplazando a su tier 2 de soporte. Lo están dotando de modelos tipo 'Copilot'. En instantes, un operador tiene el sentiment-analysis del cliente, toda su bitácora de tickets, y una sugerencia de respuesta redactada magistralmente lista para su aprobación final.",
            "INLINE_CTA_AUDITORIA",
            "Acelerar a un humano en un 400% genera mucha más tracción empática y de vida de red en tus clientes corporativos. Si un Ticket de Soporte demoraba 3 horas en resolverse y ahora toma 4 minutos, esa cuenta es dinero líquido en tu balanza mensual."
        ]
    },
    {
        category: 'MARKETING DIGITAL',
        title: 'El Futuro del SEO: Tendencias que Dominarán la Próxima Década',
        description: 'Exploramos cómo la búsqueda por voz, la IA y la experiencia de usuario están redefiniendo el SEO.',
        image: 'https://placehold.co/1200x630/17191E/00E5FF?text=El+Futuro+del+SEO',
        badgeVariant: 'default',
        dataAiHint: 'seo trends',
        slug: 'futuro-del-seo',
        publishedAt: '2026-02-05T09:00:00Z',
        author: {
            name: "Mesa de Redacción",
            role: "LeaderLeads Analytics"
        },
        contentParagraphs: [
            "El SEO ya no es llenar cabeceras con h1 repetidos hasta el cansancio. Lo que define el Index Rank ahora mismo es el concepto 'Helpful Content' y los Web Vitals: un mix mortífero donde el código técnico se abraza con el valor real aportado al usuario.",
            "Más que nunca, la Inyección Semántica y los Schemas son el verdadero idioma de Google. Declarar tus artículos bajo esquemas JSON-LD (NewsArticle, FAQPage) le permiten a los rastreadores clasificar la certidumbre de tu contenido a toda velocidad."
        ]
    },
    {
        category: 'E-COMMERCE',
        title: 'Psicología de Precios: 7 Estrategias para Aumentar tu Conversión',
        description: 'Aprende a fijar precios que no solo cubran costos, sino que también comuniquen valor y persuadan a la compra.',
        image: 'https://placehold.co/1200x630/17191E/FF5E00?text=Psicologia+de+Precios',
        badgeVariant: 'secondary',
        dataAiHint: 'ecommerce pricing',
        slug: 'psicologia-de-precios',
        publishedAt: '2026-01-20T11:45:00Z',
        author: {
            name: "E-Commerce Advisors",
            role: "LeaderLeads Retail"
        },
        contentParagraphs: [
            "Vender a $9.99 en el B2B Corporativo no funciona y lastima el anclaje de tu percepción de valor. El 'Charm Pricing' sirve para los tickets en mercados de consumo (B2C).",
            "Cuando vendes plataformas corporativas, usar números cerrados y robustos, complementados con matrices de Tier (Gold, Pro, Enterprise) es lo que activa el contraste de anclaje correcto de tu buyer persona."
        ]
    },
    {
        category: 'CRECIMIENTO',
        title: 'Growth Hacking para Startups: Tácticas de Bajo Costo y Alto Impacto',
        description: 'Descubre tácticas creativas y eficientes para adquirir usuarios y crecer rápidamente sin un gran presupuesto de marketing.',
        image: 'https://placehold.co/1200x630/17191E/7828C8?text=Growth+Hacking',
        badgeVariant: 'destructive',
        dataAiHint: 'startup growth',
        slug: 'growth-hacking-startups',
        publishedAt: '2026-01-10T08:15:00Z',
        author: {
            name: "Equipo de Analytics",
            role: "LeaderLeads Strategy HQ"
        },
        contentParagraphs: [
            "El Growth Hacking no se refiere a la manipulación barata. Hablamos de sistematizar el bucle iterativo de recolección, ideación, testeo A/B y métricas.",
            "No asumas que un webinar pregrabado tracciona. Trátalo como una hipótesis, libéralo segmentado, anota los Drop-offs en el minuto 14 y regraba lo que no captó la atención. Testeo veloz y sin dolor."
        ]
    }
];

export function getPostBySlug(slug: string): BlogPost | undefined {
    return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count: number = 3): BlogPost[] {
    return posts.filter((p) => p.slug !== currentSlug).slice(0, count);
}
