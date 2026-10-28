import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES } from '../data/languages';

interface LanguageDropdownProps {
  currentLang: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  compact?: boolean;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  currentLang,
  onSelectLanguage,
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedInfo =
    SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Select Language"
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-800 bg-white hover:bg-stone-50 border border-stone-300 rounded-full transition-colors cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-black whitespace-nowrap"
      >
        <span className="text-sm" aria-hidden="true">{selectedInfo.flag}</span>
        <Globe className="w-3.5 h-3.5 text-blue-600" />
        <span className="font-semibold text-slate-900">
          {compact ? selectedInfo.code.toUpperCase() : selectedInfo.nativeLabel}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-white border border-stone-200 rounded-2xl shadow-2xl py-1.5 z-50 divide-y divide-stone-100">
          <div className="px-3 py-2 text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-stone-50">
            Choose Language (15 Languages)
          </div>
          <div className="py-1">
            {SUPPORTED_LANGUAGES.map((lang) => {
              const isSelected = lang.code === currentLang;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    onSelectLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3.5 py-2 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50 text-orange-600 font-bold'
                      : 'text-slate-800 hover:bg-stone-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col">
                      <span className="leading-tight font-semibold">{lang.nativeLabel}</span>
                      <span className="text-[10px] text-slate-500">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-orange-600" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
