import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export function QuantitySelector({ value, onChange, min = 1, max = 10 }: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={handleDecrement}
        disabled={value <= min}
        className="
          w-11 h-11 flex items-center justify-center 
          bg-[#F5F5F7] rounded-full text-[#1D1D1F] 
          hover:bg-[#E8E8ED] 
          disabled:opacity-30 disabled:cursor-not-allowed 
          transition-all duration-200 
          active:scale-90
          shadow-sm
        "
        aria-label="Decrease quantity"
      >
        <Minus size={18} strokeWidth={2.5} />
      </button>
      
      <div className="min-w-[48px] text-center">
        <span className="text-[#1D1D1F] font-semibold text-lg tracking-tight">{value}</span>
      </div>
      
      <button
        onClick={handleIncrement}
        disabled={value >= max}
        className="
          w-11 h-11 flex items-center justify-center 
          bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] 
          rounded-full text-white 
          hover:brightness-110
          disabled:opacity-30 disabled:cursor-not-allowed 
          transition-all duration-200 
          active:scale-90
          shadow-lg shadow-[#7C3AED]/25
        "
        aria-label="Increase quantity"
      >
        <Plus size={18} strokeWidth={2.5} />
      </button>
    </div>
  );
}
