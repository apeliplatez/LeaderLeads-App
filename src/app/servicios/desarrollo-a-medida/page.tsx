import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MonitorSmartphone, Code, Cpu, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Desarrollo de Software a Medida | LeaderLeads',
    description: 'Plataformas B2B, automatizaciones complejas y aplicaciones móviles Enterprise diseñadas para escalar tus operaciones corporativas.',
    keywords: ["desarrollo de software a medida", "software b2b corporativo", "automatización de procesos it", "aplicaciones web y móviles enterprise", "desarrollo tech a medida"]
};

const features = [
    { icon: Code, title: "Plataformas Web & Portales B2B", description: "Construimos interfaces seguras, rápidas e intuitivas para tus clientes corporativos y operaciones internas." },
    { icon: MonitorSmartphone, title: "Desarrollo de Apps Nativas", description: "Experiencias móviles premium en iOS y Android para digitalizar servicios y fidelizar la retención." },
    { icon: Cpu, title: "Automatización & IA Integrada", description: "Desarrollo de CRMs customizados e integración de Inteligencia Artificial para agilizar tus flujos operacionales." }
];

const benefits = [
    "Software propiedad 100% de tu empresa, sin licencias mensuales asfixiantes por usuario.",
    "Arquitectura escalable en la nube (AWS/Google Cloud) lista para crecer contigo.",
    "Experiencia de Usuario (UX) B2B intuitiva que requiere cero entrenamiento para tus empleados.",
    "Soporte continuo e iteración ágil de nuevas funcionalidades según demande el mercado."
];

export default function CustomSoftwareService() {
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
                            Desarrollo de <span className="gradient-text">Software a Medida</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12">
                            Transformación digital radical. Creamos plataformas corporativas, CRMs a medida, aplicaciones móviles y automatizaciones complejas integradas a tus operaciones.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1" asChild>
                                <Link href="/auditoria">Agendar Arquitecto Tech</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ingeniería que empodera operaciones</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Escribimos el código que se adapta a tus reglas de negocio, no al revés.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ventaja Injusta Digital</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Deje de adaptar sus procesos vitales a las limitaciones de un software de terceros. Creamos ecosistemas que se sienten como guantes hechos a medida.
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
                                <h3 className="text-2xl font-bold mb-4">Descubrimiento Arquitectónico</h3>
                                <p className="text-muted-foreground mb-8">
                                    El primer paso es entender la fricción. Habla gratis con uno de nuestros líderes técnicos para estructurar la viabilidad y alcance de tu aplicación corporativa.
                                </p>
                                <Button size="lg" className="w-full text-lg py-6" asChild>
                                    <Link href="/auditoria">Agendar Descubrimiento</Link>
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
