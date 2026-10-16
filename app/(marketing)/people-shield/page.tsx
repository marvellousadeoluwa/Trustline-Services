import Container from '@/components/ui/Container';
import ComplianceHealthCard from '@/components/sections/ComplianceHealthCard';

export default function PeopleShieldPage() {
  return (
    <main className="min-h-screen">
      <Container size="lg" className="py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-3xl md:text-4xl font-display font-bold">
            People Shield™ — Your Outsourced Workforce Compliance Office
          </h1>

          <p className="text-lg text-trust-blue/90">
            People Shield™ provides continuous monitoring, risk-flagging and
            quarterly reporting so you can run payroll and HR with confidence.
            We monitor statutory remittances, workforce documentation,
            payroll controls and governance gaps so your business reduces
            regulatory exposure and maintains defensible records.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">What People Shield™ monitors</h2>
              <ul className="list-disc list-inside space-y-2 text-trust-blue/90">
                <li>PAYE remittances and filings</li>
                <li>Pension contributions and reconciliation</li>
                <li>NSITF, ITF and other statutory schemes (where applicable)</li>
                <li>Employment documentation and contract compliance</li>
                <li>Payroll controls and segregation of duties</li>
                <li>Quarterly compliance reporting and remediation plans</li>
              </ul>

              <h3 className="text-lg font-semibold">Deliverables</h3>
              <ul className="list-disc list-inside space-y-2 text-trust-blue/90">
                <li>Initial onboarding diagnostic and Compliance Score</li>
                <li>Quarterly compliance dashboard and Red/Amber/Green risks</li>
                <li>Action items, owners and statutory deadlines</li>
                <li>Documentation gap register and remediation tracker</li>
                <li>Optional managed payroll and remittance services</li>
              </ul>

              <a
                href="#contact"
                className="inline-block mt-4 px-6 py-3 bg-trust-blue text-white rounded-lg font-semibold"
              >
                Request a People Shield Demo
              </a>
            </div>

            <div>
              <ComplianceHealthCard />
            </div>
          </div>

          <section className="pt-8">
            <h3 className="text-lg font-semibold">FAQ</h3>
            <div className="mt-4 space-y-4 text-trust-blue/90">
              <p>
                <strong>Who is People Shield for?</strong> Growth-stage SMEs,
                startups and organisations that need reliable payroll, HR and
                compliance governance without adding full-time senior
                compliance staff.
              </p>
              <p>
                <strong>How often do you report?</strong> We provide
                onboarding diagnostics and quarterly compliance reports; more
                frequent checks are available for managed payroll clients.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </main>
  );
}
