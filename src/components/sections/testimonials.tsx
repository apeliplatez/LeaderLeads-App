
"use client"

import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
  {
    quote: '"LeaderLeads no solo aumentó nuestros leads en un 150%, sino que implementaron un sistema de atención que mejoró nuestra retención. Son socios estratégicos indispensables."',
    name: 'Carlos Sánchez',
    title: 'Director de Marketing, TechCorp',
    img: 'https://placehold.co/80x80'
  },
  {
    quote: '"Como coach, mi tiempo es limitado. El Blueprint de Autoridad me liberó de las tareas de captación para enfocarme en mis clientes. Mi facturación creció un 80%."',
    name: 'Laura Martínez',
    title: 'Coach de Liderazgo',
    img: 'https://placehold.co/80x80'
  },
  {
    quote: '"El Acelerador de Cuentas Premier fue clave. Cerrar tratos de alto valor es más rápido ahora que tenemos un seguimiento profesional y automatizado."',
    name: 'Javier Gómez',
    title: 'Gerente de Ventas, Innovate Solutions',
    img: 'https://placehold.co/80x80'
  },
   {
    quote: '"Su enfoque en datos y resultados es lo que los diferencia. Cada peso invertido tuvo un retorno claro y medible. Totalmente recomendados."',
    name: 'Elena Rodríguez',
    title: 'Fundadora, E-commerce de Moda',
    img: 'https://placehold.co/80x80'
  },
];

export default function TestimonialsSection() {
  return (
    <section id="opiniones" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Lo que dicen nuestros clientes</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Resultados reales para líderes que buscan el siguiente nivel.</p>
        </div>
        <Carousel 
          opts={{ align: "start", loop: true }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 mask-gradient-horizontal">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-center bg-card p-8 rounded-2xl shadow-lg">
                    <CardContent className="flex flex-col items-center text-center p-0">
                      <Image 
                        src={testimonial.img} 
                        alt={`Foto de ${testimonial.name}`}
                        width={80}
                        height={80}
                        className="w-20 h-20 mx-auto rounded-full mb-4"
                        data-ai-hint="person portrait"
                      />
                      <p className="text-muted-foreground mb-4 flex-grow">{testimonial.quote}</p>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-foreground -left-4" />
          <CarouselNext className="text-foreground -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
