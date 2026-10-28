import React from 'react';
import { Phone } from 'lucide-react';
import { TranslationSchema } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FloatingActionsProps {
  t: TranslationSchema;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ t }) => {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Click to Call Button */}
      <a
        href="tel:+918058165241"
        aria-label={t.floating.callDirect}
        className="pointer-events-auto group flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-slate-900/95 hover:bg-slate-800 text-white border border-slate-700/90 shadow-xl shadow-slate-950/60 backdrop-blur-md transition-all hover:scale-105 active:scale-95"
      >
        <div className="w-8 h-8 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center">
          <Phone className="w-4 h-4" />
        </div>
        <span className="hidden sm:inline text-xs font-semibold pr-1">
          {t.floating.callDirect}
        </span>
      </a>

      {/* Floating Real WhatsApp Official Button with Soft Glow */}
      <a
        href="https://wa.me/918058165241?text=Hello%20ClickCraft%20Digital%20Agency!%20I%20want%20to%20learn%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.floating.chatWhatsApp}
        className="pointer-events-auto group relative flex items-center gap-2.5 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-emerald-950/70 transition-all hover:scale-105 active:scale-95"
      >
        {/* Soft pulse glow */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 blur-sm group-hover:opacity-75 transition animate-soft-pulse" />

        <div className="relative w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner">
          <WhatsAppIcon size={20} colored={true} />
        </div>

        <span className="relative hidden sm:inline text-xs font-bold text-white tracking-wide pr-1 drop-shadow-sm">
          {t.floating.chatWhatsApp}
        </span>
      </a>
    </div>
  );
};
