import React from 'react';

interface AbabaTextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function AbabaTextField({ 
  label, 
  error, 
  helperText,
  leftIcon,
  rightIcon,
  className = '',
  ...props 
}: AbabaTextFieldProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-[#1F2937] mb-2">
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
            {leftIcon}
          </div>
        )}
        
        <input
          className={`w-full px-4 py-3 bg-[#F9FAFB] border border-[#E5E7EB] rounded-[0.75rem] 
                     text-[#1F2937] placeholder:text-[#9CA3AF] 
                     focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent
                     transition-all duration-200
                     ${leftIcon ? 'pl-10' : ''} 
                     ${rightIcon ? 'pr-10' : ''}
                     ${error ? 'border-red-500 focus:ring-red-500' : ''}
                     ${className}`}
          {...props}
        />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1.5 text-sm text-red-500">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1.5 text-sm text-[#6B7280]">{helperText}</p>
      )}
    </div>
  );
}
