'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import GlassOverlay from '@/components/ui/GlassOverlay';
import { staggerContainer, staggerItem } from '@/lib/animations';

const services = [
  {
    number: '01',
    title: 'HR & Compliance Diagnostics',
    description:
      'A structured audit of payroll, remittances, contracts, policies and pay structure—delivered as a scored report with a prioritised remediation plan.',
    anchorId: 'diagnostics',
  },
  {
    number: '02',
    title: 'HR Architecture & Design',
    description: 'Grade structures, pay bands, employment contracts, handbooks and policy frameworks engineered to fit your culture.',
    anchorId: 'hr-architecture',
  },
  {
    number: '03',
    title: 'Compensation & Reward Advisory',
    description: 'Market benchmarking, salary structuring and pay-band optimisation to retain your best people.',
    anchorId: 'compensation-reward-advisory',
  },
  {
    number: '04',
    title: 'Executive Search & Talent Acquisition',
    description: 'End-to-end recruitment, vetting and onboarding of finance, HR and managerial professionals.',
    anchorId: 'recruitment',
  },
  {
    number: '05',
    title: 'People Shield™',
    description: 'Continuous compliance monitoring, risk flagging and quarterly board-ready reporting.',
    anchorId: 'people-shield',
  },
  {
    number: '06',
    title: 'Payroll & Tax Compliance',
    description: 'PAYE, Pension, NHF, NSITF, ITF and tax advisory—computed correctly, remitted on time and provable.',
    anchorId: 'payroll-tax-compliance',
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
      id={service.anchorId}
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
        <div className="h-full rounded-2xl border border-white/80 p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:border-brand-gold">
          <GlassOverlay variant="light" withRefraction={true} />
          {/* Animated left border accent */}
          <motion.div
            className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-brand-gold to-trust-blue"
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
        </div>
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
            How We Work: Diagnose. Build. Protect.
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
