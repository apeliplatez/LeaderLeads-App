
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-card pt-32 pb-20 lg:pt-48 lg:pb-28">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-foreground leading-tight">
          De <span className="gradient-text">Clics</span> a <span className="gradient-text">Clientes Leales</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
          Generamos leads de alta calidad y diseñamos sistemas de atención al cliente que convierten y fidelizan. Optimizamos tu crecimiento de principio a fin.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
            <Link href="/servicios">Descubre nuestros servicios</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="px-8 py-7 text-lg font-bold transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
            <Link href="/contact">Hablemos</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
