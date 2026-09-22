import React, { useState } from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Instagram,
  Compass,
  Sparkles,
  ChevronRight,
  Check,
  Copy,
  CalendarDays,
  Menu as MenuIcon
} from 'lucide-react';
import { SALON_DATA } from '../data/salonData.ts';
import { StyleXLogo } from './StyleXLogo.tsx';
import { ScreenView } from '../types.ts';

interface LaunchScreenProps {
  onNavigate: (view: ScreenView) => void;
  onOpenBooking: () => void;
}

export const LaunchScreen: React.FC<LaunchScreenProps> = ({
  onNavigate,
  onOpenBooking
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(SALON_DATA.phoneNumberClean);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappLink = `https://wa.me/${SALON_DATA.whatsappNumber}?text=Hello%20StyleX%20Signature%20Salon%20Tirur,%20I%20would%20like%20to%20inquire%20about%20booking%20an%20appointment.`;

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between bg-[#021811] text-[#fbf9f5] overflow-x-hidden selection:bg-[#fe753c] selection:text-white">
      {/* Dynamic atmospheric radial background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-sanctuary opacity-95" />
      <div className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#0d4c3c]/30 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#04281e]/40 rounded-full blur-[100px]" />

      {/* TOP HEADER - Exact Layout */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 sm:py-7 flex items-center justify-between">
        {/* Brand Logo & Text */}
        <div
          onClick={() => onNavigate('launch')}
          className="cursor-pointer group transition-opacity hover:opacity-90"
        >
          <StyleXLogo size="sm" showText={true} />
        </div>

        {/* Header Right Action & Status Badge */}
        <div className="flex items-center gap-3">
          {/* Quick Menu Explorer Pill (Subtle addition for web luxury discovery) */}
          <button
            onClick={() => onNavigate('menu')}
            className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-[#c1ecda] bg-[#0a382b]/60 border border-[#144e3d] hover:bg-[#0f4a3a] transition shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#fe753c]" />
            <span>Preview Services</span>
          </button>

          {/* Exact Status Pill Badge from Screenshot */}
          <div
            id="status-badge"
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05281e]/90 border border-[#15513f] shadow-inner select-none"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-[#a6d0be] uppercase">
              SALON OPEN IN TIRUR
            </span>
          </div>
        </div>
      </header>

      {/* MAIN HERO CONTENT STAGE */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 sm:py-10 max-w-4xl mx-auto w-full text-center">
        {/* Central Circular Emblem */}
        <div className="flex flex-col items-center animate-fade-in">
          <StyleXLogo size="hero" className="mb-4" />

          {/* TIRUR FLAGSHIP Chip */}
          <div className="px-4 py-1 rounded-full bg-[#072f23] border border-[#144e3d] shadow-sm mb-4">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] text-[#a6d0be] uppercase">
              TIRUR FLAGSHIP
            </span>
          </div>

          {/* Category Eyebrow */}
          <p className="text-[#fe753c] font-semibold text-xs sm:text-sm tracking-[0.26em] uppercase mb-3 sm:mb-4">
            HAIR · SKIN · BRIDAL & GROOM
          </p>

          {/* Main Headline in Italic Bodoni Moda */}
          <h1 className="font-serif italic font-normal text-3xl sm:text-4xl md:text-5xl lg:text-[58px] text-white tracking-tight leading-[1.18] sm:leading-[1.14] mb-4 sm:mb-5 max-w-3xl">
            Our Official Website is Launching Soon.
          </h1>

          {/* Subtitle Description */}
          <p className="font-sans text-[#c1c8c3] text-sm sm:text-base md:text-[17px] font-normal leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 text-balance">
            We are preparing our bespoke online booking portal. Meanwhile, our
            physical salon doors in Tirur are open daily to welcome you.
          </p>
        </div>

        {/* DIRECT APPOINTMENT DESK CARD - Matching image layout with tactile elevation */}
        <div
          id="appointment-desk-card"
          className="w-full max-w-xl bg-radial-card border border-[#185341]/80 rounded-2xl p-5 sm:p-7 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#226a54]"
        >
          {/* Top Row: Desk Title + Phone + Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6 text-left">
            {/* Left: Phone & Title */}
            <div>
              <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#79a292] uppercase">
                DIRECT APPOINTMENT DESK
              </span>
              <div className="flex items-center gap-2 mt-1">
                <a
                  href={`tel:${SALON_DATA.phoneNumberClean}`}
                  className="font-serif text-2xl sm:text-[28px] font-semibold text-white tracking-wide hover:text-[#fe753c] transition-colors"
                >
                  {SALON_DATA.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="text-[#79a292] hover:text-white p-1 rounded-md transition-colors cursor-pointer"
                  aria-label="Copy phone number"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Right: CALL & CHAT ON WHATSAPP buttons */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              {/* Call Button */}
              <a
                id="call-button"
                href={`tel:${SALON_DATA.phoneNumberClean}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-white border border-[#175240] text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-95 cursor-pointer shadow-sm"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#a6d0be]" />
                <span>CALL</span>
              </a>

              {/* Chat on WhatsApp Button (Terracotta / Burnt Orange) */}
              <a
                id="whatsapp-button"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_6px_20px_rgba(254,117,60,0.3)] active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Bottom Row Divider & Info */}
          <div className="mt-5 pt-4 border-t border-[#134939]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs text-[#a6d0be]">
            <div
              onClick={() => onNavigate('location')}
              className="flex items-center gap-2 text-left cursor-pointer hover:text-white transition-colors group"
            >
              <MapPin className="w-4 h-4 text-[#fe753c] shrink-0 group-hover:scale-110 transition-transform" />
              <span className="truncate">
                {SALON_DATA.addressLine1}, {SALON_DATA.addressLine2}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <Clock className="w-3.5 h-3.5 text-[#79a292] shrink-0" />
              <span>{SALON_DATA.hours}</span>
            </div>
          </div>
        </div>

        {/* BOTTOM EXTERNAL PILLS: Instagram & Google Maps */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          {/* Instagram Pill */}
          <a
            id="instagram-pill"
            href={SALON_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062c21]/90 hover:bg-[#0a382b] border border-[#144e3d] text-xs font-medium text-[#a6d0be] hover:text-white transition-all shadow-sm group"
          >
            <Instagram className="w-3.5 h-3.5 text-[#fe753c] group-hover:scale-110 transition-transform" />
            <span>{SALON_DATA.instagramHandle}</span>
          </a>

          {/* Google Maps Pill */}
          <a
            id="maps-pill"
            href={SALON_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#062c21]/90 hover:bg-[#0a382b] border border-[#144e3d] text-xs font-medium text-[#a6d0be] hover:text-white transition-all shadow-sm group"
          >
            <Compass className="w-3.5 h-3.5 text-[#fe753c] group-hover:scale-110 transition-transform" />
            <span>Locate on Google Maps</span>
          </a>
        </div>

        {/* INTERACTIVE COMPANION ACTIONS - Quick Portal Access */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#083327]/80 hover:bg-[#0e4838] border border-[#165a46] text-xs sm:text-sm font-semibold text-emerald-100 transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#fe753c]" />
            <span>Explore Treatment Menu & Pricing</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#a6d0be]" />
          </button>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#083327]/80 hover:bg-[#0e4838] border border-[#165a46] text-xs sm:text-sm font-semibold text-emerald-100 transition-all shadow-sm cursor-pointer"
          >
            <CalendarDays className="w-4 h-4 text-[#fe753c]" />
            <span>Book Priority Slot</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#a6d0be]" />
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#717975] border-t border-[#093529]/40">
        <p>© {new Date().getFullYear()} StyleX Signature Salon. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Tirur, Malappuram, Kerala</span>
          <span>•</span>
          <span className="text-[#a6d0be]">Luxury Botanical Sanctuary</span>
        </p>
      </footer>
    </div>
  );
};
