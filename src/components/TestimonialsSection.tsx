import React from 'react';
import { TranslationSchema } from '../types';
import { Testimonials3DCarousel } from './Testimonials3DCarousel';
import { GoogleRatingBadge } from './GoogleRatingBadge';

interface TestimonialsSectionProps {
  t: TranslationSchema;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ t }) => {
  return (
    <section id="reviews" className="py-20 sm:py-28 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
          <div className="text-xs font-bold tracking-wider uppercase text-orange-600">
            {t.testimonials.tag}
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tight">
            {t.testimonials.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium">
            {t.testimonials.subtitle}
          </p>

          {/* Centered Google Reviews Rating Badge */}
          <div className="pt-2 flex justify-center">
            <GoogleRatingBadge variant="full" />
          </div>
        </div>

        {/* 3D Interactive Depth Carousel on White */}
        <Testimonials3DCarousel t={t} />
      </div>
    </section>
  );
};
