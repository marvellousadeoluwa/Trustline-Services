'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { ArrowRight, ShieldCheck, FileSpreadsheet, Award, UserCheck, Layers, Landmark } from 'lucide-react';

const services = [
  {
    number: '01',
    icon: <ShieldCheck className="w-5 h-5 text-trust-blue" />,
    title: 'HR & Compliance Diagnostics',
    description:
      'A structured audit of payroll, remittances, contracts, policies and pay structure—delivered as a scored report with a prioritised remediation plan.',
    anchorId: 'diagnostics',
    href: '/#contact',
  },
  {
    number: '02',
    icon: <Layers className="w-5 h-5 text-trust-blue" />,
    title: 'HR Architecture & Design',
    description:
      'Grade structures, pay bands, employment contracts, handbooks and policy frameworks engineered to fit your culture and survive regulatory audits.',
    anchorId: 'hr-architecture',
    href: '/#contact',
  },
  {
    number: '03',
    icon: <Award className="w-5 h-5 text-trust-blue" />,
    title: 'Compensation & Reward Advisory',
    description:
      'Nigerian market compensation benchmarking, salary structuring and pay-band optimisation to retain mission-critical talent.',
    anchorId: 'compensation-reward-advisory',
    href: '/#contact',
  },
  {
    number: '04',
    icon: <UserCheck className="w-5 h-5 text-trust-blue" />,
    title: 'Executive Search & Talent Acquisition',
    description:
      'End-to-end recruitment, background vetting and structured onboarding of finance, HR, executive and operational professionals.',
    anchorId: 'recruitment',
    href: '/recruitment',
  },
  {
    number: '05',
    icon: <ShieldCheck className="w-5 h-5 text-brand-gold" />,
    title: 'People Shield™ Continuous Protection',
    description:
      'Continuous workforce compliance monitoring, risk flagging, statutory regulatory updates, and quarterly board-ready audit reporting.',
    anchorId: 'people-shield',
    href: '/people-shield',
  },
  {
    number: '06',
    icon: <Landmark className="w-5 h-5 text-trust-blue" />,
    title: 'Payroll & Tax Compliance',
    description:
      'PAYE (PITA), Pension Reform Act 2014, NHF, NSITF, ITF and tax advisory—computed correctly, remitted on time, and fully defensible.',
    anchorId: 'payroll-tax-compliance',
    href: '/#contact',
  },
];

export default function ServicePillars() {
  return (
    <Section id="practice-areas" background="white" spacing="lg" className="bg-[#F9FAFB] py-20 lg:py-28 border-b border-slate-200/60">
      <Container size="xl">
        {/* Section Header */}
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
            Practice Areas
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
            Specialized Practice Areas Built for Scrutiny
          </h2>
          <p className="text-base text-slate-600 leading-relaxed tracking-[-0.015em]">
            From diagnostic audits to continuous monitoring and executive talent acquisition, our infrastructure shields your organization from risk.
          </p>
        </div>

        {/* Modular Feature Cards Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={staggerItem}
              className="h-full"
            >
              <div
                id={service.anchorId}
                className="group h-full bg-white rounded-xl border border-slate-200/80 p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5"
              >
                <div className="space-y-4">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center font-mono font-bold text-xs text-slate-600 group-hover:bg-blue-50 group-hover:text-trust-blue transition-colors">
                      {service.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center border border-slate-200/60">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#0F2942] group-hover:text-trust-blue transition-colors tracking-[-0.02em]">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[-0.01em]">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Brex-style Link Arrow */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={service.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 group-hover:text-trust-blue transition-colors"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[11px] font-mono text-slate-400">
                    Trustline Architecture
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
