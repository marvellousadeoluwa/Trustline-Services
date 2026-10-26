import React from 'react';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import {
  UserCheck,
  ShieldCheck,
  Briefcase,
  Search,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  FileCheck2,
  Clock,
  Award,
  Users,
  Building2,
  Phone,
  Mail,
} from 'lucide-react';
import { CONTACT_EMAIL, PHONE_DISPLAY, getWhatsAppUrl } from '@/lib/site';

export const metadata = {
  title: 'Executive Search & Talent Acquisition | Trustline Professional Services Ltd',
  description: 'Specialized recruitment, competence screening, and structured onboarding for Finance, HR, and Operations leaders in Nigeria.',
};

const talentPillars = [
  {
    icon: <Briefcase className="w-6 h-6 text-trust-blue" />,
    title: 'Finance & Accounting Leadership',
    roles: ['Chief Financial Officers (CFOs)', 'Financial Controllers', 'Senior Tax & Regulatory Officers', 'Payroll & Treasury Accountants'],
    desc: 'Professionals equipped to handle Nigerian statutory audits, FIRS/LIRS compliance, cash flow controls, and financial reporting.',
  },
  {
    icon: <Users className="w-6 h-6 text-trust-blue" />,
    title: 'People Operations & HR Directors',
    roles: ['Heads of People & Culture', 'HR Business Partners (HRBPs)', 'Compensation & Benefits Leads', 'Talent Acquisition Managers'],
    desc: 'Practitioners who architect defensible HR policies, enforce labor law compliance, and build high-retention workplace cultures.',
  },
  {
    icon: <Building2 className="w-6 h-6 text-trust-blue" />,
    title: 'Operations & General Management',
    roles: ['Chief Operating Officers (COOs)', 'General Managers', 'Supply Chain & Fleet Directors', 'Branch & Regional Heads'],
    desc: 'High-discipline operators who execute complex multi-location logistics, inventory systems, and team performance governance.',
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
    title: 'Legal, Risk & Governance Officers',
    roles: ['Corporate In-House Counsel', 'Company Secretaries', 'NDPA Data Protection Officers (DPOs)', 'Internal Control Leads'],
    desc: 'Guardians who shield your corporate entity from regulatory exposure, statutory penalties, and contractual risks.',
  },
];

const vettingSteps = [
  {
    step: '01',
    title: 'Mandate & Culture Calibrating',
    desc: 'We define the true performance metrics and compensation realities for the role—not just a generic wish list.',
  },
  {
    step: '02',
    title: 'Technical Case Assessments',
    desc: 'Candidates solve real-world Nigerian tax, payroll, or operational problem scenarios evaluated by seasoned practitioners.',
  },
  {
    step: '03',
    title: 'Forensic Background & Reference Vetting',
    desc: 'We verify academic credentials, professional certifications (ICAN, CIPM, ACCA), and direct confidential supervisor references.',
  },
  {
    step: '04',
    title: 'Structured Onboarding & Day-1 Integration',
    desc: 'We prepare defensible employment contracts, job scorecards, and NDPA 2023 compliance records for day-one readiness.',
  },
];

export default function RecruitmentPage() {
  const whatsappUrl = getWhatsAppUrl("Hello Trustline, I'd like to discuss an Executive Search / Recruitment mandate for my organization.");

  return (
    <div className="bg-[#F9FAFB] min-h-screen text-slate-800">
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-slate-200/60 overflow-hidden bg-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/50 to-transparent blur-2xl" />

        <Container size="xl" className="relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>Executive Search & Talent Acquisition</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-[#0F2942] tracking-[-0.035em] leading-[1.05]">
              Hire Leaders Who Protect and Scale Your Business.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl tracking-[-0.015em]">
              We recruit, vet, and onboard mission-critical Finance, HR, and Operational professionals for growing Nigerian companies. Every shortlist is verified for technical competence, ethical integrity, and statutory literacy.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 bg-trust-blue text-white hover:bg-trust-blue/90 shadow-sm hover:shadow"
              >
                <span>Brief Us on a Role</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Executive%20Search%20Inquiry`}
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-200 border border-slate-300 text-slate-800 bg-white hover:bg-slate-50"
              >
                <span>Email Talent Brief</span>
              </a>
            </div>

            {/* Quick Guarantees */}
            <div className="pt-6 flex flex-wrap gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                14–21 Day Shortlisting Window
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                90-Day Placement Guarantee
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Forensic Background Checks
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Metric Trio */}
      <Section spacing="sm" className="bg-[#F9FAFB] py-14 border-b border-slate-200/60">
        <Container size="xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl border border-slate-200/80 p-7 text-center space-y-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Retention Rate</span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-[#0F2942]">96%</p>
              <p className="text-xs sm:text-sm text-slate-600">Candidate 12-month retention across growth-stage SME placements.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/80 p-7 text-center space-y-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Speed to Shortlist</span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-trust-blue">14 Days</p>
              <p className="text-xs sm:text-sm text-slate-600">Average turnaround from mandate approval to vetted candidate presentation.</p>
            </div>
            <div className="bg-white rounded-xl border border-slate-200/80 p-7 text-center space-y-2 shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Screening Rigor</span>
              <p className="text-4xl lg:text-5xl font-display font-bold text-[#0F2942]">100%</p>
              <p className="text-xs sm:text-sm text-slate-600">Verified credentials, regulatory literacy tests, and past supervisor interviews.</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Practice Areas */}
      <Section spacing="lg" className="bg-white py-20 lg:py-28 border-b border-slate-200/60">
        <Container size="xl">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
              Functional Focus
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
              Roles We Place with Highest Frequency
            </h2>
            <p className="text-base text-slate-600 leading-relaxed tracking-[-0.015em]">
              We specialize in corporate functions where poor hires cause direct financial, regulatory, or governance liabilities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {talentPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-[#F9FAFB] rounded-xl border border-slate-200/80 p-8 space-y-5 transition-all duration-200 hover:bg-white hover:border-slate-300 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F2942] tracking-[-0.02em]">
                    {pillar.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-200/60">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Representative Roles:</p>
                  <ul className="grid sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
                    {pillar.roles.map((r) => (
                      <li key={r} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* The 4-Stage Vetting Protocol */}
      <Section spacing="lg" className="bg-[#F9FAFB] py-20 lg:py-28 border-b border-slate-200/60">
        <Container size="xl">
          <div className="max-w-2xl mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
              Rigor Over Resume Volume
            </div>
            <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
              Our 4-Stage Executive Vetting Protocol
            </h2>
            <p className="text-base text-slate-600 leading-relaxed tracking-[-0.015em]">
              Most recruitment agencies forward unverified CVs. Trustline subjects every candidate to practical scenario stress-tests.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vettingSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between shadow-sm space-y-4"
              >
                <div className="space-y-3">
                  <span className="w-10 h-10 rounded-lg bg-trust-blue text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold text-[#0F2942] tracking-[-0.02em]">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-400">
                  Trustline Vetting Stage
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ & Replacement Guarantee */}
      <Section spacing="lg" className="bg-white py-20 border-b border-slate-200/60">
        <Container size="lg">
          <div className="max-w-3xl mx-auto space-y-10">
            <div className="text-center space-y-3">
              <h2 className="text-3xl font-display font-semibold text-[#0F2942] tracking-[-0.03em]">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-600 text-sm">
                Transparent commercial terms and service expectations.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="font-semibold text-slate-900 text-base">What is your placement replacement guarantee?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We provide a standard <strong>90-day replacement warranty</strong>. In the rare event a placed professional departs or fails probation within 90 days, we conduct a prioritized replacement search at no additional professional fee.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="font-semibold text-slate-900 text-base">How fast can we expect candidate shortlists?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  For mid-to-senior Finance and HR roles, qualified, pre-screened candidate dossiers are typically presented within <strong>14 to 21 business days</strong> of final role mandate sign-off.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <h3 className="font-semibold text-slate-900 text-base">Do you help with contracts and compensation benchmarking?</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Yes. Unlike ordinary recruitment agencies, Trustline is an HR and tax advisory firm. We ensure compensation packages reflect real Nigerian statutory deduction bands (PAYE, pension, NHF) and deliver legally compliant employment contracts.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Call to Action Banner */}
      <section className="bg-[#0F2942] text-white py-16 lg:py-20">
        <Container size="lg">
          <div className="text-center space-y-6 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-semibold tracking-[-0.03em]">
              Ready to Secure Your Next Key Hire?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Schedule a confidential talent consultation with our Human Capital advisory team today.
            </p>

            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-brand-gold text-trust-blue font-bold text-sm hover:bg-brand-gold/90 transition-all shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>Brief Us via WhatsApp</span>
              </a>
              <Link
                href="/hr/auth"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-all"
              >
                <span>Access HR Center Portal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
