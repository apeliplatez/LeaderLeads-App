"use client";

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import type { Metadata } from 'next';

const formSchema = z.object({
    name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
    email: z.string().email({ message: "Por favor, introduce un email válido." }),
    subject: z.string().min(5, { message: "El asunto debe tener al menos 5 caracteres." }),
    message: z.string().min(10, { message: "El mensaje debe tener al menos 10 caracteres." }),
  });
  
  export default function ContactPage() {
    const { toast } = useToast();
  
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        subject: "",
        message: "",
      },
    });
  
    function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
      toast({
        title: "Mensaje Enviado",
        description: "Gracias por contactarnos. Nos pondremos en contacto contigo pronto.",
      });
      form.reset();
    }
  
    return (
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
              <div className="container mx-auto px-6 text-center">
                  <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                      Ponte en <span className="text-primary">Contacto</span>
                  </h1>
                  <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                      ¿Tienes una pregunta o estás listo para empezar? Completa el formulario o utiliza nuestra información de contacto. Estamos aquí para ayudarte.
                  </p>
              </div>
          </section>
  
          <section className="py-20 lg:py-28 bg-background">
            <div className="container mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="bg-card p-8 rounded-2xl shadow-lg border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Envíanos un Mensaje</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField control={form.control} name="name" render={({ field }) => ( <FormItem> <FormLabel>Nombre Completo</FormLabel> <FormControl><Input placeholder="Juan Pérez" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
                      <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email</FormLabel> <FormControl><Input placeholder="juan@empresa.com" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
                      <FormField control={form.control} name="subject" render={({ field }) => ( <FormItem> <FormLabel>Asunto</FormLabel> <FormControl><Input placeholder="Ej: Consulta sobre Google Ads" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
                      <FormField control={form.control} name="message" render={({ field }) => ( <FormItem> <FormLabel>Tu Mensaje</FormLabel> <FormControl><Textarea placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px]" {...field} /></FormControl> <FormMessage /> </FormItem> )}/>
                      <Button type="submit" size="lg" className="w-full text-lg py-6 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">Enviar Mensaje</Button>
                    </form>
                  </Form>
                </div>
  
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Información de Contacto</h3>
                    <div className="space-y-4 text-lg text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <MapPin className="h-6 w-6 text-primary" />
                        <span>123 Av. Principal, Ciudad, País</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary" />
                        <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                      </div>
                      <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary" />
                        <a href="mailto:contacto@leaderleads.com" className="hover:text-primary transition-colors">contacto@leaderleads.com</a>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">Nuestra Ubicación</h3>
                     <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.225826590487!2d-122.41941548468133!3d37.77492957975871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1b8f1c39%3A0x1e95b0b1a2a7b8e!2sSan%20Francisco%20City%20Hall!5e0!3m2!1sen!2sus!4v1628789397510!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
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
  
