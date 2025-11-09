import React from 'react';

interface AbabaButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export function AbabaButton({ 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  children, 
  className = '',
  ...props 
}: AbabaButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed font-medium active:scale-[0.97] will-change-transform';
  
  const variantStyles = {
    primary: `
      bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] 
      text-white 
      shadow-lg shadow-[#7C3AED]/25
      hover:shadow-xl hover:shadow-[#7C3AED]/30
      hover:brightness-110
      active:shadow-md
    `,
    secondary: `
      bg-[#F5F5F7] 
      text-[#1D1D1F] 
      hover:bg-[#E8E8ED]
      active:bg-[#E8E8ED]
      shadow-sm
    `,
    outline: `
      bg-white/80
      backdrop-blur-xl
      border border-[#E8E8ED]
      text-[#7C3AED] 
      hover:bg-white
      hover:border-[#7C3AED]/20
      hover:shadow-md
      active:scale-[0.97]
    `
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-[0.875rem]',
    md: 'px-6 py-3 rounded-[1rem]',
    lg: 'px-8 py-4 rounded-[1.125rem]'
  };
  
  const widthStyle = fullWidth ? 'w-full' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </button>
  );
}
