import React, { useState } from 'react';
import { INDIAN_BUSINESS_TEMPLATES } from '../data/templates';
import { ArrowRight, Sparkles, Clock, Globe, Play } from 'lucide-react';
import { BusinessTemplate } from '../types';

interface IndianTemplatesGridProps {
  onSelectTemplate: (template: BusinessTemplate) => void;
}

export const IndianTemplatesGrid: React.FC<IndianTemplatesGridProps> = ({
  onSelectTemplate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Automotive', 'Spiritual & Wellness', 'Education', 'Fashion & Retail', 'Real Estate', 'Local Stores'];

  const filteredTemplates =
    selectedCategory === 'All'
      ? INDIAN_BUSINESS_TEMPLATES
      : INDIAN_BUSINESS_TEMPLATES.filter((t) => t.category === selectedCategory);

  return (
    <section id="indian-templates" className="py-20 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
              READY-TO-USE INDIAN BUSINESS TEMPLATES
            </span>
            <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
              Pre-Engineered for Real Indian Buyers & High Inquiries
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-slate-300">
              No guesswork. Pick a battle-tested template designed specifically for your industry, language, and audience.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900/90 border border-slate-800 rounded-xl overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl p-6 bg-gradient-to-br ${item.gradient} border border-slate-800 hover:border-slate-700 transition-all hover:shadow-2xl hover:shadow-blue-950/40 flex flex-col justify-between group`}
            >
              <div>
                {/* Top Badge & Duration */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-slate-950/80 border border-slate-800 text-[11px] font-bold text-orange-400">
                    {item.tag}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {item.duration}
                    </span>
                    <span>·</span>
                    <span className="bg-slate-900 px-1.5 py-0.5 rounded text-white font-bold">
                      {item.aspectRatio}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-medium text-slate-400 mt-1 mb-3">
                  Target: {item.targetBusiness}
                </p>

                {/* Script snippet preview */}
                <div className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800/80 mb-4">
                  <p className="text-xs text-slate-200 italic leading-relaxed">
                    {item.scriptSnippet}
                  </p>
                </div>

                {/* Language badge */}
                <div className="flex items-center gap-1.5 text-xs text-slate-400 mb-6">
                  <Globe className="w-3.5 h-3.5 text-blue-400" />
                  <span>Available in: <strong className="text-slate-200">{item.language}</strong></span>
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectTemplate(item)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-gradient-to-r hover:from-blue-600 hover:to-orange-500 text-xs font-bold text-slate-200 hover:text-white border border-slate-700/80 hover:border-transparent transition-all shadow-md cursor-pointer group/btn"
              >
                <span>Use This Template in Ad Maker</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
