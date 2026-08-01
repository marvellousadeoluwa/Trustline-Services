'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { getWhatsAppUrl } from '@/lib/site';
import { staggerContainer, staggerItem } from '@/lib/animations';

const steps = [
  {
    number: '01',
    title: 'Briefing',
    description: 'Contact us via WhatsApp or email to share your goals and timeline.',
  },
  {
    number: '02',
    title: 'Assessment',
    description: 'We review your income sources, filings, and tax history in detail.',
  },
  {
    number: '03',
    title: 'Agreement',
    description: 'You receive a transparent fee structure—no hidden costs.',
  },
  {
    number: '04',
    title: 'Execution',
    description: 'We file, process, and deliver your documentation with full accountability.',
  },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="sky" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Your Path to Clearance
          </h2>
          <p className="text-trust-blue/90 max-w-2xl mx-auto">
            A simple, transparent four-step process to get compliant
          </p>
        </motion.div>

        <motion.ol
          className="relative flex flex-col gap-0 lg:flex-row lg:items-stretch lg:gap-4"
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div
            className="absolute left-[1.65rem] top-8 bottom-8 w-0.5 bg-gradient-to-b from-brand-gold via-trust-blue/40 to-brand-gold lg:hidden"
            aria-hidden="true"
          />
          <div
            className="absolute top-[3.25rem] left-[12%] right-[12%] hidden h-0.5 bg-gradient-to-r from-brand-gold/30 via-brand-gold to-brand-gold/30 lg:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <motion.li
              key={step.number}
              variants={staggerItem}
              className="relative flex-1 list-none pb-10 last:pb-0 lg:pb-0"
            >
              <article className="group relative h-full rounded-2xl border border-border-grey bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold hover:shadow-lg lg:mx-1">
                <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
                  <div className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-trust-blue to-brand-gold font-display text-lg font-bold text-white shadow-md ring-4 ring-white">
                    {step.number}
                  </div>
                  <div className="space-y-2 pt-1 lg:pt-4">
                    <h3 className="text-lg font-display font-semibold text-trust-blue group-hover:text-brand-gold transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-trust-blue/90">{step.description}</p>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-trust-blue/90 mb-6">Ready to get compliant? Let&apos;s talk.</p>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-trust-blue px-8 py-3 font-semibold text-white shadow-md transition-all duration-300 hover:bg-trust-blue/90 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2"
          >
            Start Your Journey
          </a>
        </motion.div>
      </Container>
    </Section>
  );
}
