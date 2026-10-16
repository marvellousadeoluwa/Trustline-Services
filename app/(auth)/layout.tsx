import { ReactNode } from 'react';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side: branding/aesthetic (hidden on mobile) */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 bg-trust-blue text-white overflow-hidden">
        {/* Animated background shape */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-sky/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

        <div className="relative z-10">
          <Link href="/" className="inline-block text-2xl font-bold font-display tracking-tight text-white/90 hover:text-white transition-colors">
            Trustline<span className="text-brand-gold">.</span>
          </Link>
          <div className="mt-32 max-w-md">
            <h1 className="text-4xl font-display font-semibold leading-tight mb-6">
              Institutional Grade Governance & Compliance.
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Access your secure portal for continuous compliance, tax filing, and HR management—built on systems, not personalities.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex gap-4 text-sm text-white/60">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>

      {/* Right side: auth forms */}
      <div className="flex items-center justify-center p-6 sm:p-12 bg-white relative">
        <div className="w-full max-w-md">
          {/* Mobile branding */}
          <div className="lg:hidden mb-8 text-center">
            <Link href="/" className="inline-block text-2xl font-bold font-display tracking-tight text-trust-blue">
              Trustline<span className="text-brand-gold">.</span>
            </Link>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
