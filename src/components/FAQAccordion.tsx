import React, { useState } from 'react';
import { CLICKCRAFT_FAQS } from '../data/faqs';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('how-credits-work');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="py-20 sm:py-24 bg-slate-950 border-b border-slate-900 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-400">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="mt-2 text-2xl sm:text-4xl font-display font-extrabold text-white tracking-tight">
            Everything You Need to Know
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-slate-300">
            Got questions about credits, regional voiceovers, UPI payments, or our Done For You service? We’ve got answers.
          </p>
        </div>

        <div className="space-y-3.5">
          {CLICKCRAFT_FAQS.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 text-left text-sm font-bold text-white transition-colors cursor-pointer select-none"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-4 h-4 text-orange-400 shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-orange-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 animate-fade-in">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-3 px-2 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-400 border border-slate-800">
                      Category: {item.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-white">Still have a specific question about your business?</h4>
            <p className="text-xs text-slate-400">Speak directly with Amerjeet Kumar on WhatsApp for free advice.</p>
          </div>
          <a
            href="https://wa.me/918058165241?text=Hello%20Amerjeet%20Ji,%20I%20have%20a%20question%20about%20ClickCraft%20ads%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-all shadow-md shrink-0"
          >
            <WhatsAppIcon size={16} colored={false} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
