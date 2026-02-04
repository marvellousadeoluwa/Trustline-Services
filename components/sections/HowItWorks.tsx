'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const steps = [
  {
    step: 1,
    title: 'Briefing',
    description: 'Contact us via WhatsApp or Email.',
    icon: '📞',
  },
  {
    step: 2,
    title: 'Assessment',
    description: 'We review your income sources and tax history.',
    icon: '📋',
  },
  {
    step: 3,
    title: 'Agreement',
    description: 'A clear fee structure is agreed upon (no hidden costs).',
    icon: '🤝',
  },
  {
    step: 4,
    title: 'Execution',
    description: 'We file, process, and deliver your documentation.',
    icon: '✅',
  },
];

export default function HowItWorks() {
  return (
    <Section background="sky" spacing="lg">
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
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-border-grey -translate-y-1/2 z-0" />
              )}
              <Card variant="default" className="relative z-10 text-center h-full">
                <div className="space-y-4">
                  <div className="text-5xl mb-4">{step.icon}</div>
                  <div className="w-12 h-12 bg-trust-blue text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-display font-semibold text-trust-blue">
                    {step.title}
                  </h3>
                  <p className="text-trust-blue/80 text-sm">
                    {step.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
