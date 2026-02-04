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
  const baseStyles = 'rounded-lg p-6 transition-all duration-300';
  
  const variants = {
    default: 'bg-white border border-border-grey',
    sky: 'bg-accent-sky border border-border-grey',
    navy: 'bg-trust-blue text-white border border-trust-blue',
    bordered: 'bg-white border-2 border-trust-blue',
  };

  const hoverStyles = hover ? 'hover:shadow-lg hover:-translate-y-1' : '';

  return (
    <div className={clsx(baseStyles, variants[variant], hoverStyles, className)}>
      {children}
    </div>
  );
}
