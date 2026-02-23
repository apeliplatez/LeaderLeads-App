"use client";

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LeadForm } from '@/components/forms/lead-form';

export default function ContactClient() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="bg-card pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
              Ponte en <span className="text-primary">Contacto</span>
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
              ¿Tienes una pregunta o estás listo para empezar? Completa el formulario y derivaremos tu mensaje de forma prioritaria a nuestro equipo especialista.
            </p>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
          <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] -z-10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-start">

              <div className="space-y-8 order-2 lg:order-1 lg:mt-12">
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4">Información Corporativa</h3>
                  <div className="space-y-4 text-lg text-muted-foreground">
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl border border-white/5 bg-card/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <span>123 Av. Principal, Ciudad de Panamá</span>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl border border-white/5 bg-card/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <a href="tel:+1234567890" className="hover:text-primary transition-colors">(123) 456-7890</a>
                    </div>
                    <div className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl border border-white/5 bg-card/50 flex items-center justify-center group-hover:border-primary/50 transition-colors">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <a href="mailto:ceo@leaderleads.co" className="hover:text-primary transition-colors">ceo@leaderleads.co</a>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-4 mt-12">HQ Latam</h3>
                  <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-lg border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126442.27063260799!2d-79.62531649646536!3d8.981881729013093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca8f1dbeecbbf%3A0x6d9f8df0b55ed996!2sPanama%20City%2C%20Panam%C3%A1!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Mesa de Entrada</h2>
                <p className="text-muted-foreground mb-8">Completa el formulario institucional. Evaluaremos tu consulta en menos de 2 horas hábiles.</p>
                <LeadForm type="contacto" sourceName="Pipeline Contacto General" />
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
