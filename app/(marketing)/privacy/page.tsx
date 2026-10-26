import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { Shield, Lock, FileText, CheckCircle2, AlertCircle, Mail, Phone, ExternalLink } from 'lucide-react';
import { CONTACT_EMAIL, PHONE_DISPLAY } from '@/lib/site';

export const metadata = {
  title: 'Privacy Policy & NDPR/NDPA Compliance | Trustline Professional Services Ltd',
  description: 'Official Privacy Policy of Trustline Professional Services Ltd. Fully compliant with the Nigeria Data Protection Act (NDPA) 2023, NDPR 2019, and NDPC regulatory guidelines.',
};

export default function PrivacyPage() {
  const lastUpdated = 'October 16, 2026';

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header Banner */}
      <section className="bg-trust-blue text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/15 via-transparent to-transparent pointer-events-none" />
        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-gold text-xs font-semibold uppercase tracking-wider mb-6">
              <Shield className="w-3.5 h-3.5" />
              <span>NDPA 2023 & NDPC Certified Compliance</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 tracking-tight">
              Privacy Policy & Data Protection Notice
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              How Trustline Professional Services Ltd collects, processes, protects, and governs personal and corporate workforce records in strict compliance with Nigerian and global data privacy standards.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 text-xs text-white/60">
              <span><strong>Effective Date:</strong> January 1, 2024</span>
              <span>•</span>
              <span><strong>Last Revised:</strong> {lastUpdated}</span>
              <span>•</span>
              <span><strong>Entity:</strong> RC 9398960 (Nigeria)</span>
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
                  <a href="#controller" className="block hover:text-trust-blue transition-colors py-1">1. Data Controller</a>
                  <a href="#scope" className="block hover:text-trust-blue transition-colors py-1">2. Scope & Applicability</a>
                  <a href="#legal-basis" className="block hover:text-trust-blue transition-colors py-1">3. Lawful Bases (NDPA 2023)</a>
                  <a href="#data-collected" className="block hover:text-trust-blue transition-colors py-1">4. Information We Collect</a>
                  <a href="#hr-tenancy" className="block hover:text-trust-blue transition-colors py-1">5. HR Center & Multi-Tenancy</a>
                  <a href="#statutory" className="block hover:text-trust-blue transition-colors py-1">6. Statutory Reporting</a>
                  <a href="#subject-rights" className="block hover:text-trust-blue transition-colors py-1">7. Your Statutory Rights</a>
                  <a href="#security" className="block hover:text-trust-blue transition-colors py-1">8. Security & 72h Breach Rule</a>
                  <a href="#retention" className="block hover:text-trust-blue transition-colors py-1">9. Data Retention & FIRS</a>
                  <a href="#ndpc" className="block hover:text-trust-blue transition-colors py-1">10. NDPC Complaints</a>
                  <a href="#contact" className="block hover:text-trust-blue transition-colors py-1">11. DPO Contact</a>
                </nav>
              </div>
            </aside>

            {/* Document Body */}
            <div className="lg:col-span-3 space-y-10 text-slate-700 leading-relaxed">
              {/* Overview Box */}
              <div className="bg-blue-50/60 border border-blue-200/60 rounded-xl p-6">
                <div className="flex gap-4">
                  <Lock className="w-6 h-6 text-trust-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-trust-blue text-base mb-1">
                      Our Statutory Privacy Commitment
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Trustline Professional Services Ltd operates under the regulatory oversight of the <strong>Nigeria Data Protection Commission (NDPC)</strong>, enforcing all statutory provisions of the <strong>Nigeria Data Protection Act (NDPA) 2023</strong> and the <strong>Nigeria Data Protection Regulation (NDPR) 2019</strong>. We never monetize, sell, or disclose personal or corporate data to unauthorized third parties.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <section id="controller" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">1.</span> Data Controller & Organization Details
                </h2>
                <p className="mb-3">
                  This Privacy Policy applies to personal data collected and processed by <strong>Trustline Professional Services Ltd</strong> (RC 9398960), a private limited company incorporated under the laws of the Federal Republic of Nigeria.
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-200 text-sm space-y-1.5">
                  <p><strong>Registered Corporate Name:</strong> Trustline Professional Services Ltd</p>
                  <p><strong>Registration Number:</strong> RC 9398960</p>
                  <p><strong>Registered Office:</strong> Ogun State, Nigeria</p>
                  <p><strong>Operational Headquarters:</strong> Lagos State, Nigeria (Serving clients nationwide)</p>
                  <p><strong>Supervisory Authority:</strong> Nigeria Data Protection Commission (NDPC)</p>
                  <p><strong>Data Protection Officer (DPO):</strong> <a href="mailto:dpo@trustlineprofessional.com" className="text-trust-blue underline">dpo@trustlineprofessional.com</a></p>
                </div>
              </section>

              {/* Section 2 */}
              <section id="scope" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">2.</span> Scope & Applicability
                </h2>
                <p className="mb-3">
                  This policy applies to all interactions with Trustline Professional Services Ltd, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>Visitors and users of our corporate website (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">trustlineprofessional.com</code>).</li>
                  <li>Clients, founders, and business leaders engaging our HR advisory, talent recruitment, payroll architecture, or People Shield™ compliance diagnostics.</li>
                  <li>Users, human resources managers, and authorized personnel accessing the <strong>Trustline HR Center Portal</strong> (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">[subdomain].trustlineprofessional.com/hr</code>).</li>
                  <li>Job candidates, executives, and specialists submitting curriculum vitae or career profiles for executive search and placement.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section id="legal-basis" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">3.</span> Lawful Bases for Processing (Section 25 NDPA 2023)
                </h2>
                <p className="mb-4">
                  In adherence to Section 25 of the Nigeria Data Protection Act 2023, Trustline processes personal data exclusively under one or more of the following lawful conditions:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Contractual Necessity</p>
                    <p className="text-slate-600">Processing necessary to deliver contracted services, maintain workforce accounts, execute compensation frameworks, and support corporate HR mandates.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Legal & Statutory Obligation</p>
                    <p className="text-slate-600">Processing mandated by Nigerian federal and state laws, including PITA (PAYE), CITA, Pension Reform Act 2014, NHF Act, ECA 2010 (NSITF), and ITF Act.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Express Consent</p>
                    <p className="text-slate-600">Freely given, specific, and informed consent provided when subscribing to insights, submitting diagnostic assessments, or sharing job candidacies.</p>
                  </div>
                  <div className="p-4 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Legitimate Interests</p>
                    <p className="text-slate-600">Safeguarding organizational security, multi-tenant workspace separation, anti-fraud verifications, and platform integrity.</p>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="data-collected" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">4.</span> Categories of Data We Collect
                </h2>
                <div className="space-y-4 text-sm">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-trust-blue mb-2">A. Identity & Contact Information</h3>
                    <p className="text-slate-600">Full name, business title, official email address, mobile telephone/WhatsApp contact, physical office or residential address, emergency contact records.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-trust-blue mb-2">B. Corporate & Multi-Tenant Organization Data</h3>
                    <p className="text-slate-600">Company name, customized workspace subdomain, industry vertical, workforce headcount bracket, corporate tax identification numbers (TIN), state revenue registrations (e.g., LIRS, OGIRS, FCT-IRS).</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-trust-blue mb-2">C. Compensation, Payroll & Statutory Identifiers</h3>
                    <p className="text-slate-600">Gross salary, allowances, statutory pension Retirement Savings Account (RSA) PIN, National Housing Fund (NHF) number, designated tax state of residence, and statutory deduction schedules.</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h3 className="font-semibold text-trust-blue mb-2">D. Professional & Recruitment Profiles</h3>
                    <p className="text-slate-600">Curriculum vitae, academic degrees, professional certifications (e.g., CIPM, ICAN), employment history, references, and candidate interview assessments.</p>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section id="hr-tenancy" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">5.</span> Trustline HR Center: Controller vs. Processor Roles
                </h2>
                <p className="mb-3">
                  Under the <strong>Nigeria Data Protection Act 2023</strong>:
                </p>
                <div className="bg-white rounded-xl p-5 border border-gray-200 space-y-3 text-sm">
                  <p>
                    <strong>When a client company registers an HR Center workspace:</strong> The client organization acts as the <strong>Data Controller</strong> with primary responsibility for obtaining lawful consent and maintaining lawful bases for their employees' records.
                  </p>
                  <p>
                    <strong>Trustline acts as the Data Processor:</strong> We host, process, and execute computational payroll, statutory deduction schedules, and compliance record-keeping solely pursuant to the written agreement and documented instructions of the client organization.
                  </p>
                  <p>
                    <strong>Workspace Subdomain Isolation:</strong> Each company operates within a distinct subdomain and segmented tenant storage. Cross-tenant access is strictly prohibited and cryptographically blocked.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section id="statutory" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">6.</span> Statutory Remittances & Regulatory Disclosures
                </h2>
                <p className="mb-3">
                  We process workforce records to ensure strict adherence to Nigerian statutory remittance bodies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li><strong>State Internal Revenue Services (SIRS / LIRS):</strong> Monthly PAYE remittance and annual Form H1 filings under the Personal Income Tax Act (PITA).</li>
                  <li><strong>Pension Fund Administrators (PFAs & PFCs):</strong> Mandatory 8% employee and 10% employer pension remittances under the Pension Reform Act 2014.</li>
                  <li><strong>Federal Mortgage Bank of Nigeria (FMBN):</strong> 2.5% statutory basic monthly salary contributions under the National Housing Fund (NHF) Act.</li>
                  <li><strong>Nigeria Social Insurance Trust Fund (NSITF):</strong> 1% Employees' Compensation Act (ECA) monthly payroll levy.</li>
                  <li><strong>Industrial Training Fund (ITF):</strong> 1% annual payroll contribution where statutory workforce thresholds apply.</li>
                </ul>
              </section>

              {/* Section 7 */}
              <section id="subject-rights" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">7.</span> Your Statutory Rights as a Data Subject
                </h2>
                <p className="mb-4">
                  Under the Nigeria Data Protection Act 2023 and NDPR, data subjects possess the following enforceable rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Access</p>
                    <p className="text-slate-600">Obtain confirmation and copies of personal data maintained within our systems.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Rectification</p>
                    <p className="text-slate-600">Request prompt correction of inaccurate, incomplete, or misleading records.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Erasure ("To Be Forgotten")</p>
                    <p className="text-slate-600">Request deletion of data, subject to mandatory statutory tax audit retention laws.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Restriction & Objection</p>
                    <p className="text-slate-600">Restrict or object to processing where accuracy is formally disputed.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Data Portability</p>
                    <p className="text-slate-600">Receive personal data in a structured, commonly used, machine-readable format.</p>
                  </div>
                  <div className="p-3.5 bg-white border border-gray-200 rounded-lg">
                    <p className="font-semibold text-trust-blue mb-1">Right to Withdraw Consent</p>
                    <p className="text-slate-600">Withdraw consent at any time without affecting prior lawful processing.</p>
                  </div>
                </div>
              </section>

              {/* Section 8 */}
              <section id="security" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">8.</span> Information Security & 72-Hour Breach Notification
                </h2>
                <p className="mb-3">
                  Trustline implements industry-grade technical, administrative, and physical safeguards to safeguard all workforce, tax, and candidate records:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-sm mb-4">
                  <li>Transport Layer Security (TLS 1.3) encryption for all data in transit across all domains and custom subdomains.</li>
                  <li>AES-256 encryption at rest for database repositories, backups, and confidential tax certificates.</li>
                  <li>Granular Role-Based Access Control (RBAC) ensuring corporate HR admins and staff only view records within authorized permission bounds.</li>
                  <li>Strict tenant row-level security ensuring multi-tenant isolation.</li>
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
                  <p className="font-semibold mb-1 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    Statutory 72-Hour Breach Notification Rule (Section 40 NDPA 2023)
                  </p>
                  <p>
                    In the event of a security incident resulting in the unlawful destruction, loss, alteration, or unauthorized disclosure of personal data likely to result in a risk to individuals, Trustline will notify the <strong>Nigeria Data Protection Commission (NDPC) within 72 hours</strong> of confirmation, and promptly notify affected data subjects without undue delay.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section id="retention" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">9.</span> Data Retention & 6-Year Tax Defense Standard
                </h2>
                <p className="mb-3 text-sm">
                  Under Nigerian statutory regulations (including the Federal Inland Revenue Service Act and Personal Income Tax Act), organizations are mandated to maintain payroll, tax remittance receipts, and employment records for a minimum statutory period of <strong>six (6) years</strong> to defend against retrospective statutory audits and back-duty assessments.
                </p>
                <p className="text-sm">
                  Upon expiration of statutory retention thresholds or lawful contract termination, records are either securely purged or irreversibly anonymized in compliance with NDPC storage limitation rules.
                </p>
              </section>

              {/* Section 10 */}
              <section id="ndpc" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">10.</span> Filing Inquiries & Complaints with the NDPC
                </h2>
                <p className="mb-3 text-sm">
                  If you believe that your personal data has been processed in contravention of the Nigeria Data Protection Act 2023 or NDPR, you have the statutory right to lodge a formal complaint with the supervisory regulator:
                </p>
                <div className="bg-white p-5 rounded-xl border border-gray-200 text-sm space-y-2">
                  <p><strong>Regulatory Body:</strong> Nigeria Data Protection Commission (NDPC)</p>
                  <p><strong>Official Portal:</strong> <a href="https://ndpc.gov.ng" target="_blank" rel="noopener noreferrer" className="text-trust-blue underline inline-flex items-center gap-1">ndpc.gov.ng <ExternalLink className="w-3.5 h-3.5" /></a></p>
                  <p><strong>Complaints Bureau:</strong> <a href="mailto:complaints@ndpc.gov.ng" className="text-trust-blue underline">complaints@ndpc.gov.ng</a></p>
                  <p><strong>Headquarters:</strong> Plot 1284, Port Harcourt Crescent, Off Gimbiya Street, Area 11, Garki, Abuja, FCT, Nigeria</p>
                </div>
              </section>

              {/* Section 11 */}
              <section id="contact" className="scroll-mt-28">
                <h2 className="text-2xl font-display font-bold text-trust-blue mb-4 flex items-center gap-2">
                  <span className="text-brand-gold">11.</span> Contact Our Data Protection Officer (DPO)
                </h2>
                <p className="mb-4 text-sm">
                  For any questions, requests to exercise your statutory data subject rights, or privacy inquiries regarding Trustline Professional Services Ltd or Trustline HR Center:
                </p>
                <div className="bg-trust-blue text-white rounded-xl p-6 space-y-3 text-sm">
                  <p className="font-semibold text-base text-brand-gold">Trustline Data Protection Office</p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <span>Official DPO Mail:</span>
                    <a href="mailto:dpo@trustlineprofessional.com" className="underline hover:text-brand-gold">dpo@trustlineprofessional.com</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-brand-gold" />
                    <span>General Privacy Inquiries:</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-brand-gold">{CONTACT_EMAIL}</a>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-brand-gold" />
                    <span>Telephone / WhatsApp:</span>
                    <span>{PHONE_DISPLAY}</span>
                  </p>
                  <p className="pt-2 text-xs text-white/70">
                    Trustline Professional Services Ltd · RC 9398960 · Lagos & Ogun State, Nigeria
                  </p>
                </div>
              </section>

              {/* Back to Home CTA */}
              <div className="pt-8 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
                <Link href="/" className="text-trust-blue font-semibold hover:text-brand-gold transition-colors">
                  ← Return to Home
                </Link>
                <div className="flex gap-4">
                  <Link href="/terms" className="text-slate-600 hover:text-trust-blue underline">
                    Terms of Engagement
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
