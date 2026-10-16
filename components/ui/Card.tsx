import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const cardStyles = cva('rounded-lg p-6 transition-all duration-300 border', {
  variants: {
    variant: {
      default: 'bg-white border-border-grey',
      sky: 'bg-accent-sky border-border-grey',
      navy: 'bg-trust-blue text-white border-trust-blue',
      bordered: 'bg-white border-2 border-trust-blue',
      glass: 'glass-effect text-trust-blue',
      'glass-navy': 'glass-effect-navy text-white',
      'glass-sky': 'glass-effect-sky text-trust-blue',
    },
    hover: {
      true: 'hover:shadow-lg hover:-translate-y-1 cursor-pointer',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    hover: true,
  },
});

interface CardProps extends VariantProps<typeof cardStyles> {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, variant, hover, className }: CardProps) {
  return <div className={twMerge(cardStyles({ variant, hover }), className)}>{children}</div>;
}
