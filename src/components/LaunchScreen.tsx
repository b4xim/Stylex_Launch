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
  Copy
} from 'lucide-react';
import { SALON_DATA } from '../data/salonData.ts';
import { StyleXLogo } from './StyleXLogo.tsx';
import { ScreenView } from '../types.ts';

interface LaunchScreenProps {
  onNavigate: (view: ScreenView) => void;
}

export const LaunchScreen: React.FC<LaunchScreenProps> = ({
  onNavigate
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
    <div className="relative min-h-screen lg:h-screen lg:max-h-screen lg:overflow-hidden w-full flex flex-col justify-between bg-[#021811] text-[#fbf9f5] overflow-x-hidden selection:bg-[#fe753c] selection:text-white">
      {/* Dynamic atmospheric radial background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-sanctuary opacity-95" />
      <div className="pointer-events-none absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#0d4c3c]/30 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#04281e]/40 rounded-full blur-[100px]" />

      {/* TOP HEADER */}
      <header className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 lg:py-3 flex items-center justify-between shrink-0">
        {/* Brand Logo & Text */}
        <div
          onClick={() => onNavigate('launch')}
          className="cursor-pointer group transition-opacity hover:opacity-90"
        >
          <StyleXLogo size="sm" />
        </div>

        {/* Header Right Action & Status Badge */}
        <div className="flex items-center gap-3">
          {/* Exact Status Pill Badge from Screenshot */}
          <div
            id="status-badge"
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#05281e]/90 border border-[#15513f] shadow-inner select-none"
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
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-1 sm:py-2 md:py-3 max-w-4xl mx-auto w-full text-center">
        {/* Central Circular Emblem */}
        <div className="flex flex-col items-center animate-fade-in">
          <StyleXLogo size="hero" className="mb-2 sm:mb-2.5" />

          {/* TIRUR FLAGSHIP Chip */}
          <div className="px-3.5 py-0.5 rounded-full bg-[#072f23] border border-[#144e3d] shadow-sm mb-1.5 sm:mb-2">
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] text-[#a6d0be] uppercase">
              TIRUR FLAGSHIP
            </span>
          </div>

          {/* Category Eyebrow */}
          <p className="text-[#fe753c] font-semibold text-[11px] sm:text-xs tracking-[0.26em] uppercase mb-1 sm:mb-1.5">
            HAIR · SKIN · BRIDAL & GROOM
          </p>

          {/* Main Headline in Playfair Display */}
          <h1 className="font-serif italic font-normal text-2xl sm:text-3xl md:text-3xl lg:text-[36px] xl:text-[40px] text-white tracking-tight leading-[1.16] sm:leading-[1.12] mb-1.5 sm:mb-2 max-w-3xl">
            Our Official Website is Launching Soon.
          </h1>

          {/* Subtitle Description */}
          <p className="font-sans text-[#c1c8c3] text-[11px] sm:text-sm md:text-[14px] font-normal leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-3 sm:mb-4 text-balance">
            Our physical salon doors in Tirur are open daily to welcome you. For appointments, inquiries, and consultations, call our desk or message us directly on WhatsApp.
          </p>
        </div>

        {/* DIRECT APPOINTMENT DESK CARD - Matching image layout with tactile elevation */}
        <div
          id="appointment-desk-card"
          className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl bg-radial-card border border-[#185341]/80 rounded-2xl p-3.5 sm:p-4 md:p-5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] transition-all duration-300 hover:border-[#226a54]"
        >
          {/* Top Row: Desk Title + Phone + Action Buttons */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 text-left">
            {/* Left: Phone & Title */}
            <div className="shrink-0 min-w-0 flex flex-col items-center sm:items-start text-center sm:text-left">
              <span className="block text-[10px] sm:text-[11px] font-bold tracking-[0.2em] text-[#79a292] uppercase">
                DIRECT APPOINTMENT DESK
              </span>
              <div className="flex items-center justify-center sm:justify-start gap-2 mt-0.5 flex-nowrap">
                <a
                  href={`tel:${SALON_DATA.phoneNumberClean}`}
                  className="font-sans font-bold text-xl sm:text-2xl md:text-[26px] text-white tracking-tight hover:text-[#fe753c] transition-colors whitespace-nowrap"
                >
                  {SALON_DATA.phoneDisplay}
                </a>
                <button
                  onClick={handleCopyPhone}
                  title="Copy Phone Number"
                  className="text-[#79a292] hover:text-white p-1 rounded-md transition-colors cursor-pointer shrink-0"
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
            <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-wrap sm:flex-nowrap">
              {/* Call Button */}
              <a
                id="call-button"
                href={`tel:${SALON_DATA.phoneNumberClean}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-white border border-[#175240] text-xs sm:text-sm font-semibold tracking-wide transition-all active:scale-95 cursor-pointer shadow-sm whitespace-nowrap"
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
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-[0_6px_20px_rgba(254,117,60,0.3)] active:scale-95 whitespace-nowrap cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>CHAT ON WHATSAPP</span>
              </a>
            </div>
          </div>

          {/* Bottom Row Divider & Info */}
          <div className="mt-3.5 pt-3 border-t border-[#134939]/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#a6d0be]">
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
        <div className="mt-3 sm:mt-3.5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {/* Instagram Pill */}
          <a
            id="instagram-pill"
            href={SALON_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062c21]/90 hover:bg-[#0a382b] border border-[#144e3d] text-xs font-medium text-[#a6d0be] hover:text-white transition-all shadow-sm group"
          >
            <Instagram className="w-3.5 h-3.5 text-[#fe753c] group-hover:scale-110 transition-transform" />
            <span>{SALON_DATA.instagramHandle}</span>
          </a>

          {/* Google Maps Pill (Desktop / Tablet only) */}
          <a
            id="maps-pill"
            href={SALON_DATA.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#062c21]/90 hover:bg-[#0a382b] border border-[#144e3d] text-xs font-medium text-[#a6d0be] hover:text-white transition-all shadow-sm group"
          >
            <Compass className="w-3.5 h-3.5 text-[#fe753c] group-hover:scale-110 transition-transform" />
            <span>Locate on Google Maps</span>
          </a>
        </div>

        {/* MOBILE SALON & MAP BUTTON */}
        <div className="mt-3.5 sm:hidden flex items-center justify-center">
          <button
            onClick={() => onNavigate('location')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#083327] hover:bg-[#0e4838] border border-[#165a46] text-xs font-semibold text-emerald-100 transition-all shadow-sm active:scale-95 cursor-pointer"
          >
            <MapPin className="w-4 h-4 text-[#fe753c]" />
            <span>Salon Details & Location Map</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#a6d0be]" />
          </button>
        </div>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-2.5 sm:py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#717975] border-t border-[#093529]/40 shrink-0">
        <p>© {new Date().getFullYear()} StyleX Signature Salon. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span>Tirur, Malappuram, Kerala</span>
          <span>•</span>
          <span className="text-[#a6d0be]">Luxury Family Salon</span>
        </p>
      </footer>
    </div>
  );
};
