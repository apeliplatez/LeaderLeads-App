
import { Rocket, Target, TrendingUp } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const steps = [
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: '1. Diseña tu Estrategia',
    description: 'Analizamos tu negocio y definimos un plan a medida para alcanzar tus objetivos de crecimiento más ambiciosos.'
  },
  {
    icon: <Rocket className="h-10 w-10 text-primary" />,
    title: '2. Lanza tu Equipo On-demand',
    description: 'Integramos un equipo de expertos en marketing, ventas o soporte que funciona como una extensión de tu empresa.'
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-primary" />,
    title: '3. Escala tus Resultados',
    description: 'Optimizamos continuamente las operaciones, entregando informes claros y asegurando un crecimiento medible y sostenible.'
  }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Cómo Funciona</h2>
          <p className="mt-4 text-lg text-muted-foreground">Nuestro proceso está diseñado para ser simple, transparente y enfocado 100% en tus resultados.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="bg-background border shadow-lg rounded-2xl text-center p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="flex justify-center mb-6">
                <div className="bg-primary/10 p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <CardHeader className="p-0">
                <CardTitle className="text-xl font-bold text-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-muted-foreground">{step.description}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
