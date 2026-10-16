'use client';

import React from 'react';

const marqueeText =
  'We build the financial, HR, and talent infrastructure that protects your company, recruits top-tier professionals, and guarantees compliance.';

export default function HeroMarquee() {
  const items = Array(4).fill(marqueeText);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-trust-blue via-[#002855] to-trust-blue py-3.5 sm:py-4 border-y border-brand-gold/40 shadow-sm"
      aria-label="Trustline core mission announcement"
    >
      {/* Subtle fade edges for sleek visual continuity */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r from-trust-blue to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l from-trust-blue to-transparent z-10" />

      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center gap-8 pr-8">
          {items.map((text, i) => (
            <div key={`track-1-${i}`} className="flex items-center gap-8">
              <span className="text-sm sm:text-base md:text-lg font-medium text-white/95 tracking-wide font-sans">
                {text}
              </span>
              <span className="text-brand-gold text-base sm:text-lg select-none" aria-hidden="true">
                ✦
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 for seamless infinite loop */}
        <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden="true">
          {items.map((text, i) => (
            <div key={`track-2-${i}`} className="flex items-center gap-8">
              <span className="text-sm sm:text-base md:text-lg font-medium text-white/95 tracking-wide font-sans">
                {text}
              </span>
              <span className="text-brand-gold text-base sm:text-lg select-none">
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
