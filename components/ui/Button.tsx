import { ButtonHTMLAttributes, ReactNode } from 'react';
import { motion } from 'framer-motion';
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
  disabled = false,
  ...props 
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';
  
  const variants = {
    navy: 'bg-trust-blue text-white focus:ring-trust-blue',
    gold: 'bg-brand-gold text-white focus:ring-brand-gold',
    outline: 'border-2 border-trust-blue text-trust-blue focus:ring-trust-blue',
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: variant === 'outline' 
        ? '0 12px 24px rgba(0, 51, 102, 0.15)'
        : variant === 'gold'
        ? '0 12px 24px rgba(200, 154, 43, 0.3)'
        : '0 12px 24px rgba(0, 51, 102, 0.3)',
    },
    tap: {
      scale: 0.98,
    }
  };

  const shimmerVariants = {
    hover: {
      x: '100%',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      }
    }
  };

  return (
    <motion.button
      className={clsx(baseStyles, variants[variant], className, {
        'opacity-60 cursor-not-allowed': disabled
      })}
      variants={buttonVariants}
      whileHover={!disabled ? 'hover' : {}}
      whileTap={!disabled ? 'tap' : {}}
      disabled={disabled}
      onClick={props.onClick}
      type={props.type}
      title={props.title}
      aria-disabled={disabled}
    >
      {/* Shimmer effect overlay */}
      {!disabled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover:opacity-20"
          initial={{ x: '-100%' }}
          whileHover={shimmerVariants.hover}
          style={{ pointerEvents: 'none' }}
        />
      )}
      
      {/* Button content with text emphasis */}
      <motion.span
        className="relative z-10 block"
        whileHover={!disabled ? { letterSpacing: '0.05em' } : {}}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
