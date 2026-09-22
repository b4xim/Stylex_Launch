import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Clock,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Search,
  Filter,
  CalendarCheck
} from 'lucide-react';
import { SERVICES_MENU, SALON_DATA } from '../data/salonData.ts';
import { ServiceItem, ScreenView } from '../types.ts';
import { StyleXLogo } from './StyleXLogo.tsx';

interface ServiceMenuScreenProps {
  onBack: () => void;
  onSelectServiceForBooking: (service: ServiceItem) => void;
  onNavigate: (view: ScreenView) => void;
}

export const ServiceMenuScreen: React.FC<ServiceMenuScreenProps> = ({
  onBack,
  onSelectServiceForBooking,
  onNavigate
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hair', label: 'Hair Artistry' },
    { id: 'skin', label: 'Advanced Skin' },
    { id: 'bridal', label: 'Bridal & Groom' },
    { id: 'spa', label: 'VIP Indulgences' }
  ];

  const filteredServices = SERVICES_MENU.filter((service) => {
    const matchesCategory =
      activeCategory === 'all' ||
      service.category === activeCategory ||
      (activeCategory === 'bridal' && (service.category === 'bridal' || service.category === 'groom'));

    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const handleWhatsAppBooking = (service: ServiceItem) => {
    const message = encodeURIComponent(
      `Hello StyleX Signature Salon Tirur, I would like to book the "${service.name}" (${service.price}, ~${service.duration}). Please let me know your available slots.`
    );
    window.open(`https://wa.me/${SALON_DATA.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="relative min-h-screen w-full bg-[#021811] text-[#fbf9f5] flex flex-col selection:bg-[#fe753c] selection:text-white pb-24">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-radial-sanctuary opacity-90" />
      <div className="pointer-events-none absolute top-10 right-10 w-[500px] h-[500px] bg-[#0d4c3c]/20 rounded-full blur-[140px]" />

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
            <a
              href={`tel:${SALON_DATA.phoneNumberClean}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05281e] border border-[#144e3d] text-xs font-semibold text-[#a6d0be] hover:text-white transition cursor-pointer"
            >
              <PhoneCall className="w-3 h-3 text-[#fe753c]" />
              <span>{SALON_DATA.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onNavigate('appointment')}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs font-bold transition shadow-sm cursor-pointer"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-8 sm:pt-12 pb-6 px-4 sm:px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#072f23] border border-[#144e3d] text-[#a6d0be] text-xs font-semibold tracking-widest uppercase mb-3">
          <Sparkles className="w-3 h-3 text-[#fe753c]" />
          <span>ROYAL EMERALD SANCTUARY</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3 leading-tight">
          Bespoke Treatment Menu
        </h1>

        <p className="font-sans text-sm sm:text-base text-[#c1c8c3] max-w-2xl mx-auto leading-relaxed">
          Sensorial hair artistry, medical-grade dermis therapies, and royal bridal couture performed by master stylists inside our Tirur flagship.
        </p>

        {/* SEARCH & FILTER CONTROLS */}
        <div className="mt-8 max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-3">
          <div className="relative w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#79a292]" />
            <input
              type="text"
              placeholder="Search treatments (e.g. Keratin, HydraFacial, Bridal...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#062c21] border border-[#15513f] text-sm text-white placeholder-[#79a292] focus:outline-none focus:border-[#fe753c] transition-colors"
            />
          </div>
        </div>

        {/* CATEGORY FILTER CHIPS */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#fe753c] text-white shadow-[0_4px_16px_rgba(254,117,60,0.3)] scale-105'
                    : 'bg-[#062c21] text-[#a6d0be] border border-[#144e3d] hover:bg-[#0a382b] hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* SERVICE LISTINGS */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-6 w-full">
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-[#062c21]/40 border border-[#144e3d] rounded-2xl p-8">
            <p className="text-base text-[#c1c8c3]">No treatments found matching "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-3 text-xs font-semibold text-[#fe753c] hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="group relative flex flex-col justify-between bg-radial-card border border-[#185341] hover:border-[#2b886b] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.35)] hover:-translate-y-1"
              >
                <div>
                  {/* Top Category Badge & Price Row */}
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] sm:text-xs font-bold tracking-widest text-[#fe753c] uppercase">
                        {service.categoryLabel}
                      </span>
                      {service.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#ffb703]/15 text-[#ffba27] border border-[#ffb703]/30">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <span className="font-serif text-2xl font-bold text-white tracking-tight group-hover:text-[#fe753c] transition-colors whitespace-nowrap">
                      {service.price}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight leading-snug mb-1">
                    {service.name}
                  </h3>
                  <p className="text-xs text-[#a6d0be] font-medium mb-3 italic">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#c1c8c3] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Includes List */}
                  <div className="space-y-1.5 mb-5 pt-3 border-t border-[#134939]/70">
                    <span className="text-[10px] font-bold text-[#79a292] tracking-wider uppercase block mb-1">
                      Protocol Inclusions
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {service.includes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-[#a6d0be]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Controls: Duration & Booking actions */}
                <div className="pt-4 border-t border-[#134939]/70 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1.5 text-xs text-[#79a292]">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onSelectServiceForBooking(service)}
                      className="px-3.5 py-1.5 rounded-xl bg-[#042018] hover:bg-[#0a382b] text-[#a6d0be] hover:text-white border border-[#175240] text-xs font-semibold transition cursor-pointer"
                    >
                      Reserve Slot
                    </button>

                    <button
                      onClick={() => handleWhatsAppBooking(service)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs font-bold transition shadow-sm cursor-pointer"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM NOTE */}
        <div className="mt-12 text-center p-6 bg-[#062c21]/60 border border-[#144e3d] rounded-2xl max-w-2xl mx-auto">
          <p className="font-serif text-lg text-white mb-1">Looking for a custom package or bridal entourage?</p>
          <p className="text-xs sm:text-sm text-[#c1c8c3] mb-4">
            Our Senior Artistic Director in Tirur creates bespoke routines tailored to your event schedule.
          </p>
          <a
            href={`tel:${SALON_DATA.phoneNumberClean}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fe753c] hover:bg-[#e8652d] text-white text-xs sm:text-sm font-bold transition cursor-pointer shadow-md"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Call Salon Concierge: {SALON_DATA.phoneDisplay}</span>
          </a>
        </div>
      </main>
    </div>
  );
};
