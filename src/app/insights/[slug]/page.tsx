import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ProgressBar from '@/components/ui/progress-bar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPostBySlug, getRelatedPosts, getPublishedPosts } from '@/lib/data/posts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

// Generación Estática de Metadatos y OpenGraph
export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);
    if (!post || new Date(post.publishedAt) > new Date()) return {};

    return {
        title: `${post.title} | Insights LeaderLeads`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            type: 'article',
            publishedTime: post.publishedAt,
            authors: [post.author.name],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                }
            ]
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.description,
            images: [post.image],
        }
    };
}

// Soporte para export estático
export async function generateStaticParams() {
    const publishedPosts = getPublishedPosts();
    return publishedPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function PostPage({ params }: PostPageProps) {
    const resolvedParams = await params;
    const post = getPostBySlug(resolvedParams.slug);

    if (!post || new Date(post.publishedAt) > new Date()) {
        notFound();
    }

    // 1. Arquitectura Semántica: Construcción de NewsArticle JSON-LD Schema
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        "headline": post.title,
        "description": post.description,
        "image": [
            post.image
        ],
        "datePublished": post.publishedAt,
        "dateModified": post.publishedAt,
        "author": [
            {
                "@type": "Person",
                "name": post.author.name,
                "jobTitle": post.author.role
            },
            {
                "@type": "Organization",
                "name": "LeaderLeads Analytics",
                "url": "https://leaderleads.co"
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "LeaderLeads Analytics",
            "logo": {
                "@type": "ImageObject",
                "url": "https://leaderleads.co/logo.png"
            }
        }
    };

    const relatedPosts = getRelatedPosts(post.slug);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <div className="flex flex-col min-h-screen bg-background font-sans text-foreground">
                <ProgressBar />
                <Header />

                <main className="flex-grow pt-24 pb-16">
                    {/* Cabecera del Artículo */}
                    <article className="container mx-auto px-6 max-w-4xl">

                        <header className="mb-10 text-center">
                            <Badge variant={post.badgeVariant} className="mb-4">
                                {post.category}
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 font-heading text-foreground">
                                {post.title}
                            </h1>

                            <div className="flex items-center justify-center space-x-4 text-muted-foreground font-medium">
                                <div>
                                    <p className="text-foreground">{post.author.name}</p>
                                    <p className="text-xs">{post.author.role}</p>
                                </div>
                                <span className="hidden sm:inline">•</span>
                                <time dateTime={post.publishedAt} className="text-sm">
                                    {format(new Date(post.publishedAt), "dd 'de' MMMM, yyyy", { locale: es })}
                                </time>
                            </div>
                        </header>

                        {/* Imagen Principal */}
                        <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden mb-12 shadow-xl border border-border">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Cuerpo del Artículo (Mecánicas Zen-Mode & UX Adictiva) */}
                        <div className="prose prose-lg dark:prose-invert max-w-prose mx-auto font-sans leading-relaxed lg:leading-loose text-lg text-muted-foreground">
                            <p className="text-xl font-medium text-foreground leading-snug mb-8">
                                {post.description}
                            </p>

                            {post.contentParagraphs.map((paragraph, index) => {
                                // Inyección In-Line de Micro-CTAs (Lead Magnets)
                                if (paragraph === "INLINE_CTA_AUDITORIA") {
                                    return (
                                        <aside key={`cta-${index}`} className="my-10 p-8 rounded-2xl bg-primary/10 border border-primary/20 shadow-[0_0_15px_rgba(120,40,200,0.1)] text-center transform transition-transform hover:-translate-y-1">
                                            <h3 className="text-2xl font-bold font-heading text-foreground mb-3">¿Este problema resuena con tu operativa?</h3>
                                            <p className="text-base text-muted-foreground mb-6 leading-normal">
                                                Nuestro equipo de especialistas puede diagnosticar gratis tus cuellos de botella mediante nuestra herramienta de auditoría comercial.
                                            </p>
                                            <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90">
                                                <Link href="/auditoria">
                                                    Pedir Diagnóstico Gratuito
                                                </Link>
                                            </Button>
                                        </aside>
                                    );
                                }

                                if (paragraph === "INLINE_CTA_TRIAL") {
                                    return (
                                        <aside key={`cta-${index}`} className="my-10 p-8 rounded-2xl bg-destructive/10 border border-destructive/20 shadow-[0_0_15px_rgba(255,94,0,0.1)] text-center transform transition-transform hover:-translate-y-1">
                                            <h3 className="text-2xl font-bold font-heading text-foreground mb-3">Escala tus ventas sin expandir tu nómina</h3>
                                            <p className="text-base text-muted-foreground mb-6 leading-normal">
                                                Postúlate para nuestro mes de prueba a costo y riesgo cero. Equipos integrados en tu compañía en semanas.
                                            </p>
                                            <Button asChild size="lg" className="w-full sm:w-auto bg-destructive text-destructive-foreground hover:bg-destructive/90">
                                                <Link href="/mes-gratis">
                                                    Explorar Mes de Prueba
                                                </Link>
                                            </Button>
                                        </aside>
                                    );
                                }

                                return (
                                    <p key={index} className="mb-6">
                                        {paragraph}
                                    </p>
                                );
                            })}
                        </div>
                    </article>

                    {/* Loop de Retención: Artículos Relacionados */}
                    <section className="container mx-auto px-6 max-w-6xl mt-24 border-t border-border pt-16">
                        <h2 className="text-3xl font-heading font-bold mb-10 text-center text-foreground">
                            Aún no termines... <span className="text-accent underline decoration-accent/50 underline-offset-4">Continúa leyendo</span>
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Card key={relatedPost.slug} className="rounded-2xl shadow-lg overflow-hidden group flex flex-col bg-card hover:shadow-xl hover:border-accent transition-all duration-300">
                                    <Link href={`/insights/${relatedPost.slug}`} className="absolute inset-0 z-10">
                                        <span className="sr-only">Ver artículo {relatedPost.title}</span>
                                    </Link>
                                    <div className="relative h-48 w-full overflow-hidden">
                                        <Image
                                            src={relatedPost.image}
                                            alt={relatedPost.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                                        />
                                    </div>
                                    <CardHeader>
                                        <Badge variant={relatedPost.badgeVariant as any} className="mb-2 w-fit">
                                            {relatedPost.category}
                                        </Badge>
                                        <CardTitle className="mt-2 text-xl font-bold text-foreground line-clamp-2 group-hover:text-accent transition-colors">
                                            {relatedPost.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <p className="text-muted-foreground line-clamp-3 text-sm">{relatedPost.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>
                </main>

                <Footer />
            </div>
        </>
    );
}
