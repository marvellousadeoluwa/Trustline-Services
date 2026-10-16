'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import GlassOverlay from '@/components/ui/GlassOverlay';

export default function LeadCapture() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Request failed');
      setStatus('success');
      setMessage('Thanks — we\'ll send the Blueprint to your inbox.');
      setEmail('');
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message || 'Something went wrong');
    }
  };

  return (
    <section id="blueprint" className="bg-accent-sky/50 py-16 relative overflow-hidden">
      {/* Background ambient lighting for glass refraction */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-trust-blue/10 blur-3xl" />

      <Container size="lg">
        <div className="relative overflow-hidden rounded-3xl border border-white/80 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,51,102,0.08)] text-center space-y-5 max-w-3xl mx-auto">
          <GlassOverlay variant="light" withRefraction={true} />

          <h3 className="text-2xl sm:text-3xl font-display font-semibold text-trust-blue relative z-10">
            Not ready to talk yet? Start with the Blueprint.
          </h3>
          <p className="text-trust-blue/90 relative z-10 max-w-xl mx-auto leading-relaxed">
            Get the Trustline Workforce System Blueprint — templates and frameworks to structure pay, contracts and compliance before problems become penalties.
          </p>

          <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 relative z-10">
            <input
              type="email"
              required
              placeholder="Enter your work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3.5 rounded-xl border border-white/80 bg-white/70 backdrop-blur-md w-full sm:w-80 text-trust-blue placeholder:text-trust-blue/50 focus:outline-none focus:ring-2 focus:ring-trust-blue shadow-inner"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-7 py-3.5 bg-trust-blue hover:bg-trust-blue/90 text-white rounded-xl font-semibold shadow-md transition-all duration-300 hover:shadow-lg hover:scale-102 focus:outline-none focus:ring-2 focus:ring-trust-blue focus:ring-offset-2"
            >
              {status === 'loading' ? 'Sending...' : 'Get the Blueprint'}
            </button>
          </form>

          {status !== 'idle' && (
            <p className={`mt-3 text-sm relative z-10 font-medium ${status === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
              {message}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
