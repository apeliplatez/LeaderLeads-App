
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const teamMembers = [
  { name: 'Sofía Castillo', role: 'Jefa de Experiencia del Cliente', img: 'https://placehold.co/150x150/e0e7ff/4338ca?text=SC' },
  { name: 'Ana Vega', role: 'CEO & Fundadora', img: 'https://placehold.co/150x150/e0e7ff/4338ca?text=AV' },
  { name: 'Marco Ríos', role: 'Director de Crecimiento (CRO)', img: 'https://placehold.co/150x150/e0e7ff/4338ca?text=MR' },
  { name: 'Lucía Valdés', role: 'Estratega de Datos y IA', img: 'https://placehold.co/150x150/e0e7ff/4338ca?text=LV' },
  { name: 'David Peña', role: 'Líder de Cuentas Premier', img: 'https://placehold.co/150x150/e0e7ff/4338ca?text=DP' },
];

const TeamMemberCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="text-center flex flex-col items-center">
        <div className="relative w-32 h-32">
            <Image
                src={member.img}
                alt={`Foto de ${member.name}`}
                width={128}
                height={128}
                className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-primary/50"
                data-ai-hint="person portrait"
            />
        </div>
        <h4 className="font-bold text-lg text-foreground mt-4">{member.name}</h4>
        <p className="text-primary text-sm">{member.role}</p>
    </div>
);


export default function AboutSection() {
  return (
    <section id="somos-ll" className="bg-background py-20 lg:py-28">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                   <h2 className="text-3xl md:text-4xl font-bold mb-4">Un Equipo Experto, Integrado a tu Manera</h2>
                   <p className="text-lg text-muted-foreground">En LeaderLeads, entendemos que el éxito no termina con un clic. Nos integramos a tu equipo con un único objetivo: hacer que tu negocio crezca de forma sostenible, dándote acceso a expertos sin la carga de contratarlos directamente.</p>
                </div>
                <div className="flex justify-center">
                    <Image
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                      alt="Imagen del equipo de LeaderLeads"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-xl object-cover w-full h-full max-w-md"
                      data-ai-hint="team collaboration"
                    />
                </div>
            </div>
        </div>
        <div className="container mx-auto px-6 mt-20 lg:mt-28">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Nuestro Equipo de Líderes</h3>
             <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {teamMembers.map((member, index) => (
                  <CarouselItem key={index} className="pl-8 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                       <TeamMemberCard member={member} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 md:-left-8" />
              <CarouselNext className="-right-4 md:-right-8" />
            </Carousel>
        </div>
    </section>
  );
}
