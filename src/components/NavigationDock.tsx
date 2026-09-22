import React from 'react';
import { Home, Sparkles, CalendarDays, MapPin } from 'lucide-react';
import { ScreenView } from '../types.ts';

interface NavigationDockProps {
  currentView: ScreenView;
  onNavigate: (view: ScreenView) => void;
  onOpenBooking: () => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  currentView,
  onNavigate,
  onOpenBooking
}) => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#05281e]/90 backdrop-blur-xl border border-[#185341] shadow-[0_12px_36px_rgba(0,0,0,0.6)] flex items-center gap-1 sm:gap-2">
      {/* Launch Notice Tab */}
      <button
        onClick={() => onNavigate('launch')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
          currentView === 'launch'
            ? 'bg-[#0f4637] text-white border border-[#21735a] shadow-sm'
            : 'text-[#a6d0be] hover:text-white hover:bg-[#073327]'
        }`}
      >
        <Home className="w-3.5 h-3.5" />
        <span className="hidden sm:inline">Launch Notice</span>
        <span className="sm:hidden">Notice</span>
      </button>

      {/* Services Menu Tab */}
      <button
        onClick={() => onNavigate('menu')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
          currentView === 'menu'
            ? 'bg-[#0f4637] text-white border border-[#21735a] shadow-sm'
            : 'text-[#a6d0be] hover:text-white hover:bg-[#073327]'
        }`}
      >
        <Sparkles className="w-3.5 h-3.5 text-[#fe753c]" />
        <span className="hidden sm:inline">Services & Menu</span>
        <span className="sm:hidden">Services</span>
      </button>

      {/* Location Tab */}
      <button
        onClick={() => onNavigate('location')}
        className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
          currentView === 'location'
            ? 'bg-[#0f4637] text-white border border-[#21735a] shadow-sm'
            : 'text-[#a6d0be] hover:text-white hover:bg-[#073327]'
        }`}
      >
        <MapPin className="w-3.5 h-3.5 text-[#fe753c]" />
        <span className="hidden sm:inline">Salon & Map</span>
        <span className="sm:hidden">Location</span>
      </button>

      {/* Quick Booking Button */}
      <button
        onClick={onOpenBooking}
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-[#fe753c] hover:bg-[#e8652d] text-white shadow-sm transition-all cursor-pointer active:scale-95 ml-1"
      >
        <CalendarDays className="w-3.5 h-3.5" />
        <span>Book Slot</span>
      </button>
    </div>
  );
};
