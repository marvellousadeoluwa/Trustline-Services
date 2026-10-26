'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Building2,
  Users,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Play,
  Layers,
  FileCheck2,
} from 'lucide-react';
import { HERO_MEDIA_CONFIG } from '@/lib/site';

export default function HeroMedia() {
  const config = HERO_MEDIA_CONFIG || {
    type: 'interactive',
    videoSrc: '/videos/hero-trustline.mp4',
    posterSrc: '/images/hero-poster.png',
    gifSrc: '/images/hero-preview.gif',
    badge: 'Enterprise HR & Tax Architecture',
  };

  const [videoError, setVideoError] = useState(false);
  const [activeTab, setActiveTab] = useState<'compliance' | 'payroll' | 'subdomain'>('compliance');

  // Video Mode
  if (config.type === 'video' && !videoError) {
    return (
      <div className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-900 flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={config.posterSrc}
            onError={() => setVideoError(true)}
            className="w-full h-full object-cover"
          >
            <source src={config.videoSrc} type="video/mp4" />
            <source src={config.videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          </video>
          {/* Subtle brand watermark */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-900/70 backdrop-blur-md text-[11px] font-semibold text-white/90 border border-white/10">
            Trustline Engine
          </div>
        </div>
      </div>
    );
  }

  // GIF Mode
  if (config.type === 'gif') {
    return (
      <div className="relative rounded-2xl border border-slate-200/80 bg-white/95 p-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] overflow-hidden">
        <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center">
          <img
            src={config.gifSrc}
            alt="Trustline HR & Compliance Infrastructure"
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to interactive mode if GIF asset is missing
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      </div>
    );
  }

  // Interactive UI Showcase Mode (Default & High-Trust Brex Style)
  return (
    <div className="relative rounded-2xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-[0_12px_40px_rgba(0,51,102,0.08)]">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-trust-blue flex items-center justify-center text-white shadow-sm">
            <Building2 className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-semibold text-sm text-slate-900">Apex Growth Logistics Ltd</span>
              <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Tenant
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono">apex.trustlineprofessional.com</p>
          </div>
        </div>

        {/* Tab switchers */}
        <div className="hidden sm:flex items-center gap-1 bg-slate-100/80 p-1 rounded-lg text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveTab('compliance')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'compliance'
                ? 'bg-white text-trust-blue shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Compliance
          </button>
          <button
            onClick={() => setActiveTab('payroll')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'payroll'
                ? 'bg-white text-trust-blue shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Payroll Engine
          </button>
          <button
            onClick={() => setActiveTab('subdomain')}
            className={`px-2.5 py-1 rounded-md transition-all ${
              activeTab === 'subdomain'
                ? 'bg-white text-trust-blue shadow-sm font-bold'
                : 'hover:text-slate-900'
            }`}
          >
            Subdomain
          </button>
        </div>
      </div>

      {/* Tab 1: Compliance Health */}
      {activeTab === 'compliance' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">PAYE Standing</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Current</span>
              </div>
              <span className="text-[10px] text-slate-500">LIRS e-Tax filing verified</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">Pension (PRA)</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>8% + 10%</span>
              </div>
              <span className="text-[10px] text-slate-500">PenCom remittance schedule</span>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">NDPA 2023</span>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-1 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-trust-blue" />
                <span>Certified</span>
              </div>
              <span className="text-[10px] text-slate-500">NDPC DPO compliant</span>
            </div>
          </div>

          {/* Diagnostic Bar */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-blue-50/60 via-slate-50 to-amber-50/40 border border-slate-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-trust-blue/10 flex items-center justify-center text-trust-blue font-bold text-sm">
                98%
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-900">Workforce Audit Readiness Score</p>
                <p className="text-[11px] text-slate-500">Zero non-compliance exposure detected across 48 staff records</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-trust-blue flex items-center gap-1">
              Protected <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            </span>
          </div>
        </motion.div>
      )}

      {/* Tab 2: Payroll Engine */}
      {activeTab === 'payroll' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="space-y-3"
        >
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-600">Sample Gross Monthly Emolument:</span>
              <span className="font-mono font-bold text-slate-900">₦650,000.00</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-600">Employee Pension (8% - PRA 2014):</span>
              <span className="font-mono font-semibold text-red-600">-₦52,000.00</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-600">National Housing Fund (NHF 2.5%):</span>
              <span className="font-mono font-semibold text-red-600">-₦9,750.00</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-slate-200/60">
              <span className="text-slate-600">PAYE with CRA Relief (PITA):</span>
              <span className="font-mono font-semibold text-red-600">-₦67,400.00</span>
            </div>
            <div className="flex justify-between items-center pt-2">
              <span className="font-bold text-trust-blue">Defensible Net Pay:</span>
              <span className="font-mono font-bold text-base text-emerald-700">₦520,850.00</span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Tab 3: Subdomain */}
      {activeTab === 'subdomain' && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2.5"
        >
          <p className="font-semibold text-slate-800">Your Organization's Custom Subdomain</p>
          <div className="flex items-center gap-2 p-2.5 bg-white rounded-lg border border-slate-200 font-mono text-slate-700 text-xs">
            <span className="text-trust-blue font-bold">yourcompany</span>
            <span className="text-slate-400">.trustlineprofessional.com/hr</span>
          </div>
          <p className="text-[11px] text-slate-500 leading-relaxed">
            Every registered business receives an isolated multi-tenant subdomain. Primary admins can provision staff profiles, view salary registers, and download tax audit packs.
          </p>
        </motion.div>
      )}

      {/* Subtle Bottom Accent */}
      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Multi-Tenant Isolation Active
        </span>
        <a
          href="/hr/auth"
          className="text-trust-blue font-semibold hover:text-brand-gold transition-colors inline-flex items-center gap-1"
        >
          <span>Open HR Center</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}
