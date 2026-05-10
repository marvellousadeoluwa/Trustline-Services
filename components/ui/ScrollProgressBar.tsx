// Scroll Progress Bar Component
// Location: components/ui/ScrollProgressBar.tsx

'use client';

import { useScroll } from 'framer-motion';
import { motion } from 'framer-motion';

/**
 * Animated progress bar that shows page scroll position
 * Displays at the top of the page
 */
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-trust-blue via-brand-gold to-trust-blue origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
