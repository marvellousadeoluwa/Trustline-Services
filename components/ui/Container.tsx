import { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const containerStyles = cva('mx-auto px-4 sm:px-6 lg:px-8', {
  variants: {
    size: {
      sm: 'max-w-2xl',
      md: 'max-w-4xl',
      lg: 'max-w-6xl',
      xl: 'max-w-7xl',
      full: 'max-w-full',
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});

interface ContainerProps extends VariantProps<typeof containerStyles> {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className, size }: ContainerProps) {
  return <div className={twMerge(containerStyles({ size }), className)}>{children}</div>;
}
