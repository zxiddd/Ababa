import React from 'react';
import { Clock } from 'lucide-react';

export interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

interface SlotSelectorProps {
  slots: TimeSlot[];
  selectedSlot: string | null;
  onSelectSlot: (slotId: string) => void;
}

export function SlotSelector({ slots, selectedSlot, onSelectSlot }: SlotSelectorProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Clock size={18} className="text-[#6E6E73]" strokeWidth={2.5} />
        <label className="text-[#1D1D1F] font-medium tracking-tight">Select Time Slot</label>
      </div>
      
      <div className="grid grid-cols-3 gap-2.5">
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          const isAvailable = slot.available;
          
          return (
            <button
              key={slot.id}
              onClick={() => isAvailable && onSelectSlot(slot.id)}
              disabled={!isAvailable}
              className={`
                py-3.5 px-2 rounded-[0.875rem] transition-all duration-300 text-sm font-medium tracking-tight
                ${isSelected 
                  ? 'bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] text-white shadow-lg shadow-[#7C3AED]/25 scale-105 ring-2 ring-[#7C3AED]/20 ring-offset-2' 
                  : isAvailable
                    ? 'bg-[#FAFAFA] text-[#1D1D1F] hover:bg-[#F5F5F7] border border-[#E8E8ED] hover:border-[#7C3AED]/20 hover:shadow-md'
                    : 'bg-[#FAFAFA] text-[#98989D] opacity-40 cursor-not-allowed'
                }
                ${isAvailable && !isSelected ? 'active:scale-95' : ''}
              `}
            >
              {slot.time}
            </button>
          );
        })}
      </div>
    </div>
  );
}
