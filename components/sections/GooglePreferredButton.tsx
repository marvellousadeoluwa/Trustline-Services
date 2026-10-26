'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Check, Copy, X, Sparkles, Star } from 'lucide-react';
import { GOOGLE_PREFERRED_CONFIG, SITE_NAME } from '@/lib/site';

export default function GooglePreferredButton({
  variant = 'footer',
}: {
  variant?: 'footer' | 'inline' | 'floating';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const queryUrl = GOOGLE_PREFERRED_CONFIG?.searchQueryUrl ||
    'https://www.google.com/search?q=site%3Atrustlineprofessional.com+HR+tax+compliance';
  const siteDomain = GOOGLE_PREFERRED_CONFIG?.siteDomain || 'trustlineprofessional.com';

  const handleCopy = () => {
    navigator.clipboard.writeText(`site:${siteDomain}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleOpenGoogle = () => {
    window.open(queryUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      {/* Trigger Button */}
      {variant === 'footer' ? (
        <button
          onClick={() => setIsOpen(true)}
          className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all text-xs font-medium tracking-wide shadow-sm hover:border-brand-gold/50"
          aria-label="Add Trustline as a Preferred Source on Google"
        >
          {/* Google "G" Icon */}
          <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24">
            <path
              fill="#EA4335"
              d="M12 5c1.56 0 2.97.56 4.08 1.48l3.06-3.06C17.29 1.7 14.81 1 12 1 7.42 1 3.51 3.61 1.63 7.39l3.69 2.87C6.2 7.7 8.87 5 12 5z"
            />
            <path
              fill="#4285F4"
              d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.7 2.87c2.16-1.99 3.72-4.94 3.72-8.69z"
            />
            <path
              fill="#FBBC05"
              d="M5.32 14.74c-.24-.71-.37-1.47-.37-2.24s.13-1.53.37-2.24L1.63 7.39C.59 9.48 0 11.83 0 14.36s.59 4.88 1.63 6.97l3.69-2.87z"
            />
            <path
              fill="#34A853"
              d="M12 23.73c3.24 0 5.95-1.08 7.93-2.91l-3.7-2.87c-1.08.72-2.45 1.16-4.23 1.16-3.13 0-5.8-2.7-6.68-5.26L1.63 21.36C3.51 25.14 7.42 27.75 12 23.73z"
            />
          </svg>
          <span>Make Trustline Preferred on Google</span>
          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-brand-gold/20 text-brand-gold border border-brand-gold/30">
            <Star className="w-2.5 h-2.5 fill-current" />
            Follow
          </span>
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold border border-slate-300 transition-all shadow-sm"
        >
          <Star className="w-3.5 h-3.5 text-brand-gold fill-brand-gold" />
          <span>Follow on Google Search</span>
        </button>
      )}

      {/* Instructional Guide Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 text-slate-900"
            >
              {/* Header */}
              <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50/50 border-b border-slate-200">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path
                          fill="#EA4335"
                          d="M12 5c1.56 0 2.97.56 4.08 1.48l3.06-3.06C17.29 1.7 14.81 1 12 1 7.42 1 3.51 3.61 1.63 7.39l3.69 2.87C6.2 7.7 8.87 5 12 5z"
                        />
                        <path
                          fill="#4285F4"
                          d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58l3.7 2.87c2.16-1.99 3.72-4.94 3.72-8.69z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.32 14.74c-.24-.71-.37-1.47-.37-2.24s.13-1.53.37-2.24L1.63 7.39C.59 9.48 0 11.83 0 14.36s.59 4.88 1.63 6.97l3.69-2.87z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23.73c3.24 0 5.95-1.08 7.93-2.91l-3.7-2.87c-1.08.72-2.45 1.16-4.23 1.16-3.13 0-5.8-2.7-6.68-5.26L1.63 21.36C3.51 25.14 7.42 27.75 12 23.73z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-trust-blue">
                        Make Trustline Preferred on Google
                      </h3>
                      <p className="text-xs text-slate-500">
                        Prioritize Nigerian tax, HR & payroll guidance in your search results
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="p-6 space-y-5 text-sm">
                <p className="text-slate-600 leading-relaxed text-xs sm:text-sm">
                  Google allows you to set preferred publishers and organizations. When you add <strong>Trustline</strong> as a preferred source, Google prioritizes our regulatory updates, PAYE calculators, and statutory compliance insights whenever you search.
                </p>

                {/* Steps */}
                <div className="space-y-3">
                  {/* Step 1 */}
                  <div className="flex gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-trust-blue text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      1
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Open Google Search for Trustline
                      </p>
                      <p className="text-xs text-slate-500">
                        Click the button below to open Google with Trustline's official domain search operator.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="w-6 h-6 rounded-full bg-brand-gold text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      2
                    </span>
                    <div className="space-y-1">
                      <p className="font-semibold text-slate-900 text-xs sm:text-sm">
                        Tap the Three Dots (<span className="font-mono text-slate-700">⋮</span>) & Select "Preferred"
                      </p>
                      <p className="text-xs text-slate-500">
                        Next to any Trustline result, click the menu dots (<span className="font-mono">⋮</span>) → choose <strong>"See more results from this site"</strong> or <strong>"Add to Preferred Sources"</strong>.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Copy Search Operator */}
                <div className="p-3 bg-slate-100 rounded-lg flex items-center justify-between gap-2 text-xs font-mono text-slate-700">
                  <span className="truncate">site:{siteDomain}</span>
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-slate-200 font-sans font-medium text-slate-700 hover:text-trust-blue transition-colors flex-shrink-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-green-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                <span className="text-[11px] text-slate-500 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-brand-gold" />
                  Personalized to your Google account
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-200/60 transition-colors"
                  >
                    Done
                  </button>
                  <button
                    onClick={handleOpenGoogle}
                    className="px-4 py-2 rounded-lg text-xs font-semibold bg-trust-blue text-white hover:bg-trust-blue/90 transition-all flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Open in Google Search</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
