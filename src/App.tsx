import React, { useState } from 'react';
import { ScreenView, ServiceItem } from './types.ts';
import { LaunchScreen } from './components/LaunchScreen.tsx';
import { ServiceMenuScreen } from './components/ServiceMenuScreen.tsx';
import { LocationScreen } from './components/LocationScreen.tsx';
import { AppointmentModal } from './components/AppointmentModal.tsx';
import { NavigationDock } from './components/NavigationDock.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<ScreenView>('launch');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = (service?: ServiceItem) => {
    if (service) {
      setSelectedService(service);
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#021811] text-[#fbf9f5] font-sans antialiased overflow-x-hidden">
      {/* SCREEN 1: The Exact Launch Screen from the screenshot */}
      {currentView === 'launch' && (
        <LaunchScreen
          onNavigate={setCurrentView}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

      {/* SCREEN 2: Treatment & Services Menu */}
      {currentView === 'menu' && (
        <ServiceMenuScreen
          onBack={() => setCurrentView('launch')}
          onSelectServiceForBooking={(service) => handleOpenBooking(service)}
          onNavigate={setCurrentView}
        />
      )}

      {/* SCREEN 3: Flagship Salon Directory & Location */}
      {currentView === 'location' && (
        <LocationScreen
          onBack={() => setCurrentView('launch')}
          onNavigate={setCurrentView}
          onOpenBooking={() => handleOpenBooking()}
        />
      )}

      {/* BESPOKE RESERVATION MODAL */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preSelectedService={selectedService}
      />

      {/* REFINED FLOATING NAVIGATION DOCK */}
      <NavigationDock
        currentView={currentView}
        onNavigate={setCurrentView}
        onOpenBooking={() => handleOpenBooking()}
      />
    </div>
  );
}
