'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import { staggerContainer, staggerItem } from '@/lib/animations';

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

const ServiceCard = ({ service }: { service: typeof services[0] }) => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovering) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const x = (e.clientY - rect.top - centerY) / 10;
    const y = (centerX - (e.clientX - rect.left)) / 10;

    setRotation({ x, y });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovering(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1000px',
      }}
      className="h-full"
    >
      <motion.div
        style={{
          transformStyle: 'preserve-3d' as any,
        }}
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
        className="h-full"
      >
        <Card variant="default" className="h-full relative overflow-hidden group transition-all duration-300 hover:shadow-xl hover:border-brand-gold">
          {/* Animated left border accent */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-gold to-trust-blue"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          />

          {/* Shimmer overlay for 3D effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
            animate={{
              opacity: isHovering ? 0.1 : 0,
              x: isHovering ? ['100%', '-100%'] : '100%',
            }}
            transition={{
              duration: 2,
              repeat: isHovering ? Infinity : 0,
            }}
            style={{ pointerEvents: 'none' }}
          />

          <div className="flex gap-6 relative z-10">
            <div className="flex-shrink-0">
              <motion.div
                className="w-16 h-16 bg-gradient-to-br from-trust-blue to-brand-gold text-white rounded-lg flex items-center justify-center font-display font-bold text-xl shadow-lg"
                animate={{
                  scale: isHovering ? 1.15 : 1,
                  rotate: isHovering ? 360 : 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  duration: 0.8,
                }}
                style={{
                  transformStyle: 'preserve-3d' as any,
                }}
              >
                {service.number}
              </motion.div>
            </div>
            <div className="flex-1 space-y-3">
              <motion.h3
                className="text-xl font-display font-semibold text-trust-blue transition-colors"
                animate={{
                  color: isHovering ? '#C89A2B' : '#003366',
                }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="text-trust-blue/80 text-sm leading-relaxed"
                animate={{
                  opacity: isHovering ? 1 : 0.9,
                  x: isHovering ? 4 : 0,
                }}
              >
                {service.description}
              </motion.p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
};

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

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <ServiceCard key={service.number} service={service} />
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
