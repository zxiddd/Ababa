import React from 'react';
import { X } from 'lucide-react';

interface AbabaChipProps {
  label: string;
  variant?: 'filled' | 'outlined' | 'soft';
  size?: 'sm' | 'md';
  onDelete?: () => void;
  onClick?: () => void;
  selected?: boolean;
  icon?: React.ReactNode;
}

export function AbabaChip({ 
  label, 
  variant = 'filled',
  size = 'md',
  onDelete,
  onClick,
  selected = false,
  icon
}: AbabaChipProps) {
  const baseStyles = 'inline-flex items-center gap-1.5 transition-all duration-200 whitespace-nowrap';
  
  const variantStyles = {
    filled: selected 
      ? 'bg-[#7C3AED] text-white' 
      : 'bg-[#F3F4F6] text-[#1F2937] hover:bg-[#E5E7EB]',
    outlined: selected
      ? 'border-2 border-[#7C3AED] bg-[#7C3AED] text-white'
      : 'border-2 border-[#E5E7EB] text-[#1F2937] hover:border-[#7C3AED]',
    soft: selected
      ? 'bg-[#7C3AED]/10 text-[#7C3AED] border border-[#7C3AED]'
      : 'bg-[#7C3AED]/5 text-[#7C3AED] hover:bg-[#7C3AED]/10'
  };
  
  const sizeStyles = {
    sm: 'px-2.5 py-1 text-xs rounded-full',
    md: 'px-3.5 py-1.5 text-sm rounded-full'
  };
  
  const interactiveStyles = onClick ? 'cursor-pointer active:scale-95' : '';
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${interactiveStyles}`}
      onClick={onClick}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{label}</span>
      {onDelete && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}
