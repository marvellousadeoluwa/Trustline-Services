import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const sectionStyles = cva('', {
  variants: {
    background: {
      white: 'bg-white',
      sky: 'bg-accent-sky',
      gradient: 'bg-gradient-to-br from-white to-accent-sky',
    },
    spacing: {
      sm: 'py-section-sm',
      md: 'py-16',
      lg: 'py-section',
    },
  },
  defaultVariants: {
    background: 'white',
    spacing: 'lg',
  },
});

interface SectionProps extends VariantProps<typeof sectionStyles> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, background, spacing, id }: SectionProps) {
  return (
    <section id={id} className={twMerge(sectionStyles({ background, spacing }), className)}>
      {children}
    </section>
  );
}
