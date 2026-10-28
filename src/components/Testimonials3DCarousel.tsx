import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TranslationSchema } from '../types';

interface Testimonials3DCarouselProps {
  t: TranslationSchema;
}

export const Testimonials3DCarousel: React.FC<Testimonials3DCarouselProps> = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = t.testimonials.items;

  const next = () => setActiveIndex((prev) => (prev + 1) % items.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-5xl mx-auto py-8">
      {/* 3D Stage Container */}
      <div
        className="relative h-[380px] sm:h-[350px] w-full flex items-center justify-center"
        style={{ perspective: '1200px' }}
      >
        {items.map((item, idx) => {
          const offset = (idx - activeIndex + items.length) % items.length;
          // Calculate 3D position
          let transform = '';
          let zIndex = 0;
          let opacity = 0;

          if (offset === 0) {
            // Active Center Card
            transform = 'translate3d(0, 0, 80px) rotateY(0deg) scale(1)';
            zIndex = 30;
            opacity = 1;
          } else if (offset === 1) {
            // Right Card
            transform = 'translate3d(65%, 0, -80px) rotateY(-18deg) scale(0.85)';
            zIndex = 20;
            opacity = 0.65;
          } else if (offset === items.length - 1) {
            // Left Card
            transform = 'translate3d(-65%, 0, -80px) rotateY(18deg) scale(0.85)';
            zIndex = 20;
            opacity = 0.65;
          } else {
            // Hidden back cards
            transform = 'translate3d(0, 0, -200px) scale(0.7)';
            zIndex = 10;
            opacity = 0;
          }

          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="absolute w-[92%] sm:w-[480px] rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-blue-950/40 border border-slate-700/80 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer select-none"
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-slate-700" />
              </div>

              <p className="text-sm sm:text-base text-slate-200 leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between mb-4">
                <div>
                  <p className="text-[11px] text-slate-400">{item.metricLabel}</p>
                  <p className="text-sm font-bold text-orange-400 tabular-nums">{item.metric}</p>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400">
                  Verified Result
                </span>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white">{item.name}</h4>
                  <p className="text-xs text-slate-300">{item.business}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-orange-400" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons and Dots */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous Review"
          className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? 'w-7 bg-orange-500' : 'w-2 bg-slate-700 hover:bg-slate-600'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next Review"
          className="p-2.5 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:border-orange-500 transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
