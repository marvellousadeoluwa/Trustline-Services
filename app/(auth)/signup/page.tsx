'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { createClient } from '@/lib/supabase/client';

export default function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [service, setService] = useState<'compliance' | 'hr'>('compliance');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const supabase = createClient();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            service,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signUpError) throw signUpError;
      
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
          queryParams: {
            // pass the service so we can save it perhaps on first login via a trigger or callback if needed
            access_type: 'offline',
            prompt: 'consent',
          }
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Google sign in failed');
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-6"
      >
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-2xl">
          ✉️
        </div>
        <h2 className="text-2xl font-display font-semibold text-trust-blue">Check your email</h2>
        <p className="text-trust-blue/70">
          We've sent a verification link to <span className="font-medium text-trust-blue">{email}</span>. 
          Please click the link to verify your account and access the dashboard.
        </p>
        <Link href="/login" className="inline-block mt-4 text-brand-gold hover:underline font-medium">
          Return to login
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-8">
        <h2 className="text-3xl font-display font-semibold text-trust-blue mb-2">Create an account</h2>
        <p className="text-trust-blue/70">Secure access to your Trustline services.</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm">
          {error}
        </div>
      )}

      <div className="space-y-6">
        <Button
          type="button"
          variant="outline"
          className="w-full relative flex items-center justify-center gap-3 py-6"
          onClick={handleGoogleSignIn}
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            <path d="M1 1h22v22H1z" fill="none" />
          </svg>
          <span className="font-medium text-trust-blue">Continue with Google</span>
        </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
          </div>
        </div>

        <form onSubmit={handleSignup} className="space-y-5">
          <div className="space-y-1">
            <Label>Which service are you joining?</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <label className={`
                flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all
                ${service === 'compliance' ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold' : 'border-gray-200 hover:border-gray-300 bg-white'}
              `}>
                <input type="radio" name="service" value="compliance" className="sr-only" checked={service === 'compliance'} onChange={() => setService('compliance')} />
                <span className="font-medium text-trust-blue">Compliance</span>
                <span className="text-xs text-trust-blue/60 mt-1">Tax & Filing</span>
              </label>
              
              <label className={`
                flex flex-col items-center justify-center p-4 border rounded-lg cursor-pointer transition-all
                ${service === 'hr' ? 'border-brand-gold bg-brand-gold/5 ring-1 ring-brand-gold' : 'border-gray-200 hover:border-gray-300 bg-white'}
              `}>
                <input type="radio" name="service" value="hr" className="sr-only" checked={service === 'hr'} onChange={() => setService('hr')} />
                <span className="font-medium text-trust-blue">HR Center</span>
                <span className="text-xs text-trust-blue/60 mt-1">Payroll & Team</span>
              </label>
            </div>
          </div>

          <div className="space-y-4 pt-2">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                minLength={6}
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Creating account...' : 'Create account'}
          </Button>
        </form>

        <p className="text-center text-sm text-trust-blue/70">
          Already have an account?{' '}
          <Link href="/login" className="text-brand-gold font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
