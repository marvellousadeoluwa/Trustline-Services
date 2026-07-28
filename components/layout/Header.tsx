'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TrustlineLogo from '@/icon_1.png';
import { getWhatsAppUrl } from '@/lib/site';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleGetCompliantClick = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  const navLinkClass =
    'text-sm font-medium text-trust-blue hover:text-trust-blue transition-colors';

  return (
    <header className="sticky top-0 z-50 bg-white/95 border-b border-border-grey backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main">
        <div className="flex items-center justify-between h-20 gap-4">
          <div className="flex-shrink-0 flex items-center gap-3 min-w-0">
            <a
              href="#top"
              className="flex items-center gap-3 group min-w-0"
              aria-label="Back to top"
            >
              <Image
                src={TrustlineLogo}
                alt="Trustline Professional Services Ltd logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain flex-shrink-0"
                priority
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-display font-bold text-trust-blue group-hover:text-brand-gold transition-colors truncate">
                Trustline Professional Services Ltd
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-end">
            <a href="#who-we-serve" className={navLinkClass}>
              Who We Serve
            </a>
            <a href="#practice-areas" className={navLinkClass}>
              Practice Areas
            </a>
            <a href="#how-it-works" className={navLinkClass}>
              How It Works
            </a>
            <a href="#contact" className={navLinkClass}>
              Contact
            </a>
            <Button
              variant="gold"
              onClick={handleGetCompliantClick}
              className="text-sm px-5 py-2.5 !text-trust-blue font-bold shadow-md ring-2 ring-trust-blue/10"
            >
              Get Compliant
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="gold"
              onClick={handleGetCompliantClick}
              className="text-xs px-3 py-2 !text-trust-blue font-bold"
            >
              Get Compliant
            </Button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-trust-blue p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden pb-4 space-y-4 border-t border-border-grey pt-4">
            <a
              href="#who-we-serve"
              className="block text-trust-blue font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Who We Serve
            </a>
            <a
              href="#practice-areas"
              className="block text-trust-blue font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </a>
            <a
              href="#how-it-works"
              className="block text-trust-blue font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="block text-trust-blue font-medium hover:text-brand-gold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <Button variant="gold" onClick={handleGetCompliantClick} className="w-full !text-trust-blue font-bold">
              Get Compliant
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
