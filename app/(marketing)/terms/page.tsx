import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Scale, ShieldCheck, FileCheck, AlertTriangle, Building2, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, PHONE_DISPLAY } from '@/lib/site';

export const metadata = {
  title: 'Terms of Engagement & Service Agreement | Trustline Professional Services Ltd',
  description: 'Master Terms of Engagement, HR Architecture, and Multi-Tenant HR Center Portal Terms for Trustline Professional Services Ltd under the laws of the Federal Republic of Nigeria.',
};

export default function TermsPage() {
  const lastUpdated = 'October 16, 2026';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-trust-blue text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <Scale className="w-3.5 h-3.5" />
              <span>Nigerian Legal & Commercial Framework</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
              Master Terms of Engagement
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Legal agreements, governance frameworks, multi-tenant HR portal rules, and service obligations for client organizations partnering with Trustline Professional Services Ltd.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/60">
              <span><strong>Effective Date:</strong> January 1, 2024</span>
              <span>•</span>
              <span><strong>Last Revised:</strong> {lastUpdated}</span>
              <span>•</span>
              <span><strong>Incorporation:</strong> RC 9398960</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Section spacing="lg" className="py-12 lg:py-16">
        <Container size="lg">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <aside className="lg:col-span-1 hidden lg:block">
              <div className="sticky top-28 space-y-2 text-sm bg-white p-5 rounded-xl border border-gray-200/80 shadow-sm">
                <p className="font-semibold text-trust-blue uppercase text-xs tracking-wider mb-3">Contents</p>
                <nav className="space-y-1.5 text-slate-600">
                  <a href="#parties" className="block hover:text-trust-blue transition-colors py-1">1. Parties & Capacity</a>
                  <a href="#services" className="block hover:text-trust-blue transition-colors py-1">2. Scope of Services</a>
                  <a href="#hr-portal" className="block hover:text-trust-blue transition-colors py-1">3. Multi-Tenant HR Center</a>
                  <a href="#client-duties" className="block hover:text-trust-blue transition-colors py-1">4. Client Warranties</a>
                  <a href="#statutory" className="block hover:text-trust-blue transition-colors py-1">5. Statutory Deductions</a>
                  <a href="#fees" className="block hover:text-trust-blue transition-colors py-1">6. Fees & Retainers</a>
                  <a href="#confidentiality" className="block hover:text-trust-blue transition-colors py-1">7. Confidentiality & NDPA</a>
                  <a href="#liability" className="block hover:text-trust-blue transition-colors py-1">8. Liability Limitation</a>
                  <a href="#retention" className="block hover:text-trust-blue transition-colors py-1">9. 6-Year Tax Standard</a>
                  <a href="#termination" className="block hover:text-trust-blue transition-colors py-1">10. Termination</a>
                  <a href="#governing-law" className="block hover:text-trust-blue transition-colors py-1">11. Governing Law</a>
                </nav>
              </div>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 space-y-10 text-slate-700 leading-relaxed">
              {/* Highlight Notice */}
              <div className="bg-amber-50/70 border border-amber-200/80 rounded-xl p-6">
                <div className="flex gap-4">
                  <ShieldCheck className="w-6 h-6 text-brand-gold flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-trust-blue text-base mb-1">
                      Professional Practice Standard
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Trustline delivers defensible HR, payroll, and tax infrastructure. We do not provide clandestine tax evasion, fictitious payroll generation, or artificial tax avoidance structures. All services are rendered in strict compliance with the laws of the Federal Republic of Nigeria.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <section id="parties" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">1.</span> Parties & Legal Capacity
                </h2>
                <p className="mb-3">
                  These Terms of Engagement ("Terms") constitute a legally binding agreement between:
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-sm space-y-3">
                  <p>
                    <strong>1. Trustline Professional Services Ltd</strong> (RC 9398960), a company duly incorporated under the Companies and Allied Matters Act (CAMA 2020) of Nigeria, having its operational headquarters in Lagos and registered office in Ogun State ("Trustline", "we", "us", or "our").
                  </p>
                  <p>
                    <strong>2. The Client:</strong> Any legal entity, registered business enterprise, partnership, NGO, or professional individual engaging Trustline’s services or registering a company tenant workspace on the Trustline HR Center portal ("Client", "you", or "your").
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="services" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">2.</span> Scope of Professional Services
                </h2>
                <p className="mb-3">
                  Trustline provides specialized human capital, tax, and governance infrastructure comprising:
                </p>
                <div className="space-y-3 text-sm">
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">People Shield™ Compliance Diagnostics</p>
                    <p className="text-slate-600">Forensic review of employment contracts, company handbooks, PAYE deduction history, pension remittances, and labor law risks under the Nigerian Labour Act.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">HR Architecture & Workforce Governance</p>
                    <p className="text-slate-600">Design of defensible HR policies, job evaluation matrices, organizational charts, compensation benchmarking, and disciplinary grievance structures.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Payroll & Statutory Compliance Architecture</p>
                    <p className="text-slate-600">Computation and schedule preparation for PAYE (PITA), statutory Pension (PRA 2014), National Housing Fund (NHF), NSITF (ECA), and ITF remittances.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Talent Acquisition & Executive Search</p>
                    <p className="text-slate-600">Retained executive recruitment, competence screening, background verifications, and onboarding integration for mission-critical corporate roles.</p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="hr-portal" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">3.</span> Multi-Tenant HR Center Portal Terms
                </h2>
                <p className="mb-3">
                  When accessing or provisioning a workspace via the Trustline HR Center:
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-sm space-y-3">
                  <p>
                    <strong>Subdomain Provisioning:</strong> Each registering company selects an approved custom subdomain (e.g. <code className="bg-slate-100 px-1 rounded">company.trustlineprofessional.com</code>) representing their isolated company workspace. Trustline reserves the right to reassign or revoke subdomains that infringe third-party trademarks or violate reserved system designations.
                  </p>
                  <p>
                    <strong>Primary Admin Auto-Provisioning:</strong> The first authorized user registered during corporate signup is automatically designated the <strong>Primary HR Administrator</strong>. The Primary Admin possesses the administrative authority to configure staff profiles, establish compensation figures, and authorize team memberships.
                  </p>
                  <p>
                    <strong>Tenant Data Isolation:</strong> Trustline enforces strict tenant isolation at the architectural and database layer. No client organization may view or intercept another client tenant's records.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section id="client-duties" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">4.</span> Client Warranties & Defensible Records
                </h2>
                <p className="mb-3 text-sm">
                  The Client represents, warrants, and undertakes that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>All employee identities, gross emoluments, payroll allowances, and employment records uploaded to Trustline are genuine, accurate, and defensible.</li>
                  <li>The Client holds lawful consent or legitimate statutory grounds under Section 25 of the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> to provide employee data to Trustline for payroll and compliance processing.</li>
                  <li>The Client will not utilize Trustline systems for under-declaring emoluments, processing fictitious ("ghost") employees, or evading statutory Nigerian taxes.</li>
                </ul>
              </section>

              {/* Section 5 */}
              <section id="statutory" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">5.</span> Statutory Deductions & Remittance Disclaimer
                </h2>
                <p className="mb-3 text-sm">
                  Trustline provides computational architecture, deduction schedules, and compliance advisory based on statutory rates (PRA 2014, PITA, NHF, NSITF, ITF).
                </p>
                <div className="bg-slate-100 p-4 rounded-lg text-sm text-slate-700">
                  <p className="font-semibold text-trust-blue mb-1">Client Remittance Responsibility</p>
                  <p>
                    Unless explicitly contracted under an escrow-managed statutory agency agreement, the Client remains solely responsible for the timely disbursement and physical remittance of funds to the respective government collection accounts (e.g. Remita, LIRS e-Tax, PenCom PFC accounts, FMBN portal). Trustline shall not be liable for penalties, surcharges, or interest arising from Client delays in physical fund disbursement.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="fees" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">6.</span> Fees, Invoicing & Payment Terms
                </h2>
                <p className="mb-3 text-sm">
                  Professional fees, retainers, and platform subscriptions are outlined in individual Proposals, Statements of Work (SOW), or HR Center subscription plans:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Invoices are denominated in Nigerian Naira (₦) unless foreign currency settlement is explicitly agreed in writing.</li>
                  <li>Invoices are due within <strong>14 calendar days</strong> of issuance unless otherwise stipulated.</li>
                  <li>All statutory Value Added Tax (VAT) and statutory Withholding Tax (WHT) credit notes shall be handled in accordance with FIRS guidelines.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="confidentiality" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">7.</span> Confidentiality & NDPA Compliance
                </h2>
                <p className="mb-3 text-sm">
                  Each party covenants to hold all proprietary trade secrets, financial records, salary information, and employee data in strict confidence. Neither party shall disclose Confidential Information to any third party without prior written consent, except where mandated by a competent Nigerian court or statutory regulatory agency.
                </p>
                <p className="text-sm">
                  All personal data processing conforms to our <Link href="/privacy" className="text-trust-blue underline font-semibold">Privacy Policy</Link> and Section 25 of the Nigeria Data Protection Act 2023.
                </p>
              </section>

              {/* Section 8 */}
              <section id="liability" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">8.</span> Limitation of Liability & Professional Indemnity
                </h2>
                <p className="mb-3 text-sm">
                  To the maximum extent permitted under Nigerian law:
                </p>
                <div className="bg-white p-5 rounded-xl border border-gray-200 text-sm space-y-2 text-slate-600">
                  <p>
                    Neither party shall be liable for indirect, incidental, punitive, or consequential damages, loss of business goodwill, or loss of profits.
                  </p>
                  <p>
                    Trustline’s total cumulative aggregate liability under any engagement shall be limited to the total professional fees actually received by Trustline from the Client under the applicable Statement of Work in the six (6) months immediately preceding the event giving rise to liability.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">9.</span> 6-Year Defensible Tax Archive Standard
                </h2>
                <p className="mb-3 text-sm">
                  In compliance with statutory tax audit powers vested in the Federal Inland Revenue Service (FIRS) and State Internal Revenue Services (e.g. LIRS) under the Personal Income Tax Act, Trustline maintains a <strong>six (6) year defensible electronic archive</strong> of completed payroll schedules, tax calculations, and compliance audit certificates generated during the engagement term.
                </p>
              </section>

              {/* Section 10 */}
              <section id="termination" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">10.</span> Term & Termination
                </h2>
                <p className="mb-3 text-sm">
                  Either party may terminate a recurring advisory or platform engagement by serving thirty (30) days' written notice to the other party. In the event of material breach, insolvency, or non-payment, the non-breaching party may terminate immediately upon written notice. All fees accrued prior to termination remain immediately payable.
                </p>
              </section>

              {/* Section 11 */}
              <section id="governing-law" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">11.</span> Governing Law & Dispute Resolution
                </h2>
                <div className="bg-trust-blue text-white rounded-xl p-6 space-y-3 text-sm">
                  <p className="font-semibold text-base text-brand-gold">Jurisdiction & Nigerian Arbitration</p>
                  <p>
                    These Terms of Engagement are governed by and construed in accordance with the substantive <strong>laws of the Federal Republic of Nigeria</strong>.
                  </p>
                  <p>
                    Any dispute, controversy, or claim arising out of or in connection with this agreement shall first be subjected to good-faith mediation between executive representatives. If unresolved within twenty-one (21) days, the dispute shall be finally settled by arbitration in <strong>Lagos, Nigeria</strong> in accordance with the <strong>Arbitration and Mediation Act 2023</strong>.
                  </p>
                  <div className="pt-2 text-xs text-white/70">
                    Official Legal Notice Address: Trustline Professional Services Ltd · Attention: Legal & Governance Directorate · <a href={`mailto:${CONTACT_EMAIL}`} className="underline text-brand-gold">{CONTACT_EMAIL}</a>
                  </div>
                </div>
              </section>

              {/* Bottom Navigation */}
              <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
                <Link href="/" className="text-trust-blue font-semibold hover:text-brand-gold transition-colors">
                  ← Return to Home
                </Link>
                <div className="flex gap-4">
                  <Link href="/privacy" className="text-slate-600 hover:text-trust-blue underline">
                    Privacy Policy & NDPA
                  </Link>
                  <Link href="/hr/auth" className="text-slate-600 hover:text-trust-blue underline">
                    HR Center Portal
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
}
