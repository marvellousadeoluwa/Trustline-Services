'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';

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

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {clientProfiles.map((profile) => (
            <motion.div
              key={profile.title}
              variants={staggerItem}
            >
              <Card variant={profile.variant} className="h-full">
                <motion.div 
                  className="space-y-4"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  <h3 className="text-xl font-display font-semibold hover:text-brand-gold transition-colors">
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
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
