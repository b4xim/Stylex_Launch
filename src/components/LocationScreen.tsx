import React from 'react';
import {
  ArrowLeft,
  MapPin,
  Clock,
  PhoneCall,
  MessageCircle,
  Compass,
  Car,
  Coffee,
  ShieldCheck,
  Sparkles,
  HeartHandshake
} from 'lucide-react';
import { SALON_DATA } from '../data/salonData.ts';
import { StyleXLogo } from './StyleXLogo.tsx';
import { ScreenView } from '../types.ts';

interface LocationScreenProps {
  onBack: () => void;
  onNavigate: (view: ScreenView) => void;
  onOpenBooking: () => void;
}

export const LocationScreen: React.FC<LocationScreenProps> = ({
  onBack,
  onNavigate,
  onOpenBooking
}) => {
  const whatsappLink = `https://wa.me/${SALON_DATA.whatsappNumber}?text=Hello%20StyleX%20Signature%20Salon%20Tirur,%20I%20am%20heading%20over%20and%20need%20assistance%20with%20directions/parking.`;

  const amenities = [
    {
      icon: <Car className="w-5 h-5 text-[#fe753c]" />,
      title: 'Hassle-Free Parking',
      desc: 'Dedicated parking right at One Arcade for our salon patrons.'
    },
    {
      icon: <Sparkles className="w-5 h-5 text-[#fe753c]" />,
      title: 'Private VIP Suites',
      desc: 'Exclusive, discreet suites for bridal prep, hijab styling, & premium treatments.'
    },
    {
      icon: <Coffee className="w-5 h-5 text-[#fe753c]" />,
      title: 'Complimentary Brew Bar',
      desc: 'Freshly roasted artisan coffee, organic chamomile tea, & infused waters.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-[#fe753c]" />,
      title: 'Authentic Global Products',
      desc: 'Authorized partner for Olaplex, L’Oréal Professionnel, & Dermalogica.'
    }
  ];

  return (
    <div className="relative min-h-screen w-full bg-[#021811] text-[#fbf9f5] flex flex-col selection:bg-[#fe753c] selection:text-white pb-24">
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
              <StyleXLogo size="sm" showText={true} />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05281e] border border-[#144e3d] text-xs font-semibold text-[#a6d0be]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open Daily: 9:00 AM – 11:30 PM</span>
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
            Conveniently situated at One Arcade on KG Padi Road. Walk-ins and pre-booked private appointments are warmly welcomed daily until 11:30 PM.
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
                      <span className="text-sm font-bold text-white">9:00 AM – 11:30 PM</span>
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
                  Prime Town Center Location
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

            {/* Quick Reservation Card */}
            <div className="bg-[#05261d]/80 border border-[#175240] rounded-2xl p-5 text-center">
              <p className="text-xs text-[#a6d0be] mb-3">
                Planning a special visit or bridal styling session?
              </p>
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs sm:text-sm font-bold transition shadow-sm cursor-pointer"
              >
                Reserve Flagship Appointment
              </button>
            </div>
          </div>
        </div>

        {/* AMENITIES SECTION */}
        <div className="mt-12">
          <div className="text-center mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#fe753c] uppercase block mb-1">
              THE BESPOKE EXPERIENCE
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
              Flagship Sanctuary Amenities
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-radial-card border border-[#144e3d] text-left hover:border-[#1e6d56] transition-colors"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-sans text-sm font-bold text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#a6d0be] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
