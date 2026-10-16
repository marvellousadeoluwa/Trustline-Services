'use client';

import { getWhatsAppUrl } from '@/lib/site';
import { MessageSquare } from 'lucide-react';

export default function WhatsAppFloat() {
  const handleClick = () => {
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <button
        onClick={handleClick}
        className="bg-brand-gold text-trust-blue rounded-full p-4 shadow-lg hover:brightness-105 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageSquare className="w-6 h-6" />
      </button>
    </div>
  );
}
