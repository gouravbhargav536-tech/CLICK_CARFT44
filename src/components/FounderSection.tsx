import React from 'react';
import { Award, Phone, Instagram, Facebook } from 'lucide-react';
import { TranslationSchema } from '../types';
import { WhatsAppIcon } from './WhatsAppIcon';
import { GoogleRatingBadge } from './GoogleRatingBadge';
import founderImg from '../assets/images/founder_amerjeet_kumar_1791314652023.jpg';

interface FounderSectionProps {
  t: TranslationSchema;
}

export const FounderSection: React.FC<FounderSectionProps> = ({ t }) => {
  return (
    <section id="founder" className="py-20 sm:py-28 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-stone-50 border-2 border-stone-200 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Photo of Founder Amerjeet Kumar (Guaranteed Netlify Visibility) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="relative aspect-square w-full rounded-3xl overflow-hidden border-2 border-black/10 bg-white shadow-2xl">
                  <img
                    src={founderImg}
                    alt="Amerjeet Kumar - Founder of ClickCraft Digital Agency Jhunjhunu"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/founder_amerjeet_kumar_1791314652023.jpg') {
                        target.src = '/images/founder_amerjeet_kumar_1791314652023.jpg';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-black text-lg">{t.founder.name}</p>
                    <p className="text-orange-400 text-xs font-bold">Performance Marketing Expert</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio and Vision */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-700 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>{t.founder.tag}</span>
                </div>
                <GoogleRatingBadge variant="compact" />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-black tracking-tight">
                  {t.founder.name}
                </h2>
                <p className="text-base sm:text-lg font-bold text-blue-700 mt-1">
                  {t.founder.role}
                </p>
              </div>

              {/* Bio Prose */}
              <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
                {t.founder.bio}
              </p>

              {/* Founder Vision Box */}
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-stone-200 shadow-sm">
                <p className="text-xs font-black uppercase tracking-wider text-orange-600 mb-1.5">
                  {t.founder.visionLabel}
                </p>
                <p className="text-lg sm:text-xl font-display font-black text-black italic">
                  {t.founder.visionQuote}
                </p>
              </div>

              {/* Founder Expertise Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {t.founder.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 text-xs font-bold text-slate-700 bg-white border border-stone-200 rounded-full shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/918058165241?text=Hi%20Amerjeet%20Ji,%20I%20want%20to%20discuss%20scaling%20my%20business%20with%20ClickCraft."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba59] rounded-full shadow-lg transition-all cursor-pointer group"
                >
                  <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center p-0.5 shadow-sm group-hover:scale-110 transition-transform">
                    <WhatsAppIcon size={16} colored={true} />
                  </div>
                  <span>{t.founder.contactFounderBtn}</span>
                </a>

                <a
                  href="tel:+918058165241"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-bold text-slate-900 bg-white hover:bg-stone-50 border-2 border-stone-300 rounded-full transition-all shadow-sm"
                >
                  <Phone className="w-4 h-4 text-orange-600" />
                  <span>+91 8058165241</span>
                </a>

                {/* Social icons */}
                <div className="flex items-center gap-2 pl-2">
                  <a
                    href="https://www.instagram.com/alwaysclickcraft/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="p-3 rounded-full bg-white border border-stone-200 text-slate-700 hover:text-black hover:border-black transition-colors shadow-sm"
                  >
                    <Instagram className="w-4 h-4 text-pink-600" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61584517962364"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="p-3 rounded-full bg-white border border-stone-200 text-slate-700 hover:text-black hover:border-black transition-colors shadow-sm"
                  >
                    <Facebook className="w-4 h-4 text-blue-600" />
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
