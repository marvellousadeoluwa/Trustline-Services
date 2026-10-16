import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import GlassOverlay from '@/components/ui/GlassOverlay';

export default function Proof() {
  return (
    <Section background="white" spacing="lg">
      <Container size="xl">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue">Trusted Thinking, Proven in Public</h2>
          <p className="text-trust-blue/90">Trustline is led by <strong>Eniola Ayo-Fagbuyi</strong>, Human Capital Strategist, whose work reaches thousands of Nigerian business and HR leaders monthly.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-trust-blue">
            <div className="relative overflow-hidden rounded-2xl border border-white/80 p-6 shadow-[0_8px_24px_rgba(0,51,102,0.04)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <GlassOverlay variant="sky" withRefraction={true} />
              <p className="font-display text-3xl font-bold text-trust-blue mb-2">9,000+</p>
              <p className="text-trust-blue/80 font-medium">Monthly reach among Nigerian business & HR leaders</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/80 p-6 shadow-[0_8px_24px_rgba(0,51,102,0.04)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <GlassOverlay variant="sky" withRefraction={true} />
              <p className="font-display text-lg font-bold text-trust-blue mb-2">Featured Analysis</p>
              <p className="text-trust-blue/80 font-medium">Minimum wage restructuring & workforce readiness</p>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-white/80 p-6 shadow-[0_8px_24px_rgba(0,51,102,0.04)] text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <GlassOverlay variant="sky" withRefraction={true} />
              <p className="font-display text-lg font-bold text-trust-blue mb-2">Nationwide Scope</p>
              <p className="text-trust-blue/80 font-medium">Serving clients across Lagos, Ogun, Abuja & nationwide</p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <blockquote className="text-trust-blue/90 italic">"[One or two sentences on a concrete outcome.]"</blockquote>
            <p className="text-sm text-trust-blue/80">– Name, Role, Company (or "Founder, Lagos-based [industry] SME" if confidentiality is needed)</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
