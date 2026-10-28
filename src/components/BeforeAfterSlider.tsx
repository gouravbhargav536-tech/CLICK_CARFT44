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
      <div className="flex items-center justify-between mb-4 px-2 text-xs font-semibold">
        <span className="text-red-400 flex items-center gap-1.5">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>Ordinary Agency (Before)</span>
        </span>
        <span className="text-slate-400 text-[11px] hidden sm:inline flex items-center gap-1">
          <MoveHorizontal className="w-3.5 h-3.5 text-orange-400" />
          Drag slider to compare difference
        </span>
        <span className="text-emerald-400 flex items-center gap-1.5">
          <Flame className="w-3.5 h-3.5 text-orange-400" />
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
        className="relative h-[480px] sm:h-[440px] rounded-3xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 cursor-ew-resize"
      >
        {/* RIGHT LAYER: CLICKCRAFT PERFORMANCE (AFTER) */}
        <div className="absolute inset-0 p-6 sm:p-8 bg-gradient-to-br from-blue-950/60 via-slate-900 to-orange-950/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-blue-500/30">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Flame className="w-4 h-4 text-orange-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {t.difference.clickcraftWay}
                </h3>
              </div>
              <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                PROVEN GROWTH
              </span>
            </div>

            <div className="space-y-3 max-w-lg ml-auto text-right">
              {t.difference.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-end gap-2.5 p-2.5 rounded-xl bg-slate-900/90 border border-blue-900/40 shadow-sm"
                >
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">{pt.solution}</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-blue-800/30 flex items-center justify-between text-xs font-bold text-emerald-400">
            <span>ROI Focused · 4.8x Avg ROAS</span>
            <span>Real WhatsApp Leads</span>
          </div>
        </div>

        {/* LEFT LAYER: ORDINARY AGENCY (BEFORE) clipped by sliderPosition */}
        <div
          className="absolute inset-y-0 left-0 p-6 sm:p-8 bg-gradient-to-br from-slate-950 via-slate-900/95 to-red-950/30 border-r border-slate-700 overflow-hidden flex flex-col justify-between"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="w-[320px] sm:w-[500px]">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-red-900/30">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-red-500/10 text-red-400 flex items-center justify-center">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-red-200 truncate">
                  {t.difference.ordinaryAgency}
                </h3>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-red-500/20 text-red-400 border border-red-500/30">
                WASTED SPEND
              </span>
            </div>

            <div className="space-y-3">
              {t.difference.points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-950/80 border border-red-950/40"
                >
                  <XCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300 truncate">{pt.problem}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-[320px] sm:w-[500px] pt-3 border-t border-red-900/30 text-xs font-semibold text-red-400">
            Result: Budget burned on empty likes with zero accountable calls.
          </div>
        </div>

        {/* SLIDER DIVIDER LINE & DRAG HANDLE */}
        <div
          className="absolute inset-y-0 w-1 bg-gradient-to-b from-blue-500 via-orange-400 to-amber-400 shadow-[0_0_12px_rgba(249,115,22,0.8)] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-orange-400 shadow-xl shadow-orange-500/40 flex items-center justify-center text-white pointer-events-auto cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
            <MoveHorizontal className="w-4 h-4 text-orange-400" />
          </div>
        </div>
      </div>
    </div>
  );
};
