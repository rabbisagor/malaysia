import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Clock, AlertCircle } from 'lucide-react';
import { GuideItem, Language } from '../types';
import { guidesData } from '../data/guidesData';
import { translations } from '../data/translations';

interface GuidesSectionProps {
  currentLang: Language;
}

export const GuidesSection: React.FC<GuidesSectionProps> = ({ currentLang }) => {
  const t = translations;
  const [expandedId, setExpandedId] = useState<string | null>(guidesData[0].id);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen className="w-5 h-5 text-emerald-700" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {t.nav.guides[currentLang]}
          </h3>
        </div>
        <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
          {currentLang === 'bn'
            ? 'মালয়েশিয়ায় কাজ ও বসবাসে দালাল প্রতারণা থেকে বাঁচা, মেডিকেল সমস্যা ও পাসপোর্টের আইনি সমাধানের পরীক্ষিত নির্দেশিকা।'
            : 'Essential practical guides and safety advisories on visa verification, FOMEMA medical appeals, and worker rights.'}
        </p>
      </div>

      <div className="space-y-3">
        {guidesData.map((guide) => {
          const isExpanded = expandedId === guide.id;
          return (
            <div
              key={guide.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs"
            >
              <button
                type="button"
                onClick={() => toggleExpand(guide.id)}
                className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 hover:bg-slate-50/60 transition-colors focus:outline-none"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-1.5">
                    <span className="font-semibold text-slate-700 uppercase tracking-wider">
                      {guide.category.toUpperCase()}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {guide.readTime}
                    </span>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                    {guide.title[currentLang]}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1">
                    {guide.summary[currentLang]}
                  </p>
                </div>

                <div className="p-1 rounded-lg text-slate-400 shrink-0">
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </button>

              {isExpanded && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <div className="space-y-3 mt-4">
                    {guide.points[currentLang].map((point, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 leading-relaxed shadow-2xs flex items-start gap-2.5"
                      >
                        <AlertCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
