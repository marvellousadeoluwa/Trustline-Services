'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import { staggerContainer, staggerItem } from '@/lib/animations';

const clientProfiles = [
  {
    title: 'Growth-Stage SMEs',
    description: 'Business owners scaling up.',
    focus: 'HR architecture, PAYE and statutory compliance, Company Income Tax (CIT) structure, and pay structures.',
    variant: 'navy' as const,
    icon: '📈',
  },
  {
    title: 'Impact Organizations',
    description: 'NGOs & Micro-enterprises.',
    focus: 'Governance setup & regulatory reporting.',
    variant: 'sky' as const,
    icon: '🌍',
  },
  {
    title: 'Executives & Private Professionals',
    description: 'Executives, expatriates, and high-net-worth individuals.',
    focus: 'Personal income tax, direct assessment, and TCC processing.',
    variant: 'bordered' as const,
    icon: '🏛️',
  },
  {
    title: 'The Modern Workforce',
    description: 'Freelancers, consultants, and remote workers.',
    focus: 'Income declaration, foreign-earnings regularization, and clean tax standing.',
    variant: 'sky' as const,
    icon: '💼',
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
              <div
                className={`h-full rounded-2xl p-7 relative overflow-hidden group/card transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border ${
                  profile.variant === 'navy'
                    ? 'bg-[#003366] border-white/20 shadow-[0_8px_32px_rgba(0,34,68,0.25)]'
                    : profile.variant === 'sky'
                    ? 'bg-[#E6F0FA] border-trust-blue/15 shadow-[0_4px_20px_rgba(0,51,102,0.08)]'
                    : 'bg-white border-gray-200 shadow-[0_4px_20px_rgba(0,51,102,0.06)]'
                }`}
              >
                {/* Glass light sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-white/5 to-transparent rounded-[inherit]" />
                {/* Gold top accent */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
                {/* Bottom corner shimmer */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-30 ${profile.variant === 'navy' ? 'bg-brand-gold/30' : 'bg-trust-blue/20'}`} />

                <div className="space-y-4 relative z-10">
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{profile.icon}</span>
                    <h3
                      className={`text-xl font-display font-semibold transition-colors duration-300 ${
                        profile.variant === 'navy'
                          ? 'text-white group-hover/card:text-brand-gold'
                          : 'text-trust-blue group-hover/card:text-brand-gold'
                      }`}
                    >
                      {profile.title}
                    </h3>
                  </div>
                  <div className="space-y-2 ml-1">
                    <p className="font-medium">
                      <span className={`text-xs uppercase tracking-wider font-semibold ${profile.variant === 'navy' ? 'text-brand-gold/80' : 'text-trust-blue/60'}`}>
                        Who You Are
                      </span>
                      <br />
                      <span className={`text-base ${profile.variant === 'navy' ? 'text-white/95' : 'text-trust-blue'}`}>
                        {profile.description}
                      </span>
                    </p>
                    <p className="pt-1">
                      <span className={`text-xs uppercase tracking-wider font-semibold ${profile.variant === 'navy' ? 'text-brand-gold/80' : 'text-trust-blue/60'}`}>
                        Our Focus
                      </span>
                      <br />
                      <span className={`text-base ${profile.variant === 'navy' ? 'text-white/90' : 'text-trust-blue/90'}`}>
                        {profile.focus}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
