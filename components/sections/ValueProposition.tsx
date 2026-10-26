'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { Shield, Scale, RefreshCw } from 'lucide-react';

const valueProps = [
  {
    icon: <Shield className="w-6 h-6 text-trust-blue" />,
    title: 'Institutional Grade Governance',
    description:
      'We are not a "one-man shop." We operate with structured internal governance, multi-layer technical reviews, and strict NDPA 2023 data protection protocols.',
  },
  {
    icon: <Scale className="w-6 h-6 text-brand-gold" />,
    title: 'The Compliance-First Standard',
    description:
      'We strictly do not assist with tax evasion, document falsification, or under-declaration. We align your workforce and finances with the letter of Nigerian statutory law.',
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-trust-blue" />,
    title: 'Continuity & 6-Year Defensibility',
    description:
      'Built on institutional systems, not personalities. Your payroll computations and tax records are electronically archived and audit-ready for a minimum of 6 years.',
  },
];

export default function ValueProposition() {
  return (
    <Section id="value-proposition" background="white" spacing="lg" className="bg-white py-20 lg:py-28 border-b border-slate-200/60">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
            Our Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
            Compliance Without Compromise
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed tracking-[-0.015em]">
            Most &quot;tax consultants&quot; sell you a way to pay less by hiding the truth. We build the peace of mind that comes from structured, legally defensible operations.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop) => (
            <motion.div
              key={prop.title}
              variants={staggerItem}
              className="h-full"
            >
              <div className="h-full rounded-xl border border-slate-200/80 bg-slate-50/50 p-8 flex flex-col justify-between transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center shadow-sm">
                    {prop.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#0F2942] tracking-[-0.02em]">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed tracking-[-0.01em]">
                    {prop.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-200/60 flex items-center text-xs font-semibold text-trust-blue">
                  <span>Trustline Governance Guarantee</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
