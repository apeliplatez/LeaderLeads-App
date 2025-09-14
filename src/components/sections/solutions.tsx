
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Zap, Users, MessageSquare } from 'lucide-react';

const solutions = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Generación de Leads',
    description: 'Atraemos un flujo constante de clientes potenciales de alta calidad, listos para hablar con tu equipo de ventas.',
    link: '/servicios#generacion-leads'
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Equipos de Ventas',
    description: 'Aceleramos tu ciclo de ventas con equipos especializados en cerrar tratos de alto valor y expandir tu mercado.',
    link: '/servicios#modelo-atencion'
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-primary" />,
    title: 'Soporte al Cliente',
    description: 'Transformamos tu atención al cliente en un motor de retención que fideliza y aumenta el valor de vida de tus clientes.',
    link: '/servicios#modelo-atencion'
  }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Soluciones de Crecimiento a tu Medida</h2>
          <p className="mt-4 text-lg text-muted-foreground">Integra equipos expertos donde más los necesitas para escalar tu operación de forma rápida y eficiente.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-card border-border shadow-lg rounded-2xl flex flex-col hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4 w-fit">
                    {solution.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base text-muted-foreground">{solution.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                  <Button asChild variant="link" className="p-0 h-auto text-primary font-semibold">
                      <Link href={solution.link}>Conocer más →</Link>
                  </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
