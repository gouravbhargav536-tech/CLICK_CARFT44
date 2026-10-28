import React from 'react';
import { AI_CREATIVE_MODELS } from '../data/models';
import { Sparkles, Mic, FileText, Layers, ArrowUpRight, Cpu } from 'lucide-react';

interface ModelHubGridProps {
  onSelectModel: (modelId: string) => void;
}

export const ModelHubGrid: React.FC<ModelHubGridProps> = ({ onSelectModel }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'sparkles':
        return <Sparkles className="w-5 h-5 text-orange-400" />;
      case 'mic':
        return <Mic className="w-5 h-5 text-blue-400" />;
      case 'file-text':
        return <FileText className="w-5 h-5 text-amber-400" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-emerald-400" />;
      default:
        return <Cpu className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="model-hub" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            CREATIVE MODEL HUB · HIGH PERFORMANCE ENGINES
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Specialized AI Engines Built for Commercial Ads
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            Each engine is fine-tuned for high-converting sales psychology, realistic Indian commercial environments, and multi-format export.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_CREATIVE_MODELS.map((m) => (
            <div
              key={m.id}
              className="rounded-3xl p-6 bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-all hover:shadow-xl hover:shadow-blue-950/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(m.iconType)}
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400">
                    {m.badge}
                  </span>
                </div>

                <h3 className="text-base font-display font-bold text-white group-hover:text-orange-400 transition-colors">
                  {m.name}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 mb-3">
                  {m.provider}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {m.description}
                </p>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1 mb-6 text-[11px] text-slate-400">
                  <p>• Max Duration: <strong className="text-slate-200">{m.maxDuration}</strong></p>
                  <p>• Recommended: <span className="text-slate-300">{m.recommendedFor}</span></p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onSelectModel(m.id);
                  const el = document.getElementById('ai-generator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 text-xs font-bold text-slate-200 hover:text-white border border-slate-700/80 hover:border-transparent transition-all cursor-pointer group/btn"
              >
                <span>Launch in Ad Maker</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
