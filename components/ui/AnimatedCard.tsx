// Reusable Animated Components
// Location: components/ui/AnimatedCard.tsx

'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import {
  fadeInUp,
  cardHover,
  staggerItem,
  VIEWPORT_ONCE,
} from '@/lib/animations';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: 'default' | 'scale' | 'slide' | 'hover';
  hoverEffect?: boolean;
  hoverable?: boolean;
}

/**
 * Reusable animated card component with built-in animations
 */
export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
  variant = 'default',
  hoverEffect = true,
  hoverable = true,
}: AnimatedCardProps) {
  const getVariants = (): Variants => {
    switch (variant) {
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.9 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay },
          },
        };
      case 'slide':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, delay },
          },
        };
      default:
        return {
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay },
          },
        };
    }
  };

  return (
    <motion.div
      variants={getVariants()}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT_ONCE}
      whileHover={hoverEffect && hoverable ? { scale: 1.02 } : undefined}
      transition={{ type: 'spring', stiffness: 100 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
