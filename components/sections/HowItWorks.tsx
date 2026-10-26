'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { getWhatsAppUrl } from '@/lib/site';
import { staggerContainer, staggerItem } from '@/lib/animations';
import { ArrowRight, Phone } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Initial Briefing',
    description: 'Reach us via WhatsApp or email. Detail your current corporate goals, workforce headcount, and urgency timeline.',
  },
  {
    number: '02',
    title: 'Diagnostic Audit',
    description: 'We evaluate existing payroll schedules, PITA PAYE remittances, contracts, and policy handbooks to expose latent liabilities.',
  },
  {
    number: '03',
    title: 'Clear Commercial Scope',
    description: 'Receive a transparent statement of work and fixed fee structure—no hidden costs, no surprise retrospective charges.',
  },
  {
    number: '04',
    title: 'Execution & Archival',
    description: 'We construct, remediate, and file defensible records—stored securely in your HR Center workspace for 6-year audit defense.',
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="white" spacing="lg" className="bg-white py-20 lg:py-28 border-b border-slate-200/60">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-2xl mx-auto mb-16 space-y-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
            Structured Workflow
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
            How Client Engagements Work
          </h2>
          <p className="text-base text-slate-600 leading-relaxed tracking-[-0.015em]">
            A disciplined, four-stage engagement cycle from initial brief to board-ready archival.
          </p>
        </motion.div>

        <motion.ol
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerContainer(0.08, 0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={staggerItem}
              className="list-none h-full"
            >
              <article className="h-full rounded-xl border border-slate-200/80 bg-slate-50/40 p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:-translate-y-0.5">
                <div className="space-y-4">
                  {/* Step Number Badge */}
                  <div className="w-10 h-10 rounded-lg bg-trust-blue text-white flex items-center justify-center font-mono font-bold text-sm shadow-sm">
                    {step.number}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#0F2942] tracking-[-0.02em]">
                      {step.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed tracking-[-0.01em]">
                      {step.description}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/50 text-[11px] font-mono text-slate-400">
                  Stage {step.number} of 04
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ol>

        {/* CTA Bar */}
        <motion.div
          className="text-center mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-trust-blue text-white font-semibold text-sm hover:bg-trust-blue/90 shadow-sm transition-all duration-200 hover:shadow"
          >
            <Phone className="w-4 h-4" />
            <span>Schedule Initial Briefing via WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
