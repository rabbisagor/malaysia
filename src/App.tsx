import React, { useState, useEffect } from 'react';
import {
  Search,
  ShieldCheck,
  Building2,
  FileCheck2,
  PhoneCall,
  ExternalLink,
  Info,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { Language, ServiceCategory, ServiceItem, WorkerDocument } from './types';
import { translations } from './data/translations';
import { servicesData } from './data/servicesData';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { DisclaimerBanner } from './components/DisclaimerBanner';
import { ServiceCard } from './components/ServiceCard';
import { ServiceModal } from './components/ServiceModal';
import { CurrencyConverter } from './components/CurrencyConverter';
import { OtCalculator } from './components/OtCalculator';
import { DocumentVault } from './components/DocumentVault';
import { GuidesSection } from './components/GuidesSection';
import { EmergencyDirectory } from './components/EmergencyDirectory';

const LANG_STORAGE_KEY = 'my_guide_preferred_lang';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'bn' || saved === 'en' || saved === 'ms') {
        return saved;
      }
    } catch {
      // fallback
    }
    return 'bn'; // Default to Bangla per user request
  });

  const [activeTab, setActiveTab] = useState<string>('services');
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeServiceForModal, setActiveServiceForModal] = useState<ServiceItem | null>(null);
  const [calcSubTab, setCalcSubTab] = useState<'remittance' | 'ot'>('remittance');

  const t = translations;

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {
      // Ignore
    }
  };

  // Filter services by category and search
  const filteredServices = servicesData.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;

    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesTitle =
      service.title[currentLang].toLowerCase().includes(query) ||
      service.title.en.toLowerCase().includes(query) ||
      service.title.bn.toLowerCase().includes(query);

    const matchesAgency = service.agency.toLowerCase().includes(query);
    const matchesSubtitle = service.subtitle[currentLang].toLowerCase().includes(query);

    return matchesCategory && (matchesTitle || matchesAgency || matchesSubtitle);
  });

  const handleSaveToVault = (docType: string, number: string) => {
    try {
      const stored = localStorage.getItem('my_worker_vault_documents_v1');
      const docs: WorkerDocument[] = stored ? JSON.parse(stored) : [];
      const newDoc: WorkerDocument = {
        id: 'doc_' + Date.now(),
        type: docType as WorkerDocument['type'],
        holderName: 'MY SAVED RECORD',
        documentNumber: number,
        createdAt: new Date().toISOString(),
      };
      localStorage.setItem('my_worker_vault_documents_v1', JSON.stringify([newDoc, ...docs]));
    } catch {
      // Ignore
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 pb-20 md:pb-12">
      {/* Top Disclaimer Notice */}
      <DisclaimerBanner currentLang={currentLang} />

      {/* Main Header navigation */}
      <Header
        currentLang={currentLang}
        onLanguageChange={handleLanguageChange}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* Render Active View */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-sm">
              <div className="relative z-10 max-w-3xl">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Malaysia Foreign Worker Official Portals</span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  {t.appName[currentLang]}
                </h1>
                <p className="text-slate-300 text-xs sm:text-sm md:text-base mt-2.5 max-w-2xl leading-relaxed">
                  {t.appTagline[currentLang]}
                </p>

                {/* Instant Search Bar */}
                <div className="mt-6 flex items-center bg-white rounded-2xl p-1.5 shadow-lg border border-slate-200">
                  <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.searchPlaceholder[currentLang]}
                    className="w-full px-3 py-2 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 bg-transparent focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="px-2.5 py-1 text-xs text-slate-500 hover:text-slate-700 font-medium"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Quick Info Points */}
                <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>8 Official Portals</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Direct Government Servers</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Zero Ad Clutter</span>
                  </span>
                </div>
              </div>

              {/* Decorative Subtle Background Elements */}
              <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-emerald-950/40 to-transparent pointer-events-none hidden md:block" />
            </div>

            {/* Category Segmented Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {(
                [
                  { id: 'all', label: t.categories.all[currentLang] },
                  { id: 'medical', label: t.categories.medical[currentLang] },
                  { id: 'permit', label: t.categories.permit[currentLang] },
                  { id: 'visa', label: t.categories.visa[currentLang] },
                  { id: 'passport', label: t.categories.passport[currentLang] },
                  { id: 'legal', label: t.categories.legal[currentLang] },
                ] as const
              ).map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-xl whitespace-nowrap transition-colors min-h-[40px] ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white font-semibold shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Filtered Services Grid */}
            {filteredServices.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center text-slate-500">
                <p className="text-sm">
                  {currentLang === 'bn'
                    ? 'কোনো সার্ভিস খুঁজে পাওয়া যায়নি। অনুগ্রহ করে অন্য কি-ওয়ার্ড দিয়ে খুঁজুন।'
                    : 'No matching official portals found. Try searching with a different term.'}
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-3 px-4 py-2 text-xs font-semibold bg-slate-100 text-slate-800 rounded-lg hover:bg-slate-200"
                >
                  {currentLang === 'bn' ? 'সবগুলো দেখান' : 'Reset Filters'}
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredServices.map((service) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    currentLang={currentLang}
                    onOpenModal={setActiveServiceForModal}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Tab 2: Salary & Remittance */}
        {activeTab === 'calculator' && (
          <div className="space-y-6">
            {/* Sub-tab switcher */}
            <div className="flex items-center justify-center">
              <div className="inline-flex p-1 bg-slate-200/80 rounded-xl">
                <button
                  type="button"
                  onClick={() => setCalcSubTab('remittance')}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    calcSubTab === 'remittance'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.calculator.currencyTab[currentLang]}
                </button>
                <button
                  type="button"
                  onClick={() => setCalcSubTab('ot')}
                  className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-colors whitespace-nowrap ${
                    calcSubTab === 'ot'
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {t.calculator.otTab[currentLang]}
                </button>
              </div>
            </div>

            {calcSubTab === 'remittance' ? (
              <CurrencyConverter currentLang={currentLang} />
            ) : (
              <OtCalculator currentLang={currentLang} />
            )}
          </div>
        )}

        {/* Tab 3: My Document Vault */}
        {activeTab === 'vault' && <DocumentVault currentLang={currentLang} />}

        {/* Tab 4: Guides & Advisories */}
        {activeTab === 'guides' && <GuidesSection currentLang={currentLang} />}

        {/* Tab 5: Emergency Help & Embassies */}
        {activeTab === 'emergency' && <EmergencyDirectory currentLang={currentLang} />}
      </main>

      {/* Service Detail Guide Modal */}
      {activeServiceForModal && (
        <ServiceModal
          service={activeServiceForModal}
          currentLang={currentLang}
          onClose={() => setActiveServiceForModal(null)}
          onSaveToVault={handleSaveToVault}
        />
      )}

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-700">Malaysia Expat & Worker Status Guide</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <span>Official Government E-Services Aggregator</span>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('guides')}
              className="hover:text-slate-900 transition-colors"
            >
              Anti-Fraud Rules
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setActiveTab('emergency')}
              className="hover:text-slate-900 transition-colors"
            >
              BD Embassy KL Hotline
            </button>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Bottom Nav Bar */}
      <BottomNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
        currentLang={currentLang}
      />
    </div>
  );
}
