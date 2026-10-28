import React, { useState } from 'react';
import {
  Megaphone,
  TrendingUp,
  Layers,
  BarChart,
  Lightbulb,
  Car,
  Compass,
  Layout,
  ArrowRight,
  Check,
} from 'lucide-react';
import { TranslationSchema, ServiceId } from '../types';
import { TiltCard } from './TiltCard';

interface ServicesSectionProps {
  t: TranslationSchema;
  onSelectServiceForForm: (formKey: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  t,
  onSelectServiceForForm,
}) => {
  const [filter, setFilter] = useState<'all' | 'meta' | 'specialized' | 'pages'>('all');

  const getServiceIcon = (id: ServiceId) => {
    switch (id) {
      case 'digital-marketing':
        return <Megaphone className="w-5 h-5 text-blue-600" />;
      case 'business-growth':
        return <TrendingUp className="w-5 h-5 text-emerald-600" />;
      case 'advertising':
        return <Layers className="w-5 h-5 text-orange-600" />;
      case 'business-analytics':
        return <BarChart className="w-5 h-5 text-blue-700" />;
      case 'creative-strategy':
        return <Lightbulb className="w-5 h-5 text-amber-600" />;
      case 'sell-car':
        return <Car className="w-5 h-5 text-orange-600" />;
      case 'astrology-ads':
        return <Compass className="w-5 h-5 text-indigo-600" />;
      case 'landing-page':
        return <Layout className="w-5 h-5 text-purple-600" />;
      default:
        return <Megaphone className="w-5 h-5 text-blue-600" />;
    }
  };

  const filteredItems = t.services.items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'meta')
      return ['digital-marketing', 'business-growth', 'advertising', 'business-analytics'].includes(item.id);
    if (filter === 'specialized')
      return ['sell-car', 'astrology-ads', 'creative-strategy'].includes(item.id);
    if (filter === 'pages')
      return ['landing-page', 'creative-strategy'].includes(item.id);
    return true;
  });

  return (
    <section id="services" className="py-20 sm:py-28 bg-white border-b border-stone-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-orange-600">
              {t.services.tag}
            </div>
            <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tight">
              {t.services.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-700 font-medium">
              {t.services.subtitle}
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 border border-stone-200 rounded-full self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-black text-white shadow-md'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              All Services ({t.services.items.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('meta')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                filter === 'meta'
                  ? 'bg-black text-white shadow-md'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Meta Ads & Scale
            </button>
            <button
              type="button"
              onClick={() => setFilter('specialized')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                filter === 'specialized'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Car & Astrology Ads
            </button>
            <button
              type="button"
              onClick={() => setFilter('pages')}
              className={`px-4 py-2 text-xs font-bold rounded-full transition-all whitespace-nowrap cursor-pointer ${
                filter === 'pages'
                  ? 'bg-black text-white shadow-md'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Landing Pages
            </button>
          </div>
        </div>

        {/* 8 Services Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((service, idx) => {
            const isFeatured = service.id === 'sell-car' || service.id === 'astrology-ads';
            const glow = isFeatured
              ? 'rgba(249, 115, 22, 0.25)'
              : 'rgba(37, 99, 235, 0.2)';

            return (
              <TiltCard key={service.id} glowColor={glow} className="h-full">
                <div
                  className={`h-full relative rounded-3xl p-6 bg-white border-2 transition-all duration-300 flex flex-col justify-between hover:border-black hover:shadow-xl hover:shadow-stone-200/80 group ${
                    isFeatured
                      ? 'border-orange-300 bg-orange-50/20'
                      : 'border-stone-200/90'
                  }`}
                >
                  <div>
                    {/* Top Bar inside card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-stone-50 border border-stone-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-lg font-display font-black text-black group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-1 mb-3">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-slate-700 leading-relaxed mb-5 font-normal">
                      {service.description}
                    </p>

                    {/* Bullet Benefits */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs text-slate-600 font-medium">
                          <Check className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action: Black Pill Button */}
                  <button
                    type="button"
                    onClick={() => onSelectServiceForForm(service.formKey)}
                    className="w-full mt-auto flex items-center justify-between px-4 py-3 rounded-full bg-stone-900 hover:bg-black text-xs font-bold text-white transition-all cursor-pointer group/btn shadow-md"
                  >
                    <span>{t.services.requestBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-orange-400 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
