import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TrustLine Services - Integrity in Accounting. Confidence in Compliance.",
  description: "Tax filing in Nigeria is shifting. Regulatory enforcement is tightening. We help forward-thinking professionals and businesses navigate the landscape correctly—protecting your reputation and your assets.",
  keywords: "tax services Nigeria, tax compliance, TCC processing, corporate tax, PAYE, VAT, tax filing Lagos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
