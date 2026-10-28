import React from 'react';
import brandLogoImg from '../assets/images/brand_logo.png';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Brand Logo from User Link with White Emblem Badge */}
      <div className={`relative ${iconSizes[size]} shrink-0 rounded-2xl bg-white border-2 border-black p-1 shadow-sm flex items-center justify-center overflow-hidden transition-transform hover:scale-105`}>
        <picture className="w-full h-full flex items-center justify-center">
          <source srcSet={brandLogoImg} type="image/png" />
          <source srcSet="/brand_logo.png" type="image/png" />
          <source srcSet="https://user40756.na.imgto.link/public/20261006/f73ecf1977f3f40b0a1447c2-596701082-122110771671083682-4894056021958296740-n.avif" type="image/avif" />
          <img
            src={brandLogoImg}
            alt="ClickCraft Digital Agency Logo"
            className="w-full h-full object-contain rounded-lg"
            onError={(e) => {
              // Try local public or remote URL before vector fallback
              const target = e.currentTarget;
              if (target.src !== '/brand_logo.png') {
                target.src = '/brand_logo.png';
              } else {
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }
            }}
          />
        </picture>

        {/* Fallback Vector in case image fails */}
        <div style={{ display: 'none' }} className="w-full h-full p-1">
          <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
            <path d="M8 26L14 10L19 18L26 12L20 28L15 21L8 26Z" fill="#F97316" />
            <circle cx="26" cy="11" r="3.5" fill="#2563EB" />
          </svg>
        </div>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className={`font-display font-extrabold tracking-tight text-white ${textSizes[size]}`}>
          Click<span className="text-orange-500">Craft</span>
        </span>
        {showTagline && (
          <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400">
            Digital Agency · Jhunjhunu
          </span>
        )}
      </div>
    </div>
  );
};
