import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/providers/theme-provider';
import { FirebaseProvider } from '@/components/providers/firebase-provider';
import { Suspense } from 'react';
import GoogleAnalyticsWrapper from '@/components/analytics/GoogleAnalyticsWrapper';
import MetaPixel from '@/components/analytics/meta-pixel';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space',
  weight: ['500', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['300', '400'],
});

export const metadata: Metadata = {
  title: {
    default: 'LeaderLeads: Equipos On-Demand para Escalar tu Negocio',
    template: '%s | LeaderLeads',
  },
  description: 'Integramos equipos de marketing, ventas y soporte en tu operación en semanas. Atrae, convierte y fideliza clientes sin expandir tu equipo interno.',
  keywords: [
    "agencia B2B",
    "generación de leads corporativos",
    "outsourcing comercial",
    "growth partner",
    "automatización de marketing B2B",
    "appointment setting",
    "incrementar ventas empresariales",
    "LeaderLeads B2B"
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://leaderleads.co",
    title: "LeaderLeads: Equipos On-Demand para Escalar tu Negocio",
    description: "Integramos equipos de marketing, ventas y soporte en tu operación en semanas. Atrae, convierte y fideliza clientes sin expandir tu equipo interno.",
    siteName: "LeaderLeads",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeaderLeads: Equipos On-Demand para Escalar tu Negocio",
    description: "Integramos equipos de marketing, ventas y soporte en tu operación en semanas. Atrae y convierte clientes corporativos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FirebaseProvider>
            {/* PASO 2: Analytics Envuelto con Suspense Aislado */}
            <Suspense fallback={null}>
              <GoogleAnalyticsWrapper />
            </Suspense>
            <MetaPixel />
            {children}
            <Toaster />
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
