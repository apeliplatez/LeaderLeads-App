"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ServiceFinderForm from '@/components/ai/service-finder-form';
import { BrainCircuit, Crown, Rocket, ShoppingCart, HeartHandshake } from 'lucide-react';
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
import type { Metadata } from 'next';

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres." }),
    phone: z.string().min(8, { message: "Por favor, introduce un número de teléfono válido."}),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  });
  
  type ContactModalProps = {
    isOpen: boolean;
    onOpenChange: (isOpen: boolean) => void;
  }
  
  function ContactModal({ isOpen, onOpenChange }: ContactModalProps) {
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
              <FormField control={form.control} name="name" render={({ field }) => ( <FormItem> <FormLabel>Nombre Completo</FormLabel> <FormControl><Input placeholder="Juan Pérez" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email Corporativo</FormLabel> <FormControl><Input placeholder="juan@empresa.com" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              <FormField control={form.control} name="company" render={({ field }) => ( <FormItem> <FormLabel>Empresa</FormLabel> <FormControl><Input placeholder="Nombre de tu Empresa" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem> <FormLabel>Número de Teléfono</FormLabel> <FormControl><Input placeholder="+1 234 567 890" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
              <FormField control={form.control} name="message" render={({ field }) => ( <FormItem> <FormLabel>¿Cómo podemos ayudarte?</FormLabel> <FormControl><Textarea placeholder="Cuéntanos sobre tu principal desafío y tus objetivos..." {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
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
      <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-6 text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                  Soluciones Diseñadas para <span className="gradient-text">Liderar tu Mercado</span>
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                  Desde atraer al cliente ideal hasta construir una experiencia de servicio que fideliza. Explora cómo podemos impulsar tu crecimiento en cada etapa.
              </p>
          </div>
      </section>
  );
  
  const ServiceCard = ({ children, highlighted = false, className='' }: { children: React.ReactNode, highlighted?: boolean, className?: string }) => (
      <div className={cn("bg-card border rounded-2xl p-8 transition-all duration-300 h-full flex flex-col hover:-translate-y-1 hover:shadow-xl", highlighted ? 'border-primary' : 'border-border', className)}>
          <div className="flex-grow">{children}</div>
      </div>
  );
  
  const LeadsGenerationSection = ({ openModal }: { openModal: () => void }) => (
      <section id="generacion-leads" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                   <h2 className="text-3xl md:text-4xl font-bold text-foreground">Generación de Leads de Alto Impacto</h2>
                   <p className="mt-4 text-lg text-muted-foreground">Creamos un flujo constante de clientes potenciales cualificados, listos para comprar, utilizando las plataformas más poderosas del mercado.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                  <ServiceCard>
                      <div className="h-16 w-16 flex items-center justify-center bg-muted rounded-xl mb-4">
                          <Image src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" height={32} width={32} alt="Icono de Google Ads" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Google Ads</h3>
                      <p className="text-muted-foreground">Capturamos clientes con alta intención de compra justo cuando buscan tus soluciones, maximizando el retorno de tu inversión publicitaria.</p>
                  </ServiceCard>
                  
                  <ServiceCard>
                      <div className="h-16 w-16 flex items-center justify-center bg-muted rounded-xl mb-4">
                          <Image src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" height={32} width={32} alt="Icono de Meta" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Meta Ads</h3>
                      <p className="text-muted-foreground">Llegamos a tu público ideal con campañas creativas y segmentación de precisión en la red de Meta, generando oportunidades de venta calificadas.</p>
                  </ServiceCard>
  
                  <ServiceCard highlighted>
                     <div className="h-16 w-16 flex items-center justify-center bg-primary/10 rounded-xl mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                     </div>
                     <h3 className="text-xl font-bold text-foreground mb-3">Liderazgo en Adquisición</h3>
                     <p className="text-muted-foreground">Tu estrategia de dominio total. Diseñamos un sistema de adquisición a medida, combinando canales para un liderazgo de mercado indiscutible.</p>
                  </ServiceCard>
              </div>
              <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                      <Link href="/contact">Conoce más sobre Adquisición</Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={openModal} className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground">
                      Agendar Llamada
                  </Button>
              </div>
          </div>
      </section>
  );
  
  const AttentionModelsSection = ({ openModal }: { openModal: () => void }) => (
      <section id="modelo-atencion" className="py-20 lg:py-28 bg-card">
          <div className="container mx-auto px-6">
               <div className="text-center mb-16 max-w-3xl mx-auto">
                   <h2 className="text-3xl md:text-4xl font-bold text-foreground">Modelos de Atención al Cliente que Venden</h2>
                   <p className="mt-4 text-lg text-muted-foreground">Transformamos tu servicio de atención en un centro de rentabilidad, mejorando la satisfacción, la retención y el valor de vida de tus clientes.</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
                  <ServiceCard>
                      <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4"><Crown className="h-8 w-8" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Blueprint de Autoridad</h3>
                      <p className="text-muted-foreground">El plan estratégico para coaches y retailers de nicho. Te posicionamos como la máxima autoridad en tu mercado para atraer clientes de alto valor.</p>
                  </ServiceCard>
                  
                  <ServiceCard>
                      <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4"><Rocket className="h-8 w-8" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Acelerador de Cuentas Premier</h3>
                      <p className="text-muted-foreground">Para ventas de alto valor que definen tu liderazgo. Aceleramos el cierre de tus cuentas más importantes con un seguimiento estratégico y premium.</p>
                  </ServiceCard>
  
                  <ServiceCard>
                      <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4"><ShoppingCart className="h-8 w-8" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Sistema de Conversión Retail</h3>
                      <p className="text-muted-foreground">Diseñado para e-commerce con alto volumen. Implementamos un sistema de atención que resuelve dudas y convierte cada consulta en una venta.</p>
                  </ServiceCard>
  
                  <ServiceCard>
                      <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4"><HeartHandshake className="h-8 w-8" /></div>
                      <h3 className="text-xl font-bold text-foreground mb-3">Programa de Liderazgo en Retención</h3>
                      <p className="text-muted-foreground">Transforma compradores en embajadores. Creamos un sistema de fidelización y post-venta que maximiza el valor y recurrencia de tus clientes.</p>
                  </ServiceCard>
              </div>
               <div className="mt-12 text-center flex flex-wrap justify-center gap-4">
                  <Button asChild size="lg" variant="secondary" className="text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                      <Link href="/contact">Descubre los Modelos</Link>
                  </Button>
                  <Button variant="outline" size="lg" onClick={openModal} className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg hover:bg-secondary hover:text-secondary-foreground">
                      Contratar Servicio
                  </Button>
              </div>
          </div>
      </section>
  );
  
  const AiAdvisorSection = () => (
      <section id="ia-analyzer" className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-6">
          <div className="bg-card rounded-2xl p-8 md:p-16 text-center shadow-xl border">
              <div className="inline-block bg-primary/10 text-primary p-4 rounded-xl mb-4">
                  <BrainCircuit className="h-10 w-10" />
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">✨ Descubre tu Plan de Crecimiento Ideal</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                  ¿No sabes qué servicio es el mejor para ti? Describe tu negocio y deja que nuestra IA te recomiende la solución perfecta para alcanzar tus metas.
              </p>
              <div className="mt-8 max-w-4xl mx-auto">
                  <ServiceFinderForm />
              </div>
          </div>
        </div>
      </section>
  );
  
  const faqData = [
      { question: '¿Qué servicio es el más adecuado para mí?', answer: { title: 'Eligiendo tu Servicio Ideal', content: '¡Excelente pregunta! La mejor manera de saberlo es usando nuestro Asesor de IA en la sección anterior. Describe tu negocio y te dará una recomendación instantánea. Para un análisis más profundo, te invitamos a agendar una llamada de estrategia gratuita con nuestro equipo, donde podremos entender tus objetivos y diseñar el plan perfecto para ti.' }},
      { question: '¿Cómo es el proceso para empezar?', answer: { title: 'Nuestro Proceso de Colaboración', content: 'Nuestro proceso es simple y transparente. \n1. Comienza con una llamada de estrategia para entender tus objetivos. \n2. Pasamos a la fase de Diagnóstico y Estrategia. \n3. Una vez aprobado el plan, iniciamos la Implementación con seguimiento en tiempo real.' }},
      { question: '¿Cuándo veré un retorno de mi inversión (ROI)?', answer: { title: 'Resultados y Tiempos Estimados', content: 'Nuestros clientes suelen ver los primeros leads cualificados en las primeras 2-3 semanas. El objetivo es alcanzar una rentabilidad sólida y predecible en un plazo de 60 a 90 días. Garantizamos un proceso probado y un equipo obsesionado con tu éxito.' }},
      { question: '¿Cuál es su modelo de precios?', answer: { title: 'Inversión y Modelo de Precios', content: 'Nuestros precios se basan en un cargo fijo (fee) por gestión. La inversión en anuncios se paga directamente a las plataformas. Creemos en un modelo transparente sin comisiones ocultas y en relaciones a largo plazo basadas en resultados, no en contratos que aten.' }},
      { question: '¿Qué los diferencia de una agencia tradicional?', answer: { title: 'Nuestra Ventaja Competitiva', content: 'No solo generamos clics, construimos sistemas. Unimos la adquisición con la retención. De nada sirve una cubeta llena de leads si tiene agujeros. Al optimizar ambos, creamos un ciclo de crecimiento sostenible: atraemos clientes de calidad y los convertimos en fans.' }},
  ];
  
  const FaqSection = () => {
      const [activeIndex, setActiveIndex] = useState(0);
  
      return (
          <section id="faq" className="pb-20 lg:pb-28 bg-background">
              <div className="container mx-auto px-6 max-w-5xl">
                  <div className="text-center mb-16">
                      <h2 className="text-3xl md:text-4xl font-bold text-foreground">Preguntas Frecuentes</h2>
                      <p className="mt-4 text-lg text-muted-foreground">Resolvemos tus dudas más comunes para que tomes la mejor decisión.</p>
                  </div>
                  <div className="flex flex-col md:flex-row gap-8 lg:gap-12 bg-card p-6 rounded-2xl shadow-lg border">
                      <div className="w-full md:w-1/3">
                          <ul className="space-y-2">
                              {faqData.map((item, index) => (
                                  <li key={index} onClick={() => setActiveIndex(index)}
                                      className={cn("p-4 rounded-md cursor-pointer font-semibold transition-colors duration-300 hover:bg-muted", 
                                          { 'bg-primary text-primary-foreground hover:bg-primary/90': activeIndex === index }
                                      )}>
                                      {item.question}
                                  </li>
                              ))}
                          </ul>
                      </div>
                      <div className="w-full md:w-2/3 md:border-l md:pl-8 min-h-[200px]">
                          {faqData.map((item, index) => (
                             <div key={index} className={cn("text-muted-foreground leading-relaxed", { 'hidden': activeIndex !== index })}>
                                 <h4 className="font-bold text-xl text-foreground mb-4">{item.answer.title}</h4>
                                 <p style={{ whiteSpace: 'pre-line' }}>{item.answer.content}</p>
                             </div>
                          ))}
                      </div>
                  </div>
              </div>
          </section>
      );
  };
  
  const FinalCtaSection = ({ openModal }: { openModal: () => void }) => (
      <section id="contacto" className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-6">
             <div 
                className="bg-primary rounded-2xl p-8 md:p-16 text-center shadow-2xl bg-cover bg-center" 
                style={{backgroundImage: "linear-gradient(rgba(var(--primary-rgb), 0.9), rgba(var(--primary-rgb), 0.95)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')"}}
              >
                <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">¿Cuál es tu Próximo Nivel de Crecimiento?</h2>
                <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
                   Permítenos analizar tu negocio y diseñar el plan perfecto para ti. Agenda una llamada de estrategia gratuita y sin compromiso.
                </p>
                <div className="mt-8">
                    <Button onClick={openModal} size="lg" className="bg-background text-foreground hover:bg-background/90 px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                      Agendar una Llamada
                    </Button>
                </div>
            </div>
          </div>
      </section>
  );
  
  export default function ServicesPage() {
      const [isModalOpen, setIsModalOpen] = useState(false);
      
      return (
          <div className="flex flex-col min-h-screen bg-background">
              <Header />
              <main>
                  <HeroSection />
                  <LeadsGenerationSection openModal={() => setIsModalOpen(true)} />
                  <AttentionModelsSection openModal={() => setIsModalOpen(true)} />
                  <AiAdvisorSection />
                  <FaqSection />
                  <FinalCtaSection openModal={() => setIsModalOpen(true)} />
              </main>
              <Footer />
              <ContactModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
          </div>
      );
  }
