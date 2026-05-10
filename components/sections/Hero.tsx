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
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'linear-gradient(135deg, #E6F0FA 0%, #FFFFFF 50%, #E6F0FA 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Animated background shapes with gradient flow */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-gradient-to-br from-brand-gold to-transparent blur-3xl opacity-20"
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-tr from-trust-blue to-transparent blur-3xl opacity-20"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      />

      {/* Additional floating gradient accent */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-gradient-to-tl from-accent-sky to-transparent blur-3xl opacity-40"
        animate={{
          y: [0, 60, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
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
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-trust-blue leading-tight">
                  Integrity in Accounting.
                  <br />
                  <motion.span
                    className="inline-block bg-gradient-to-r from-trust-blue via-brand-gold to-trust-blue bg-clip-text text-transparent"
                    style={{
                      backgroundSize: '200% 100%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    Confidence in Compliance.
                  </motion.span>
                </h1>
              </div>

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
              className="bg-white/80 backdrop-blur-sm border-l-4 border-brand-gold p-6 rounded-lg hover:border-trust-blue transition-colors duration-300 group"
            >
              <motion.p
                className="text-trust-blue font-semibold text-lg"
                animate={{
                  color: ['#003366', '#C89A2B', '#003366'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'mirror',
                }}
              >
                The Trustline Promise:
              </motion.p>
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
                className="text-trust-blue hover:text-brand-gold underline text-base font-medium transition-all duration-300"
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
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
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
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(34, 197, 94, 0.7)',
                        '0 0 0 10px rgba(34, 197, 94, 0)',
                      ],
                    }}
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
                    variants={staggerContainer(0.1, 0)}
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
                        className="bg-white p-4 rounded-lg hover:shadow-lg transition-shadow duration-300 cursor-pointer"
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
