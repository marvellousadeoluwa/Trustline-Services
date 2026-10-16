'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { createClient } from '@/lib/supabase/client';

type ServiceType = 'compliance' | 'hr' | null;

export default function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const initialService = searchParams.get('service') as ServiceType;
  const [service, setService] = useState<ServiceType>(initialService);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  
  const supabase = createClient();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const { data: authData, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;
      
      // Successfully logged in - now check user profile products
      const { data: profile, error: profileError } = await supabase
        .from('user_profiles')
        .select('products')
        .eq('id', authData.user?.id)
        .single();
        
      let redirectTo = '/dashboard';
      if (!profileError && profile?.products) {
        const products = profile.products as string[];
        if (products.includes('hr') && !products.includes('compliance')) {
          redirectTo = '/hr';
        } else if (products.includes('compliance') && !products.includes('hr')) {
          redirectTo = '/compliance';
        } else if (products.includes('hr') && products.includes('compliance')) {
          redirectTo = service === 'hr' ? '/hr' : '/compliance';
        }
      }

      router.push(redirectTo);
      router.refresh();
    } catch (err: any) {
      setError(err.message || 'Failed to log in');
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
        },
      });
      if (error) throw error;
    } catch (err: any) {
      setError(err.message || 'Google sign in failed');
    }
  };

  // If no service selected, show the split choice
  if (!service) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-semibold text-trust-blue mb-2">Welcome back</h2>
          <p className="text-trust-blue/70">Please select the service you want to access.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <button 
            onClick={() => setService('compliance')}
            className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-xl hover:border-brand-gold hover:shadow-lg transition-all group bg-white"
          >
            <div className="w-16 h-16 bg-trust-blue/5 text-trust-blue rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              📊
            </div>
            <h3 className="font-display font-semibold text-lg text-trust-blue">Compliance</h3>
            <p className="text-sm text-trust-blue/60 mt-2 text-center">Tax, Filing, and Regulatory compliance</p>
          </button>
          
          <button 
            onClick={() => setService('hr')}
            className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-xl hover:border-brand-gold hover:shadow-lg transition-all group bg-white"
          >
            <div className="w-16 h-16 bg-trust-blue/5 text-trust-blue rounded-full flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              👥
            </div>
            <h3 className="font-display font-semibold text-lg text-trust-blue">HR Center</h3>
            <p className="text-sm text-trust-blue/60 mt-2 text-center">Payroll, Team management, and Benefits</p>
          </button>
        </div>
      </motion.div>
    );
  }

  // Show login form for the selected service
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-8">
        <button 
          onClick={() => !initialService && setService(null)} 
          className={`text-sm text-brand-gold font-medium hover:underline mb-4 ${initialService ? 'invisible' : ''}`}
        >
          ← Back to selection
        </button>
        <h2 className="text-3xl font-display font-semibold text-trust-blue mb-2">
          Log in to {service === 'hr' ? 'HR Center' : 'Compliance'}
        </h2>
        <p className="text-trust-blue/70">Enter your credentials to access your account.</p>
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
            <span className="px-2 bg-white text-gray-500">Or log in with email</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-4">
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
            
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm font-medium text-brand-gold hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Logging in...' : 'Log in'}
          </Button>
        </form>

        <p className="text-center text-sm text-trust-blue/70">
          Don't have an account?{' '}
          <Link href={`/signup?service=${service}`} className="text-brand-gold font-medium hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </motion.div>
  );
}
