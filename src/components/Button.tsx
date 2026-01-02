import { ButtonHTMLAttributes, ReactNode } from 'react';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'danger' | 'glass' | 'glass-icon';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
  isActive?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  children,
  fullWidth = false,
  className = '',
  disabled,
  isActive = false,
  ...props
}: ButtonProps) {
  const baseClasses = 'font-semibold transition-all duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-4 focus-visible:ring-[#B3CFE5]/30 focus-visible:ring-offset-2 inline-flex items-center justify-center gap-2';
  
  const variantClasses = {
    primary: 'bg-[#B3CFE5] text-white hover:bg-[#9ab8d4] active:bg-[#8aa7c3] shadow-md hover:shadow-lg active:shadow-sm rounded-xl transform hover:-translate-y-0.5 active:translate-y-0',
    secondary: 'bg-white text-[#B3CFE5] border-2 border-[#B3CFE5] hover:bg-[#B3CFE5] hover:text-white active:bg-[#9ab8d4] shadow-sm hover:shadow-md rounded-xl transform hover:-translate-y-0.5 active:translate-y-0',
    outline: 'bg-transparent text-[#4b5563] border border-[#d1d5db] hover:bg-[#f9fafb] hover:border-[#B3CFE5] active:bg-[#f3f4f6] rounded-xl',
    danger: 'bg-[#ef4444] text-white hover:bg-[#dc2626] active:bg-[#b91c1c] shadow-md hover:shadow-lg active:shadow-sm rounded-xl transform hover:-translate-y-0.5 active:translate-y-0',
    glass: `glass-teal-button rounded-full text-white ${isActive ? 'glass-teal-button-active' : ''}`,
    'glass-icon': 'glass-teal-icon rounded-full text-white p-3 hover:-translate-y-0.5 active:translate-y-0',
  };

  const sizeClasses = {
    sm: variant === 'glass-icon' ? 'p-2' : 'px-4 py-2 text-sm min-h-[36px]',
    md: variant === 'glass-icon' ? 'p-3' : 'px-6 py-3 text-base min-h-[44px]',
    lg: variant === 'glass-icon' ? 'p-4' : 'px-8 py-4 text-lg min-h-[52px]',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading && <LoadingSpinner size="sm" />}
      {children}
    </button>
  );
}