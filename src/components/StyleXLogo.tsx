import React from 'react';

interface StyleXLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  className?: string;
  showText?: boolean;
}

export const StyleXLogo: React.FC<StyleXLogoProps> = ({
  size = 'hero',
  className = '',
  showText = false
}) => {
  // Dimensions
  const sizeMap = {
    sm: { container: 'w-10 h-10', text: 'text-[10px]', subText: 'text-[5px]' },
    md: { container: 'w-14 h-14', text: 'text-xs', subText: 'text-[7px]' },
    lg: { container: 'w-20 h-20', text: 'text-base', subText: 'text-[9px]' },
    hero: { container: 'w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36', text: 'text-xl sm:text-2xl', subText: 'text-[9px] sm:text-[10px]' }
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      {/* Circular Emblem matching the image */}
      <div
        className={`${currentSize.container} relative flex flex-col items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.35)] border border-white/90 p-3 select-none transition-transform hover:scale-105 duration-300`}
      >
        <div className="flex items-baseline justify-center leading-none tracking-wider">
          <span className="font-extrabold tracking-tight text-neutral-900 font-sans" style={{ fontSize: size === 'hero' ? '1.5rem' : size === 'lg' ? '1.1rem' : '0.8rem' }}>
            STYLE
          </span>
          <span className="font-black text-[#fe753c] font-sans ml-0.5" style={{ fontSize: size === 'hero' ? '1.65rem' : size === 'lg' ? '1.2rem' : '0.85rem' }}>
            X
          </span>
        </div>
        <span
          className="mt-1 font-bold text-neutral-800 tracking-[0.22em] uppercase text-center leading-tight"
          style={{ fontSize: size === 'hero' ? '0.48rem' : size === 'lg' ? '0.4rem' : '0.28rem' }}
        >
          SIGNATURE SALON
        </span>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-serif text-lg font-bold tracking-widest text-[#fbf9f5] leading-none">
            STYLEX
          </span>
          <span className="text-[10px] font-semibold tracking-[0.25em] text-[#a6d0be] uppercase mt-1">
            SIGNATURE
          </span>
        </div>
      )}
    </div>
  );
};
