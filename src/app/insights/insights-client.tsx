"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Footer from '@/components/layout/footer';
import Header from '@/components/layout/header';
import { posts, type BlogPost } from '@/lib/data/posts';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const BlogPostCard = ({ post }: { post: BlogPost }) => (
  <Card className="rounded-2xl shadow-lg overflow-hidden group flex flex-col bg-card hover:shadow-xl hover:border-primary transition-all duration-300 relative">
    <Link href={`/insights/${post.slug}`} className="absolute inset-0 z-10">
      <span className="sr-only">Ver artículo {post.title}</span>
    </Link>
    <div className="relative h-56 w-full overflow-hidden">
      <Image
        src={post.image}
        alt={`Imagen para el post ${post.title}`}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        data-ai-hint={post.dataAiHint}
      />
    </div>
    <CardHeader>
      <Badge variant={post.badgeVariant as any} className="mb-2 w-fit">
        {post.category}
      </Badge>
      <CardTitle className="mt-2 text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors line-clamp-2">
        {post.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex-grow flex flex-col">
      <p className="text-muted-foreground font-sans line-clamp-3 mb-6 relative z-20">
        {post.description}
      </p>
      <div className="flex justify-between items-center text-sm font-medium text-muted-foreground mt-auto relative z-20">
        <span className="text-foreground">{post.author.name}</span>
        <time dateTime={post.publishedAt}>
          {format(new Date(post.publishedAt), "MMM dd, yyyy", { locale: es })}
        </time>
      </div>
    </CardContent>
  </Card>
);

export default function InsightsPage() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
      <Header />

      <main className="flex-grow">
        {/* Cabecera de Sección Corporativa */}
        <section className="bg-card pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-border">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold font-heading tracking-tight mb-6 text-foreground">
              Insights <span className="text-primary italic">B2B</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
              Estrategias, tácticas y análisis profundo para escalar tu operación. Contenido diseñado exclusivamente para líderes que buscan rentabilidad.
            </p>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-7xl">

            {/* Hero Feature Article */}
            {featuredPost && (
              <div className="mb-24">
                <h2 className="text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8 ml-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary mr-3 animate-pulse"></span>
                  Artículo Destacado
                </h2>
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl bg-card border border-border lg:grid lg:grid-cols-2 flex flex-col hover:border-primary/50 transition-colors duration-500">
                  <Link href={`/insights/${featuredPost.slug}`} className="absolute inset-0 z-10">
                    <span className="sr-only">Ver artículo destacado {featuredPost.title}</span>
                  </Link>
                  <div className="relative h-72 lg:h-[500px] w-full overflow-hidden">
                    <Image
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                    <Badge variant={featuredPost.badgeVariant as any} className="mb-6 w-fit text-sm px-4 py-1">
                      {featuredPost.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-lg md:text-xl text-muted-foreground font-sans mb-8 leading-relaxed">
                      {featuredPost.description}
                    </p>
                    <div className="flex items-center space-x-4 text-muted-foreground font-medium mt-auto relative z-20">
                      <div className="flex flex-col">
                        <span className="text-foreground">{featuredPost.author.name}</span>
                        <span className="text-xs">{featuredPost.author.role}</span>
                      </div>
                      <span className="hidden sm:inline text-border">•</span>
                      <time dateTime={featuredPost.publishedAt} className="text-sm">
                        {format(new Date(featuredPost.publishedAt), "dd 'de' MMMM, yyyy", { locale: es })}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Grid de Artículos Restantes */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-10 text-foreground border-b border-border pb-4">
                Últimas Publicaciones
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {regularPosts.map((post) => (
                  <BlogPostCard key={post.slug} post={post} />
                ))}
              </div>
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
