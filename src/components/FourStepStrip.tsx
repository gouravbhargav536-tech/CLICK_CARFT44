import React from 'react';
import { FileEdit, Sparkles, SlidersHorizontal, Rocket, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Describe Your Offer',
    subtitle: 'Type your product or choose an Indian template',
    description: 'Enter vehicle details, consultation offer, or festive sale in simple Hindi or English.',
    icon: FileEdit,
    color: 'text-blue-400',
    border: 'border-blue-500/30',
    bg: 'bg-blue-500/10',
  },
  {
    step: '02',
    title: 'AI Generates Video',
    subtitle: 'Commercial visuals + Regional voiceover',
    description: 'Veo-speed AI renders photorealistic visuals paired with authentic Hindi, Rajasthani, or Punjabi voiceovers.',
    icon: Sparkles,
    color: 'text-orange-400',
    border: 'border-orange-500/30',
    bg: 'bg-orange-500/10',
  },
  {
    step: '03',
    title: 'Review & Customize',
    subtitle: 'Live script, captions & WhatsApp badge',
    description: 'Review auto-synchronized animated captions, adjust your phone number, and fine-tune the 3-second hook.',
    icon: SlidersHorizontal,
    color: 'text-amber-400',
    border: 'border-amber-500/30',
    bg: 'bg-amber-500/10',
  },
  {
    step: '04',
    title: 'Launch on Meta Ads',
    subtitle: 'Download in 4K or let us manage the ads',
    description: 'Export directly to Instagram Reels/Facebook, or tap "Done For You" to let Amerjeet’s team run it for you.',
    icon: Rocket,
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
  },
];

export const FourStepStrip: React.FC = () => {
  return (
    <section className="py-16 bg-slate-950/70 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            HOW IT WORKS · 4 SIMPLE STEPS
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
            From Raw Idea to High-Converting Video Ad in 60 Seconds
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            No expensive cameras, no confusing video editors, zero technical jargon. Built for busy Indian business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="relative rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-950/30 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-11 h-11 rounded-xl ${s.bg} border ${s.border} flex items-center justify-center ${s.color} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                      STEP {s.step}
                    </span>
                  </div>

                  <h3 className="text-base font-display font-bold text-white group-hover:text-orange-400 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1 mb-2">
                    {s.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-6 h-6 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
