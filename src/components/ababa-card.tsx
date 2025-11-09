import React from 'react';

interface AbabaCardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function AbabaCard({ 
  children, 
  variant = 'default',
  padding = 'md',
  className = '',
  onClick
}: AbabaCardProps) {
  const baseStyles = 'bg-white rounded-[1rem] transition-all duration-200';
  
  const variantStyles = {
    default: 'border border-[#E5E7EB]',
    elevated: 'shadow-lg hover:shadow-xl',
    outlined: 'border-2 border-[#7C3AED]'
  };
  
  const paddingStyles = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  };
  
  const interactiveStyles = onClick ? 'cursor-pointer hover:scale-[1.02]' : '';
  
  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${interactiveStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

interface AbabaOfferCardProps {
  image?: string;
  title: string;
  restaurant: string;
  discount: string;
  description?: string;
  onClaim?: () => void;
}

export function AbabaOfferCard({ 
  image, 
  title, 
  restaurant, 
  discount, 
  description,
  onClaim 
}: AbabaOfferCardProps) {
  return (
    <AbabaCard variant="elevated" padding="sm" className="overflow-hidden">
      {image && (
        <div className="w-full h-40 bg-[#F3F4F6] rounded-[0.75rem] mb-3 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      
      <div className="space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="text-[#1F2937] mb-1">{title}</h3>
            <p className="text-[#6B7280] text-sm">{restaurant}</p>
          </div>
          <div className="bg-[#7C3AED] text-white px-3 py-1 rounded-full text-sm shrink-0">
            {discount}
          </div>
        </div>
        
        {description && (
          <p className="text-[#9CA3AF] text-sm">{description}</p>
        )}
        
        {onClaim && (
          <button
            onClick={onClaim}
            className="w-full bg-[#7C3AED] text-white py-2.5 rounded-[0.75rem] hover:bg-[#6D28D9] transition-colors active:scale-95 mt-3"
          >
            Claim Offer
          </button>
        )}
      </div>
    </AbabaCard>
  );
}
