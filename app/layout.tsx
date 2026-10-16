import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import CookieConsent from '@/components/ui/CookieConsent';
import GlassFilter from '@/components/ui/GlassFilter';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const defaultTitle = 'Trustline – People Infrastructure for Nigerian SMEs';
const defaultDescription =
  'HR architecture, payroll compliance, talent acquisition, and tax advisory for growth-stage Nigerian businesses. Built right. Built to withstand scrutiny.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  keywords:
    'HR consulting Nigeria, payroll compliance Lagos, PAYE compliance, HR outsourcing Nigeria, compensation benchmarking Nigeria, executive search Lagos, workforce governance, People Shield, tax compliance Nigeria',
  openGraph: {
    title: 'Trustline Professional Services – People Infrastructure for Nigerian SMEs',
    description: defaultDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image-1200x630.png',
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} social card`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trustline Professional Services – People Infrastructure for Nigerian SMEs',
    description: defaultDescription,
    images: ['/og-image-1200x630.png'],
  },
  icons: {
    icon: '/trustline-logo.png',
    apple: '/trustline-logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          as="style"
        />
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="prefetch" href="/" />
      </head>
      <body suppressHydrationWarning className="overflow-x-hidden antialiased">
        <GlassFilter />
        <ScrollProgressBar />
        {children}
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
