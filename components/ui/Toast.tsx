'use client';

import { useEffect } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import { Check, X, Loader2 } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'loading';

interface ToastProps {
  message: string;
  type: ToastType;
  onDismiss: () => void;
  duration?: number;
}

const toastStyles = cva('fixed bottom-6 left-1/2 z-[100] -translate-x-1/2 rounded-lg px-6 py-4 shadow-lg motion-safe:animate-[fadeInUp_0.3s_ease-out]', {
  variants: {
    type: {
      success: 'bg-green-600 text-white',
      error: 'bg-red-600 text-white',
      loading: 'bg-trust-blue text-white',
    },
  },
  defaultVariants: {
    type: 'loading',
  },
});

export default function Toast({ message, type, onDismiss, duration = 5000 }: ToastProps) {
  useEffect(() => {
    if (type === 'loading') return;
    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [type, duration, onDismiss]);

  return (
    <div role="alert" className={twMerge(toastStyles({ type }))}>
      <div className="flex items-center gap-3">
        {type === 'success' && <Check className="h-5 w-5 shrink-0" />}
        {type === 'error' && <X className="h-5 w-5 shrink-0" />}
        {type === 'loading' && <Loader2 className="h-5 w-5 shrink-0 animate-spin" />}
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}
