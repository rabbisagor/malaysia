import React, { useState } from 'react';
import { Info, X, ShieldAlert } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface DisclaimerBannerProps {
  currentLang: Language;
}

export const DisclaimerBanner: React.FC<DisclaimerBannerProps> = ({ currentLang }) => {
  const [isDismissed, setIsDismissed] = useState(false);
  const t = translations;

  if (isDismissed) return null;

  return (
    <div className="bg-amber-50/80 border-b border-amber-200/80 text-amber-950 py-2.5 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-start sm:items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex items-start sm:items-center gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-snug">
            <strong className="font-semibold">{t.disclaimerTitle[currentLang]}: </strong>
            <span className="text-amber-900">{t.disclaimerText[currentLang]}</span>
          </p>
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="text-amber-800 hover:text-amber-950 p-1 rounded hover:bg-amber-100 transition-colors shrink-0"
          title="Dismiss notification"
          aria-label="Dismiss notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
