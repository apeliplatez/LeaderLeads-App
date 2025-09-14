import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ClientLogos from '@/components/sections/client-logos';
import AboutSection from '@/components/sections/about';
import TestimonialsSection from '@/components/sections/testimonials';
import InsightsSummary from '@/components/sections/insights-summary';
import FinalCtaSection from '@/components/sections/final-cta';
import SolutionsSection from '@/components/sections/solutions';
import HowItWorksSection from '@/components/sections/how-it-works';


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
