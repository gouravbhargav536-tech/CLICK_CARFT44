import React from 'react';
import { Target, MapPin, Zap, Users, BarChart3, ShieldCheck } from 'lucide-react';
import { TranslationSchema } from '../types';

interface AboutMissionProps {
  t: TranslationSchema;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ t }) => {
  return (
    <section id="about" className="py-16 sm:py-20 border-t border-slate-900 bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Who We Are */}
          <div className="lg:col-span-6 space-y-5">
            <div className="text-xs font-bold tracking-wider uppercase text-blue-400">
              {t.about.tag}
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {t.about.lead}
            </p>

            {/* Regional trust signal */}
            <div className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-orange-400 shrink-0" />
              <span>{t.about.locationNote}</span>
            </div>

            <div className="pt-2 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{t.about.bullet1}</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-500/10 text-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{t.about.bullet2}</p>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <p className="text-xs sm:text-sm text-slate-300">{t.about.bullet3}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/40 border border-blue-900/40 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-3xl pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>{t.about.missionTag}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white mb-3">
                {t.about.missionTitle}
              </h3>

              <blockquote className="text-sm sm:text-base text-slate-300 italic border-l-2 border-orange-500 pl-4 py-1 my-4">
                "{t.about.missionDescription}"
              </blockquote>

              <div className="mt-6 pt-5 border-t border-slate-800 grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <BarChart3 className="w-3.5 h-3.5 text-orange-400" />
                    <span>Real Customer ROI</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Zero Vanity Wasting</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                    <Users className="w-3.5 h-3.5 text-blue-400" />
                    <span>Founder Accountability</span>
                  </div>
                  <p className="text-sm font-semibold text-white">Amerjeet Kumar Leads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
