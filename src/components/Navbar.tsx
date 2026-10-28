import React, { useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { LanguageCode, TranslationSchema } from '../types';
import { LanguageDropdown } from './LanguageDropdown';
import { Logo } from './Logo';

interface NavbarProps {
  t: TranslationSchema;
  currentLang: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  onOpenDeployGuide: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  t,
  currentLang,
  onSelectLanguage,
  onOpenDeployGuide,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.difference, href: '#difference' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.reviews, href: '#reviews' },
    { label: t.nav.founder, href: '#founder' },
    { label: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center group">
          <Logo size="md" showTagline={false} />
        </a>

        {/* Zone 2: Clean nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions + Language selector */}
        <div className="flex items-center gap-3">
          <LanguageDropdown
            currentLang={currentLang}
            onSelectLanguage={onSelectLanguage}
          />

          <a
            href="tel:+918058165241"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-700 hover:text-black bg-stone-50 border border-stone-300 rounded-full hover:bg-stone-100 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-600" />
            <span className="tabular-nums">+91 8058165241</span>
          </a>

          {/* Black Pill CTA button matching reference design */}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-black text-white bg-black hover:bg-slate-900 rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-orange-400" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-xl text-slate-700 hover:text-black hover:bg-stone-100 focus-visible:ring-2 focus-visible:ring-black"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
          <div className="grid grid-cols-2 gap-2 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-xl text-slate-700 hover:bg-stone-100 hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:+918058165241"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-slate-800 bg-stone-100 rounded-full"
            >
              <Phone className="w-4 h-4 text-orange-600" />
              <span>Call +91 8058165241</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="text-center text-xs text-slate-500 hover:text-black py-1"
            >
              Netlify Hosting & Deployment Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
