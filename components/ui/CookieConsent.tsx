'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if the user has already consented
    const consent = localStorage.getItem('trustline_cookie_consent');
    if (!consent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => setShowConsent(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('trustline_cookie_consent', 'accepted');
    setShowConsent(false);
    // Here you would typically enable tracking scripts (e.g., Google Analytics, Meta Pixel)
    // window.gtag('consent', 'update', { analytics_storage: 'granted' });
  };

  const handleDecline = () => {
    localStorage.setItem('trustline_cookie_consent', 'declined');
    setShowConsent(false);
    // Here you would typically ensure tracking scripts are disabled
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-safe pointer-events-none"
        >
          <div className="max-w-7xl mx-auto flex justify-center">
            <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl p-5 sm:p-6 w-full max-w-4xl flex flex-col sm:flex-row items-center gap-6 pointer-events-auto">
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">🍪</span>
                  <h3 className="font-display font-semibold text-trust-blue text-lg">
                    We value your privacy
                  </h3>
                </div>
                <p className="text-trust-blue/70 text-sm">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
                <button
                  onClick={handleDecline}
                  className="px-5 py-2.5 text-sm font-medium text-trust-blue hover:bg-gray-100 rounded-lg transition-colors border border-transparent hover:border-gray-200"
                >
                  Decline Optional
                </button>
                <Button onClick={handleAccept} className="px-6 py-2.5 text-sm">
                  Accept All
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
