'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const services = [
  {
    number: '01',
    title: 'Personal Income Tax & TCC',
    description: 'End-to-end handling of annual returns, proper income disclosure, and procurement of valid Tax Clearance Certificates (TCC) for travel or business needs.',
  },
  {
    number: '02',
    title: 'SME & Corporate Tax Support',
    description: 'Comprehensive support including PAYE setup, VAT filing, Withholding Tax (WHT) management, and monthly compliance checks.',
  },
  {
    number: '03',
    title: 'Historical Remediation (Back-Taxes)',
    description: 'Have you missed previous years? We review outstanding liabilities and negotiate proper regularization with tax authorities to clear your slate.',
  },
  {
    number: '04',
    title: 'Strategic Advisory',
    description: 'Clear, jargon-free guidance on what the Nigerian law requires of you today, and how to prepare for tomorrow.',
  },
];

export default function ServicePillars() {
  return (
    <Section id="practice-areas" background="white" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Our Core Practice Areas
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="default" className="h-full">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-trust-blue text-white rounded-lg flex items-center justify-center font-display font-bold text-xl">
                      {service.number}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-display font-semibold text-trust-blue">
                      {service.title}
                    </h3>
                    <p className="text-trust-blue/80">
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
