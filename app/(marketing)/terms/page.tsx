import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Terms of Engagement - Trustline Professional Services Ltd',
  description: 'Terms of Engagement for Trustline Professional Services Ltd — scope, fees, liability, and governance.',
};

export default function TermsPage() {
  return (
    <Section spacing="lg" className="bg-white text-trust-blue">
      <Container size="md">
        <h1 className="text-3xl font-bold mb-4">Terms of Engagement</h1>

        <p className="mb-4">These Terms of Engagement ("Terms") set out the basis on which Trustline Professional Services Ltd ("Trustline", "we", "us") will provide services to you. By engaging our services you agree to these Terms.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Scope of Services</h2>
        <p className="mb-4">We provide HR architecture, payroll advisory, tax advisory, and talent acquisition services as agreed in a separate service agreement or proposal.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. Fees & Payment</h2>
        <p className="mb-4">Fees will be set out in the proposal or statement of work. Payments are due as specified; late payments may attract interest.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Confidentiality</h2>
        <p className="mb-4">We will treat client information as confidential and will not disclose it except as required by law or with your consent.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Liability</h2>
        <p className="mb-4">Our liability is limited to the extent permitted by law. We shall not be liable for indirect or consequential losses.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Termination</h2>
        <p className="mb-4">Either party may terminate the engagement as provided in the service agreement. On termination, outstanding fees remain payable.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Governing Law</h2>
        <p className="mb-4">These Terms are governed by the laws of Nigeria.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
        <p className="mb-4">For questions about these Terms, contact: legal@trustlineprofessional.com</p>

        <p className="mt-8 text-sm text-muted-foreground">These Terms may be updated from time to time; we will notify clients of significant changes.</p>
      </Container>
    </Section>
  );
}
