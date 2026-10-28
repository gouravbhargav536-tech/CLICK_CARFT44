import React from 'react';
import { TranslationSchema } from '../types';
import { Testimonials3DCarousel } from './Testimonials3DCarousel';

interface TestimonialsSectionProps {
  t: TranslationSchema;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ t }) => {
  return (
    <section id="reviews" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-orange-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-bold tracking-wider uppercase text-orange-400">
            {t.testimonials.tag}
          </div>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* 3D Interactive Depth Carousel */}
        <Testimonials3DCarousel t={t} />
      </div>
    </section>
  );
};
