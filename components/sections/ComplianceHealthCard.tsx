'use client';

import { motion } from 'framer-motion';

const metrics = [
  { label: 'Tax status', value: 'Cleared', healthy: true },
  { label: 'TCC status', value: 'Valid', healthy: true },
  { label: 'Compliance score', value: '100%', healthy: true },
  { label: 'Next filing', value: 'On track', healthy: true },
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

export default function ComplianceHealthCard() {
  return (
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="relative w-full max-w-md mx-auto lg:mx-0 lg:ml-auto"
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/35 p-6 shadow-2xl backdrop-blur-xl"
        role="region"
        aria-label="Compliance health overview"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-gold/25 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-trust-blue/20 blur-3xl" />

        <div className="relative z-10 space-y-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-trust-blue/70">
                Live overview
              </p>
              <h2 className="text-xl font-display font-bold text-trust-blue">
                Compliance Health
              </h2>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/80 bg-emerald-50/90 px-3 py-1 text-xs font-semibold text-emerald-800">
              <StatusDot active />
              All systems nominal
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
                className="flex items-center justify-between rounded-xl border border-white/50 bg-white/50 px-4 py-3"
              >
                <div className="flex items-center gap-3">
                  <StatusDot active={metric.healthy} />
                  <span className="text-sm font-medium text-trust-blue">{metric.label}</span>
                </div>
                <span className="text-sm font-semibold text-trust-blue">{metric.value}</span>
              </motion.li>
            ))}
          </ul>

          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium text-trust-blue/70">
              <span>Annual readiness</span>
              <span>100%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-trust-blue/15">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-brand-gold to-trust-blue"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
