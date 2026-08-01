import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';
import ScrollProgressBar from '@/components/ui/ScrollProgressBar';
import { SITE_NAME, SITE_URL } from '@/lib/site';

const defaultTitle =
  'Trustline Professional Services Ltd - Integrity in Accounting. Confidence in Compliance.';
const defaultDescription =
  'Tax filing in Nigeria is shifting. Regulatory enforcement is tightening. We help forward-thinking professionals and businesses navigate the landscape correctly—protecting your reputation and your assets.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: defaultTitle,
  description: defaultDescription,
  keywords:
    'tax services Nigeria, tax compliance, TCC processing, corporate tax, PAYE, VAT, tax filing Lagos',
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_NG',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 512,
        height: 512,
        alt: `${SITE_NAME} logo`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
    images: ['/og-image.png'],
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
        <ScrollProgressBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
