import React from 'react';
import logoImg from '../../Logo/StyleX_Logo.png';

interface StyleXLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
}

export const StyleXLogo: React.FC<StyleXLogoProps> = ({
  size = 'hero',
  className = ''
}) => {
  if (size === 'hero') {
    return (
      <div className={`relative flex items-center justify-center select-none ${className}`}>
        <img
          src={logoImg}
          alt="StyleX Signature Salon"
          className="w-40 sm:w-72 md:w-80 lg:w-96 max-w-[70vw] h-auto max-h-14 sm:max-h-32 md:max-h-36 object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
          loading="eager"
        />
      </div>
    );
  }

  // Header and Compact Variants
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoImg}
        alt="StyleX Signature Salon"
        className="h-5 sm:h-7 md:h-8 w-auto object-contain transition-transform hover:scale-105 duration-200"
        loading="eager"
      />
    </div>
  );
};
