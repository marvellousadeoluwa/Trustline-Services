import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const buttonStyles = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        navy: 'bg-trust-blue text-white hover:bg-trust-blue/90 focus:ring-trust-blue',
        gold: 'bg-brand-gold text-white hover:bg-brand-gold/95 focus:ring-brand-gold',
        outline: 'border border-trust-blue text-trust-blue bg-white hover:bg-trust-blue/5 focus:ring-trust-blue',
      },
      size: {
        default: 'px-6 py-3',
        sm: 'px-3 py-2 text-sm',
        lg: 'px-8 py-3 text-base',
      },
    },
    defaultVariants: {
      variant: 'navy',
      size: 'default',
    },
  }
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonStyles> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={twMerge(buttonStyles({ variant, size }), className)} {...props}>
      {children}
    </button>
  );
}
