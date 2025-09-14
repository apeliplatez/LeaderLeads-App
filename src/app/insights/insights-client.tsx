"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

const posts = [
    {
      category: 'ESTRATEGIA',
      title: 'Más allá de los Leads: Cómo construir una máquina de retención',
      description: 'Descubre por qué la verdadera rentabilidad no está en la primera venta, sino en la segunda, tercera y cuarta.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'default',
      dataAiHint: 'strategy chart',
      slug: 'maquina-de-retencion'
    },
    {
      category: 'VENTAS HIGH-TICKET',
      title: 'Los 5 errores que matan tus ventas de alto valor (y cómo evitarlos)',
      description: 'Analizamos los fallos más comunes en ciclos de venta largos y te damos el plan para acelerar tus cierres.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'secondary',
      dataAiHint: 'sales meeting',
      slug: 'errores-ventas-alto-valor'
    },
    {
      category: 'TECNOLOGÍA',
      title: 'IA en Atención al Cliente: ¿Reemplazo o superpoder?',
      description: 'Cómo usar la inteligencia artificial para potenciar a tu equipo de soporte, no para sustituirlo.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'destructive',
      dataAiHint: 'customer service',
      slug: 'ia-atencion-cliente'
    },
    {
      category: 'MARKETING DIGITAL',
      title: 'El Futuro del SEO: Tendencias que Dominarán la Próxima Década',
      description: 'Exploramos cómo la búsqueda por voz, la IA y la experiencia de usuario están redefiniendo el SEO.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'default',
      dataAiHint: 'seo trends',
      slug: 'futuro-del-seo'
    },
    {
      category: 'E-COMMERCE',
      title: 'Psicología de Precios: 7 Estrategias para Aumentar tu Conversión',
      description: 'Aprende a fijar precios que no solo cubran costos, sino que también comuniquen valor y persuadan a la compra.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'secondary',
      dataAiHint: 'ecommerce pricing',
      slug: 'psicologia-de-precios'
    },
    {
      category: 'CRECIMIENTO',
      title: 'Growth Hacking para Startups: Tácticas de Bajo Costo y Alto Impacto',
      description: 'Descubre tácticas creativas y eficientes para adquirir usuarios y crecer rápidamente sin un gran presupuesto de marketing.',
      image: 'https://placehold.co/600x400',
      badgeVariant: 'destructive',
      dataAiHint: 'startup growth',
      slug: 'growth-hacking-startups'
    }
  ];
  
  const BlogPostCard = ({ post }: { post: typeof posts[0] }) => (
      <Card className="rounded-2xl shadow-lg overflow-hidden group flex flex-col bg-card hover:shadow-xl hover:border-primary transition-all duration-300">
        <Image 
          src={post.image}
          alt={`Imagen para el post ${post.title}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={post.dataAiHint}
        />
        <CardHeader>
          <Badge 
            variant={post.badgeVariant as any}
          >
            {post.category}
          </Badge>
          <CardTitle className="mt-2 text-xl font-bold text-foreground">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground">{post.description}</p>
        </CardContent>
        <div className="p-6 pt-0">
            <Button asChild variant="link" className="p-0 h-auto text-primary">
                <Link href={`/insights/${post.slug}`}>Leer más &rarr;</Link>
            </Button>
        </div>
      </Card>
  );
  
  
  export default function InsightsPage() {
      return (
        <div className="flex flex-col min-h-screen bg-background">
          <Header />
          <main>
              <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
                  <div className="container mx-auto px-6 text-center">
                      <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
                          Insights para <span className="text-primary">Líderes</span>
                      </h1>
                      <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
                          Estrategias y tácticas probadas para escalar tu negocio.
                      </p>
                  </div>
              </section>
              
              <section className="py-20 lg:py-28 bg-background">
                  <div className="container mx-auto px-6">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                          {posts.map((post) => (
                              <BlogPostCard key={post.slug} post={post} />
                          ))}
                      </div>
                  </div>
              </section>
          </main>
          <Footer />
        </div>
      );
    }
  