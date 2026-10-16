"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Earth, ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import {
  CONTACT_EMAIL,
  getWhatsAppUrl,
  PHONE_DISPLAY,
} from '@/lib/site';

const socialLinks = [
  { name: 'Facebook', href: 'https://web.facebook.com/profile.php?id=61588211663709', slug: 'facebook' },
  { name: 'X (Twitter)', href: 'https://x.com/services14686', slug: 'x' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/trustline-professional-services/', slug: 'linkedin' },
  { name: 'Instagram', href: 'https://www.instagram.com/trustlineservicesng/', slug: 'instagram' },
];

const whatsappUrl = getWhatsAppUrl();

const contactItems = [
  {
    icon: <Phone className="h-5 w-5" />,
    label: 'Direct Line (WhatsApp)',
    value: PHONE_DISPLAY,
    href: whatsappUrl,
    external: true,
  },
  {
    icon: <Mail className="h-5 w-5" />,
    label: 'Official Mail',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    external: false,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Headquarters',
    value: 'Lagos, Nigeria (Serving clients nationwide)',
    href: null,
    external: false,
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
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contact" className="bg-trust-blue text-white relative">
      <Section background="white" spacing="md" className="!bg-trust-blue !py-16">
        <Container size="xl">
          <div className="grid md:grid-cols-4 gap-8 text-white">
            <div>
              <h4 className="font-semibold mb-2">Firm</h4>
              <p className="text-sm">Trustline Professional Services Ltd</p>
              <p className="text-sm italic mt-2">Trustline builds the people, payroll and compliance infrastructure growing Nigerian businesses need to scale safely.</p>
              <p className="text-sm">RC 9398960 · Incorporated in Nigeria</p>
              <p className="text-sm">Registered office: Ogun State, Nigeria</p>
              <p className="text-sm">Operations: Lagos, Nigeria (serving clients nationwide)</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-sm">WhatsApp: {PHONE_DISPLAY}</p>
              <a className="text-sm underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Links</h4>
              <ul className="text-sm space-y-1">
                <li><a href="/privacy" className="underline">Privacy Policy</a></li>
                <li><a href="/terms" className="underline">Terms of Engagement</a></li>
                <li><a href="/insights" className="underline">Insights</a></li>
                <li><a href="/hr/auth" className="underline">HR Center Portal</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Follow</h4>
              <div className="flex items-center gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors"
                  >
                    <img
                      src={`/icons/${s.slug}.svg`}
                      alt={s.name}
                      className="h-5 w-5"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/${s.slug}/ffffff`;
                      }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-white/85">
              © 2026 Trustline Professional Services Ltd. All Rights Reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a
                href="https://hrcenter.trustlineprofessional.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white/90 underline-offset-4 hover:text-brand-gold hover:underline"
              >
                HR Center
              </a>
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
            <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ArrowUp className="w-6 h-6" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
