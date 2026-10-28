import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
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
          let transform = '';
          let zIndex = 0;
          let opacity = 0;

          if (offset === 0) {
            transform = 'translate3d(0, 0, 80px) rotateY(0deg) scale(1)';
            zIndex = 30;
            opacity = 1;
          } else if (offset === 1) {
            transform = 'translate3d(65%, 0, -80px) rotateY(-18deg) scale(0.85)';
            zIndex = 20;
            opacity = 0.7;
          } else if (offset === items.length - 1) {
            transform = 'translate3d(-65%, 0, -80px) rotateY(18deg) scale(0.85)';
            zIndex = 20;
            opacity = 0.7;
          } else {
            transform = 'translate3d(0, 0, -200px) scale(0.7)';
            zIndex = 10;
            opacity = 0;
          }

          return (
            <div
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="absolute w-[92%] sm:w-[480px] rounded-3xl p-7 sm:p-9 bg-white border-2 border-stone-200/90 shadow-2xl backdrop-blur-xl transition-all duration-500 ease-out cursor-pointer select-none text-slate-900"
              style={{
                transform,
                zIndex,
                opacity,
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-black rounded-full bg-amber-100 border border-amber-300 text-amber-800 tabular-nums">
                    5.0 ★ Client Rating
                  </span>
                </div>
                <Quote className="w-8 h-8 text-stone-300" />
              </div>

              <p className="text-base sm:text-lg text-slate-800 leading-relaxed mb-6 italic font-medium">
                "{item.quote}"
              </p>

              <div className="p-3.5 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-between mb-5">
                <div>
                  <p className="text-xs text-slate-500 font-semibold">{item.metricLabel}</p>
                  <p className="text-base font-black text-orange-600 tabular-nums">{item.metric}</p>
                </div>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Verified Result
                </span>
              </div>

              <div className="border-t border-stone-200 pt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-black text-black">{item.name}</h4>
                  <p className="text-xs text-slate-600 font-bold">{item.business}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-orange-600" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons and Dots */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous Review"
          className="p-3 rounded-full bg-white border-2 border-stone-200 text-slate-700 hover:text-black hover:border-black transition-colors cursor-pointer shadow-sm"
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
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex ? 'w-8 bg-black' : 'w-2.5 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next Review"
          className="p-3 rounded-full bg-white border-2 border-stone-200 text-slate-700 hover:text-black hover:border-black transition-colors cursor-pointer shadow-sm"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
