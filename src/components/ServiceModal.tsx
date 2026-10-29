import React, { useState } from 'react';
import { X, ExternalLink, Check, Copy, AlertCircle, BookmarkPlus } from 'lucide-react';
import { ServiceItem, Language } from '../types';
import { translations } from '../data/translations';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  currentLang: Language;
  onSaveToVault?: (docType: string, number: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  currentLang,
  onSaveToVault,
}) => {
  const [helperInput, setHelperInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!service) return null;

  const t = translations;

  const handleCopy = () => {
    if (!helperInput.trim()) return;
    navigator.clipboard.writeText(helperInput.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSaveDoc = () => {
    if (!helperInput.trim() || !onSaveToVault) return;
    const docType = service.category === 'medical' ? 'fomema' : service.category === 'permit' ? 'permit' : 'passport';
    onSaveToVault(docType, helperInput.trim());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-start justify-between gap-4 bg-slate-50/50">
          <div>
            <div className="text-xs font-medium text-slate-500 mb-1 flex items-center gap-2">
              <span>{service.agency}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">Official Portal Guide</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
              {service.title[currentLang]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {service.subtitle[currentLang]}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Quick Helper Simulator */}
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.modal.simulatorTitle[currentLang]}
            </label>
            <p className="text-xs text-slate-500 mb-3">
              {currentLang === 'bn'
                ? 'আপনার পাসপোর্ট নম্বর বা ওয়ার্কার কোড এখানে লিখে কপি করে রাখুন, যেন পোর্টালে সরাসরি পেস্ট করতে পারেন।'
                : 'Enter your Passport Number or Worker Code to copy quickly before visiting the portal:'}
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder={currentLang === 'bn' ? 'যেমন: A12345678 বা W9876543' : 'e.g. A12345678 or W9876543'}
                value={helperInput}
                onChange={(e) => setHelperInput(e.target.value)}
                className="flex-1 px-3.5 py-2 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={!helperInput.trim()}
                  className="px-3.5 py-2 text-xs font-semibold bg-white border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap min-w-[90px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{t.vault.copied[currentLang]}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{t.vault.copyNumber[currentLang]}</span>
                    </>
                  )}
                </button>
                {onSaveToVault && (
                  <button
                    type="button"
                    onClick={handleSaveDoc}
                    disabled={!helperInput.trim()}
                    className="px-3.5 py-2 text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-lg hover:bg-emerald-100 disabled:opacity-50 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                    title="Save to My Vault"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                    <span>{savedSuccess ? 'Saved!' : 'Save'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Required Fields */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2.5">
              {t.serviceCard.requiredInfo[currentLang]}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
              {service.requiredFields[currentLang].map((field, idx) => (
                <li
                  key={idx}
                  className="p-2.5 bg-slate-50/70 border border-slate-200/60 rounded-lg flex items-center gap-2"
                >
                  <div className="w-1.5 h-1.5 bg-slate-500 rounded-full shrink-0" />
                  <span>{field}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Step-by-Step Instructions */}
          <div>
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              {t.modal.howToCheck[currentLang]}
            </h3>
            <div className="space-y-2.5">
              {service.steps[currentLang].map((step, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-white border border-slate-100 rounded-xl text-xs sm:text-sm text-slate-800 shadow-2xs leading-relaxed"
                >
                  {step}
                </div>
              ))}
            </div>
          </div>

          {/* Important Notice */}
          <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-1">
                {t.modal.importantNotice[currentLang]}
              </span>
              <p className="leading-relaxed text-amber-900">
                {service.importantNotes[currentLang]}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-4 sm:p-5 border-t border-slate-200 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-slate-500 text-center sm:text-left">
            <span>{t.serviceCard.directLinkNotice[currentLang]}</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-medium text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors"
            >
              {t.modal.close[currentLang]}
            </button>
            <a
              href={service.portalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-colors shadow-sm flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <span>{t.modal.visitOfficialSite[currentLang]}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
