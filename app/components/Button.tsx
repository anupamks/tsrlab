import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  onClick,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 whitespace-nowrap';
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-[#ff3333] to-[#f97316] text-white shadow-lg shadow-[#ff3333]/30 hover:shadow-xl hover:shadow-[#ff3333]/40 hover:scale-105 w-full sm:w-auto',
    secondary: 'bg-transparent text-[#1f2937] hover:text-[#ff3333] hover:scale-105 w-full sm:w-auto',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      {icon && <span className="w-3 h-3">{icon}</span>}
    </button>
  );
}