import React from 'react';
import {
  ArrowLeft,
  MapPin,
  Clock,
  PhoneCall,
  MessageCircle,
  Compass
} from 'lucide-react';
import { SALON_DATA } from '../data/salonData.ts';
import { StyleXLogo } from './StyleXLogo.tsx';
import { ScreenView } from '../types.ts';

interface LocationScreenProps {
  onBack: () => void;
  onNavigate: (view: ScreenView) => void;
}

export const LocationScreen: React.FC<LocationScreenProps> = ({
  onBack,
  onNavigate
}) => {
  const whatsappLink = `https://wa.me/${SALON_DATA.whatsappNumber}?text=Hello%20StyleX%20Signature%20Salon%20Tirur,%20I%20am%20heading%20over%20and%20need%20assistance%20with%20directions/parking.`;

  return (
    <div className="relative min-h-screen w-full bg-[#021811] text-[#fbf9f5] flex flex-col selection:bg-[#fe753c] selection:text-white pb-10 sm:pb-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-sanctuary opacity-90" />
      <div className="pointer-events-none absolute top-10 left-10 w-[500px] h-[500px] bg-[#0d4c3c]/20 rounded-full blur-[140px]" />

      {/* HEADER */}
      <header className="sticky top-0 z-30 w-full bg-[#021811]/90 backdrop-blur-md border-b border-[#144e3d]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#072f23] border border-[#144e3d] text-xs font-semibold text-[#a6d0be] hover:text-white hover:bg-[#0a382b] transition-all cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Notice</span>
            </button>

            <div
              onClick={() => onNavigate('launch')}
              className="cursor-pointer hidden sm:block"
            >
              <StyleXLogo size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05281e] border border-[#144e3d] text-xs font-semibold text-[#a6d0be]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open Daily: 10:00 AM – 1:00 AM</span>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10 flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 sm:py-12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#072f23] border border-[#144e3d] text-[#a6d0be] text-xs font-semibold tracking-widest uppercase mb-3">
            <MapPin className="w-3 h-3 text-[#fe753c]" />
            <span>TIRUR SANCTUARY DIRECTORY</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
            Visit Our Tirur Flagship
          </h1>

          <p className="font-sans text-sm sm:text-base text-[#c1c8c3] leading-relaxed">
            Conveniently situated at One Arcade on KG Padi Road. Walk-ins and pre-booked private appointments are warmly welcomed daily until 1:00 AM.
          </p>
        </div>

        {/* PRIMARY LOCATION & TIMING CARD */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-10">
          {/* Left / Address & Hours */}
          <div className="md:col-span-7 bg-radial-card border border-[#185341] rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#79a292] uppercase block mb-1">
                  PHYSICAL FLAGSHIP ADDRESS
                </span>
                <h2 className="font-serif text-2xl font-semibold text-white mb-1">
                  {SALON_DATA.addressLine1}
                </h2>
                <p className="text-sm text-[#a6d0be] leading-relaxed">
                  {SALON_DATA.addressLine2}, {SALON_DATA.city} – {SALON_DATA.pincode}
                </p>
                <p className="text-xs text-[#79a292] mt-1 font-medium">
                  Landmark: {SALON_DATA.landmark}
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-[#134939]/70">
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#79a292] uppercase block mb-2">
                  OPERATING TIMINGS
                </span>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#042018] border border-[#144e3d]">
                  <div className="w-10 h-10 rounded-lg bg-[#062c21] flex items-center justify-center text-[#fe753c] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">10:00 AM – 1:00 AM</span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                        Open Now
                      </span>
                    </div>
                    <span className="text-xs text-[#a6d0be]">Open Monday through Sunday</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 pt-6 border-t border-[#134939]/70 flex flex-wrap items-center gap-3">
              <a
                href={SALON_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs sm:text-sm font-bold transition shadow-[0_4px_16px_rgba(254,117,60,0.3)] cursor-pointer"
              >
                <Compass className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${SALON_DATA.phoneNumberClean}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-white border border-[#175240] text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                <PhoneCall className="w-4 h-4 text-[#a6d0be]" />
                <span>Call Concierge</span>
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-white border border-[#175240] text-xs sm:text-sm font-semibold transition cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#fe753c]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right / Visual Location Card & Map Preview */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="bg-radial-card border border-[#185341] rounded-2xl sm:rounded-3xl p-6 text-left shadow-2xl flex-1 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#05261d] border border-[#15513f] flex items-center justify-center text-[#fe753c] mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">
                  StyleX Signature Salon
                </h3>
                <p className="text-xs sm:text-sm text-[#c1c8c3] leading-relaxed mb-4">
                  Positioned directly at One Arcade near Lenskart on KG Padi Road, easily accessible from Tirur Railway Station (3 minutes drive) and Town Bus Stand.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#031b14] border border-[#124234] text-xs text-[#a6d0be] space-y-2">
                <div className="flex items-center justify-between">
                  <span>From Tirur Railway Station</span>
                  <span className="font-semibold text-white">~1.2 km (4 mins)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>From Tirur Bus Stand</span>
                  <span className="font-semibold text-white">~900 m (3 mins)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Lenskart Landmark</span>
                  <span className="font-semibold text-white">Adjacent / Same Arcade</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="bg-[#05261d]/80 border border-[#175240] rounded-2xl p-5 text-center">
              <p className="text-xs text-[#a6d0be] mb-3">
                Have questions or planning your visit to the salon?
              </p>
              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={`tel:${SALON_DATA.phoneNumberClean}`}
                  className="flex-1 py-2.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-white border border-[#175240] text-xs font-semibold flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-[#a6d0be]" />
                  <span>Call Desk</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_DATA.whatsappNumber}?text=${encodeURIComponent('Hello StyleX Tirur Flagship, I would like to inquire about appointments and availability.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs font-bold flex items-center justify-center gap-2 transition shadow-sm cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};
