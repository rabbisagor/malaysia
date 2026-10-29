import React from 'react';
import {
  HeartPulse,
  FileCheck,
  ShieldCheck,
  BookMarked,
  UserCheck,
  HardHat,
  ShieldAlert,
  Briefcase,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';

interface ServiceCardProps {
  service: ServiceItem;
  currentLang: Language;
  onOpenModal: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  currentLang,
  onOpenModal,
}) => {
  const t = translations;

  // Icon mapping
  const renderIcon = () => {
    const iconClass = 'w-5 h-5 text-slate-800';
    switch (service.iconName) {
      case 'HeartPulse':
        return <HeartPulse className={iconClass} />;
      case 'FileCheck':
        return <FileCheck className={iconClass} />;
      case 'ShieldCheck':
        return <ShieldCheck className={iconClass} />;
      case 'BookMarked':
        return <BookMarked className={iconClass} />;
      case 'UserCheck':
        return <UserCheck className={iconClass} />;
      case 'HardHat':
        return <HardHat className={iconClass} />;
      case 'ShieldAlert':
        return <ShieldAlert className={iconClass} />;
      case 'Briefcase':
        return <Briefcase className={iconClass} />;
      default:
        return <ShieldCheck className={iconClass} />;
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 hover:shadow-md transition-shadow flex flex-col justify-between group">
      <div>
        {/* Top agency and unboxed metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500 mb-3 gap-2">
          <div className="flex items-center gap-2 truncate">
            <span className="font-semibold text-slate-700 truncate">{service.agency}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-medium">Verified Portal</span>
          </div>
          {service.isPopular && (
            <span className="text-amber-800 text-[11px] font-semibold flex items-center gap-1 shrink-0">
              <Sparkles className="w-3 h-3 text-amber-600" />
              <span>{currentLang === 'bn' ? 'বেশি ব্যবহৃত' : 'Frequent'}</span>
            </span>
          )}
        </div>

        {/* Title & Icon Header */}
        <div className="flex items-start gap-3.5 mb-2.5">
          <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shrink-0 border border-slate-200/80 group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-colors">
            {renderIcon()}
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-800 transition-colors leading-snug">
              {service.title[currentLang]}
            </h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              {service.subtitle[currentLang]}
            </p>
          </div>
        </div>

        {/* Required Fields Summary */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 text-xs">
          <span className="font-semibold text-slate-700 block mb-1.5">
            {t.serviceCard.requiredInfo[currentLang]}
          </span>
          <div className="space-y-1 text-slate-600">
            {service.requiredFields[currentLang].slice(0, 2).map((field, idx) => (
              <div key={idx} className="flex items-center gap-1.5 truncate">
                <span className="w-1 h-1 bg-slate-400 rounded-full shrink-0" />
                <span className="truncate">{field}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onOpenModal(service)}
          className="flex-1 px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1 whitespace-nowrap min-h-[44px]"
        >
          <span>{t.serviceCard.viewGuide[currentLang]}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>

        <a
          href={service.portalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 px-3 py-2.5 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors shadow-2xs flex items-center justify-center gap-1.5 whitespace-nowrap min-h-[44px]"
        >
          <span>{t.serviceCard.officialPortal[currentLang]}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
