import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, UserPlus, PhoneCall, Handshake, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Soporte en RRHH y Closers | LeaderLeads',
    description: 'Talento humano entrenado para cualificar y cerrar tus ventas. Appointment Setters y Closers B2B bajo demanda.',
};

const features = [
    { icon: UserPlus, title: "Reclutamiento Especializado", description: "Buscamos y filtramos perfiles con ADN comercial puro, específicamente para tu nicho." },
    { icon: PhoneCall, title: "Appointment Setting", description: "Profesionales dedicados a llamar a tus leads fríos y agendar reuniones calificadas." },
    { icon: Handshake, title: "Closers de Alto Valor", description: "Expertos en cierre de ventas que toman las reuniones agendadas y firman contratos." }
];

const benefits = [
    "Ahorro drástico en tiempos y costos de reclutamiento interno.",
    "Equipo comercial formado en metodologías de ventas actuales (SPIN, Sandler).",
    "Escalabilidad inmediata: añade o reduce talento según la estacionalidad.",
    "Reducción a cero del desgaste táctico de tu equipo directivo."
];

export default function HRSupportService() {
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
                            Soporte en <span className="gradient-text">RRHH para tus leads</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12">
                            Te proveemos de Appointment Setters y Closers de ventas altamente capacitados para gestionar tu flujo, cualificarlos y firmarlos; operando como una extensión de tu propio equipo.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1" asChild>
                                <Link href="/#contacto">Integra a tu Setter Hoy</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">El músculo que tu empresa necesita</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Deja de formar gente desde cero. Integramos recursos humanos listos para producir.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Convierte leads en contratos firmados</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Un lead generado pero no contactado en los primeros 5 minutos pierde el 80% de probabilidad de cierre. Nuestro equipo garantiza la velocidad de atención que requiere el B2B moderno.
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
                                <h3 className="text-2xl font-bold mb-4">Descubre el perfil de tu Setter Ideal</h3>
                                <p className="text-muted-foreground mb-8">
                                    ¿No estás seguro de si necesitas un Closer o un Appointment Setter? Programemos una sesión breve donde analizaremos el cuello de botella de tu equipo actual.
                                </p>
                                <Button size="lg" className="w-full text-lg py-6" asChild>
                                    <Link href="/#contacto">Evaluar mi Equipo Comercial</Link>
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
