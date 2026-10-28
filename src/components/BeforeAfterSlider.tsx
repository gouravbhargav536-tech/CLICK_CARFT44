import React, { useState, useRef, useCallback } from 'react';
import { AlertTriangle, Flame, CheckCircle2, XCircle, MoveHorizontal } from 'lucide-react';
import { TranslationSchema } from '../types';

interface BeforeAfterSliderProps {
  t: TranslationSchema;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ t }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(10, Math.min(90, (x / rect.width) * 100));
    setSliderPosition(percent);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="w-full select-none">
      {/* Interactive Control Pill */}
      <div className="flex items-center justify-between mb-4 px-2 text-xs font-bold">
        <span className="text-red-700 flex items-center gap-1.5">
          <AlertTriangle className="w-4 h-4 text-red-600" />
          <span>Ordinary Agency (Before)</span>
        </span>
        <span className="text-slate-500 text-xs hidden sm:inline flex items-center gap-1.5 font-semibold">
          <MoveHorizontal className="w-4 h-4 text-orange-600" />
          Drag slider to compare difference
        </span>
        <span className="text-emerald-700 flex items-center gap-1.5">
          <Flame className="w-4 h-4 text-orange-600" />
          <span>ClickCraft Way (After)</span>
        </span>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        className="relative h-[480px] sm:h-[440px] rounded-3xl overflow-hidden border-2 border-stone-200 shadow-xl bg-white cursor-ew-resize"
      >
        {/* RIGHT LAYER: CLICKCRAFT PERFORMANCE (AFTER) */}
        <div className="absolute inset-0 p-6 sm:p-8 bg-emerald-50/20 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-emerald-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <Flame className="w-4 h-4 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-black">
                  {t.difference.clickcraftWay}
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                PROVEN GROWTH
              </span>
            </div>

            <div className="space-y-3 max-w-lg ml-auto text-right">
              {t.difference.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-end gap-3 p-3 rounded-2xl bg-white border border-emerald-200 shadow-sm"
                >
                  <span className="text-xs sm:text-sm text-slate-900 font-bold">{pt.solution}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-emerald-200 flex items-center justify-between text-xs font-black text-emerald-800">
            <span>ROI Focused · 4.8x Avg ROAS</span>
            <span>Real WhatsApp Leads</span>
          </div>
        </div>

        {/* LEFT LAYER: ORDINARY AGENCY (BEFORE) clipped by sliderPosition */}
        <div
          className="absolute inset-y-0 left-0 p-6 sm:p-8 bg-rose-50/50 border-r-2 border-stone-300 overflow-hidden flex flex-col justify-between"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[320px] sm:w-[500px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-rose-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-black text-red-900 truncate">
                  {t.difference.ordinaryAgency}
                </h3>
              </div>
              <span className="px-3 py-1 text-xs font-extrabold rounded-full bg-rose-100 text-rose-800 border border-rose-300">
                WASTED SPEND
              </span>
            </div>

            <div className="space-y-3">
              {t.difference.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-rose-200 shadow-sm"
                >
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-800 font-semibold truncate">{pt.problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[320px] sm:w-[500px] pt-3 border-t border-rose-200 text-xs font-bold text-rose-700">
            Result: Budget burned on empty likes with zero accountable calls.
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & DRAG HANDLE */}
        <div
          className="absolute inset-y-0 w-1 bg-gradient-to-b from-blue-600 via-orange-500 to-amber-500 shadow-md pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-white shadow-xl flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
