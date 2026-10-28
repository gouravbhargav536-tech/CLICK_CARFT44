import React from 'react';
import { Phone, MapPin, Instagram, Facebook, Rocket } from 'lucide-react';
import { TranslationSchema } from '../types';
import { Logo } from './Logo';

interface FooterProps {
  t: TranslationSchema;
  onOpenDeployGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onOpenDeployGuide }) => {
  return (
    <footer className="border-t border-slate-900 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Statement */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {t.footer.description}
            </p>
            <p className="text-[11px] text-slate-400">
              {t.footer.servingNote}
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/profile.php?id=61584517962364"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClickCraft Facebook Page"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition-colors"
              >
                <Facebook className="w-4 h-4 text-blue-400" />
              </a>

              <a
                href="https://www.instagram.com/alwaysclickcraft/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ClickCraft Instagram Profile"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-pink-600/20 hover:border-pink-500/50 transition-colors"
              >
                <Instagram className="w-4 h-4 text-pink-400" />
              </a>

              <button
                type="button"
                onClick={onOpenDeployGuide}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer text-xs"
              >
                <Rocket className="w-3.5 h-3.5 text-teal-400" />
                <span>Netlify Deploy Guide</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#difference" className="hover:text-orange-400 transition-colors">
                  {t.nav.difference}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-orange-400 transition-colors">
                  {t.nav.reviews}
                </a>
              </li>
              <li>
                <a href="#founder" className="hover:text-orange-400 transition-colors">
                  {t.nav.founder}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Meta Ads Growth
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Sell Old Car Ads
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  Astrology Client Funnels
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  High-Speed Landing Pages
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-orange-400 transition-colors">
                  ROI & Conversion Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">{t.footer.location}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-400 shrink-0" />
                <a href="tel:+918058165241" className="text-white font-medium hover:text-orange-400 tabular-nums">
                  {t.footer.phone}
                </a>
              </div>

              <p className="text-[11px] text-slate-400 pt-1">
                Founder: Amerjeet Kumar · Performance Marketing Strategist
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} ClickCraft Digital Agency. {t.footer.rights}
          </div>
          <div className="flex items-center gap-4">
            <span>Jhunjhunu, Rajasthan, India</span>
            <span>·</span>
            <span>{t.footer.netlifyBadge}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
