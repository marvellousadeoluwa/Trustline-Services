'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import {
  staggerContainer,
  staggerItem,
  scaleInCenter,
} from '@/lib/animations';

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
          <p className="text-trust-blue/80 max-w-2xl mx-auto">
            A simple, transparent 4-step process to get compliant
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* SVG Animated Connector Lines - Desktop */}
          <svg
            className="hidden lg:block absolute top-1/2 left-0 right-0 w-full h-1.5 -translate-y-1/2 opacity-50 pointer-events-none z-0"
            style={{ height: '4px' }}
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="connectorGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C89A2B" stopOpacity="0" />
                <stop offset="50%" stopColor="#C89A2B" stopOpacity="1" />
                <stop offset="100%" stopColor="#C89A2B" stopOpacity="0" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {steps.map((_, index) => {
              const x1 = `${index * 33.33 + 12.5}%`;
              const x2 = `${(index + 1) * 33.33 + 12.5}%`;
              return index < steps.length - 1 ? (
                <motion.line
                  key={`svg-connector-${index}`}
                  x1={x1}
                  y1="50%"
                  x2={x2}
                  y2="50%"
                  stroke="url(#connectorGradient)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  filter="url(#glow)"
                  initial={{ strokeDasharray: '100%', strokeDashoffset: '100%' }}
                  whileInView={{
                    strokeDasharray: '100%',
                    strokeDashoffset: 0,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: 'easeInOut',
                  }}
                  viewport={{ once: true }}
                />
              ) : null;
            })}
          </svg>

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              className="relative"
              variants={staggerItem}
            >
              <Card
                variant="default"
                className="relative z-10 text-center h-full hover:border-brand-gold group"
              >
                <motion.div
                  className="space-y-4"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {/* Icon - Floating Animation */}
                  <motion.div
                    className="text-5xl flex justify-center"
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 3 + index * 0.3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    whileHover={{
                      scale: 1.3,
                      rotate: 12,
                      y: -15,
                    }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Number - Animated Circle with Glow */}
                  <motion.div
                    className="relative w-14 h-14 mx-auto"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 150,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {/* Glow Background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-brand-gold to-trust-blue rounded-full opacity-50 blur-sm"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    {/* Number Circle */}
                    <div className="relative w-full h-full bg-gradient-to-br from-trust-blue to-brand-gold text-white rounded-full flex items-center justify-center font-display font-bold text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className="text-lg font-display font-semibold text-trust-blue transition-colors"
                    animate={{
                      color: ['#003366', '#C89A2B', '#003366'],
                    }}
                    transition={{
                      duration: 4 + index * 0.5,
                      repeat: Infinity,
                      repeatType: 'mirror',
                    }}
                  >
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <p className="text-trust-blue/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </Card>

              {/* Vertical Connector for Mobile/Tablet */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block lg:hidden absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-brand-gold to-transparent -translate-x-1/2 z-0"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-trust-blue/80 mb-6">
            Ready to get compliant? Let's talk.
          </p>
          <motion.a
            href="https://wa.me/2347066868867"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(200, 154, 43, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-gradient-to-r from-brand-gold to-trust-blue text-white font-semibold rounded-lg transition-shadow duration-300 relative overflow-hidden"
          >
            {/* Animated text */}
            <motion.span
              animate={{
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Start Your Journey →
            </motion.span>
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}
