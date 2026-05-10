// Centralized Animation Variants & Utilities
// Location: lib/animations.ts

import { Variants } from 'framer-motion';

// ============ BASIC FADE ANIMATIONS ============
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
};

// ============ SCALE ANIMATIONS ============
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const scaleInCenter: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 150 } },
};

// ============ ROTATION ANIMATIONS ============
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -10 },
  visible: { opacity: 1, rotate: 0, transition: { duration: 0.6 } },
};

// ============ STAGGER ANIMATIONS ============
export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// ============ BOUNCE ANIMATIONS ============
export const bounceUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 8,
      mass: 0.5,
    },
  },
};

export const bounce: Variants = {
  hover: {
    y: -5,
    transition: { type: 'spring', stiffness: 300, damping: 10 },
  },
};

// ============ HOVER ANIMATIONS ============
export const hoverScale: Variants = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
};

export const hoverGrow: Variants = {
  hover: { scale: 1.1, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)' },
};

export const hoverLift: Variants = {
  hover: {
    y: -8,
    boxShadow: '0 20px 40px rgba(0, 51, 102, 0.15)',
    transition: { duration: 0.3 },
  },
};

// ============ CARD ANIMATIONS ============
export const cardHover: Variants = {
  rest: { boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)' },
  hover: {
    scale: 1.02,
    boxShadow: '0 20px 40px rgba(0, 51, 102, 0.15)',
    transition: { duration: 0.3 },
  },
};

export const cardTilt: Variants = {
  hover: {
    rotateX: 5,
    rotateY: -5,
    transition: { duration: 0.3 },
  },
};

// ============ BUTTON ANIMATIONS ============
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 },
  },
  tap: { scale: 0.98 },
};

export const buttonPulse: Variants = {
  pulse: {
    scale: [1, 1.05, 1],
    boxShadow: [
      '0 0 0 0 rgba(0, 51, 102, 0.7)',
      '0 0 0 10px rgba(0, 51, 102, 0)',
    ],
    transition: { duration: 2, repeat: Infinity },
  },
};

// ============ SLIDER/PROGRESS ANIMATIONS ============
export const slideInLeft: Variants = {
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export const slideInRight: Variants = {
  hidden: { x: 100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

// ============ LOADING ANIMATIONS ============
export const spin: Variants = {
  animate: {
    rotate: 360,
    transition: { duration: 1, repeat: Infinity, ease: 'linear' },
  },
};

export const pulse: Variants = {
  animate: {
    opacity: [1, 0.5, 1],
    transition: { duration: 2, repeat: Infinity },
  },
};

export const shimmer: Variants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: { duration: 3, repeat: Infinity, ease: 'linear' },
  },
};

// ============ TEXT ANIMATIONS ============
export const textReveal: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Character-by-character animation wrapper
export const charContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.25,
    },
  },
};

export const charVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, type: 'spring', stiffness: 100 },
  },
};

// ============ VIEWPORT ANIMATIONS ============
// Reusable viewport config for whileInView
export const VIEWPORT_ONCE = { once: true, amount: 0.3 };
export const VIEWPORT_ALWAYS = { amount: 0.3 };

// ============ TRANSITION PRESETS ============
export const EASE_OUT = { type: 'easeOut', duration: 0.6 };
export const SPRING = { type: 'spring', stiffness: 100, damping: 10 };
export const SPRING_BOUNCE = { type: 'spring', stiffness: 150, damping: 8 };

// ============ COMBINED ANIMATIONS ============
export const fadeInUpAndScale: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: 'spring', stiffness: 100 },
  },
};

export const cardEntrance: Variants = {
  offscreen: { y: 300, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

// ============ SVG ANIMATIONS ============
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

// ============ BACKGROUND ANIMATIONS ============
export const floatingBackground: Variants = {
  animate: {
    y: [-20, 20, -20],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export const rotatingBackground: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: 'linear',
    },
  },
};

// ============ COMPLEX SEQUENCES ============
export const heroSequence = (delay = 0): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: delay,
    },
  },
});

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
