import { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'sky' | 'gradient';
  spacing?: 'sm' | 'md' | 'lg';
}

export default function Section({ 
  children, 
  className,
  background = 'white',
  spacing = 'lg'
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    sky: 'bg-accent-sky',
    gradient: 'bg-gradient-to-br from-white to-accent-sky',
  };

  const spacings = {
    sm: 'py-section-sm',
    md: 'py-16',
    lg: 'py-section',
  };

  return (
    <section className={clsx(backgrounds[background], spacings[spacing], className)}>
      {children}
    </section>
  );
}
