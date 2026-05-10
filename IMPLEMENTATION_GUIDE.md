# Implementation Guide - Quick Wins & Practical Examples

## Quick Start: Implementing Animations in Existing Components

### 1. CARD COMPONENT ENHANCEMENT

#### Current Implementation (Basic)
```tsx
// components/ui/Card.tsx (Current)
export default function Card({ variant, className, children }) {
  return (
    <div className={`bg-white rounded-lg p-6 border ${className}`}>
      {children}
    </div>
  );
}
```

#### Enhanced Implementation (With Animations)
```tsx
// components/ui/Card.tsx (Enhanced)
'use client';

import { motion, Variants } from 'framer-motion';

interface CardProps {
  variant?: 'default' | 'sky' | 'bordered' | 'navy';
  className?: string;
  children: React.ReactNode;
  hoverable?: boolean;
  delay?: number;
  animated?: boolean;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

export default function Card({
  variant = 'default',
  className = '',
  children,
  hoverable = true,
  delay = 0,
  animated = true,
}: CardProps) {
  const baseStyles = 'rounded-lg p-6 border transition-all duration-300';
  const variantStyles = {
    default: 'bg-white border-border-grey',
    sky: 'bg-accent-sky border-accent-sky',
    bordered: 'bg-white border-2 border-trust-blue',
    navy: 'bg-trust-blue text-white border-trust-blue',
  };

  return (
    <motion.div
      variants={animated ? cardVariants : undefined}
      initial={animated ? 'hidden' : undefined}
      whileInView={animated ? 'visible' : undefined}
      viewport={{ once: true, amount: 0.3 }}
      custom={delay}
      whileHover={
        hoverable
          ? {
              scale: 1.02,
              boxShadow: '0 20px 40px rgba(0, 51, 102, 0.15)',
            }
          : undefined
      }
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </motion.div>
  );
}
```

### 2. HERO SECTION - ENHANCED VERSION

#### Before: Basic Hero
```tsx
// Current Hero (Basic animations)
<section className="relative bg-gradient-to-br from-white to-accent-sky min-h-[90vh]">
  <Container>
    <div className="grid lg:grid-cols-2 gap-12">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
        <h1>Heading</h1>
        <p>Description</p>
      </motion.div>
    </div>
  </Container>
</section>
```

#### After: Enhanced Hero with Multiple Animations
```tsx
// components/sections/Hero.tsx (Enhanced Version)
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import WaitlistForm from '@/components/sections/WaitlistForm';
import {
  staggerContainer,
  heroItem,
  fadeInRight,
  floatingBackground,
} from '@/lib/animations';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open(
      'https://wa.me/2347066868867?text=Hello%20Trustline%20Professional%20Services%20Ltd,%20I%20would%20like%20to%20get%20compliant.',
      '_blank'
    );
  };

  const handleEmailClick = () => {
    window.location.href =
      'mailto:trustlineservicesng@gmail.com?subject=Formal Assessment Request';
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-accent-sky min-h-[90vh] flex items-center overflow-hidden">
      {/* Animated background shapes */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-brand-gold/5 blur-3xl"
        variants={floatingBackground}
        animate="animate"
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-trust-blue/5 blur-3xl"
        variants={floatingBackground}
        animate="animate"
        transition={{ delay: 0.5 }}
      />

      <Container size="xl" className="relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          animate="visible"
        >
          {/* Left Side - Content */}
          <div className="space-y-8">
            <motion.div className="space-y-6" variants={heroItem}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-trust-blue leading-tight">
                Integrity in Accounting.
                <br />
                <span className="bg-gradient-to-r from-trust-blue to-brand-gold bg-clip-text text-transparent">
                  Confidence in Compliance.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-trust-blue/80 leading-relaxed max-w-lg">
                Tax filing in Nigeria is shifting. Regulatory enforcement is
                tightening. We help forward-thinking professionals and
                businesses navigate the landscape correctly—protecting your
                reputation and your assets.
              </p>
            </motion.div>

            {/* Trustline Promise - Enhanced */}
            <motion.div
              variants={heroItem}
              className="bg-white/80 backdrop-blur-sm border-l-4 border-brand-gold p-6 rounded-lg hover:border-trust-blue transition-colors"
            >
              <p className="text-trust-blue font-semibold text-lg">
                The Trustline Promise:
              </p>
              <p className="text-trust-blue/80 mt-2">
                No shortcuts. No "creative" accounting. Just clear and solid
                best practices.
              </p>
            </motion.div>

            {/* Primary CTA: Waitlist */}
            <motion.div className="space-y-3" variants={heroItem}>
              <p className="text-trust-blue font-medium">
                Be the first to know when we launch.
              </p>
              <WaitlistForm />
            </motion.div>

            {/* Secondary CTAs - Enhanced */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              variants={heroItem}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="outline"
                  onClick={handleWhatsAppClick}
                  className="w-full sm:w-auto text-base font-medium"
                >
                  💬 Chat on WhatsApp
                </Button>
              </motion.div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={handleEmailClick}
                className="text-trust-blue hover:text-brand-gold underline text-base font-medium transition-all"
              >
                📧 Email for assessment
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side - Enhanced Mockup Card */}
          <motion.div
            variants={fadeInRight}
            className="hidden lg:block"
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="bg-white rounded-2xl shadow-2xl p-8 border border-border-grey overflow-hidden"
            >
              {/* Glowing accent */}
              <motion.div
                className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/20 rounded-full blur-3xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <div className="relative z-10 bg-accent-sky rounded-lg p-6 space-y-4">
                {/* Status Badge - Animated */}
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-sm text-trust-blue/60">
                    Tax Status
                  </span>
                  <motion.span
                    animate={{ boxShadow: ['0 0 0 0 rgba(34, 197, 94, 0.7)', '0 0 0 10px rgba(34, 197, 94, 0)'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold"
                  >
                    ✓ Cleared
                  </motion.span>
                </motion.div>

                {/* Progress Bar - Animated */}
                <div className="space-y-3">
                  <div className="h-2 bg-trust-blue/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-trust-blue to-brand-gold rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Stats Grid - Staggered Animation */}
                  <motion.div
                    className="grid grid-cols-2 gap-4"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                      },
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      { label: 'TCC Status', value: 'Valid' },
                      { label: 'Compliance', value: '100%' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow"
                        whileHover={{ y: -5 }}
                        variants={{
                          hidden: { opacity: 0, y: 20 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        <p className="text-xs text-trust-blue/60">
                          {stat.label}
                        </p>
                        <p className="text-lg font-bold text-trust-blue mt-1">
                          {stat.value}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
```

### 3. HOW IT WORKS - TIMELINE WITH CONNECTORS

#### Before: Static Timeline
```tsx
// Current HowItWorks (Basic)
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {steps.map((step, index) => (
    <div key={step.step}>
      <div className="w-12 h-12 bg-trust-blue rounded-full flex items-center justify-center">
        {step.step}
      </div>
    </div>
  ))}
</div>
```

#### After: Animated Timeline with Progress
```tsx
// components/sections/HowItWorks.tsx (Enhanced)
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import {
  staggerContainer,
  staggerItem,
  bounceUp,
  scaleInCenter,
} from '@/lib/animations';

const steps = [
  { step: 1, title: 'Briefing', description: 'Contact us via WhatsApp or Email.', icon: '📞' },
  { step: 2, title: 'Assessment', description: 'We review your income sources and tax history.', icon: '📋' },
  { step: 3, title: 'Agreement', description: 'A clear fee structure is agreed upon.', icon: '🤝' },
  { step: 4, title: 'Execution', description: 'We file, process, and deliver your documentation.', icon: '✅' },
];

export default function HowItWorks() {
  return (
    <Section id="how-it-works" background="sky" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Your Path to Clearance
          </h2>
          <p className="text-trust-blue/80 max-w-2xl mx-auto">
            A simple, transparent 4-step process to get compliant
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated Connector Lines */}
          {steps.map((_, index) => (
            <motion.div
              key={`connector-${index}`}
              className="hidden lg:block absolute top-1/2 left-[12.5%] right-auto w-[18%] h-1 bg-gradient-to-r from-brand-gold/0 via-brand-gold to-brand-gold/0 -translate-y-1/2 z-0"
              style={{ left: `calc(${index * 25}% + 12.5%)` }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            />
          ))}

          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div key={step.step} className="relative" variants={staggerItem}>
              <Card variant="default" className="relative z-10 text-center h-full hover:border-brand-gold">
                <motion.div className="space-y-4">
                  {/* Icon - Animated */}
                  <motion.div
                    className="text-5xl flex justify-center"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Step Number - Animated Circle */}
                  <motion.div
                    className="w-14 h-14 bg-gradient-to-br from-trust-blue to-brand-gold text-white rounded-full flex items-center justify-center font-display font-bold text-xl mx-auto shadow-lg"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 150, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {step.step}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-lg font-display font-semibold text-trust-blue">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-trust-blue/80 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </Card>

              {/* Vertical Connector for Mobile */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden md:block lg:hidden absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-brand-gold to-transparent -translate-x-1/2 z-0"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-trust-blue/80 mb-6">
            Ready to get compliant? Let's talk.
          </p>
          <motion.a
            href="https://wa.me/2347066868867"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-brand-gold text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
          >
            Start Your Journey →
          </motion.a>
        </motion.div>
      </Container>
    </Section>
  );
}
```

### 4. VALUE PROPOSITION CARDS - ENHANCED

```tsx
// components/sections/ValueProposition.tsx (Enhanced)
'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import {
  staggerContainer,
  staggerItem,
  cardHover,
} from '@/lib/animations';

const valueProps = [
  {
    icon: '🛡️',
    title: 'Institutional Grade Governance',
    description:
      'We are not a "one-man shop." We operate with structured internal governance, multi-layer reviews, and strict data privacy protocols.',
    color: 'from-blue-400',
  },
  {
    icon: '⚖️',
    title: 'The Compliance-First Standard',
    description:
      'We strictly do not assist with tax evasion, document falsification, or under-declaration.',
    color: 'from-purple-400',
  },
  {
    icon: '🔄',
    title: 'Continuity & Reliability',
    description:
      'Built on systems, not personalities. Your tax history is documented, archived, and secure.',
    color: 'from-green-400',
  },
];

export default function ValueProposition() {
  return (
    <Section id="value-proposition" background="sky" spacing="lg">
      <Container size="xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-trust-blue mb-4">
            Compliance Without Compromise
          </h2>
          <p className="text-lg text-trust-blue/80 max-w-3xl mx-auto">
            Most "tax consultants" sell you a way to pay less by hiding the
            truth. We sell you the peace of mind that comes from doing it
            right.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div key={prop.title} variants={staggerItem}>
              <Card
                variant="default"
                className="h-full relative overflow-hidden group cursor-pointer hover:border-brand-gold transition-colors"
              >
                {/* Animated background accent */}
                <motion.div
                  className={`absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br ${prop.color} to-transparent opacity-0 blur-3xl group-hover:opacity-20 transition-opacity duration-300`}
                />

                <motion.div
                  className="space-y-4 relative z-10"
                  whileHover={{ y: -5 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                >
                  {/* Icon Container */}
                  <motion.div
                    className="text-5xl inline-flex items-center justify-center w-16 h-16 rounded-lg bg-accent-sky"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {prop.icon}
                  </motion.div>

                  {/* Title with animated underline */}
                  <div className="relative">
                    <h3 className="text-xl font-display font-semibold text-trust-blue">
                      {prop.title}
                    </h3>
                    <motion.div
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-brand-gold to-trust-blue rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                  </div>

                  {/* Description */}
                  <p className="text-trust-blue/80">
                    {prop.description}
                  </p>
                </motion.div>

                {/* Border glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg border-2 border-transparent bg-gradient-to-r from-brand-gold to-trust-blue opacity-0 group-hover:opacity-20 pointer-events-none transition-opacity duration-300"
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
```

---

## Installation & Setup Instructions

### Step 1: Add Animation Files
The files have already been created:
- ✅ `lib/animations.ts` - Animation variants
- ✅ `lib/hooks/useScrollAnimation.ts` - Custom hooks
- ✅ `components/ui/AnimatedCard.tsx` - Reusable component
- ✅ `components/ui/AnimatedButton.tsx` - Button variations
- ✅ `components/ui/ScrollProgressBar.tsx` - Progress indicator

### Step 2: Update Tailwind Config (Optional but Recommended)
```typescript
// tailwind.config.ts - Add these to theme.extend
animation: {
  'float': 'float 3s ease-in-out infinite',
  'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  'shimmer': 'shimmer 2s infinite',
},

keyframes: {
  float: {
    '0%, 100%': { transform: 'translateY(-10px)' },
    '50%': { transform: 'translateY(10px)' },
  },
  shimmer: {
    '0%': { backgroundPosition: '-1000px 0' },
    '100%': { backgroundPosition: '1000px 0' },
  },
}
```

### Step 3: Add Reduced Motion Support (Accessibility)
```typescript
// lib/hooks/useAnimationPreference.ts
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
```

### Step 4: Import ScrollProgressBar in Layout
```typescript
// app/layout.tsx
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
```

---

## Performance Tips

1. **Use GPU Acceleration**: Only animate `transform` and `opacity`
2. **Lazy Load Heavy Sections**: Use code splitting for animation-heavy components
3. **Optimize Images**: Compress images in hero section
4. **Monitor with Lighthouse**: Check performance impact of animations
5. **Reduce Motion**: Respect browser's `prefers-reduced-motion` setting

---

## Testing Your Animations

```bash
# Check performance
npm run build

# Test on different viewport sizes
# Desktop, Tablet, Mobile

# Test with real 4G throttling in DevTools
# Test with animations disabled (prefers-reduced-motion)
```

---

## Next Implementation Steps

1. **Start with Hero section** - Most visible, highest impact
2. **Enhance Card components** - Used throughout site
3. **Add How It Works timeline animations** - Engages users
4. **Implement scroll progress bar** - Easy win
5. **Add form interaction animations** - Improves UX

---

**Last Updated:** May 10, 2026
