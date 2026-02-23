import { Metadata } from 'next';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { LeadForm } from '@/components/forms/lead-form';
import { Sparkles, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Prueba LeaderLeads - Mes Gratis',
    description: 'No tomes riesgos. Aplica a nuestro programa de 1 Mes Gratis para transformar la generación de leads de tu negocio B2B.',
};

export default function MesGratisPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow">

                {/* HERO SECTION */}
                <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/20 rounded-full blur-[120px] -z-10" />

                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                <Sparkles className="w-4 h-4" />
                                <span className="text-sm font-medium">Programa de Prueba Sin Riesgo</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                Pruébanos por <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500">1 Mes Gratis.</span>
                            </h1>
                            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                Estamos tan seguros de nuestro sistema que absorberemos el riesgo inicial. Permítenos configurar tu motor de ventas B2B y demuestra el ROI antes de firmar un contrato anual.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CONTENT & FORM SECTION */}
                <section className="pb-24">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">

                            {/* FORM COLUMN */}
                            <div className="relative order-2 lg:order-1">
                                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-3xl blur opacity-20"></div>
                                <div className="relative bg-card rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
                                    <div className="bg-accent/5 border-b border-white/5 px-8 py-6">
                                        <h2 className="text-2xl font-bold text-white">Solicitar Mes de Prueba</h2>
                                        <p className="text-gray-400 mt-2 text-sm">Completa tus datos comerciales y elige qué servicio deseas integrar en el trial.</p>
                                    </div>
                                    <div className="p-8">
                                        <LeadForm type="mes-gratis" sourceName="Landing Promo Mes Gratis" />
                                    </div>
                                </div>
                            </div>

                            {/* VSL / INFO COLUMN */}
                            <div className="space-y-10 order-1 lg:order-2 lg:mt-12">
                                <div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-6">El Proceso de Admisión</h3>
                                    <div className="space-y-8 relative before:content-[''] before:absolute before:inset-y-0 before:left-6 before:w-[2px] before:bg-white/10">

                                        <div className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-card border border-accent/30 rounded-full flex items-center justify-center text-accent font-bold text-xl z-10 shadow-[0_0_15px_rgba(var(--accent),0.2)]">1</div>
                                            <h4 className="text-xl font-bold text-white mb-2 pt-2">Aplica en nuestro Portal</h4>
                                            <p className="text-gray-400">Envíanos la solicitud a través del formulario. Revisaremos tu modelo de B2B para determinar viabilidad estructural.</p>
                                        </div>

                                        <div className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-card border border-white/10 rounded-full flex items-center justify-center text-gray-400 font-bold text-xl z-10">2</div>
                                            <h4 className="text-xl font-bold text-white mb-2 pt-2">Llamada de Calibración</h4>
                                            <p className="text-gray-400">Si tu empresa califica, agendamos un Zoom rápido para detallar la logística y fijar los OKRs del periodo de prueba.</p>
                                        </div>

                                        <div className="relative pl-16">
                                            <div className="absolute left-0 top-0 w-12 h-12 bg-card border border-white/10 rounded-full flex items-center justify-center text-gray-400 font-bold text-xl z-10">3</div>
                                            <h4 className="text-xl font-bold text-white mb-2 pt-2">Go-Live!</h4>
                                            <p className="text-gray-400">Lanzamos tu sistema o automatización y durante 30 días operamos bajo nuestro costo. Cero excusas.</p>
                                        </div>

                                    </div>
                                </div>

                                <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-6 flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 mt-1">
                                        <span className="text-destructive font-bold text-lg">!</span>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-1">Restricciones Importantes</h4>
                                        <p className="text-sm text-gray-400">El programa está reservado exclusivamente para empresas operando con al menos $10k USD de facturación mensual y listas para escalar. Nos reservamos el derecho de admisión.</p>
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
