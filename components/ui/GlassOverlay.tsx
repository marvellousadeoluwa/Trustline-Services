'use client';

import React from 'react';

interface GlassOverlayProps {
  className?: string;
  variant?: 'light' | 'navy' | 'sky' | 'gold' | 'frosted';
  withRefraction?: boolean;
}

/**
 * Reusable Glass Overlay providing authentic physical glass aesthetics:
 * - SVG feTurbulence & feDisplacementMap light refraction
 * - Specular diagonal light highlight
 * - Frosted noise micro-grain
 * - Outer rim border and subtle ambient shadow
 */
export default function GlassOverlay({
  className = '',
  variant = 'light',
  withRefraction = true,
}: GlassOverlayProps) {
  const variantStyles = {
    light:
      'bg-white/45 border-white/70 shadow-[0_12px_36px_0_rgba(0,51,102,0.08)]',
    navy:
      'bg-[#003366]/80 border-white/25 shadow-[0_16px_40px_0_rgba(0,34,68,0.3)]',
    sky:
      'bg-[#E6F0FA]/65 border-white/80 shadow-[0_10px_30px_0_rgba(0,51,102,0.06)]',
    gold:
      'bg-[#C89A2B]/15 border-[#C89A2B]/40 shadow-[0_10px_30px_0_rgba(200,154,43,0.12)]',
    frosted:
      'bg-white/60 border-white/80 shadow-[0_12px_32px_0_rgba(0,51,102,0.06)]',
  };

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 rounded-[inherit] overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {/* 1. Underlying SVG Refraction Layer (feTurbulence + feDisplacementMap) */}
      {withRefraction && (
        <div
          className="absolute -inset-2 backdrop-blur-xl opacity-90"
          style={{
            filter: 'url(#glass-distortion)',
          }}
        />
      )}

      {/* 2. Glass Base Tint & Rim Border */}
      <div
        className={`absolute inset-0 border backdrop-blur-md transition-colors duration-300 ${variantStyles[variant]}`}
      />

      {/* 3. Specular Light Sheen Reflection */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/45 via-white/10 to-transparent opacity-80" />

      {/* 4. Fine Frosted Micro-Grain Texture */}
      <div
        className="absolute inset-0 opacity-15 mix-blend-overlay"
        style={{ filter: 'url(#glass-frosted)' }}
      />
    </div>
  );
}
