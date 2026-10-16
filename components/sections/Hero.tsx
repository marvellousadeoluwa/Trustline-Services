'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import ComplianceHealthCard from '@/components/sections/ComplianceHealthCard';
import GlassOverlay from '@/components/ui/GlassOverlay';
import {
  staggerContainer,
  heroItem,
  fadeInRight,
} from '@/lib/animations';

const primaryCtaClass =
  'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 bg-trust-blue text-white hover:bg-trust-blue/90 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2 shadow-md hover:shadow-lg';

const secondaryCtaClass =
  'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-trust-blue text-trust-blue bg-white hover:bg-accent-sky focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white to-accent-sky min-h-[90vh] flex items-center overflow-hidden">
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #E6F0FA 0%, #FFFFFF 50%, #E6F0FA 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-brand-gold to-transparent blur-3xl opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-trust-blue to-transparent blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      <Container size="xl" className="relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={heroItem}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="block bg-gradient-to-r from-trust-blue via-brand-gold to-trust-blue bg-clip-text text-transparent">Tax Advisory.</span>
                <span className="block bg-gradient-to-r from-trust-blue via-brand-gold to-trust-blue bg-clip-text text-transparent">HR Architecture.</span>
                <span className="typewriter block border-r-2 border-trust-blue pr-1 bg-gradient-to-r from-trust-blue via-brand-gold to-trust-blue bg-clip-text text-transparent">Talent Acquisition.</span>
              </h1>

              <p className="text-lg md:text-xl text-trust-blue/90 leading-relaxed max-w-lg">
                Nigeria's regulatory and business landscapes are evolving rapidly.
                From tightening tax enforcement to talent retention and workforce
                governance, scaling requires absolute precision.
              </p>
            </motion.div>

              <motion.div
                variants={heroItem}
                className="relative overflow-hidden rounded-xl border border-white/80 p-6 shadow-xl border-l-4 !border-l-brand-gold"
              >
                <GlassOverlay variant="light" withRefraction={true} />
                <p className="text-trust-blue font-semibold text-lg relative z-10 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                  The Trustline Promise:
                </p>
                <p className="text-trust-blue/90 mt-2 relative z-10 leading-relaxed">
                  No shortcuts. No &quot;creative&quot; accounting. No paper-only HR.
                  We build stronger compliance, reduce regulatory exposure and
                  create defensible business records.
                </p>
              </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={heroItem}
            >
              <motion.a
                href="#contact"
                className={primaryCtaClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Book a Consultation
              </motion.a>
              <motion.a
                href="/people-shield"
                className={secondaryCtaClass}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore People Shield™
              </motion.a>
            </motion.div>
          </div>

          <motion.div variants={fadeInRight} className="block">
            <ComplianceHealthCard />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
