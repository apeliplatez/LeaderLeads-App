"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServiceFinderForm from '@/components/ai/service-finder-form';
import { BrainCircuit, ArrowRight, BarChart, Settings, ShoppingCart, Users } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres." }),
    phone: z.string().min(8, { message: "Por favor, introduce un número de teléfono válido." }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
});

function ContactModal({ isOpen, onOpenChange }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void }) {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { name: "", email: "", company: "", phone: "", message: "" },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        onOpenChange(false);
        toast({
            title: "Solicitud Enviada",
            description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
        });
        form.reset();
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-card rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">Hablemos de tu Crecimiento</DialogTitle>
                    <DialogDescription>Completa el formulario y nos pondremos en contacto lo antes posible.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="name" render={({ field }) => (<FormItem> <FormLabel>Nombre Completo</FormLabel> <FormControl><Input placeholder="Juan Pérez" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                        <FormField control={form.control} name="email" render={({ field }) => (<FormItem> <FormLabel>Email Corporativo</FormLabel> <FormControl><Input placeholder="juan@empresa.com" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                        <FormField control={form.control} name="company" render={({ field }) => (<FormItem> <FormLabel>Empresa</FormLabel> <FormControl><Input placeholder="Nombre de tu Empresa" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                        <FormField control={form.control} name="phone" render={({ field }) => (<FormItem> <FormLabel>Número de Teléfono</FormLabel> <FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                        <FormField control={form.control} name="message" render={({ field }) => (<FormItem> <FormLabel>¿Cómo podemos ayudarte?</FormLabel> <FormControl><Textarea placeholder="Cuéntanos sobre tu principal desafío y tus objetivos..." {...field} /></FormControl> <FormMessage /> </FormItem>)} />
                        <DialogFooter>
                            <Button type="submit" className="w-full text-lg py-6 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">Enviar Solicitud</Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}

const HeroSection = () => (
    <section className="bg-card pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-primary/10">
        <div className="container mx-auto px-6 max-w-5xl text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-6">
                Visión 360 de nuestros <span className="gradient-text">Servicios</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-xl text-muted-foreground">
                Un ecosistema de ventas &apos;llave en mano&apos; que empodera tu negocio.
                Tú cierras negocios, nosotros gestionamos los leads.
            </p>
        </div>
    </section>
);

const ServicesGridSection = () => {
    const services = [
        {
            title: 'Sistema de Generación de leads',
            description: 'Atrae clientes cualificados de forma predecible. Creamos embudos de alta conversión utilizando campañas optimizadas en Google y Meta Ads para llenar tu pipeline comercial.',
            href: '/servicios/generacion-leads',
            icon: BarChart,
        },
        {
            title: 'Marketing Automatizado',
            description: 'Funnels inteligentes que nutren e incentivan la compra. Diseñamos secuencias de email, WhatsApp y automatización de flujos B2B que trabajan silenciosamente 24/7.',
            href: '/servicios/marketing-automatizado',
            icon: Settings,
        },
        {
            title: 'Construcción y gestión de E-commerce',
            description: 'Tiendas optimizadas para máxima conversión. Operamos y estructuramos tu ecosistema de venta directa digital con diseño persuasivo y UX impecable.',
            href: '/servicios/ecommerce',
            icon: ShoppingCart,
        },
        {
            title: 'Soporte en RRHH para tus leads',
            description: 'Talento humano entrenado para cerrar tus ventas. Asignamos closers y appointment setters profesionales que se incorporan como una extensión de tu propio equipo.',
            href: '/servicios/soporte-rrhh',
            icon: Users,
        },
    ];

    return (
        <section className="py-24 bg-background">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group flex flex-col justify-between bg-card transition-colors p-8 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 h-full relative overflow-hidden shadow-sm hover:shadow-xl">
                                <div>
                                    <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                                        <Icon className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-8 text-lg">
                                        {service.description}
                                    </p>
                                </div>
                                <div>
                                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" asChild>
                                        <Link href={service.href}>
                                            Ver detalles del servicio <ArrowRight className="ml-2 w-4 h-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const AiAdvisorSection = () => (
    <section id="ia-analyzer" className="py-20 lg:py-28 bg-background border-t border-primary/10">
        <div className="container mx-auto px-6">
            <div className="bg-card rounded-2xl p-8 md:p-16 text-center shadow-xl border border-border/50">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4">
                    <BrainCircuit className="h-10 w-10" />
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">✨ Recomendador IA de Servicios</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    ¿No sabes exactamente qué servicio priorizar? Describe el estado de tu negocio y nuestra IA te indicará el paso más rentable a seguir.
                </p>
                <div className="mt-8 max-w-4xl mx-auto">
                    <ServiceFinderForm />
                </div>
            </div>
        </div>
    </section>
);

const FinalCtaSection = ({ openModal }: { openModal: () => void }) => (
    <section id="contacto" className="py-20 lg:py-28 bg-primary/5">
        <div className="container mx-auto px-6 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para escalar tus operaciones corporativas?</h2>
            <p className="text-xl text-muted-foreground mb-10">Solicita una auditoría gratuita y descubre la estrategia óptima para tu modelo comercial.</p>
            <Button size="lg" onClick={openModal} className="text-lg px-10 py-6 rounded-full shadow-lg shadow-primary/25">
                Solicitar Auditoría Inmediata
            </Button>
        </div>
    </section>
);

export default function ServiciosClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main>
                <HeroSection />
                <ServicesGridSection />
                <AiAdvisorSection />
                <FinalCtaSection openModal={() => setIsModalOpen(true)} />
            </main>
            <Footer />
            <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    );
}

