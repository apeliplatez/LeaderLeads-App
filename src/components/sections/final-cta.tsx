
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '@/lib/firebase';


const formSchema = z.object({
  fullName: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  personalEmail: z.string().email({ message: "Por favor, introduce un email personal válido." }),
  company: z.string().min(2, { message: "El nombre de la empresa debe tener al menos 2 caracteres." }),
  workEmail: z.string().email({ message: "Por favor, introduce un email de trabajo válido."}),
  phoneNumber: z.string().min(8, { message: "Por favor, introduce un número de teléfono válido."}),
});


function LeadCaptureModal({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: (open: boolean) => void }) {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            personalEmail: "",
            company: "",
            workEmail: "",
            phoneNumber: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true);
        try {
            await addDoc(collection(db, "leads"), {
                ...values,
                timestamp: serverTimestamp(),
            });
            onOpenChange(false);
            form.reset();
            toast({
                title: "¡Gracias!",
                description: "Hemos recibido tu información y te contactaremos en breve.",
            });
        } catch (error) {
            console.error("Error adding document: ", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "No se pudo enviar tu información. Por favor, inténtalo de nuevo.",
            });
        } finally {
            setLoading(false);
        }
    }

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md bg-card rounded-2xl">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-foreground">Agenda Tu Llamada de Descubrimiento</DialogTitle>
                    <DialogDescription>Completa el formulario y nos pondremos en contacto lo antes posible.</DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField control={form.control} name="fullName" render={({ field }) => ( <FormItem> <FormLabel>Nombre Completo</FormLabel> <FormControl><Input placeholder="Juan Pérez" {...field} disabled={loading} /></FormControl> <FormMessage /> </FormItem> )}/>
                        <FormField control={form.control} name="personalEmail" render={({ field }) => ( <FormItem> <FormLabel>Email Personal</FormLabel> <FormControl><Input placeholder="juan.perez@email.com" {...field} disabled={loading} /></FormControl> <FormMessage /> </FormItem> )}/>
                        <FormField control={form.control} name="company" render={({ field }) => ( <FormItem> <FormLabel>Empresa</FormLabel> <FormControl><Input placeholder="Nombre de tu Empresa" {...field} disabled={loading} /></FormControl> <FormMessage /> </FormItem> )}/>
                        <FormField control={form.control} name="workEmail" render={({ field }) => ( <FormItem> <FormLabel>Email de Trabajo</FormLabel> <FormControl><Input placeholder="juan@empresa.com" {...field} disabled={loading} /></FormControl> <FormMessage /> </FormItem> )}/>
                        <FormField control={form.control} name="phoneNumber" render={({ field }) => ( <FormItem> <FormLabel>Número de Teléfono</FormLabel> <FormControl><Input placeholder="+1 234 567 890" {...field} disabled={loading} /></FormControl> <FormMessage /> </FormItem> )}/>
                        <DialogFooter>
                            <Button type="submit" className="w-full text-lg py-6" disabled={loading}>
                                {loading ? <Loader2 className="animate-spin" /> : 'Enviar'}
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}


export default function FinalCtaSection() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <section id="contacto" className="py-20 lg:py-28 bg-background">
                <div className="container mx-auto px-6">
                   <div 
                      className="bg-primary rounded-2xl p-8 md:p-16 text-center shadow-2xl bg-cover bg-center" 
                      style={{backgroundImage: "linear-gradient(rgba(79, 70, 229, 0.9), rgba(79, 70, 229, 0.95)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')"}}
                      data-ai-hint="team business"
                    >
                      <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground">¿Listo para Liderar tu Mercado?</h2>
                      <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
                         Solicita una auditoría gratuita y sin compromiso para identificar tus mayores oportunidades de crecimiento.
                      </p>
                      <div className="mt-8">
                          <Button 
                            onClick={() => setIsModalOpen(true)}
                            size="lg" 
                            className="bg-background text-foreground hover:bg-background/90 px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg"
                          >
                            Agendar una Llamada
                          </Button>
                      </div>
                  </div>
                </div>
            </section>
            <LeadCaptureModal isOpen={isModalOpen} onOpenChange={setIsModalOpen} />
        </>
    );
}
