import React from 'react';
import { X } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from './ui/sheet';

interface AbabaBottomSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  showCloseButton?: boolean;
}

export function AbabaBottomSheet({
  open,
  onOpenChange,
  title,
  description,
  children,
  showCloseButton = true
}: AbabaBottomSheetProps) {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        side="bottom" 
        className="bg-white rounded-t-[1.5rem] border-t-0 px-4 pb-8"
      >
        {/* Drag Handle */}
        <div className="w-12 h-1 bg-[#E5E7EB] rounded-full mx-auto mb-4 mt-2"></div>
        
        <SheetHeader className="text-left space-y-2 mb-4">
          <div className="flex items-start justify-between gap-4">
            {title && (
              <SheetTitle className="text-[#1F2937]">{title}</SheetTitle>
            )}
            {showCloseButton && (
              <SheetClose className="p-2 hover:bg-[#F3F4F6] rounded-full transition-colors">
                <X size={20} className="text-[#6B7280]" />
              </SheetClose>
            )}
          </div>
          {description && (
            <SheetDescription className="text-[#6B7280]">
              {description}
            </SheetDescription>
          )}
        </SheetHeader>
        
        <div className="overflow-y-auto max-h-[70vh]">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
}
