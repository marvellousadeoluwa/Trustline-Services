'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import HeroMedia from '@/components/sections/HeroMedia';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';
import {
  staggerContainer,
  heroItem,
  fadeInRight,
} from '@/lib/animations';

const primaryCtaClass =
  'inline-flex items-center justify-center px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 bg-trust-blue text-white hover:bg-trust-blue/90 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2 shadow-sm hover:shadow-md';

const secondaryCtaClass =
  'inline-flex items-center justify-center px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 border border-slate-300 text-slate-800 bg-white hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2';

export default function Hero() {
  return (
    <section className="relative bg-[#F9FAFB] pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-slate-200/60">
      {/* Subtle high-taste top radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-50/60 to-transparent blur-2xl" />

      <Container size="xl" className="relative z-10">
        <motion.div
          className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          variants={staggerContainer(0.12, 0.05)}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-7">
            {/* Category / Authority Label */}
            <motion.div variants={heroItem} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-trust-blue text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
              <span>People Infrastructure & Tax Compliance</span>
            </motion.div>

            {/* Main Headline */}
            <motion.div className="space-y-4" variants={heroItem}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-[#0F2942] tracking-[-0.035em] leading-[1.04]">
                <span>Tax Advisory.</span>{' '}
                <span>HR Architecture.</span>{' '}
                <span className="text-trust-blue">Talent Acquisition.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl tracking-[-0.015em]">
                Nigeria&apos;s regulatory and business landscapes are evolving rapidly. From tightening tax enforcement (PITA/CITA) to talent retention and workforce governance, scaling requires absolute precision.
              </p>
            </motion.div>

            {/* Trustline Promise Card */}
            <motion.div
              variants={heroItem}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm space-y-2 border-l-4 !border-l-brand-gold"
            >
              <div className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
                <p className="font-semibold text-sm text-[#0F2942]">The Trustline Promise</p>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                No shortcuts. No &quot;creative&quot; accounting. No paper-only HR. We build defensible payroll frameworks, eliminate regulatory exposure, and bulletproof your company against retrospective audits.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 pt-2"
              variants={heroItem}
            >
              <motion.a
                href="#contact"
                className={primaryCtaClass}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </motion.a>
              <motion.a
                href="/people-shield"
                className={secondaryCtaClass}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                Explore People Shield™
              </motion.a>
              <motion.a
                href="/hr/auth"
                className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold text-trust-blue hover:text-brand-gold transition-colors gap-1.5"
              >
                <span>HR Center Portal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>
          </div>

          {/* Right Column: Hero Media (Video / GIF / Interactive UI Terminal) */}
          <motion.div variants={fadeInRight} className="lg:col-span-5">
            <HeroMedia />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
