
import Image from 'next/image';

const logos = [
  { src: 'https://placehold.co/120x40', alt: 'Empresa A', dataAiHint: 'logo company' },
  { src: 'https://placehold.co/120x40', alt: 'Startup B', dataAiHint: 'logo startup' },
  { src: 'https://placehold.co/120x40', alt: 'Marca C', dataAiHint: 'logo brand' },
  { src: 'https://placehold.co/120x40', alt: 'Comercio D', dataAiHint: 'logo ecommerce' },
  { src: 'https://placehold.co/120x40', alt: 'Agencia E', dataAiHint: 'logo agency' },
];

export default function ClientLogos() {
  return (
    <div className="py-12 bg-background">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground font-semibold">Usado por equipos de alto rendimiento en empresas líderes</p>
        <div className="mt-6 flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
          {logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={40}
              className="h-9 md:h-10 object-contain invert-0 dark:invert"
              data-ai-hint={logo.dataAiHint}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
