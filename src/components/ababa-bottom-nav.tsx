import React from 'react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

interface AbabaBottomNavProps {
  items: NavItem[];
  activeItem: string;
  onItemClick: (id: string) => void;
}

export function AbabaBottomNav({ items, activeItem, onItemClick }: AbabaBottomNavProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-[#E8E8ED]/50 z-50 safe-area-inset-bottom">
      <div className="flex items-center justify-around px-2 py-2 max-w-2xl mx-auto">
        {items.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onItemClick(item.id)}
              className={`
                flex flex-col items-center justify-center gap-1 px-4 py-2.5 rounded-[1rem] 
                transition-all duration-300 min-w-[64px] relative
                active:scale-90
                ${isActive 
                  ? 'bg-[#7C3AED]/10' 
                  : 'hover:bg-[#F5F5F7]'
                }
              `}
            >
              <div className={`
                transition-all duration-300 transform
                ${isActive ? 'text-[#7C3AED] scale-110' : 'text-[#98989D]'}
              `}>
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
              </div>
              <span className={`
                text-[10px] tracking-tight transition-all duration-300
                ${isActive 
                  ? 'text-[#7C3AED] opacity-100' 
                  : 'text-[#6E6E73] opacity-70'
                }
              `}>
                {item.label}
              </span>
              
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#7C3AED] rounded-full animate-scale-in" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
