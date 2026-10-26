'use client';

import { useState } from 'react';
import Container from '@/components/ui/Container';
import { ArrowRight, CheckCircle2, FileText, Sparkles } from 'lucide-react';

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
    <section id="blueprint" className="bg-[#F9FAFB] py-20 lg:py-24 border-b border-slate-200/60">
      <Container size="lg">
        <div className="bg-white rounded-2xl border border-slate-200/90 p-8 sm:p-12 shadow-sm text-center space-y-5 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-trust-blue text-xs font-semibold uppercase tracking-wider mx-auto border border-blue-200/60">
            <FileText className="w-3.5 h-3.5 text-brand-gold" />
            <span>Complimentary Resource</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold text-[#0F2942] tracking-[-0.03em] leading-tight">
            Not ready to talk yet? Start with the Blueprint.
          </h3>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed tracking-[-0.015em]">
            Get the Trustline Workforce System Blueprint — structured templates and regulatory frameworks to calibrate pay, contracts, and statutory compliance before minor issues turn into tax audit penalties.
          </p>

          <form onSubmit={submit} className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your official work email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-5 py-3 rounded-full border border-slate-300 bg-white w-full text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-trust-blue/20 focus:border-trust-blue shadow-sm text-sm"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full sm:w-auto px-7 py-3 bg-trust-blue hover:bg-trust-blue/90 text-white rounded-full font-semibold text-sm shadow-sm transition-all duration-200 hover:shadow flex items-center justify-center gap-1.5 flex-shrink-0"
            >
              <span>{status === 'loading' ? 'Sending...' : 'Get Blueprint'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>

          {status !== 'idle' && (
            <p className={`mt-3 text-xs sm:text-sm font-medium ${status === 'success' ? 'text-emerald-700' : 'text-red-600'}`}>
              {message}
            </p>
          )}

          <p className="text-[11px] text-slate-400 pt-2">
            No spam. Strictly confidential under NDPA 2023 regulations.
          </p>
        </div>
      </Container>
    </section>
  );
}
