import React from 'react';
import { Home, MapPin, PhoneCall, MessageCircle } from 'lucide-react';
import { ScreenView } from '../types.ts';
import { SALON_DATA } from '../data/salonData.ts';

interface NavigationDockProps {
  currentView: ScreenView;
  onNavigate: (view: ScreenView) => void;
}

export const NavigationDock: React.FC<NavigationDockProps> = ({
  currentView,
  onNavigate
}) => {
  return (
    <div className="hidden sm:flex fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 px-3 py-2 rounded-full bg-[#05281e]/90 backdrop-blur-xl border border-[#185341] shadow-[0_12px_36px_rgba(0,0,0,0.6)] items-center gap-1 sm:gap-2">
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

      <div className="h-4 w-px bg-[#185341] mx-0.5" />

      {/* Quick Call */}
      <a
        href={`tel:${SALON_DATA.phoneNumberClean}`}
        title="Call Salon"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-[#073327] hover:bg-[#0c4737] text-[#c1ecda] hover:text-white border border-[#175240] transition-all cursor-pointer active:scale-95"
      >
        <PhoneCall className="w-3.5 h-3.5 text-[#a6d0be]" />
        <span className="hidden sm:inline">Call</span>
      </a>

      {/* Quick WhatsApp */}
      <a
        href={`https://wa.me/${SALON_DATA.whatsappNumber}?text=${encodeURIComponent('Hello StyleX Tirur Flagship, I would like to inquire about appointments and availability.')}`}
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide bg-[#fe753c] hover:bg-[#e8652d] text-white shadow-sm transition-all cursor-pointer active:scale-95 whitespace-nowrap"
      >
        <MessageCircle className="w-3.5 h-3.5" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
};
