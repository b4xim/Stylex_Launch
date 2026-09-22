import React, { useState } from 'react';
import { ScreenView } from './types.ts';
import { LaunchScreen } from './components/LaunchScreen.tsx';
import { LocationScreen } from './components/LocationScreen.tsx';
import { NavigationDock } from './components/NavigationDock.tsx';

export default function App() {
  const [currentView, setCurrentView] = useState<ScreenView>('launch');

  return (
    <div className="relative min-h-screen w-full bg-[#021811] text-[#fbf9f5] font-sans antialiased overflow-x-hidden">
      {/* SCREEN 1: The Launch Screen */}
      {currentView === 'launch' && (
        <LaunchScreen onNavigate={setCurrentView} />
      )}

      {/* SCREEN 2: Flagship Salon Directory & Location */}
      {currentView === 'location' && (
        <LocationScreen
          onBack={() => setCurrentView('launch')}
          onNavigate={setCurrentView}
        />
      )}

      {/* REFINED FLOATING NAVIGATION DOCK */}
      <NavigationDock
        currentView={currentView}
        onNavigate={setCurrentView}
      />
    </div>
  );
}
