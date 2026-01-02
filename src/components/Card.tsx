import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  className = '', 
  hover = false,
  padding = 'md' 
}: CardProps) {
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-12',
  };

  const hoverClass = hover ? 'hover:shadow-xl transition-shadow' : '';

  return (
    <div 
      className={`bg-white rounded-2xl shadow-lg border border-rose-100 ${paddingClasses[padding]} ${hoverClass} ${className}`}
    >
      {children}
    </div>
  );
}
