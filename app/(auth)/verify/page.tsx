'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { createClient } from '@/lib/supabase/client';
import { useState } from 'react';

export default function VerifyPage() {
  const [isResending, setIsResending] = useState(false);
  const [message, setMessage] = useState('');
  
  const supabase = createClient();

  const handleResend = async () => {
    setIsResending(true);
    setMessage('');
    
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user?.email) {
        const { error } = await supabase.auth.resend({
          type: 'signup',
          email: user.email,
        });
        
        if (error) throw error;
        setMessage('Verification email resent successfully!');
      } else {
        setMessage('Could not find your email. Please try logging in again.');
      }
    } catch (err: any) {
      setMessage(err.message || 'Failed to resend email');
    } finally {
      setIsResending(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <div className="w-16 h-16 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto text-2xl">
        🔒
      </div>
      <h2 className="text-2xl font-display font-semibold text-trust-blue">Verify your email</h2>
      <p className="text-trust-blue/70">
        You need to verify your email address before you can access the secure dashboard. 
        Please check your inbox for a verification link.
      </p>
      
      {message && (
        <div className="p-3 bg-blue-50 text-blue-700 rounded text-sm">
          {message}
        </div>
      )}

      <div className="pt-4 flex flex-col gap-3">
        <Button onClick={handleResend} disabled={isResending} className="w-full">
          {isResending ? 'Resending...' : 'Resend verification email'}
        </Button>
        <Link href="/login" className="text-trust-blue/60 hover:text-brand-gold text-sm font-medium transition-colors">
          Back to Login
        </Link>
      </div>
    </motion.div>
  );
}
