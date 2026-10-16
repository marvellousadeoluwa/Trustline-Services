import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';

export const metadata = {
  title: 'Privacy Policy - Trustline Professional Services Ltd',
  description: 'Privacy Policy for Trustline Professional Services Ltd — how we collect, use and protect personal data.',
};

export default function PrivacyPage() {
  const effectiveDate = '2026-08-27';

  return (
    <Section spacing="lg" className="bg-white text-trust-blue">
      <Container size="md">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-6 text-sm text-muted-foreground">Effective date: {effectiveDate}</p>

        <p className="mb-4">Trustline Professional Services Ltd ("Trustline", "we", "us" or "our") respects your privacy and is committed to protecting it through our compliance with this policy.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
        <p className="mb-4">We collect information you provide directly to us, including but not limited to contact information, company details, and information submitted via forms (e.g. waitlist or diagnostic booking).</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Information</h2>
        <p className="mb-4">We use your information to provide services, respond to inquiries, process payments, comply with legal obligations, and to improve our services. We may also use information for marketing where we have consent.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing & Disclosure</h2>
        <p className="mb-4">We do not sell personal data. We may share information with processors (e.g., Supabase for data storage) and where required by law or to protect our rights.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
        <p className="mb-4">We implement reasonable administrative, technical, and physical measures to protect personal data. However, no method of transmission or storage is completely secure.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Retention</h2>
        <p className="mb-4">We retain personal data only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">6. Your Rights</h2>
        <p className="mb-4">Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data. Contact us at privacy@trustlineprofessional.com to exercise your rights.</p>

        <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact</h2>
        <p className="mb-4">If you have questions about this policy, contact: privacy@trustlineprofessional.com</p>

        <p className="mt-8 text-sm text-muted-foreground">This policy may be updated from time to time. We will post any changes on this page with a revised effective date.</p>
      </Container>
    </Section>
  );
}
