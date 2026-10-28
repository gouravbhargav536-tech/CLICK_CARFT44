import React, { useEffect, useState } from 'react';
import { Logo } from './Logo';

interface LoaderScreenProps {
  onLoaded: () => void;
}

export const LoaderScreen: React.FC<LoaderScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsClosing(true), 150);
          setTimeout(() => onLoaded(), 750);
          return 100;
        }
        // Accelerating curve
        const step = prev < 50 ? 5 : prev < 85 ? 7 : 12;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [onLoaded]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070D18] text-white transition-all duration-700 ease-in-out ${
        isClosing ? 'opacity-0 pointer-events-none -translate-y-full' : 'opacity-100'
      }`}
    >
      {/* Background ambient lighting */}
      <div className="absolute w-96 h-96 rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
      <div className="absolute w-64 h-64 rounded-full bg-orange-500/10 blur-[90px] pointer-events-none translate-x-20 translate-y-20" />

      <div className="relative z-10 flex flex-col items-center text-center space-y-6 max-w-xs px-4">
        {/* Pulsing Brand Logo */}
        <div className="scale-125 animate-pulse">
          <Logo size="lg" showTagline={false} />
        </div>

        {/* Counter and Status */}
        <div className="w-full space-y-2 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400">
            <span>PERFORMANCE SYSTEM</span>
            <span className="text-orange-400 font-bold tabular-nums">{progress}%</span>
          </div>

          {/* Progress Bar Track */}
          <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-orange-500 to-amber-400 transition-all duration-100 ease-out shadow-[0_0_8px_rgba(249,115,22,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="text-[11px] text-slate-400 pt-1">
            Loading 3D Experience · ClickCraft Digital
          </p>
        </div>
      </div>
    </div>
  );
};
