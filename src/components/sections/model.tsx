
import Link from 'next/link';
import { Zap, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModelSection() {
  return (
    <section id="modelo-ll" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Nuestro Modelo: Adquisición + Retención</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">No solo atraemos clientes; construimos el sistema completo para que se queden. Nuestro modelo une la generación de leads de alto impacto con una atención al cliente diseñada para convertir y fidelizar, creando un ciclo de crecimiento sostenible.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          <div className="bg-background p-8 rounded-2xl shadow-lg border">
            <div className="inline-block bg-primary/10 text-primary p-3 rounded-xl mb-4">
              <Zap className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Adquisición de Clientes</h3>
            <p className="text-muted-foreground mb-6">Atraemos clientes listos para comprar a través de campañas estratégicas en las plataformas más efectivas.</p>
            <Link href="/servicios#generacion-leads" className="font-semibold text-primary hover:text-primary/80">
              Ver servicios de adquisición →
            </Link>
          </div>
          
          <div className="bg-background p-8 rounded-2xl shadow-lg border">
            <div className="inline-block bg-secondary/10 text-secondary p-3 rounded-xl mb-4">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3">Modelos de Retención y Venta</h3>
            <p className="text-muted-foreground mb-6">Convertimos cada conversación en una oportunidad, creando experiencias que tus clientes amarán y que aumentan su valor de vida.</p>
            <Link href="/servicios#modelo-atencion" className="font-semibold text-secondary hover:text-secondary/80">
              Ver modelos de retención →
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Button asChild size="lg" className="px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
            <Link href="/servicios#ia-analyzer">
              ✨ Descubre tu Servicio Ideal con IA
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
