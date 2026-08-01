'use client';

import { InputHTMLAttributes, useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export default function Input({ 
  className, 
  error, 
  errorMessage,
  onFocus,
  onBlur,
  ...props 
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <motion.div
      className="relative w-full"
      animate={{
        boxShadow: error
          ? '0 0 0 3px rgba(239, 68, 68, 0.1)'
          : isFocused
          ? '0 0 0 3px rgba(200, 154, 43, 0.1)'
          : 'none',
      }}
      transition={{ duration: 0.2 }}
    >
      <input
        className={clsx(
          'w-full rounded-lg border bg-white px-4 py-3 text-trust-blue placeholder:text-trust-blue/50',
          'focus:outline-none focus:ring-2 focus:ring-offset-0',
          'transition-all duration-300',
          error
            ? 'border-red-500 focus:ring-red-500'
            : isFocused
            ? 'border-brand-gold focus:ring-brand-gold'
            : 'border-border-grey focus:ring-brand-gold',
          className
        )}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      
      {/* Error state indicator - animated border pulse */}
      {error && (
        <motion.div
          className="absolute right-3 top-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.6, repeat: Infinity }}
        >
          <svg
            className="w-5 h-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </motion.div>
      )}

      {/* Error message with slide-in animation */}
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
