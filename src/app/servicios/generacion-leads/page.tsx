import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Target, TrendingUp, Users, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Generación de Leads B2B | LeaderLeads',
    description: 'Sistema de adquisición de prospectos de alto valor con Google Ads y Meta Ads.',
};

const features = [
    { icon: Target, title: "Segmentación de Precisión", description: "Llegamos exactamente a los tomadores de decisión de tu nicho." },
    { icon: TrendingUp, title: "Optimización Continua", description: "Monitorizamos y ajustamos campañas 24/7 para reducir tu CPA." },
    { icon: Users, title: "Captación Multicanal", description: "Meta Ads, Google Ads y LinkedIn Ads integrados en una sola estrategia." }
];

const benefits = [
    "Flujo constante y predecible de oportunidades de venta.",
    "Leads filtrados y calificados de alto ticket.",
    "Reducción del costo de adquisición (CAC).",
    "Mayor tasa de cierre para tu equipo comercial."
];

export default function LeadGenerationService() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-card pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-primary/10">
                    <div className="container mx-auto px-6 max-w-5xl text-center">
                        <div className="mb-8">
                            <Button variant="ghost" asChild className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                                <Link href="/servicios"><ArrowLeft className="mr-2 h-4 w-4" /> Volver a Servicios</Link>
                            </Button>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-8">
                            Sistema de <span className="gradient-text">Generación de Leads</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12">
                            Creamos embudos de alta conversión utilizando las plataformas más potentes (Meta y Google Ads) para atraer clientes corporativos listos para comprar.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1" asChild>
                                <Link href="/#contacto">Solicitar Análisis Gratuito</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿Cómo funciona nuestro sistema?</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Tu máquina de adquisición B2B llave en mano.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {features.map((feature, i) => (
                                <div key={i} className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 transition-colors">
                                    <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-xl mb-6">
                                        <feature.icon className="h-7 w-7 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits Section */}
                <section className="py-20 lg:py-28 bg-card border-t border-primary/10">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="w-full lg:w-1/2">
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Resultados que transforman tu negocio</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    No buscamos me gusta ni clics vacíos. Nos enfocamos en el ROI y en llenar la agenda de tus vendedores con reuniones cualificadas de tomadores de decisión corporativos.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-4" />
                                            <span className="text-lg font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 bg-primary/5 p-10 rounded-3xl border border-primary/20">
                                <h3 className="text-2xl font-bold mb-4">¿Estás lanzando anuncios y perdiendo dinero?</h3>
                                <p className="text-muted-foreground mb-8">
                                    El 80% del presupuesto B2B se desperdicia en audiencias incorrectas. Déjanos auditar tus campañas actuales de forma gratuita y mostraremos exactamente cuánto dinero estás dejando sobre la mesa.
                                </p>
                                <Button size="lg" className="w-full text-lg py-6" asChild>
                                    <Link href="/#contacto">Auditar mis Campañas Ahora</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
