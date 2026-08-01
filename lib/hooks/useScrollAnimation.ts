// Custom Animation Hooks
// Location: lib/hooks/useScrollAnimation.ts

'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

/**
 * Hook to detect when element comes into view
 * Useful for triggering animations on scroll
 */
export const useScrollAnimation = () => {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return { ref, isInView };
};

/**
 * Hook to track scroll progress of page
 * Returns value between 0 and 1
 */
export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      setScrollProgress(scrollHeight > 0 ? scrolled / scrollHeight : 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollProgress;
};

/**
 * Hook to detect if element is visible on viewport
 * Useful for triggering animations multiple times
 */
export const useElementVisibility = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      setIsVisible(isInViewport);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, isVisible };
};

/**
 * Hook for parallax scroll effect
 */
export const useParallax = (offset = 50) => {
  const ref = useRef<HTMLElement | null>(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const distance = elementCenter - windowCenter;
      setY(distance * 0.5); // 0.5 is parallax intensity
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ref, y };
};

/**
 * Hook for hover animations on desktop
 */
export const useHoverAnimation = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return {
    isHovered,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };
};

/**
 * Hook for mouse position tracking (for tilt or glow effects)
 */
export const useMousePosition = (ref: React.RefObject<HTMLElement>) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const element = ref.current;
    element?.addEventListener('mousemove', handleMouseMove);
    return () => element?.removeEventListener('mousemove', handleMouseMove);
  }, [ref]);

  return position;
};

/**
 * Hook for reducing motion preference
 * Returns true if user prefers reduced motion
 */
export const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return prefersReducedMotion;
};

/**
 * Hook for counting numbers with animation
 */
export const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [target, duration]);

  return count;
};

/**
 * Hook for debounced scroll
 */
export const useDebouncedScroll = (callback: () => void, delay = 150) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [callback, delay]);
};

/**
 * Hook to detect if element is in viewport with scroll direction
 */
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down' | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};
