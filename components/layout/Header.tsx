'use client';

import { useState } from 'react';
import Image from 'next/image';
import TrustlineLogo from '@/icon_1.png';

const HR_CENTER_URL = 'https://hrcenter.trustlineprofessional.com';

const navLinkClass =
  'text-sm font-medium text-trust-blue hover:text-brand-gold transition-colors';

const navLinks = [
  { href: '#who-we-serve', label: 'Who We Serve' },
  { href: '#practice-areas', label: 'Practice Areas' },
  { href: '#people-shield', label: 'People Shield™' },
  { href: '#recruitment', label: 'Recruitment' },
  { href: HR_CENTER_URL, label: 'HR Center', external: true },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={navLinkClass}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex lg:hidden items-center gap-2">
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
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="block text-trust-blue font-medium hover:text-brand-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
