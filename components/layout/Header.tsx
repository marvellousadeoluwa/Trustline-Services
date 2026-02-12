'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import TrustlineLogo from '@/icon_1.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347066868867?text=Hello%20Trustline%20Professional%20Services%20Ltd,%20I%20would%20like%20to%20get%20compliant.', '_blank');
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-grey backdrop-blur-sm bg-opacity-95">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <a
              href="#top"
              className="flex items-center gap-3 group"
              aria-label="Back to top"
            >
              <Image
                src={TrustlineLogo}
                alt="Trustline Professional Services Ltd logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              <span className="text-2xl font-display font-bold text-trust-blue group-hover:text-brand-gold transition-colors">
                Trustline Professional Services Ltd
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#who-we-serve"
              className="text-sm font-medium text-trust-blue/80 hover:text-trust-blue transition-colors"
            >
              Who We Serve
            </a>
            <a 
              href="#practice-areas"
              className="text-sm font-medium text-trust-blue/80 hover:text-trust-blue transition-colors"
            >
              Practice Areas
            </a>
            <a 
              href="#how-it-works"
              className="text-sm font-medium text-trust-blue/80 hover:text-trust-blue transition-colors"
            >
              How It Works
            </a>
            <a 
              href="#contact"
              className="text-sm font-medium text-trust-blue/80 hover:text-trust-blue transition-colors"
            >
              Contact
            </a>
            <span 
              className="text-trust-blue opacity-60 cursor-not-allowed text-sm"
              aria-disabled="true"
            >
              Client Portal <span className="text-xs">(Coming Soon)</span>
            </span>
            <Button 
              variant="navy" 
              onClick={handleWhatsAppClick}
              className="text-sm"
            >
              Get Compliant Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-trust-blue p-2"
              aria-label="Toggle menu"
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-4">
          <a 
            href="#who-we-serve"
            className="block text-trust-blue hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Who We Serve
          </a>
          <a 
            href="#practice-areas"
            className="block text-trust-blue hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice Areas
          </a>
          <a 
            href="#how-it-works"
            className="block text-trust-blue hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#contact"
            className="block text-trust-blue hover:text-brand-gold transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
            <a 
              href="#" 
              className="block text-trust-blue opacity-60 cursor-not-allowed"
              aria-disabled="true"
            >
              Client Portal <span className="text-xs">(Coming Soon)</span>
            </a>
            <Button 
              variant="navy" 
              onClick={handleWhatsAppClick}
              className="w-full"
            >
              Get Compliant Now
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
