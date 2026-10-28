import React from 'react';
import { TranslationSchema } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface WhyChooseUsProps {
  t: TranslationSchema;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  return (
    <section id="difference" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950/80 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-blue-600/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-400">
            {t.difference.tag}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            {t.difference.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.difference.subtitle}
          </p>
        </div>

        {/* Interactive Before / After Comparison Slider */}
        <div className="max-w-5xl mx-auto">
          <BeforeAfterSlider t={t} />
        </div>
      </div>
    </section>
  );
};
