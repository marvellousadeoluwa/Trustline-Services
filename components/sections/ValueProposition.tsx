'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';

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

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              variants={staggerItem}
            >
              <Card variant="default" className="h-full hover:border-brand-gold relative overflow-hidden group">
                {/* Animated background accent */}
                <motion.div
                  className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-gold/5 opacity-0 blur-3xl group-hover:opacity-100 transition-opacity duration-300"
                />

                <motion.div
                  className="space-y-4 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {/* Icon Container - Animated */}
                  <motion.div
                    className="text-5xl inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent-sky"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {prop.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-semibold text-trust-blue">
                    {prop.title}
                  </h3>

                  {/* Description */}
                  <p className="text-trust-blue/80">
                    {prop.description}
                  </p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
