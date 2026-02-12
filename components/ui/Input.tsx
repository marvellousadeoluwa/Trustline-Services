import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

export default function Input({ className, error, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'w-full rounded-lg border bg-white px-4 py-3 text-trust-blue placeholder:text-trust-blue/50',
        'focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-brand-gold',
        'transition-colors',
        error
          ? 'border-red-500 focus:ring-red-500'
          : 'border-border-grey focus:border-brand-gold',
        className
      )}
      {...props}
    />
  );
}
