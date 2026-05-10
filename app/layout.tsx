import type { Metadata } from "next";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Trustline Professional Services Ltd - Integrity in Accounting. Confidence in Compliance.",
  description: "Tax filing in Nigeria is shifting. Regulatory enforcement is tightening. We help forward-thinking professionals and businesses navigate the landscape correctly—protecting your reputation and your assets.",
  keywords: "tax services Nigeria, tax compliance, TCC processing, corporate tax, PAYE, VAT, tax filing Lagos",
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Performance optimization: Preload critical fonts */}
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
        {/* DNS prefetch for external services */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        {/* Prefetch key pages */}
        <link rel="prefetch" href="/" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
