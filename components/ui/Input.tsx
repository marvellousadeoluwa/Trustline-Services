'use client';

import { InputHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const inputStyles = cva('w-full rounded-lg bg-white px-4 py-3 text-trust-blue placeholder:text-trust-blue/50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-0', {
  variants: {
    intent: {
      normal: 'border-border-grey focus:ring-brand-gold',
      error: 'border-red-500 focus:ring-red-500',
    },
    inputSize: {
      md: '',
      sm: 'py-2 px-3 text-sm',
    },
  },
  defaultVariants: {
    intent: 'normal',
    inputSize: 'md',
  },
});

interface InputProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof inputStyles> {
  error?: boolean;
  errorMessage?: string;
}

export default function Input({ className, intent, inputSize, error, errorMessage, onFocus, onBlur, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const computedIntent = error ? 'error' : intent ?? 'normal';

  return (
    <motion.div
      className="relative w-full"
      animate={{
        boxShadow: error
          ? '0 0 0 3px rgba(239, 68, 68, 0.06)'
          : isFocused
          ? '0 0 0 3px rgba(200, 154, 43, 0.06)'
          : 'none',
      }}
      transition={{ duration: 0.2 }}
    >
      <input
        className={twMerge(inputStyles({ intent: computedIntent, inputSize }), className)}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />

      {error && (
        <motion.div
          className="absolute right-3 top-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <AlertCircle className="w-5 h-5 text-red-500" />
        </motion.div>
      )}

      {error && errorMessage && (
        <motion.p
          className="mt-1 text-sm text-red-500 font-medium"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          {errorMessage}
        </motion.p>
      )}
    </motion.div>
  );
}

export { Input };

