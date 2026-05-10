'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

const socialLinks = [
  {
    name: 'Facebook',
    href: 'https://web.facebook.com/profile.php?id=61588211663709',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M24 12a12 12 0 1 0-13.88 11.85v-8.39H7.08V12h3.04V9.36c0-3 1.79-4.67 4.53-4.67 1.31 0 2.68.23 2.68.23v2.95h-1.51c-1.49 0-1.95.92-1.95 1.87V12h3.33l-.53 3.46h-2.8v8.39A12 12 0 0 0 24 12z"
        />
      </svg>
    ),
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/services14686',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M18.9 2H22l-6.77 7.73L23.2 22h-6.25l-4.89-6.72L6.2 22H3.1l7.24-8.28L.8 2h6.4l4.42 6.09L18.9 2zm-1.1 18h1.73L6.25 3.9H4.4L17.8 20z"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/trustline-professional-services/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.14 1.45-2.14 2.94v5.68H9.34V9h3.42v1.56h.05c.48-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.78 1.78 0 0 0 0 1.78v20.44C0 23.2.8 24 1.78 24h20.44c.98 0 1.78-.8 1.78-1.78V1.78C24 .8 23.2 0 22.22 0z"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/trustlineservicesng/',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.42.62.24 1.06.53 1.52 1 .47.46.76.9 1 1.52.18.46.37 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.42 2.43-.24.62-.53 1.06-1 1.52-.46.47-.9.76-1.52 1-.46.18-1.26.37-2.43.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.42a4.1 4.1 0 0 1-1.52-1 4.1 4.1 0 0 1-1-1.52c-.18-.46-.37-1.26-.42-2.43-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.24-1.97.42-2.43.24-.62.53-1.06 1-1.52.46-.47.9-.76 1.52-1 .46-.18 1.26-.37 2.43-.42 1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.62A6.26 6.26 0 0 0 1.87 2.1 6.26 6.26 0 0 0 .39 4.37C.1 5.13-.1 6.01-.16 7.28-.22 8.56-.24 8.97-.24 12s.02 3.44.08 4.72c.06 1.27.26 2.15.55 2.91a6.26 6.26 0 0 0 1.48 2.27 6.26 6.26 0 0 0 2.27 1.48c.76.29 1.64.49 2.91.55 1.28.06 1.69.08 4.95.08s3.67-.02 4.95-.08c1.27-.06 2.15-.26 2.91-.55a6.26 6.26 0 0 0 2.27-1.48 6.26 6.26 0 0 0 1.48-2.27c.29-.76.49-1.64.55-2.91.06-1.28.08-1.69.08-4.95s-.02-3.67-.08-4.95c-.06-1.27-.26-2.15-.55-2.91A6.26 6.26 0 0 0 22.13 2.1 6.26 6.26 0 0 0 19.86.62c-.76-.29-1.64-.49-2.91-.55C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.85-10.41a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"
        />
      </svg>
    ),
  },
];

const contactItems = [
  {
    icon: '📞',
    label: 'Direct Line (WhatsApp)',
    value: '+234 706 686 8867',
    href: 'https://wa.me/2347066868867',
  },
  {
    icon: '📧',
    label: 'Official Mail',
    value: 'trustlineservicesng@gmail.com',
    href: 'mailto:trustlineservicesng@gmail.com',
  },
  {
    icon: '📍',
    label: 'Headquarters',
    value: 'Lagos, Nigeria (Serving clients nationwide)',
    href: null,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const linkVariants = {
  initial: { color: 'rgba(255, 255, 255, 1)' },
  hover: {
    color: '#C89A2B',
    x: 8,
    transition: { duration: 0.3 },
  },
};

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347066868867?text=Hello%20Trustline%20Professional%20Services%20Ltd,%20I%20would%20like%20to%20get%20compliant.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:trustlineservicesng@gmail.com';
  };

  return (
    <footer id="contact" className="bg-trust-blue text-white relative">
      <Section background="white" spacing="md" className="!bg-trust-blue !py-16">
        <Container size="xl">
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
          >
            {/* Left Side - Tagline */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h2
                className="text-3xl md:text-4xl font-display font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Get your finances on the right side of the law.
              </motion.h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="gold"
                  onClick={handleWhatsAppClick}
                  className="text-lg px-8 py-4"
                >
                  Start a Conversation
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Contact Info */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div className="space-y-4">
                {contactItems.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href || '#'}
                    target={item.href?.startsWith('http') ? '_blank' : undefined}
                    rel={item.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={item.href?.startsWith('mailto:') ? handleEmailClick : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    viewport={{ once: true }}
                    whileHover="hover"
                    variants={linkVariants}
                    className="flex items-center gap-3 group cursor-pointer"
                  >
                    <motion.span
                      className="text-2xl"
                      whileHover={{ scale: 1.2, rotate: 12 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      {item.icon}
                    </motion.span>
                    <div className="overflow-hidden">
                      <p className="text-sm opacity-80 transition-opacity group-hover:opacity-100">
                        {item.label}
                      </p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div className="pt-2" variants={itemVariants}>
                <p className="text-sm opacity-80 mb-3">Follow us</p>
                <motion.div
                  className="flex flex-wrap items-center gap-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.05 * (index + 1) }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.3,
                        borderColor: '#C89A2B',
                        backgroundColor: 'rgba(200, 154, 43, 0.1)',
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm opacity-80">
              © 2026 Trustline Professional Services Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-80">Certified Compliance</span>
              <motion.div
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-xs">✓</span>
              </motion.div>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            whileHover={{
              scale: 1.1,
              backgroundColor: '#E6F0FA',
              boxShadow: '0 20px 40px rgba(0, 51, 102, 0.4)',
            }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-brand-gold text-trust-blue flex items-center justify-center font-bold shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Scroll to top"
          >
            <motion.svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7-7m0 0L5 14m7-7v12"
              />
            </motion.svg>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
