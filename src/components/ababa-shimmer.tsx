import React from 'react';

interface AbabaShimmerProps {
  width?: string;
  height?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  className?: string;
}

export function AbabaShimmer({ 
  width = 'w-full', 
  height = 'h-4',
  rounded = 'md',
  className = '' 
}: AbabaShimmerProps) {
  const roundedStyles = {
    sm: 'rounded-[0.5rem]',
    md: 'rounded-[0.75rem]',
    lg: 'rounded-[1rem]',
    xl: 'rounded-[1.5rem]',
    full: 'rounded-full'
  };
  
  return (
    <div 
      className={`${width} ${height} ${roundedStyles[rounded]} bg-[#E5E7EB] overflow-hidden relative ${className}`}
    >
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
    </div>
  );
}

export function AbabaCardSkeleton() {
  return (
    <div className="bg-white rounded-[1rem] p-4 border border-[#E5E7EB]">
      <AbabaShimmer height="h-40" rounded="lg" className="mb-3" />
      <div className="space-y-2">
        <AbabaShimmer width="w-3/4" height="h-5" />
        <AbabaShimmer width="w-1/2" height="h-4" />
        <AbabaShimmer width="w-full" height="h-3" className="mt-3" />
        <AbabaShimmer width="w-full" height="h-10" rounded="lg" className="mt-4" />
      </div>
    </div>
  );
}

<style jsx global>{`
  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
  .animate-shimmer {
    animation: shimmer 2s infinite;
  }
`}</style>
