
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-card pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground leading-tight">
          Ecosistema de ventas <span className="text-primary">&apos;llave en mano&apos;</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground font-sans">
          Automatización inteligente + Soporte humano experto. <br />
          <strong className="text-foreground">Tú cierras negocios, nosotros gestionamos los leads.</strong>
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="px-8 py-7 text-lg font-heading font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg bg-destructive text-destructive-foreground hover:bg-destructive/90">
            <Link href="/contact">Automatiza tu embudo hoy</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 py-7 text-lg font-heading font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg text-foreground border-foreground hover:bg-foreground hover:text-background">
            <Link href="/modelo-ll">Conoce el modelo LL</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
