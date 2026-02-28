"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Users, Target, Eye, Heart, Zap } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const teamMembers = [
    { name: 'Cesar Daniel Blanco', role: 'CEO & Fundador', img: 'https://placehold.co/300x300/e0e7ff/4338ca?text=CB' },
    { name: 'Oscar Reyes', role: 'CTO', img: 'https://placehold.co/300x300/e0e7ff/4338ca?text=OR' },
    { name: 'Anuar Ali Mendez', role: 'CMO', img: 'https://placehold.co/300x300/e0e7ff/4338ca?text=AM' },
    { name: 'Gianluigi Lopez', role: 'COO', img: 'https://placehold.co/300x300/e0e7ff/4338ca?text=GL' },
];

const values = [
    { icon: <Heart className="h-8 w-8 text-primary" />, title: 'Obsesión por el Cliente', description: 'El éxito de nuestros clientes es nuestro éxito. Nos sumergimos en sus negocios para entregar resultados que importan.' },
    { icon: <Zap className="h-8 w-8 text-primary" />, title: 'Innovación Práctica', description: 'Aplicamos la tecnología y las estrategias más avanzadas, pero solo si generan un impacto real y medible.' },
    { icon: <Users className="h-8 w-8 text-primary" />, title: 'Colaboración Radical', description: 'Somos una extensión de tu equipo. La transparencia y la comunicación constante son la base de nuestras relaciones.' },
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="text-center">
        <Image
            src={member.img}
            alt={`Foto de ${member.name}`}
            width={150}
            height={150}
            className="w-32 h-32 mx-auto rounded-full mb-4 border-4 border-primary/20 object-cover"
            data-ai-hint="person portrait"
        />
        <h4 className="font-bold text-lg text-foreground">{member.name}</h4>
        <p className="text-primary">{member.role}</p>
    </div>
);


export default function SomosLLPage() {
    return (
        <div className="flex flex-col min-h-screen bg-background font-sans">
            <Header />
            <main>
                <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-heading text-foreground leading-tight">
                            Somos <span className="gradient-text">LeaderLeads</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                            No somos una agencia más. Somos tu socio de crecimiento estratégico, un equipo de expertos obsesionados con llevar tu negocio al siguiente nivel.
                        </p>
                    </div>
                </section>

                <section id="historia" className="py-20 lg:py-24 bg-background">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-heading text-foreground mb-4">Nuestra Historia</h2>
                                <p className="text-muted-foreground text-lg mb-4 leading-relaxed">
                                    LeaderLeads nació de una simple observación: la mayoría de las agencias se enfocan en métricas de vanidad, no en resultados de negocio. Vimos una brecha entre generar un "lead" y crear un "cliente leal".
                                </p>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    Decidimos cerrar esa brecha. Fundamos LeaderLeads para construir sistemas completos que unen la adquisición de clientes con modelos de retención y venta, asegurando un crecimiento sostenible y rentable para nuestros socios.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <Image
                                    src="https://placehold.co/600x400"
                                    alt="El equipo de LeaderLeads en una reunión de estrategia"
                                    width={600}
                                    height={400}
                                    className="rounded-2xl shadow-xl object-cover"
                                    data-ai-hint="team meeting"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="mision-vision" className="py-20 lg:py-24 bg-card">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="bg-background p-8 rounded-2xl border border-border shadow-md hover:border-primary/50 transition-colors">
                                <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4">
                                    <Target className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Misión</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">Ser el motor de crecimiento para empresas líderes, implementando sistemas de adquisición y retención de clientes que maximicen su rentabilidad y valor de vida.</p>
                            </div>
                            <div className="bg-background p-8 rounded-2xl border border-border shadow-md hover:border-accent/50 transition-colors">
                                <div className="inline-block bg-accent/10 text-accent p-3 rounded-xl mb-4">
                                    <Eye className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Visión</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">Convertirnos en el estándar de oro para el crecimiento empresarial, demostrando que la sinergia entre marketing, ventas y servicio al cliente es el único camino hacia el liderazgo sostenible.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="equipo" className="py-20 lg:py-28 bg-background border-y border-border/40">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Nuestro Equipo de Líderes</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Conoce a los expertos que se dedicarán a impulsar tu crecimiento. Somos un equipo multidisciplinario con una pasión en común: tus resultados.</p>
                        </div>

                        {/* Carrusel Dinámico Integrado */}
                        <div className="px-6 md:px-12">
                            <Carousel
                                opts={{ align: "start", loop: true }}
                                plugins={[
                                    Autoplay({
                                        delay: 3500,
                                        stopOnInteraction: false,
                                        stopOnMouseEnter: true,
                                    }),
                                ]}
                                className="w-full"
                            >
                                <CarouselContent className="-ml-4">
                                    {teamMembers.map((member, index) => (
                                        <CarouselItem key={index} className="pl-4 md:basis-1/3 lg:basis-1/4">
                                            <div className="p-2 h-full">
                                                <TeamMemberCard member={member} />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                <CarouselPrevious className="-left-6 md:-left-12 border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors" />
                                <CarouselNext className="-right-6 md:-right-12 border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors" />
                            </Carousel>
                        </div>

                    </div>
                </section>

                <section id="valores" className="py-20 lg:py-24 bg-card">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16 max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">Nuestros Valores</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Estos son los principios que guían cada estrategia, cada campaña y cada interacción que tenemos.</p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value) => (
                                <Card key={value.title} className="text-center p-8 border-border bg-background shadow-lg rounded-2xl hover:border-primary/50 transition-colors duration-300">
                                    <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
                                        {value.icon}
                                    </div>
                                    <CardHeader className="p-0">
                                        <CardTitle className="text-xl font-heading text-foreground">{value.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="p-0 mt-4">
                                        <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
