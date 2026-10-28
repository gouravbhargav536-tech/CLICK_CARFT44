import React from 'react';
import { Award, Phone, Instagram, Facebook } from 'lucide-react';
import { TranslationSchema } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';

interface FounderSectionProps {
  t: TranslationSchema;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ t }) => {
  return (
    <section id="founder" className="py-16 sm:py-24 border-t border-slate-900 bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950/30 border border-slate-800 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Photo of Founder Amerjeet Kumar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                {/* Glow ring */}
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-blue-600 via-orange-500 to-blue-400 opacity-40 blur-lg group-hover:opacity-60 transition duration-500" />

                <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 shadow-2xl">
                  <img
                    src="/src/assets/images/founder_amerjeet_kumar_1791314652023.jpg"
                    alt="Amerjeet Kumar - Founder of ClickCraft Digital Agency Jhunjhunu"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-base">{t.founder.name}</p>
                    <p className="text-orange-400 text-xs font-medium">Performance Marketing Expert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio and Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5" />
                <span>{t.founder.tag}</span>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-white tracking-tight">
                  {t.founder.name}
                </h2>
                <p className="text-sm sm:text-base font-semibold text-blue-400 mt-1">
                  {t.founder.role}
                </p>
              </div>

              {/* Bio Prose */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {t.founder.bio}
              </p>

              {/* Founder Vision Box */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <p className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-1">
                  {t.founder.visionLabel}
                </p>
                <p className="text-base sm:text-lg font-display font-bold text-white italic">
                  {t.founder.visionQuote}
                </p>
              </div>

              {/* Founder Expertise Badges */}
              <div className="flex flex-wrap gap-2">
                {t.founder.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/918058165241?text=Hi%20Amerjeet%20Ji,%20I%20want%20to%20discuss%20scaling%20my%20business%20with%20ClickCraft."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-3 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-xl shadow-lg shadow-emerald-950/40 transition-all cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={16} colored={true} />
                  </div>
                  <span>{t.founder.contactFounderBtn}</span>
                </a>

                <a
                  href="tel:+918058165241"
                  className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-orange-400" />
                  <span>+91 8058165241</span>
                </a>

                {/* Social icons */}
                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://www.instagram.com/alwaysclickcraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <Instagram className="w-4 h-4 text-pink-400" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584517962364"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  >
                    <Facebook className="w-4 h-4 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
