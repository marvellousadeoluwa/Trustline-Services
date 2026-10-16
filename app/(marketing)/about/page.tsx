import Container from '@/components/ui/Container';

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Container size="lg" className="py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold">About Trustline</h1>

          <p className="text-trust-blue/90 text-lg">
            Trustline Professional Services builds people, payroll and compliance
            systems for growing Nigerian businesses. We combine HR governance,
            statutory compliance and strategic talent acquisition to help
            founders scale with confidence.
          </p>

          <section className="pt-6">
            <h2 className="text-xl font-semibold">Founder</h2>
            <div className="mt-3 text-trust-blue/90">
              <p className="font-medium">[Founder Name]</p>
              <p className="text-sm">Founder & CEO — HR and tax practitioner with experience across advisory and in-house roles.</p>
            </div>
          </section>

          <section className="pt-6">
            <h2 className="text-xl font-semibold">Governance & Credentials</h2>
            <ul className="list-disc list-inside mt-3 text-trust-blue/90 space-y-2">
              <li>Structured internal governance and multi-layer reviews</li>
              <li>Strict data privacy and client confidentiality protocols</li>
              <li>Professional memberships and regulatory familiarities (listed where applicable)</li>
            </ul>
          </section>

          <section className="pt-6">
            <h2 className="text-xl font-semibold">Proof & Case Studies</h2>
            <p className="text-trust-blue/90 mt-3">Anonymised case studies and testimonials will appear here. Ask us for examples relevant to your industry.</p>
          </section>
        </div>
      </Container>
    </main>
  );
}
