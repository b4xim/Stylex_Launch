import React, { useState } from 'react';
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  MessageCircle,
  Sparkles,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { SERVICES_MENU, TIME_SLOTS, SALON_DATA } from '../data/salonData.ts';
import { ServiceItem } from '../types.ts';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: ServiceItem | null;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({
  isOpen,
  onClose,
  preSelectedService = null
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preSelectedService ? preSelectedService.id : SERVICES_MENU[0].id
  );
  const [clientName, setClientName] = useState<string>('');
  const [clientPhone, setClientPhone] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>(TIME_SLOTS[2]);
  const [notes, setNotes] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentService =
    SERVICES_MENU.find((s) => s.id === selectedServiceId) || SERVICES_MENU[0];

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientPhone.trim()) {
      alert('Please provide your name and contact phone number.');
      return;
    }

    const message = encodeURIComponent(
      `*StyleX Tirur Flagship - Priority Appointment Request*\n\n` +
      `👤 *Client:* ${clientName}\n` +
      `📞 *Phone:* ${clientPhone}\n` +
      `✂️ *Service:* ${currentService.name} (${currentService.price})\n` +
      `📅 *Date:* ${appointmentDate}\n` +
      `⏰ *Preferred Time:* ${selectedTimeSlot}\n` +
      (notes ? `📝 *Notes:* ${notes}\n` : '') +
      `\nPlease confirm slot availability.`
    );

    window.open(`https://wa.me/${SALON_DATA.whatsappNumber}?text=${message}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-lg bg-radial-card border border-[#185341] rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl text-[#fbf9f5] my-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1.5 rounded-full bg-[#062c21] hover:bg-[#0a382b] text-[#a6d0be] hover:text-white transition-colors cursor-pointer"
          aria-label="Close appointment modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="font-serif text-2xl font-semibold text-white">
              Appointment Request Sent!
            </h3>

            <p className="text-sm text-[#c1c8c3] max-w-sm mx-auto leading-relaxed">
              Your inquiry has been dispatched to our Tirur salon concierge on WhatsApp. We will confirm your preferred timing immediately.
            </p>

            <div className="p-4 rounded-xl bg-[#042018] border border-[#144e3d] text-left text-xs space-y-1.5 text-[#a6d0be]">
              <p><strong className="text-white">Service:</strong> {currentService.name}</p>
              <p><strong className="text-white">Date & Time:</strong> {appointmentDate} at {selectedTimeSlot}</p>
              <p><strong className="text-white">Location:</strong> One Arcade, Near Lenskart, KG Padi Rd, Tirur</p>
            </div>

            <button
              onClick={() => {
                setIsSubmitted(false);
                onClose();
              }}
              className="w-full py-2.5 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white font-bold text-sm transition cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-5 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#072f23] border border-[#144e3d] text-[#fe753c] text-[10px] font-bold tracking-widest uppercase mb-2">
                <Sparkles className="w-3 h-3" />
                <span>BESPOKE RESERVATION DESK</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-white">
                Book Your Experience
              </h2>
              <p className="text-xs text-[#a6d0be] mt-1">
                Direct scheduling with StyleX Signature Salon Tirur Flagship.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4 text-left">
              {/* Select Treatment */}
              <div>
                <label className="block text-xs font-semibold text-[#a6d0be] mb-1.5">
                  Select Treatment / Service
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#062c21] border border-[#144e3d] text-white text-sm focus:outline-none focus:border-[#fe753c]"
                >
                  {SERVICES_MENU.map((s) => (
                    <option key={s.id} value={s.id} className="bg-[#021811] text-white">
                      {s.name} — {s.price} ({s.duration})
                    </option>
                  ))}
                </select>
              </div>

              {/* Client Info: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#a6d0be] mb-1">
                    Your Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#79a292]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ayesha / Rahul"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#062c21] border border-[#144e3d] text-white text-sm focus:outline-none focus:border-[#fe753c]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#a6d0be] mb-1">
                    Contact Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#79a292]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#062c21] border border-[#144e3d] text-white text-sm focus:outline-none focus:border-[#fe753c]"
                    />
                  </div>
                </div>
              </div>

              {/* Date Picker */}
              <div>
                <label className="block text-xs font-semibold text-[#a6d0be] mb-1">
                  Preferred Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#79a292]" />
                  <input
                    type="date"
                    required
                    value={appointmentDate}
                    onChange={(e) => setAppointmentDate(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#062c21] border border-[#144e3d] text-white text-sm focus:outline-none focus:border-[#fe753c]"
                  />
                </div>
              </div>

              {/* Time Slot Selector Pills (Matching Royal Emerald Design System) */}
              <div>
                <label className="block text-xs font-semibold text-[#a6d0be] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#fe753c]" />
                  <span>Select Convenient Time Slot</span>
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 max-h-36 overflow-y-auto pr-1">
                  {TIME_SLOTS.map((slot) => {
                    const isSelected = selectedTimeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setSelectedTimeSlot(slot)}
                        className={`py-1.5 px-2 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#fe753c] text-white shadow-sm'
                            : 'bg-[#062c21] text-[#a6d0be] border border-[#144e3d] hover:bg-[#0a382b]'
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block text-xs font-semibold text-[#a6d0be] mb-1">
                  Special Requests / Notes (Optional)
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-2.5 w-4 h-4 text-[#79a292]" />
                  <textarea
                    rows={2}
                    placeholder="Specific master stylist preference, bridal entourage, etc."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 rounded-xl bg-[#062c21] border border-[#144e3d] text-white text-xs focus:outline-none focus:border-[#fe753c]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full mt-2 py-3 rounded-xl bg-[#fe753c] hover:bg-[#e8652d] text-white font-bold text-sm tracking-wide shadow-[0_6px_20px_rgba(254,117,60,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <MessageCircle className="w-4 h-4 fill-white/20" />
                <span>Confirm & Send via WhatsApp</span>
              </button>

              <div className="text-center pt-2 text-[11px] text-[#79a292]">
                Prefer to talk directly?{' '}
                <a
                  href={`tel:${SALON_DATA.phoneNumberClean}`}
                  className="text-white hover:text-[#fe753c] underline font-semibold"
                >
                  Call {SALON_DATA.phoneDisplay}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
