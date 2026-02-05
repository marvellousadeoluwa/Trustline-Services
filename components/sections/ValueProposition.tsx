'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const valueProps = [
  {
    icon: '🛡️',
    title: 'Institutional Grade Governance',
    description: 'We are not a "one-man shop." We operate with structured internal governance, multi-layer reviews, and strict data privacy protocols.',
  },
  {
    icon: '⚖️',
    title: 'The Compliance-First Standard',
    description: 'We strictly do not assist with tax evasion, document falsification, or under-declaration. We align your finances with the letter of the law.',
  },
  {
    icon: '🔄',
    title: 'Continuity & Reliability',
    description: 'Built on systems, not personalities. Your tax history is documented, archived, and secure, ensuring you are never left stranded.',
  },
];

export default function ValueProposition() {
  return (
    <Section id="value-proposition" background="sky" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Compliance Without Compromise
          </h2>
          <p className="text-lg text-trust-blue/80 max-w-3xl mx-auto">
            Most "tax consultants" sell you a way to pay less by hiding the truth. We sell you the peace of mind that comes from doing it right.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="default" className="h-full text-center">
                <div className="space-y-4">
                  <div className="text-4xl mb-4">{prop.icon}</div>
                  <h3 className="text-xl font-display font-semibold text-trust-blue">
                    {prop.title}
                  </h3>
                  <p className="text-trust-blue/80">
                    {prop.description}
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
