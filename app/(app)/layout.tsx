import { ReactNode } from 'react';
import Link from 'next/link';
import ProductSwitcher from '@/components/ProductSwitcher';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/dashboard" className="text-xl font-bold font-display text-trust-blue">
                  Trustline<span className="text-brand-gold">.</span>
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ProductSwitcher />
              {/* Other header items like profile dropdown could go here */}
            </div>
          </div>
        </div>
      </header>
      
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {children}
      </main>
    </div>
  );
}
