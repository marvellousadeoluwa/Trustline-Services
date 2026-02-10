import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'navy' | 'gold' | 'outline';
  children: ReactNode;
  className?: string;
}

export default function Button({ 
  variant = 'navy', 
  children, 
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    navy: 'bg-trust-blue text-white hover:bg-opacity-90 focus:ring-trust-blue',
    gold: 'bg-brand-gold text-white hover:bg-opacity-90 focus:ring-brand-gold',
    outline: 'border-2 border-trust-blue text-trust-blue hover:bg-trust-blue hover:text-white focus:ring-trust-blue',
  };

  return (
    <button
      className={clsx(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
}
