
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Link from 'next/link';
import { GitCommit, Calendar, Eye } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Historial de Versiones | LeaderLeads',
  description: 'Consulta el historial de publicaciones y versiones de la aplicación LeaderLeads.',
};

const versionHistory = [
  {
    version: '1.0.0',
    date: '2024-07-29',
    description: 'Lanzamiento inicial de la plataforma LeaderLeads. Incluye páginas de inicio, servicios, modelo de negocio, sobre nosotros, contacto e insights.',
    previewLink: '#',
  },
  {
    version: '1.0.1',
    date: '2024-07-30',
    description: 'Corrección de errores menores en la hoja de estilos global (globals.css) para resolver problemas de compilación de Tailwind CSS.',
    previewLink: '#',
  },
  {
    version: '1.1.0',
    date: '2024-08-01',
    description: 'Se añade la página de historial de versiones para el seguimiento de cambios y publicaciones.',
    previewLink: '/',
  },
];

export default function VersionHistoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Historial de <span className="text-primary">Versiones</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              Aquí puedes encontrar un registro de todas las versiones publicadas de nuestro sitio web.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="space-y-8">
              {versionHistory.map((item, index) => (
                <Card key={index} className="border-l-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-2xl text-foreground">
                        <GitCommit className="h-6 w-6" />
                        Versión {item.version}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 mt-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        Publicado el: {new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                      </CardDescription>
                    </div>
                     <Button asChild>
                        <Link href={item.previewLink}>
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Versión
                        </Link>
                      </Button>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
