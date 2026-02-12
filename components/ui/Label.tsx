import { LabelHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
  className?: string;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label
      className={clsx(
        'block text-sm font-medium text-trust-blue',
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}
