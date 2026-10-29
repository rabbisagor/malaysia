import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  activeTab,
  onTabChange,
}) => {
  const t = translations;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <button
            onClick={() => onTabChange('services')}
            className="text-left group flex items-center gap-2.5 focus:outline-none"
          >
            <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm shadow-sm">
              MY
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors whitespace-nowrap">
                {currentLang === 'bn' ? 'মালয়েশিয়া প্রবাসী গাইড' : 'Malaysia Expat Guide'}
              </span>
              <span className="text-[11px] text-slate-500 hidden sm:inline-block">
                Status Check & Worker Portal
              </span>
            </div>
          </button>

          {/* Zone 2: 4-5 clean single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button
              onClick={() => onTabChange('services')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 relative ${
                activeTab === 'services' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {t.nav.services[currentLang]}
              {activeTab === 'services' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>

            <button
              onClick={() => onTabChange('calculator')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 relative ${
                activeTab === 'calculator' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {t.nav.calculator[currentLang]}
              {activeTab === 'calculator' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>

            <button
              onClick={() => onTabChange('vault')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 relative ${
                activeTab === 'vault' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {t.nav.myTracker[currentLang]}
              {activeTab === 'vault' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>

            <button
              onClick={() => onTabChange('guides')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 relative ${
                activeTab === 'guides' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {t.nav.guides[currentLang]}
              {activeTab === 'guides' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>

            <button
              onClick={() => onTabChange('emergency')}
              className={`hover:text-slate-900 transition-colors whitespace-nowrap py-1 relative ${
                activeTab === 'emergency' ? 'text-slate-900 font-semibold' : ''
              }`}
            >
              {t.nav.emergency[currentLang]}
              {activeTab === 'emergency' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-900 rounded-full" />
              )}
            </button>
          </nav>

          {/* Zone 3: 1 primary action - Language Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center p-1 bg-slate-100 rounded-lg border border-slate-200">
              <span className="sr-only">Choose language</span>
              <Globe className="w-3.5 h-3.5 text-slate-500 ml-1.5 mr-1" aria-hidden="true" />
              <button
                type="button"
                onClick={() => onLanguageChange('bn')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  currentLang === 'bn'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                বাংলা
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  currentLang === 'en'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ms')}
                className={`px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  currentLang === 'ms'
                    ? 'bg-white text-slate-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Melayu
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
