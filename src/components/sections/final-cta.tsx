"use client";

import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FinalCtaSection() {
    return (
        <section id="contacto" className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-6">
                <div
                    className="bg-primary rounded-2xl p-8 md:p-16 text-center shadow-2xl bg-cover bg-center"
                    style={{ backgroundImage: "linear-gradient(rgba(79, 70, 229, 0.9), rgba(79, 70, 229, 0.95)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')" }}
                    data-ai-hint="team business"
                >
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">¿Listo para Liderar tu Mercado?</h2>
                    <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
                        Solicita una auditoría gratuita y sin compromiso para identificar tus mayores oportunidades de crecimiento.
                    </p>
                    <div className="mt-8">
                        <Button
                            asChild
                            size="lg"
                            className="bg-background text-foreground hover:bg-background/90 px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
                        >
                            <Link href="/auditoria">
                                Agendar una Llamada
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
