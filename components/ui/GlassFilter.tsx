'use client';

import React from 'react';

/**
 * Universal SVG Glass Filter definitions for realistic refractive glass,
 * frosted texture, and optical displacement maps.
 */
export default function GlassFilter() {
  return (
    <svg
      className="pointer-events-none fixed -top-[9999px] -left-[9999px] w-0 h-0 opacity-0 select-none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* 1. Organic Refractive Liquid Glass Filter */}
        <filter id="glass-distortion" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.035 0.035"
            numOctaves="3"
            seed="5"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="14"
            xChannelSelector="R"
            yChannelSelector="G"
            result="displaced"
          />
          <feGaussianBlur in="displaced" stdDeviation="0.4" result="blurred" />
          <feBlend in="SourceGraphic" in2="blurred" mode="normal" />
        </filter>

        {/* 2. Fine Frosted Glass Texture */}
        <filter id="glass-frosted" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.085 0.085"
            numOctaves="2"
            seed="12"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="B"
            result="displaced"
          />
        </filter>

        {/* 3. Subtle Optical Edge Refraction */}
        <filter id="glass-subtle" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02 0.025"
            numOctaves="2"
            seed="8"
            result="turbulence"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="turbulence"
            scale="8"
            xChannelSelector="G"
            yChannelSelector="B"
          />
        </filter>
      </defs>
    </svg>
  );
}
