
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';

const posts = [
  {
    category: 'ESTRATEGIA',
    title: 'Más allá de los Leads: Cómo construir una máquina de retención',
    description: 'Descubre por qué la verdadera rentabilidad no está en la primera venta, sino en la segunda, tercera y cuarta.',
    image: 'https://placehold.co/600x400/c7d2fe/3730a3',
    badgeVariant: 'default',
    dataAiHint: 'strategy chart',
    slug: 'maquina-de-retencion'
  },
  {
    category: 'VENTAS HIGH-TICKET',
    title: 'Los 5 errores que matan tus ventas de alto valor (y cómo evitarlos)',
    description: 'Analizamos los fallos más comunes en ciclos de venta largos y te damos el plan para acelerar tus cierres.',
    image: 'https://placehold.co/600x400/fecdd3/be123c',
    badgeVariant: 'secondary',
    dataAiHint: 'sales meeting',
    slug: 'errores-ventas-alto-valor'
  },
  {
    category: 'TECNOLOGÍA',
    title: 'IA en Atención al Cliente: ¿Reemplazo o superpoder?',
    description: 'Cómo usar la inteligencia artificial para potenciar a tu equipo de soporte, no para sustituirlo.',
    image: 'https://placehold.co/600x400/bbf7d0/166534',
    badgeVariant: 'destructive',
    dataAiHint: 'customer service',
    slug: 'ia-atencion-cliente'
  },
];


const BlogPostCard = ({ post }: { post: typeof posts[0] }) => (
    <Card className="rounded-2xl shadow-lg overflow-hidden group flex flex-col bg-card hover:shadow-xl hover:border-primary transition-all duration-300">
      <div className="relative">
        <Image 
          src={post.image}
          alt={`Imagen para el post ${post.title}`}
          width={600}
          height={400}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          data-ai-hint={post.dataAiHint}
        />
        <div className="absolute top-4 left-4">
             <Badge 
              variant={post.badgeVariant as any}
             >
              {post.category}
            </Badge>
        </div>
      </div>
      <CardHeader>
        <CardTitle className="mt-2 text-xl font-bold text-foreground">{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-muted-foreground line-clamp-3">{post.description}</p>
      </CardContent>
      <div className="p-6 pt-0">
          <Button asChild variant="link" className="p-0 h-auto text-primary">
              <Link href={`/insights/${post.slug}`}>Leer más →</Link>
          </Button>
      </div>
    </Card>
);


export default function InsightsSummary() {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Insights para Líderes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">Estrategias y tácticas probadas para escalar tu negocio.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
            ))}
        </div>
        <div className="mt-16 text-center">
            <Button asChild size="lg" className="transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-lg">
                <Link href="/insights">Ver todos los artículos</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
