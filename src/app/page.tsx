import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ClientLogos from '@/components/sections/client-logos';

const SolutionsSection = dynamic(() => import('@/components/sections/solutions'));
const AboutSection = dynamic(() => import('@/components/sections/about'));
const TestimonialsSection = dynamic(() => import('@/components/sections/testimonials'));
const HowItWorksSection = dynamic(() => import('@/components/sections/how-it-works'));
const InsightsSummary = dynamic(() => import('@/components/sections/insights-summary'));
const FinalCtaSection = dynamic(() => import('@/components/sections/final-cta'));


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ClientLogos />
        <SolutionsSection />
        <TestimonialsSection />
        <HowItWorksSection />
        <AboutSection />
        <InsightsSummary />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
