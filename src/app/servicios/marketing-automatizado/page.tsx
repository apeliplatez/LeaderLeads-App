import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, Zap, Clock } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Marketing Automatizado B2B | LeaderLeads',
    description: 'Funnels inteligentes que nutren e incentivan la compra utilizando Email y automatización.',
};

const features = [
    { icon: Mail, title: "Secuencias de Email", description: "Campañas de goteo diseñadas para calentar leads fríos y mantener la atención de tu audiencia." },
    { icon: MessageSquare, title: "Automatización Omnicanal", description: "Flujos de WhatsApp y SMS que envían el mensaje correcto en el momento exacto." },
    { icon: Zap, title: "Lead Scoring", description: "Califica a tus prospectos automáticamente para que ventas hable solo con los más interesados." }
];

const benefits = [
    "Notificaciones inmediatas a tu equipo de ventas al detectar intención de compra.",
    "Incremento en el Lifetime Value (LTV) de clientes actuales.",
    "Ahorro de cientos de horas mensuales en tareas manuales de seguimiento.",
    "Recuperación de hasta el 30% de oportunidades comerciales 'perdidas'."
];

export default function MarketingAutomatedService() {
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
                            <span className="gradient-text">Marketing Automatizado</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12">
                            Transformamos prospectos fríos en clientes calientes mediante secuencias inteligentes de correo electrónico, WhatsApp y SMS impulsadas por comportamientos.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1" asChild>
                                <Link href="/#contacto">Automatiza tu embudo hoy</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tu vendedor silencioso operando 24/7</h2>
                            <p className="mt-4 text-lg text-muted-foreground">La automatización no es solo enviar emails, es enviar el mensaje perfecto en base al comportamiento del usuario.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">El poder de escalar tus ventas</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Mientras tu equipo comercial duerme, tu sistema sigue nutriendo, filtrando e incentivando la compra de tus prospectos de forma masiva pero hiper-personalizada.
                                </p>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start">
                                            <Clock className="h-6 w-6 text-primary shrink-0 mr-4" />
                                            <span className="text-lg font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full lg:w-1/2 bg-primary/5 p-10 rounded-3xl border border-primary/20">
                                <h3 className="text-2xl font-bold mb-4">Mapeo Gratuito de Funnel</h3>
                                <p className="text-muted-foreground mb-8">
                                    ¿Aún haces seguimiento en Excel o notas de papel? Nuestro equipo experto trazará el 'blueprint' de automatización ideal para el ciclo de venta de tu modelo B2B. Agenda hoy mismo.
                                </p>
                                <Button size="lg" className="w-full text-lg py-6" asChild>
                                    <Link href="/#contacto">Agendar Mapeo de Flujos</Link>
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
