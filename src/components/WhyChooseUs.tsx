import React from 'react';
import { TranslationSchema } from '../types';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface WhyChooseUsProps {
  t: TranslationSchema;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ t }) => {
  return (
    <section id="difference" className="py-20 sm:py-28 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-bold tracking-wider uppercase text-blue-600">
            {t.difference.tag}
          </div>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tight">
            {t.difference.title}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium">
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
