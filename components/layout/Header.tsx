"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import NavigationMenu from '@/components/ui/NavigationMenu';
import Dialog, { DialogContent, DialogTrigger } from '@/components/ui/Dialog';
import HrAuthModal from '@/components/hr/HrAuthModal';
import TrustlineLogo from '@/icon_1.png';

const HR_CENTER_URL = '/hr/auth';

const navLinkClass =
  'text-sm font-medium text-trust-blue hover:text-brand-gold transition-colors';

const navLinks = [
  { href: '/#who-we-serve', label: 'Who We Serve' },
  { href: '/#practice-areas', label: 'Practice Areas' },
  { href: '/people-shield', label: 'People Shield™' },
  { href: '/recruitment', label: 'Recruitment' },
  { href: '/hr/auth', label: 'HR Center' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHrModalOpen, setIsHrModalOpen] = useState(false);
  const [hrModalTab, setHrModalTab] = useState<'signup' | 'login'>('signup');

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-white/60 shadow-[0_4px_24px_0_rgba(0,51,102,0.05)] transition-all duration-300">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/40 to-transparent" style={{ filter: 'url(#glass-subtle)' }} />
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
            <NavigationMenu links={navLinks} />
            <div className="flex items-center gap-3 border-l border-gray-200 pl-6 ml-2">
              <button
                onClick={() => {
                  setHrModalTab('login');
                  setIsHrModalOpen(true);
                }}
                className="text-sm font-semibold text-trust-blue hover:text-brand-gold transition-colors"
              >
                Log In
              </button>
              <button
                onClick={() => {
                  setHrModalTab('signup');
                  setIsHrModalOpen(true);
                }}
                className="px-4 py-2 text-sm font-semibold rounded-lg bg-trust-blue text-white hover:bg-trust-blue/90 transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>HR Center</span>
              </button>
            </div>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <button className="text-trust-blue p-2" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </button>
              </DialogTrigger>

              <DialogContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <a href="/" onClick={() => {}} className="flex items-center gap-3">
                      <Image src={TrustlineLogo} alt="logo" width={32} height={32} className="h-8 w-8" />
                      <span className="font-display font-bold text-trust-blue">Trustline</span>
                    </a>
                    <button onClick={() => {}} aria-label="Close" className="text-trust-blue"><X className="h-5 w-5" /></button>
                  </div>

                  <div className="space-y-2">
                    {navLinks.map((link) => (
                      <a key={link.label} href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noreferrer' : undefined} className="block text-trust-blue font-medium py-2">
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <div className="pt-2 flex flex-col gap-3">
                    <a href="/login" className="block w-full text-center text-trust-blue font-semibold py-2.5 border border-gray-200 rounded-lg">
                      Log In
                    </a>
                    <a href="/signup" className="block w-full text-center bg-trust-blue text-white font-semibold py-2.5 rounded-lg shadow-sm">
                      Sign Up
                    </a>
                  </div>

                </div>
              </DialogContent>
            </Dialog>
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
            
            <div className="pt-2 flex flex-col gap-3">
              <a href="/login" className="block w-full text-center text-trust-blue font-semibold py-2 border border-gray-200 rounded-md">
                Log In
              </a>
              <a href="/signup" className="block w-full text-center bg-trust-blue text-white font-semibold py-2 rounded-md">
                Sign Up
              </a>
            </div>
          </div>
        )}
      </nav>

      <HrAuthModal
        isOpen={isHrModalOpen}
        onClose={() => setIsHrModalOpen(false)}
        initialTab={hrModalTab}
      />
    </header>
  );
}
