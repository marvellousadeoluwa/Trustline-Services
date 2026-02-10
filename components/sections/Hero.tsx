'use client';

import { motion } from 'framer-motion';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function Hero() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347066868867?text=Hello%20Trustline%20Professional%20Services%20Ltd,%20I%20would%20like%20to%20get%20compliant.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:trustlineservicesng@gmail.com?subject=Formal Assessment Request';
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-accent-sky min-h-[90vh] flex items-center overflow-hidden">
      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-trust-blue leading-tight">
                Integrity in Accounting.<br />
                Confidence in Compliance.
              </h1>
              
              <p className="text-lg md:text-xl text-trust-blue/80 leading-relaxed">
                Tax filing in Nigeria is shifting. Regulatory enforcement is tightening. We help forward-thinking professionals and businesses navigate the landscape correctly—protecting your reputation and your assets.
              </p>
            </div>

            {/* Trustline Promise */}
            <div className="bg-white/80 backdrop-blur-sm border-l-4 border-trust-blue p-6 rounded-lg">
              <p className="text-trust-blue font-semibold text-lg">
                The Trustline Promise:
              </p>
              <p className="text-trust-blue/80 mt-2">
                No shortcuts. No "creative" accounting. Just clear and solid best practices.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cyan" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4"
              >
                Start a Conversation on WhatsApp
              </Button>
              <button
                onClick={handleEmailClick}
                className="text-trust-blue hover:text-action-cyan underline text-lg font-medium transition-colors"
              >
                Or email us for a formal assessment
              </button>
            </div>
          </motion.div>

          {/* Right Side - Image/Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border-grey">
              <div className="bg-accent-sky rounded-lg p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-trust-blue/60">Tax Status</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                    Cleared
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="h-2 bg-trust-blue/20 rounded-full">
                    <div className="h-2 bg-trust-blue rounded-full w-full"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-xs text-trust-blue/60">TCC Status</p>
                      <p className="text-lg font-bold text-trust-blue mt-1">Valid</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <p className="text-xs text-trust-blue/60">Compliance</p>
                      <p className="text-lg font-bold text-trust-blue mt-1">100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
