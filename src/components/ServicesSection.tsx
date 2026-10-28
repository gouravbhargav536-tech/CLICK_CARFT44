import React, { useState } from 'react';
import {
  Megaphone,
  TrendingUp,
  Sparkles,
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
        return <Megaphone className="w-5 h-5 text-blue-400" />;
      case 'business-growth':
        return <TrendingUp className="w-5 h-5 text-emerald-400" />;
      case 'advertising':
        return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 'business-analytics':
        return <BarChart className="w-5 h-5 text-cyan-400" />;
      case 'creative-strategy':
        return <Lightbulb className="w-5 h-5 text-amber-400" />;
      case 'sell-car':
        return <Car className="w-5 h-5 text-orange-500" />;
      case 'astrology-ads':
        return <Compass className="w-5 h-5 text-indigo-400" />;
      case 'landing-page':
        return <Layout className="w-5 h-5 text-purple-400" />;
      default:
        return <Megaphone className="w-5 h-5 text-blue-400" />;
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
    <section id="services" className="py-20 sm:py-28 border-t border-slate-900 bg-slate-950 relative overflow-hidden">
      {/* Background glowing gradient orbs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider uppercase text-orange-400">
              {t.services.tag}
            </div>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
              {t.services.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              {t.services.subtitle}
            </p>
          </div>

          {/* Filter segment tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl backdrop-blur-md self-start md:self-auto overflow-x-auto max-w-full">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Services ({t.services.items.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter('meta')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'meta'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Meta Ads & Scale
            </button>
            <button
              type="button"
              onClick={() => setFilter('specialized')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'specialized'
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Car & Astrology Ads
            </button>
            <button
              type="button"
              onClick={() => setFilter('pages')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                filter === 'pages'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
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
              ? 'rgba(249, 115, 22, 0.4)'
              : 'rgba(37, 99, 235, 0.35)';

            return (
              <TiltCard key={service.id} glowColor={glow} className="h-full">
                <div
                  className={`h-full relative rounded-2xl p-5 sm:p-6 bg-slate-900/80 backdrop-blur-xl border transition-all duration-300 flex flex-col justify-between hover:border-slate-600 hover:shadow-2xl hover:shadow-blue-950/40 group ${
                    isFeatured
                      ? 'border-orange-500/50 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-orange-950/20'
                      : 'border-slate-800/90'
                  }`}
                >
                  <div>
                    {/* Top Bar inside card */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800/90 border border-slate-700/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-inner">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-[11px] font-mono font-medium text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title and Tagline */}
                    <h3 className="text-base sm:text-lg font-display font-bold text-white group-hover:text-orange-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-medium text-slate-400 mt-1 mb-3">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Bullet Benefits */}
                    <div className="space-y-1.5 mb-6">
                      {service.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-400">
                          <Check className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action */}
                  <button
                    type="button"
                    onClick={() => onSelectServiceForForm(service.formKey)}
                    className="w-full mt-auto flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 text-xs font-semibold text-slate-200 hover:text-white border border-slate-700/60 hover:border-transparent transition-all cursor-pointer group/btn shadow-sm"
                  >
                    <span>{t.services.requestBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
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
