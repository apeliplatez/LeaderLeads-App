
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock, ShieldCheck, Zap } from 'lucide-react';

const solutions = [
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: 'Falta de Tiempo y Leads Fríos',
    description: 'Resolvemos la falta de speed-to-lead. Respondemos al instante para que no pierdas ni una sola oportunidad.',
    link: '/servicios#generacion-leads'
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Fatiga Tecnológica',
    description: 'Solución "Done-for-You": Cero barreras técnicas. Implementamos el ecosistema sin que tengas que tocar una línea de código.',
    link: '/servicios#modelo-atencion'
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: 'Desgaste en RRHH',
    description: 'Talento humano capacitado plug-and-play. Disfruta de escalabilidad sin el estrés de contratar y entrenar personal.',
    link: '/servicios#modelo-atencion'
  }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">El Antídoto contra la Fricción en Ventas</h2>
          <p className="mt-4 text-xl font-sans text-muted-foreground">Eliminamos las barreras que bloquean tu crecimiento comercial.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {solutions.map((solution) => (
            <Card key={solution.title} className="bg-card border-border shadow-lg rounded-2xl flex flex-col hover:border-primary transition-colors duration-300">
              <CardHeader>
                <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4 w-fit">
                  {solution.icon}
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-foreground">{solution.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-lg font-sans text-muted-foreground">{solution.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild variant="link" className="p-0 h-auto text-accent hover:text-accent/80 font-heading font-semibold text-lg">
                  <Link href={solution.link}>Ver cómo lo resolvemos →</Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
