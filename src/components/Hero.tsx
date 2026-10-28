import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { TranslationSchema } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { HeroScene3D } from './HeroScene3D';
import { FluidVideoBackground } from './FluidVideoBackground';
import { MagneticButton } from './MagneticButton';
import { AnimatedCounter } from './AnimatedCounter';
import { TiltCard } from './TiltCard';
import brandLogoImg from '../assets/images/brand_logo.png';

interface HeroProps {
  t: TranslationSchema;
}

export const Hero: React.FC<HeroProps> = ({ t }) => {
  // Kinetic dynamic rotating words for animated text
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const rotatingWords = [
    'Paying Customers',
    'Verified Buyers',
    'High-ROI Leads',
    'Real Revenue',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section id="hero" className="relative pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-white text-slate-950 border-b border-stone-200/80">
      {/* 1. Fast Fluid Animated Video-Style Canvas Background */}
      <FluidVideoBackground />

      {/* 2. Interactive 3D Objects with Three.js (subtle depth layer) */}
      <div className="opacity-65">
        <HeroScene3D />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Direct Match to Reference Design */}
          <div className="lg:col-span-7 flex flex-col space-y-7">
            {/* Brand Emblem Lockup as shown in reference design */}
            <div className="flex items-center gap-3.5 select-none">
              <div className="w-14 h-14 rounded-2xl bg-white border-2 border-black p-2 flex items-center justify-center shadow-md shadow-stone-200/80 shrink-0">
                <img
                  src={brandLogoImg}
                  alt="ClickCraft Digital Agency Logo"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.src = '/brand_logo.png';
                  }}
                />
              </div>
              <span className="font-display font-black text-3xl sm:text-4xl tracking-tight text-black">
                ClickCraft
              </span>
            </div>

            {/* Offer Notice (Direct match to reference design: Peach/orange pill, flame emoji, NO AI stars) */}
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FEE2CD] border border-[#FDBA74] text-black text-xs sm:text-[13px] font-extrabold tracking-wider w-fit shadow-sm">
              <span className="text-base leading-none" role="img" aria-label="flame">🔥</span>
              <span>LIMITED TIME: 50% OFF FIRST CAMPAIGN SETUP</span>
            </div>

            {/* Main Headline (Text Style Same-to-Same Like Image) */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-display font-black tracking-tight text-black leading-[1.08] text-balance">
                <span className="block">Stop Wasting Money</span>
                <span className="block">on Empty Likes.</span>
                <span className="block">
                  Get Real{' '}
                  <span className="relative inline-block text-black font-black">
                    {/* Kinetic Animated Rotating Text */}
                    <span
                      key={rotatingIndex}
                      className="inline-block transition-all duration-500 transform animate-fade-in text-black"
                    >
                      {rotatingWords[rotatingIndex]}
                    </span>
                    {/* Hand-drawn organic highlighter brush stroke underline underneath keyword */}
                    <svg
                      className="absolute -bottom-2.5 left-0 w-full h-3.5 text-orange-500 overflow-visible pointer-events-none"
                      viewBox="0 0 200 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 9C55 3.5 150 2.5 198 8C140 11.5 60 12.5 10 11"
                        stroke="#F97316"
                        strokeWidth="5.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-pulse"
                      />
                    </svg>
                  </span>
                </span>
                <span className="block text-black">Through Targeted Ads.</span>
              </h1>
            </div>

            {/* Subheadline matching reference design */}
            <p className="text-lg sm:text-xl text-slate-800 font-medium leading-relaxed max-w-xl">
              We build laser-focused Meta Ad campaigns for businesses in Jhunjhunu, India & globally.
            </p>

            {/* CTA Action Buttons matching reference pill button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              {/* Primary Bold Black Pill Button (Direct match to reference design) */}
              <MagneticButton href="#contact" className="w-full sm:w-auto">
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 text-base sm:text-lg font-black text-white bg-black hover:bg-slate-900 rounded-full shadow-2xl shadow-slate-900/30 transition-all hover:scale-[1.03] active:scale-[0.98] cursor-pointer">
                  <span>Claim 50% Off Offer</span>
                  <ArrowRight className="w-4 h-4 text-orange-400" />
                </span>
              </MagneticButton>

              {/* Secondary Real WhatsApp Pill Button */}
              <MagneticButton
                href="https://wa.me/918058165241?text=Hi%20ClickCraft%20Team,%20I%20am%20interested%20in%20scaling%20my%20business%20with%20Meta%20Ads."
                className="w-full sm:w-auto"
              >
                <span className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4.5 text-base font-bold text-slate-950 bg-white hover:bg-stone-50 border-2 border-stone-300 rounded-full transition-all shadow-md group">
                  <div className="w-5 h-5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={18} colored={true} />
                  </div>
                  <span>{t.hero.ctaSecondary}</span>
                </span>
              </MagneticButton>
            </div>

            {/* Trust Guarantee kicker without any AI star icons */}
            <p className="text-xs text-slate-500 font-semibold tracking-wide">
              {t.hero.guaranteeText}
            </p>
          </div>

          {/* Right Column: Visual Anchor with 3D Tilt Card */}
          <div className="lg:col-span-5 relative">
            <TiltCard glowColor="rgba(249, 115, 22, 0.25)">
              <div className="relative rounded-3xl overflow-hidden border-2 border-black/10 bg-white shadow-2xl shadow-stone-300/40 group">
                {/* Media Container */}
                <div className="relative aspect-[16/11] w-full bg-stone-900">
                  <img
                    src="/src/assets/images/agency_hero_visual_1791314665991.jpg"
                    alt="ClickCraft Digital Agency live Meta ads performance workspace"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />

                  {/* Contrast scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Floating Live Metric Snippet */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-stone-200 rounded-2xl p-3.5 flex items-center justify-between shadow-xl text-slate-900">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-300 flex items-center justify-center text-emerald-600">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Meta Ads Performance</p>
                        <p className="text-[11px] text-slate-500">Jhunjhunu · Pan-India · Global</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-extrabold text-emerald-600 tabular-nums">+240%</span>
                      <p className="text-[10px] text-slate-500 font-semibold">Verified Leads</p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Quantified Performance Metrics Bar with Animated Counters */}
        <div className="mt-14 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 rounded-3xl bg-white border-2 border-stone-200/90 shadow-xl">
          <div className="border-r border-stone-200 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-black text-black">
              <AnimatedCounter value={t.hero.stats.reach} />
            </p>
            <p className="text-xs text-slate-600 font-semibold mt-0.5">{t.hero.stats.reachLabel}</p>
          </div>

          <div className="border-r border-stone-200 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-black text-orange-600">
              <AnimatedCounter value={t.hero.stats.roas} />
            </p>
            <p className="text-xs text-slate-600 font-semibold mt-0.5">{t.hero.stats.roasLabel}</p>
          </div>

          <div className="border-r border-stone-200 pr-4">
            <p className="text-2xl sm:text-3xl font-display font-black text-blue-700">
              <AnimatedCounter value={t.hero.stats.clients} />
            </p>
            <p className="text-xs text-slate-600 font-semibold mt-0.5">{t.hero.stats.clientsLabel}</p>
          </div>

          <div>
            <p className="text-2xl sm:text-3xl font-display font-black text-emerald-600">
              <AnimatedCounter value={t.hero.stats.satisfaction} />
            </p>
            <p className="text-xs text-slate-600 font-semibold mt-0.5">{t.hero.stats.satisfactionLabel}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
