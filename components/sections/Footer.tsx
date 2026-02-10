'use client';

import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/2347066868867?text=Hello%20Trustline%20Professional%20Services%20Ltd,%20I%20would%20like%20to%20get%20compliant.', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:trustlineservicesng@gmail.com';
  };

  return (
    <footer id="contact" className="bg-trust-blue text-white">
      <Section background="white" spacing="md" className="!bg-trust-blue !py-16">
        <Container size="xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Tagline */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Get your finances on the right side of the law.
              </h2>
              <Button 
                variant="gold" 
                onClick={handleWhatsAppClick}
                className="text-lg px-8 py-4"
              >
                Start a Conversation
              </Button>
            </div>

            {/* Right Side - Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <a
                  href="https://wa.me/2347066868867"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-brand-gold transition-colors"
                >
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="text-sm opacity-80">Direct Line (WhatsApp)</p>
                    <p className="font-semibold">+234 706 686 8867</p>
                  </div>
                </a>

                <a
                  href="mailto:trustlineservicesng@gmail.com"
                  onClick={handleEmailClick}
                  className="flex items-center gap-3 hover:text-brand-gold transition-colors"
                >
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm opacity-80">Official Mail</p>
                    <p className="font-semibold">trustlineservicesng@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm opacity-80">Headquarters</p>
                    <p className="font-semibold">Lagos, Nigeria (Serving clients nationwide)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2026 Trustline Professional Services Ltd. All Rights Reserved.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm opacity-80">Certified Compliance</span>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xs">✓</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </footer>
  );
}
