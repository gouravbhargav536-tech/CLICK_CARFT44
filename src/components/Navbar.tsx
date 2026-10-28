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
    <header className="sticky top-0 z-40 w-full bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark */}
        <a href="#hero" className="flex items-center group">
          <Logo size="md" showTagline={false} />
        </a>

        {/* Zone 2: Clean 4–6 nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-orange-400 transition-colors duration-150 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions + Language selector */}
        <div className="flex items-center gap-3">
          <LanguageDropdown
            currentLang={currentLang}
            onSelectLanguage={onSelectLanguage}
          />

          <a
            href="tel:+918058165241"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg hover:border-slate-700 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-orange-400" />
            <span className="tabular-nums">+91 8058165241</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-500 hover:to-orange-400 rounded-lg shadow-md shadow-orange-500/10 transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap"
          >
            <span>{t.nav.getStarted}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-900 hover:text-orange-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="tel:+918058165241"
              className="flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 rounded-lg"
            >
              <Phone className="w-4 h-4 text-orange-400" />
              <span>Call +91 8058165241</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDeployGuide();
              }}
              className="text-center text-xs text-slate-400 hover:text-slate-200 py-1"
            >
              Netlify Hosting & Deployment Guide
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
