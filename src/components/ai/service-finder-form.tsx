"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Wand2 } from 'lucide-react';
import { recommendService, type ServiceRecommendationOutput } from '@/ai/flows/service-recommendation';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const formSchema = z.object({
  businessNeeds: z.string().min(10, { message: "Describe tus objetivos con más detalle (mín. 10 caracteres)." }),
  businessCharacteristics: z.string().min(10, { message: "Describe tu negocio con más detalle (mín. 10 caracteres)." }),
});

export default function ServiceFinderForm() {
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<ServiceRecommendationOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessNeeds: "",
      businessCharacteristics: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    setError(null);
    setRecommendation(null);

    try {
      const result = await recommendService(values);
      setRecommendation(result);
    } catch (e) {
      setError("Hubo un error al obtener la recomendación. Por favor, inténtalo de nuevo más tarde.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg rounded-2xl bg-background">
        <CardHeader>
          <CardTitle className="text-2xl text-center gradient-text">
            Encuentra tu Servicio Ideal con IA
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <FormField
                  control={form.control}
                  name="businessNeeds"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">¿Cuáles son tus objetivos?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: 'Quiero conseguir más clientes para mi servicio de coaching de alto valor', 'Necesito mejorar la retención de clientes en mi e-commerce', etc."
                          className="min-h-[150px]"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="businessCharacteristics"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Describe brevemente tu negocio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Ej: 'Soy un coach que vende programas de 3 meses', 'Tengo una tienda online de productos de belleza', 'Ofrezco consultoría B2B', etc."
                          className="min-h-[150px]"
                          {...field}
                          disabled={loading}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" size="lg" className="w-full text-lg py-6" disabled={loading}>
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Wand2 className="mr-2 h-5 w-5" />
                    Obtener Recomendación
                  </>
                )}
              </Button>
            </form>
          </Form>

          {error && (
            <Alert variant="destructive" className="mt-8">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {recommendation && (
            <div className="mt-8 pt-8 border-t animate-fade-in">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">
                    ✨ Tu Plan de Crecimiento Personalizado
                </h3>
                <Card className="bg-primary/5 border-primary shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-primary text-xl">{recommendation.recommendedService}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{recommendation.reason}</p>
                    </CardContent>
                </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
