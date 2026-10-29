import React, { useState } from 'react';
import { ArrowRightLeft, TrendingUp, RefreshCw, Send, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface CurrencyConverterProps {
  currentLang: Language;
}

interface CurrencyConfig {
  code: string;
  name: Record<Language, string>;
  flag: string;
  ratePerMyr: number;
}

const currencies: CurrencyConfig[] = [
  {
    code: 'BDT',
    name: { bn: 'বাংলাদেশি টাকা (BDT)', en: 'Bangladeshi Taka (BDT)', ms: 'Taka Bangladesh (BDT)' },
    flag: '🇧🇩',
    ratePerMyr: 27.85,
  },
  {
    code: 'INR',
    name: { bn: 'ভারতীয় রুপি (INR)', en: 'Indian Rupee (INR)', ms: 'Rupee India (INR)' },
    flag: '🇮🇳',
    ratePerMyr: 19.42,
  },
  {
    code: 'PKR',
    name: { bn: 'পাকিস্তানি রুপি (PKR)', en: 'Pakistani Rupee (PKR)', ms: 'Rupee Pakistan (PKR)' },
    flag: '🇵🇰',
    ratePerMyr: 63.5,
  },
  {
    code: 'NPR',
    name: { bn: 'নেপালি রুপি (NPR)', en: 'Nepalese Rupee (NPR)', ms: 'Rupee Nepal (NPR)' },
    flag: '🇳🇵',
    ratePerMyr: 31.05,
  },
  {
    code: 'IDR',
    name: { bn: 'ইন্দোনেশিয়ান রূপিয়া (IDR)', en: 'Indonesian Rupiah (IDR)', ms: 'Rupiah Indonesia (IDR)' },
    flag: '🇮🇩',
    ratePerMyr: 3580.0,
  },
  {
    code: 'PHP',
    name: { bn: 'ফিলিপাইন পেসো (PHP)', en: 'Philippine Peso (PHP)', ms: 'Peso Filipina (PHP)' },
    flag: '🇵🇭',
    ratePerMyr: 13.15,
  },
];

export const CurrencyConverter: React.FC<CurrencyConverterProps> = ({ currentLang }) => {
  const t = translations;
  const [amount, setAmount] = useState<number>(1000);
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>('BDT');

  const selectedCurrency =
    currencies.find((c) => c.code === selectedCurrencyCode) || currencies[0];

  const calculatedAmount = (amount * selectedCurrency.ratePerMyr).toLocaleString('en-US', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  const quickPresets = [100, 500, 1000, 1500, 2000, 3000];

  // Provider comparison simulation with accurate spreads
  const providers = [
    {
      name: 'Merchantrade Asia',
      tag: 'Most Popular in Malaysia',
      rate: (selectedCurrency.ratePerMyr * 0.998).toFixed(2),
      fee: 'RM 10.00',
      totalOut: (amount * selectedCurrency.ratePerMyr * 0.998).toLocaleString('en-US', {
        maximumFractionDigits: 2,
      }),
    },
    {
      name: 'Western Union / Valyou',
      tag: 'Instant Cash Pickup',
      rate: (selectedCurrency.ratePerMyr * 0.992).toFixed(2),
      fee: 'RM 12.00',
      totalOut: (amount * selectedCurrency.ratePerMyr * 0.992).toLocaleString('en-US', {
        maximumFractionDigits: 2,
      }),
    },
    {
      name: 'Wise / Direct Bank Transfer',
      tag: 'Best Mid-Market Rate',
      rate: selectedCurrency.ratePerMyr.toFixed(2),
      fee: 'RM 7.50',
      totalOut: (amount * selectedCurrency.ratePerMyr).toLocaleString('en-US', {
        maximumFractionDigits: 2,
      }),
    },
    {
      name: 'Agrani Remit / National Remittance',
      tag: 'Government Incentive 2.5%',
      rate: (selectedCurrency.ratePerMyr * 1.025).toFixed(2),
      fee: 'RM 8.00',
      totalOut: (amount * selectedCurrency.ratePerMyr * 1.025).toLocaleString('en-US', {
        maximumFractionDigits: 2,
      }),
    },
  ];

  return (
    <div className="space-y-6">
      {/* Top Card: Live Conversion */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.calculator.currencyTab[currentLang]}
            </h3>
            <p className="text-xs text-slate-500">
              {currentLang === 'bn'
                ? '১ মালয়েশিয়ান রিঙ্গিত (RM) = ' + selectedCurrency.ratePerMyr + ' ' + selectedCurrency.code
                : `1 MYR (RM) = ${selectedCurrency.ratePerMyr} ${selectedCurrency.code}`}
            </p>
          </div>
          <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Indicative Daily Remittance Rate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* MYR Input */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.calculator.amountInMyr[currentLang]}
            </label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm font-bold text-slate-500">
                RM
              </span>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
                className="w-full pl-12 pr-4 py-3 text-lg font-bold tabular-nums text-slate-900 bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
              <span className="text-[11px] text-slate-500 mr-1">
                {t.calculator.quickAmounts[currentLang]}
              </span>
              {quickPresets.map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => setAmount(val)}
                  className={`px-2.5 py-1 text-xs rounded-lg border font-medium transition-colors ${
                    amount === val
                      ? 'bg-slate-900 text-white border-slate-900'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  RM {val}
                </button>
              ))}
            </div>
          </div>

          {/* Target Currency & Result */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              {t.calculator.targetCurrency[currentLang]}
            </label>
            <div className="flex gap-2">
              <select
                value={selectedCurrencyCode}
                onChange={(e) => setSelectedCurrencyCode(e.target.value)}
                className="w-full px-3.5 py-3 text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
              >
                {currencies.map((curr) => (
                  <option key={curr.code} value={curr.code}>
                    {curr.flag} {curr.name[currentLang]} ({curr.code})
                  </option>
                ))}
              </select>
            </div>

            {/* Converted Output Display */}
            <div className="mt-3.5 p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-xl">
              <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wide block">
                {t.calculator.estimatedReceived[currentLang]}
              </span>
              <div className="flex items-baseline justify-between mt-1">
                <span className="text-2xl font-extrabold text-emerald-950 tabular-nums">
                  {calculatedAmount}
                </span>
                <span className="text-sm font-bold text-emerald-800 ml-2">
                  {selectedCurrency.code}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Provider Rates Comparison */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <h3 className="text-base font-bold text-slate-900 mb-1">
          {t.calculator.providerRates[currentLang]}
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          {currentLang === 'bn'
            ? 'RM ' + amount + ' পাঠালে কোন মাধ্যমে কত টাকা পাওয়া যাবে তার তুলনামূলক হিসাব'
            : `Estimated total payout for RM ${amount} across certified remittance channels`}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {providers.map((p, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-xl border border-slate-200 hover:border-slate-300 bg-slate-50/40 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs text-slate-500 block">{p.tag}</span>
                <h4 className="text-sm font-bold text-slate-900 mt-0.5">{p.name}</h4>
                <div className="mt-2 text-xs text-slate-600 space-y-0.5">
                  <div className="flex justify-between">
                    <span>Rate:</span>
                    <span className="font-semibold tabular-nums">
                      1 RM = {p.rate} {selectedCurrency.code}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Est. Fee:</span>
                    <span className="tabular-nums">{p.fee}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 flex items-baseline justify-between">
                <span className="text-xs font-medium text-slate-700">Receive:</span>
                <span className="text-sm font-extrabold text-slate-900 tabular-nums">
                  {p.totalOut} {selectedCurrency.code}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
