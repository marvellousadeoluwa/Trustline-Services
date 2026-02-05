'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

const clientProfiles = [
  {
    title: 'Private Professionals',
    description: 'Executives, Ex-pats, & High-Net-Worth Individuals.',
    focus: 'Direct Assessment, TCC Processing, & Asset Disclosure.',
    variant: 'sky' as const,
  },
  {
    title: 'The Modern Workforce',
    description: 'Freelancers, Consultants, & Remote Workers.',
    focus: 'Income Declaration & regularization of foreign earnings.',
    variant: 'bordered' as const,
  },
  {
    title: 'Growth-Stage SMEs',
    description: 'Business owners scaling up.',
    focus: 'PAYE, VAT, & Corporate Income Tax (CIT) Structure.',
    variant: 'navy' as const,
  },
  {
    title: 'Impact Organizations',
    description: 'NGOs & Micro-enterprises.',
    focus: 'Governance setup & regulatory reporting.',
    variant: 'sky' as const,
  },
];

export default function WhoWeServe() {
  return (
    <Section id="who-we-serve" background="white" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Built for Those Who Value Longevity
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {clientProfiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant={profile.variant} className="h-full">
                <div className="space-y-4">
                  <h3 className="text-xl font-display font-semibold">
                    {profile.title}
                  </h3>
                  <div className="space-y-2">
                    <p className="font-medium">
                      <span className="text-trust-blue/80">Who You Are:</span>
                      <br />
                      {profile.description}
                    </p>
                    <p>
                      <span className="text-trust-blue/80 font-medium">Our Focus:</span>
                      <br />
                      {profile.focus}
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
