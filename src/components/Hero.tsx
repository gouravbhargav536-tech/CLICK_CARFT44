import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { TranslationSchema } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HeroScene3D } from './HeroScene3D';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';

interface HeroProps {
  t: TranslationSchema;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  return (
    <section id="hero" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      {/* 1. Interactive 3D Background with Three.js */}
      <HeroScene3D />

      {/* Background radial gradients for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-600/15 via-orange-500/10 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Proposition and Actions */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Offer Notice (Prominent 50% OFF badge requested by user) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/40 text-orange-400 text-xs font-semibold tracking-wide w-fit animate-soft-pulse backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-orange-400 shrink-0" />
              <span>{t.hero.offerBadge}</span>
            </div>

            {/* Split-Text Reveal Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-display font-extrabold tracking-tight text-white leading-[1.12] text-balance">
              <span className="inline-block animate-fade-in">
                {t.hero.headlineStart}
              </span>{' '}
              <span className="text-gradient-brand drop-shadow-[0_0_24px_rgba(59,130,246,0.35)]">
                {t.hero.headlineHighlight}
              </span>{' '}
              <span className="inline-block">
                {t.hero.headlineEnd}
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              {t.hero.subheadline}
            </p>

            {/* CTA Action Buttons with Magnetic Hover */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <MagneticButton href="#contact" className="w-full sm:w-auto">
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500 hover:from-blue-500 hover:to-orange-400 rounded-xl shadow-[0_0_24px_rgba(249,115,22,0.4)] transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                  <span>{t.hero.ctaPrimary}</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </MagneticButton>

              <MagneticButton
                href="https://wa.me/918058165241?text=Hi%20ClickCraft%20Team,%20I%20am%20interested%20in%20scaling%20my%20business%20with%20Meta%20Ads."
                className="w-full sm:w-auto"
              >
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/50 rounded-xl transition-all shadow-lg backdrop-blur-md group">
                  <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={18} colored={true} />
                  </div>
                  <span>{t.hero.ctaSecondary}</span>
                </span>
              </MagneticButton>
            </div>

            {/* Trust Guarantee kicker */}
            <p className="text-xs text-slate-400 font-medium">
              {t.hero.guaranteeText}
            </p>
          </div>

          {/* Right Column: Visual Anchor in 3D Tilt Glass Card */}
          <div className="lg:col-span-5 relative">
            <TiltCard glowColor="rgba(37, 99, 235, 0.35)">
              <div className="relative rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-900/80 shadow-2xl shadow-blue-950/60 backdrop-blur-xl group">
                {/* Media Container with Fallback */}
                <div className="relative aspect-[16/10] sm:aspect-[16/11] w-full bg-slate-950">
                  <img
                    src="/src/assets/images/agency_hero_visual_1791314665991.jpg"
                    alt="ClickCraft Digital Agency live Meta ads performance workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                      if (target.parentElement) {
                        target.parentElement.classList.add('bg-gradient-to-br', 'from-blue-950', 'to-slate-900');
                      }
                    }}
                  />

                  {/* Measured contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Floating Live Metric Snippet */}
                  <div className="absolute bottom-4 left-4 right-4 bg-slate-900/95 backdrop-blur-md border border-slate-700/80 rounded-2xl p-3.5 flex items-center justify-between shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-white">Meta Ads Performance</p>
                        <p className="text-[11px] text-slate-400">Jhunjhunu · Pan-India · Global</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-emerald-400 tabular-nums">+240%</span>
                      <p className="text-[10px] text-slate-400">Verified Leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Quantified Performance Metrics Bar with Animated Counters */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5 sm:p-6 rounded-3xl bg-slate-900/85 border border-slate-700/80 backdrop-blur-xl shadow-2xl">
          <div className="border-r border-slate-800/80 last:border-0 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-white">
              <AnimatedCounter value={t.hero.stats.reach} />
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.reachLabel}</p>
          </div>

          <div className="border-r border-slate-800/80 last:border-0 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-orange-400">
              <AnimatedCounter value={t.hero.stats.roas} />
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.roasLabel}</p>
          </div>

          <div className="border-r border-slate-800/80 last:border-0 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-blue-400">
              <AnimatedCounter value={t.hero.stats.clients} />
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.clientsLabel}</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-display font-extrabold text-emerald-400">
              <AnimatedCounter value={t.hero.stats.satisfaction} />
            </p>
            <p className="text-xs text-slate-400 mt-0.5">{t.hero.stats.satisfactionLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
