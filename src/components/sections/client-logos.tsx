"use client";

import React from 'react';
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

// STOA - Plataforma Educativa (Diseño tipográfico minimalista)
const LogoStoa = () => (
  <svg viewBox="0 0 120 40" className="h-9 md:h-10 w-auto fill-current text-foreground/80 hover:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg">
    <text x="50%" y="65%" dominantBaseline="middle" textAnchor="middle" fontFamily="Space Grotesk, sans-serif" fontWeight="800" fontSize="26" letterSpacing="-1">STOA</text>
  </svg>
);

// ENTERA-TE - Búsqueda nocturna (Diseño vibrante)
const LogoEnterate = () => (
  <svg viewBox="0 0 160 40" className="h-9 md:h-10 w-auto fill-current text-foreground/80 hover:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,20 Q20,5 30,20 T50,20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <text x="60" y="27" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="900" fontSize="22" fontStyle="italic">entera-te</text>
  </svg>
);

// MEDIX - Historial médico (Diseño salud)
const LogoMedix = () => (
  <svg viewBox="0 0 140 40" className="h-9 md:h-10 w-auto fill-current text-foreground/80 hover:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,10 L15,30 M5,20 L25,20" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    <text x="35" y="27" fontFamily="Space Grotesk, sans-serif" fontWeight="700" fontSize="24">MEDIX</text>
  </svg>
);

// GENEREDOC - Generación de documentos (Diseño institucional)
const LogoGenereDoc = () => (
  <svg viewBox="0 0 180 40" className="h-9 md:h-10 w-auto fill-current text-foreground/80 hover:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="8" width="18" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="3" />
    <line x1="10" y1="16" x2="18" y2="16" stroke="currentColor" strokeWidth="2" />
    <line x1="10" y1="22" x2="18" y2="22" stroke="currentColor" strokeWidth="2" />
    <text x="35" y="26" fontFamily="Plus Jakarta Sans, sans-serif" fontWeight="800" fontSize="21">GenereDoc</text>
  </svg>
);

// CIUDAD AGRICOLA - Hub Productores (Diseño agro)
const LogoAgricola = () => (
  <svg viewBox="0 0 180 40" className="h-9 md:h-10 w-auto fill-current text-foreground/80 hover:text-foreground transition-colors" xmlns="http://www.w3.org/2000/svg">
    <path d="M15,30 Q20,10 25,30" fill="none" stroke="currentColor" strokeWidth="3" />
    <path d="M20,20 Q30,15 35,25" fill="none" stroke="currentColor" strokeWidth="3" />
    <text x="45" y="26" fontFamily="Space Grotesk, sans-serif" fontWeight="600" fontSize="18">CIUDAD AGRÍCOLA</text>
  </svg>
);

const logos = [
  <LogoStoa key="stoa" />,
  <LogoEnterate key="enterate" />,
  <LogoMedix key="medix" />,
  <LogoGenereDoc key="generedoc" />,
  <LogoAgricola key="agricola" />,
];

export default function ClientLogos() {
  return (
    <div className="py-12 bg-background overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-muted-foreground font-semibold">Tecnología impulsada por LeaderLeads para proyectos ágiles</p>

        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full mt-10 opacity-70 cursor-default"
        >
          <CarouselContent className="flex items-center">
            {logos.map((logo, index) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 flex justify-center">
                {logo}
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
