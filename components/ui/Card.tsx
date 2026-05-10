import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'sky' | 'navy' | 'bordered';
  className?: string;
  hover?: boolean;
}

export default function Card({ 
  children, 
  variant = 'default',
  className,
  hover = true 
}: CardProps) {
  const baseStyles = 'rounded-lg p-6 transition-all duration-300 border';
  
  const variants = {
    default: 'bg-white border-border-grey hover:border-brand-gold',
    sky: 'bg-accent-sky border-border-grey hover:border-brand-gold',
    navy: 'bg-trust-blue text-white border-trust-blue hover:border-brand-gold',
    bordered: 'bg-white border-2 border-trust-blue hover:border-brand-gold',
  };

  const hoverStyles = hover 
    ? 'hover:shadow-lg hover:-translate-y-1 hover:scale-102 cursor-pointer' 
    : '';

  return (
    <div className={clsx(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
}
