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
        className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-blue-500 whitespace-nowrap"
      >
        <span className="text-sm" aria-hidden="true">{selectedInfo.flag}</span>
        <Globe className="w-3.5 h-3.5 text-blue-400" />
        <span className="font-medium text-slate-200">
          {compact ? selectedInfo.code.toUpperCase() : selectedInfo.nativeLabel}
        </span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 max-h-80 overflow-y-auto bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl py-1.5 z-50 divide-y divide-slate-800">
          <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
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
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-blue-600/20 text-blue-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col">
                      <span className="leading-tight">{lang.nativeLabel}</span>
                      <span className="text-[10px] text-slate-400">{lang.label}</span>
                    </div>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-400" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
