'use client';

import { motion } from 'framer-motion';

const metrics = [
  { label: 'PAYE remittance', value: 'Current', healthy: true },
  { label: 'Pension & NHF', value: 'Remitted', healthy: true },
  { label: 'Contracts on file', value: '100%', healthy: true },
  { label: 'Next statutory filing', value: 'On track', healthy: true },
];

function StatusDot({ active }: { active: boolean }) {
  return (
    <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
      {active && (
        <motion.span
          className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
          animate={{ scale: [1, 1.8, 1], opacity: [0.75, 0, 0.75] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
      <span
        className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
          active ? 'bg-emerald-500' : 'bg-slate-400'
        }`}
      />
    </span>
  );
}

import GlassOverlay from '@/components/ui/GlassOverlay';

export default function ComplianceHealthCard() {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
    >
      <div
        className="relative overflow-hidden rounded-3xl border border-white/80 p-7 shadow-[0_20px_50px_rgba(0,51,102,0.18)]"
        role="region"
        aria-label="Compliance health overview"
      >
        {/* Physical Refractive Glass Layer (SVG feTurbulence + feDisplacementMap) */}
        <GlassOverlay variant="light" withRefraction={true} />

        {/* Dynamic ambient background glow orbs behind glass */}
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-gold/30 blur-3xl animate-pulse" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-trust-blue/25 blur-3xl" />

        <div className="relative z-10 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                What People Shield™ clients see
              </p>
              <h2 className="text-xl font-display font-bold text-trust-blue">
                Workforce Compliance Health
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/80 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-md">
              <StatusDot active={true} />
              Product preview
            </span>
          </div>

          <ul className="space-y-3">
            {metrics.map((metric, index) => (
              <motion.li
                key={metric.label}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden flex items-center justify-between rounded-xl border border-white/70 bg-white/50 px-4 py-3 shadow-[0_4px_16px_rgba(0,51,102,0.04)] backdrop-blur-md transition-all duration-300 hover:border-brand-gold/50 hover:bg-white/60"
              >
                {/* Micro frosted glass light sheen */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/50 via-white/10 to-transparent" />
                
                <div className="relative z-10 flex items-center gap-3">
                  <StatusDot active={metric.healthy} />
                  <span className="text-sm font-medium text-trust-blue">{metric.label}</span>
                </div>
                <span className="relative z-10 text-sm font-semibold text-trust-blue">{metric.value}</span>
              </motion.li>
            ))}
          </ul>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-trust-blue/70">
              <span>Quarterly board-ready reporting</span>
              <span className="font-semibold text-trust-blue">Included</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
