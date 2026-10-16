import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import HeroMarquee from '@/components/sections/HeroMarquee';
import WhoWeServe from '@/components/sections/WhoWeServe';
import ValueProposition from '@/components/sections/ValueProposition';
import ServicePillars from '@/components/sections/ServicePillars';
import HowItWorks from '@/components/sections/HowItWorks';
import Proof from '@/components/sections/Proof';
import LeadCapture from '@/components/sections/LeadCapture';
import Footer from '@/components/sections/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Header />
      <Hero />
      <HeroMarquee />
      <WhoWeServe />
      <ValueProposition />
      <ServicePillars />
      <Proof />
      <LeadCapture />
      <HowItWorks />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
