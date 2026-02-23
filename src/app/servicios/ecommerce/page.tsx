import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ShoppingBag, LayoutDashboard, CreditCard, CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Construcción y Gestión de E-commerce | LeaderLeads',
    description: 'Tiendas online optimizadas para máxima conversión. Shopify y plataformas líderes.',
    keywords: ["desarrollo e-commerce Shopify", "migración de tiendas online", "tiendas optimizadas B2B", "aumento de conversión retail"]
};

const features = [
    { icon: LayoutDashboard, title: "Diseño UX/UI Persuasivo", description: "Arquitectura de tienda diseñada específicamente para reducir fricción y maximizar el Ticket Promedio (AOV)." },
    { icon: ShoppingBag, title: "Gestión de Catálogo", description: "Sincronización de inventario, optimización de páginas de producto y descripciones enfocadas en SEO." },
    { icon: CreditCard, title: "Optimización de Checkout", description: "Pasarelas de pago fluidas y flujos de carritos abandonados para asegurar cada venta posible." }
];

const benefits = [
    "Lanzamiento de tu tienda online en tiempo récord con diseño premium.",
    "Integración total con tus campañas de Meta Ads y Google Ads.",
    "Aumento comprobado en la tasa de conversión global de tu tienda.",
    "Soporte técnico y mantenimiento mensual continuo."
];

export default function EcommerceService() {
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
                            Construcción y gestión de <span className="gradient-text">E-commerce</span>
                        </h1>
                        <p className="mt-6 max-w-3xl mx-auto text-xl md:text-2xl text-muted-foreground mb-12">
                            Diseñamos, desarrollamos y administramos tu tienda online en plataformas líderes (Shopify, WooCommerce) con un enfoque láser en aumentar las conversiones diarias.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg shadow-primary/25 transition-all hover:-translate-y-1" asChild>
                                <Link href="/auditoria">Habla con un experto en Retail</Link>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 lg:py-28 bg-background">
                    <div className="container mx-auto px-6 max-w-6xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Tu ecosistema de venta directa</h2>
                            <p className="mt-4 text-lg text-muted-foreground">Creamos el entorno comercial perfecto para que tus productos brillen.</p>
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
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Vende más, con menos fricción</h2>
                                <p className="text-lg text-muted-foreground mb-8">
                                    El diseño de tu tienda importa. Nos encargamos de que la experiencia de usuario (UX) guíe instintivamente a tus clientes hacia el botón de comprar.
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
                                <h3 className="text-2xl font-bold mb-4">Migración a Shopify</h3>
                                <p className="text-muted-foreground mb-8">
                                    ¿Tu tienda actual es lenta o difícil de manejar? Te migramos a Shopify, la plataforma de e-commerce de mayor rendimiento a nivel global, sin perder tus datos ni tu SEO.
                                </p>
                                <Button size="lg" className="w-full text-lg py-6" asChild>
                                    <Link href="/auditoria">Cotizar mi Tienda</Link>
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
