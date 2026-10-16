"use client";

import React from 'react';
import Link from 'next/link';

type LinkItem = { href: string; label: string; external?: boolean };

export default function NavigationMenu({ links }: { links: LinkItem[] }) {
  return (
    <nav aria-label="Primary navigation" className="flex items-center gap-6">
      {links.map((link) => (
        link.external ? (
          <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-trust-blue hover:text-brand-gold transition-colors">
            {link.label}
          </a>
        ) : (
          <Link key={link.href} href={link.href} className="text-sm font-medium text-trust-blue hover:text-brand-gold transition-colors">
            {link.label}
          </Link>
        )
      ))}
    </nav>
  );
}
