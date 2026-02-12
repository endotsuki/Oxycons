import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ButtonVariant = 'primary' | 'secondary';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

export const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '' }: ButtonProps) => {
  const baseClasses = 'text-base font-semibold transition-all flex items-center justify-center';

  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-white text-black hover:bg-white/20 hover:text-white',
    secondary: 'border border-white/10 text-white hover:bg-white/5',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'px-6 py-2 text-sm',
    md: 'px-10 py-5 text-base',
    lg: 'px-14 py-6 text-lg',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};
