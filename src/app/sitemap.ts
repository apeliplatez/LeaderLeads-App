import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://leaderleads.co';

    // Rutas estáticas clave del modelo B2B
    const staticRoutes = [
        '',
        '/auditoria',
        '/contact',
        '/mes-gratis',
        '/modelo-ll',
        '/somos-ll',
        '/servicios',
        '/servicios/generacion-leads',
        '/servicios/ecommerce',
        '/servicios/marketing-automatizado',
        '/servicios/soporte-rrhh',
        '/servicios/desarrollo-a-medida',
        '/insights',
    ];

    return staticRoutes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
    }));
}
