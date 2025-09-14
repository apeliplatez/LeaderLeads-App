"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServiceFinderForm from '@/components/ai/service-finder-form';
import { Zap, MessageSquare, BrainCircuit } from 'lucide-react';
import type { Metadata } from 'next';

export default function ModeloLlPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-card pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Nuestro Modelo: <span className="gradient-text">Adquisición + Retención</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              No solo atraemos clientes; construimos el sistema completo para que se queden. Nuestro modelo une la generación de leads de alto impacto con una atención al cliente diseñada para convertir y fidelizar, creando un ciclo de crecimiento sostenible.
            </p>
          </div>
        </section>

        <section id="generacion-leads" className="py-20 lg:py-24 bg-card">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Adquisición de Clientes</h2>
                <p className="text-muted-foreground text-lg">
                  Diseñamos y ejecutamos campañas de marketing digital de alta precisión para atraer un flujo constante de leads cualificados. Nos enfocamos en las plataformas donde tus clientes ideales pasan su tiempo, optimizando cada anuncio para maximizar el retorno de inversión.
                </p>
              </div>
              <div className="bg-background p-8 rounded-xl border">
                <h4 className="font-bold text-xl mb-4 text-foreground">Servicios Incluidos:</h4>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Estrategia y gestión de campañas en Meta Ads y Google Ads.</li>
                  <li>Creación de landing pages de alta conversión.</li>
                  <li>Optimización de embudos de venta (Funnels).</li>
                  <li>Lead nurturing y automatización de marketing inicial.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="modelo-atencion" className="py-20 lg:py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="bg-card p-8 rounded-xl border order-last md:order-first">
                 <h4 className="font-bold text-xl mb-4 text-foreground">Servicios Incluidos:</h4>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Diseño de flujos de comunicación omnicanal (WhatsApp, Email, Chat).</li>
                  <li>Implementación de CRM y software de atención al cliente.</li>
                  <li>Capacitación de equipos de ventas y soporte.</li>
                  <li>Estrategias de up-selling y cross-selling.</li>
                </ul>
              </div>
              <div>
                <div className="inline-block bg-secondary/10 text-secondary p-3 rounded-xl mb-4">
                    <MessageSquare className="h-8 w-8" />
                </div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Modelos de Retención y Venta</h2>
                <p className="text-muted-foreground text-lg">
                  Un lead no es un cliente. Transformamos el interés en ingresos construyendo sistemas de atención y seguimiento que convierten leads en clientes, y clientes en embajadores de tu marca. Maximizamos el valor de vida de cada cliente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="ia-analyzer" className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4">
                    <BrainCircuit className="h-10 w-10" />
                </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">¿No estás seguro por dónde empezar?</h2>
              <p className="mt-4 text-lg text-muted-foreground">Usa nuestra herramienta con IA para obtener una recomendación personalizada. Describe tu negocio y tus objetivos, y te diremos qué servicio es el ideal para ti.</p>
            </div>
            <ServiceFinderForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
