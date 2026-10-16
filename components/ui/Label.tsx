import { LabelHTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={twMerge('block text-sm font-medium text-trust-blue', className)} {...props}>
      {children}
    </label>
  );
}

export { Label };

