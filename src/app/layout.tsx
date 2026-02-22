import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/providers/theme-provider';
import { FirebaseProvider } from '@/components/providers/firebase-provider';
import { Suspense } from 'react';
import GoogleAnalyticsWrapper from '@/components/analytics/GoogleAnalyticsWrapper';

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
            {/* PASO 2: Envuelve el Wrapper con Suspense */}
            <Suspense>
              <GoogleAnalyticsWrapper />
            </Suspense>
            {children}
            <Toaster />
          </FirebaseProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
