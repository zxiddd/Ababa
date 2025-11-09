import React from 'react';
import { ArrowLeft, Search, Bell, Menu } from 'lucide-react';

interface AbabaNavbarProps {
  title?: string;
  subtitle?: string;
  showBack?: boolean;
  onBack?: () => void;
  showSearch?: boolean;
  onSearch?: () => void;
  showNotifications?: boolean;
  notificationCount?: number;
  onNotifications?: () => void;
  showMenu?: boolean;
  onMenu?: () => void;
  transparent?: boolean;
}

export function AbabaNavbar({
  title = 'Ababa',
  subtitle,
  showBack = false,
  onBack,
  showSearch = false,
  onSearch,
  showNotifications = false,
  notificationCount = 0,
  onNotifications,
  showMenu = false,
  onMenu,
  transparent = false
}: AbabaNavbarProps) {
  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      transparent 
        ? 'bg-transparent' 
        : 'bg-white/80 backdrop-blur-xl border-b border-[#E8E8ED]/50'
    }`}>
      <div className="px-4 py-3 safe-area-inset-top">
        <div className="flex items-center justify-between max-w-2xl mx-auto">
          {/* Left Section */}
          <div className="flex items-center gap-3 flex-1 min-w-0">
            {showBack && (
              <button
                onClick={onBack}
                className="p-2 hover:bg-[#F5F5F7] rounded-full transition-all duration-200 active:scale-90"
                aria-label="Go back"
              >
                <ArrowLeft size={20} className="text-[#1D1D1F]" strokeWidth={2.5} />
              </button>
            )}
            
            {showMenu && (
              <button
                onClick={onMenu}
                className="p-2 hover:bg-[#F5F5F7] rounded-full transition-all duration-200 active:scale-90"
                aria-label="Menu"
              >
                <Menu size={20} className="text-[#1D1D1F]" strokeWidth={2.5} />
              </button>
            )}
            
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h1 className="text-[#7C3AED] truncate tracking-tight">{title}</h1>
              </div>
              {subtitle && (
                <p className="text-sm text-[#6E6E73] truncate">{subtitle}</p>
              )}
            </div>
          </div>
          
          {/* Right Section */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {showSearch && (
              <button
                onClick={onSearch}
                className="p-2 hover:bg-[#F5F5F7] rounded-full transition-all duration-200 active:scale-90"
                aria-label="Search"
              >
                <Search size={20} className="text-[#1D1D1F]" strokeWidth={2.5} />
              </button>
            )}
            
            {showNotifications && (
              <button
                onClick={onNotifications}
                className="relative p-2 hover:bg-[#F5F5F7] rounded-full transition-all duration-200 active:scale-90"
                aria-label="Notifications"
              >
                <Bell size={20} className="text-[#1D1D1F]" strokeWidth={2.5} />
                {notificationCount > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-gradient-to-br from-[#FF3B30] to-[#FF2D55] text-white text-[10px] min-w-[16px] h-4 px-1 rounded-full flex items-center justify-center shadow-md animate-scale-in">
                    {notificationCount > 9 ? '9+' : notificationCount}
                  </span>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
