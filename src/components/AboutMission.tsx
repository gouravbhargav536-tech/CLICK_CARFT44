import React from 'react';
import { Target, MapPin, Zap, Users, BarChart3, ShieldCheck } from 'lucide-react';
import { TranslationSchema } from '../types';

interface AboutMissionProps {
  t: TranslationSchema;
}

export const AboutMission: React.FC<AboutMissionProps> = ({ t }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Who We Are */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-bold tracking-wider uppercase text-orange-600">
              {t.about.tag}
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tight leading-tight">
              {t.about.title}
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {t.about.lead}
            </p>

            {/* Regional trust signal */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-stone-50 border border-stone-200 text-xs sm:text-sm text-slate-800 font-semibold shadow-sm">
              <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
              <span>{t.about.locationNote}</span>
            </div>

            <div className="pt-2 space-y-3.5">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Zap className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700 font-medium">{t.about.bullet1}</p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700 font-medium">{t.about.bullet2}</p>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <p className="text-sm text-slate-700 font-medium">{t.about.bullet3}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission Card Box */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl p-8 sm:p-10 bg-stone-50 border-2 border-stone-200/90 shadow-xl overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider mb-4">
                <Target className="w-3.5 h-3.5" />
                <span>{t.about.missionTag}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-black text-black mb-3">
                {t.about.missionTitle}
              </h3>

              <blockquote className="text-base sm:text-lg text-slate-800 italic border-l-4 border-orange-500 pl-4 py-1 my-5 leading-relaxed font-normal">
                "{t.about.missionDescription}"
              </blockquote>

              <div className="mt-8 pt-6 border-t border-stone-200 grid grid-cols-2 gap-4">
                <div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1 font-semibold">
                    <BarChart3 className="w-3.5 h-3.5 text-orange-600" />
                    <span>Real Customer ROI</span>
                  </div>
                  <p className="text-base font-black text-black">Zero Vanity Wasting</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-slate-500 text-xs mb-1 font-semibold">
                    <Users className="w-3.5 h-3.5 text-blue-600" />
                    <span>Founder Accountability</span>
                  </div>
                  <p className="text-base font-black text-black">Amerjeet Kumar Leads</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
