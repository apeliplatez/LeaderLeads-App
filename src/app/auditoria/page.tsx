import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LeadForm } from '@/components/forms/lead-form';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Auditoría Gratuita - LeaderLeads',
    description: 'Solicita una auditoría estratégica gratuita de tus sistemas de captación y ventas B2B. Descubre cuellos de botella y oportunidades de crecimiento.',
    keywords: ["auditoría comercial gratis", "diagnóstico de ventas B2B", "consultoría de marketing corporativo", "análisis embudo de ventas"]
};

export default function AuditoriaPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                    <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-sm font-medium">Cupos Limitados Mensuales</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                Detén la fuga de capital.
                                <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"> Solicita tu Auditoría Gratis.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                Analizaremos tu ecosistema de marketing, ventas y cierre para identificar exactamente por qué no estás escalando como deberías. Sin compromisos.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONTENT & FORM SECTION */}
                <section className="pb-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-12 gap-16 items-start max-w-7xl mx-auto">

                            {/* VSL / INFO COLUMN */}
                            <div className="lg:col-span-5 space-y-10 order-2 lg:order-1">
                                <div className="prose prose-invert">
                                    <h3 className="text-3xl font-heading font-bold text-white mb-6">¿Qué obtienes en esta sesión estratégica de 45 mins?</h3>

                                    <ul className="space-y-6 list-none pl-0">
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                                                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            </div>
                                            <div>
                                                <strong className="block text-white text-lg mb-1">Diagnóstico de Embudos</strong>
                                                <span className="text-gray-400">Revisamos tus canales actuales de adquisición y por qué los prospectos rebotan.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                                                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            </div>
                                            <div>
                                                <strong className="block text-white text-lg mb-1">Evaluación de CRM y Ventas</strong>
                                                <span className="text-gray-400">Analizamos cómo tu equipo gestiona a los leads y qué automatizaciones faltan.</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <div className="mt-1 bg-primary/20 p-1 rounded-full text-primary">
                                                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                                            </div>
                                            <div>
                                                <strong className="block text-white text-lg mb-1">Plan de Ruta Ejecutable</strong>
                                                <span className="text-gray-400">Te entregaremos 3 estrategias accionables que puedes implementar por tu cuenta mañana mismo.</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                                    <p className="text-gray-300 italic">"LeaderLeads encontró fugas en nuestro embudo que nos costaban miles al mes. La auditoría sola nos dio más claridad que meses de asesorías previas."</p>
                                    <div className="flex items-center gap-3 mt-4">
                                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">M</div>
                                        <div>
                                            <h4 className="text-white font-medium text-sm">Marcos T.</h4>
                                            <p className="text-gray-500 text-xs">Director de Operaciones, TechFlow</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FORM COLUMN */}
                            <div className="lg:col-span-7 order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20"></div>
                                    <div className="relative bg-card rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                                        <div className="bg-primary/5 border-b border-white/5 px-8 py-6">
                                            <h2 className="text-2xl font-bold text-white">Postula tu Empresa</h2>
                                            <p className="text-gray-400 mt-2 text-sm">Seleccionamos a mano a las empresas a las que auditamos para garantizar que realmente podemos aportarles valor.</p>
                                        </div>
                                        <div className="p-8">
                                            <LeadForm type="auditoria" sourceName="Landing Auditoría Gratis" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
