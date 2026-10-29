import React, { useState } from 'react';
import { Calculator, HelpCircle, ShieldCheck, DollarSign } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface OtCalculatorProps {
  currentLang: Language;
}

export const OtCalculator: React.FC<OtCalculatorProps> = ({ currentLang }) => {
  const t = translations;

  const [basicSalary, setBasicSalary] = useState<number>(1500);
  const [workDays, setWorkDays] = useState<number>(26);
  const [normalOtHours, setNormalOtHours] = useState<number>(30);
  const [restDayOtHours, setRestDayOtHours] = useState<number>(8);
  const [holidayOtHours, setHolidayOtHours] = useState<number>(0);
  const [allowances, setAllowances] = useState<number>(150);

  // Statutory formula according to Section 60I of Employment Act 1955
  const dailyRate = basicSalary / (workDays || 26);
  const hourlyRate = dailyRate / 8;

  const normalOtRate = hourlyRate * 1.5;
  const restDayOtRate = hourlyRate * 2.0;
  const holidayOtRate = hourlyRate * 3.0;

  const totalNormalOtPay = normalOtHours * normalOtRate;
  const totalRestDayOtPay = restDayOtHours * restDayOtRate;
  const totalHolidayOtPay = holidayOtHours * holidayOtRate;
  const totalOtPay = totalNormalOtPay + totalRestDayOtPay + totalHolidayOtPay;

  const grossEarnings = basicSalary + allowances + totalOtPay;

  // Socso EIS deduction for worker (Foreign Worker Employment Injury scheme)
  const socsoDeduction = Math.min(25, basicSalary * 0.005);
  const estimatedNet = Math.max(0, grossEarnings - socsoDeduction);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            {t.calculator.otTab[currentLang]}
          </h3>
          <p className="text-xs text-slate-500">
            {currentLang === 'bn'
              ? 'মালয়েশিয়া শ্রম আইন ১৯৫৫ (Employment Act 1955) অনুযায়ী সঠিক ওটি রেট ও হিসাব'
              : 'Official Overtime (OT) rates under Section 60A of the Employment Act 1955'}
          </p>
        </div>
        <div className="text-xs text-slate-500 flex items-center gap-1.5 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Statutory Rates (1.5x / 2.0x / 3.0x)</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Input Controls (Left Column) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {t.calculator.basicSalary[currentLang]}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                  RM
                </span>
                <input
                  type="number"
                  min="500"
                  step="50"
                  value={basicSalary}
                  onChange={(e) => setBasicSalary(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-10 pr-3 py-2 text-sm font-bold tabular-nums text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                {currentLang === 'bn' ? 'স্থায়ী এলাউন্স (Fixed Allowance RM)' : 'Fixed Allowance (RM)'}
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
                  RM
                </span>
                <input
                  type="number"
                  min="0"
                  step="10"
                  value={allowances}
                  onChange={(e) => setAllowances(Math.max(0, Number(e.target.value)))}
                  className="w-full pl-10 pr-3 py-2 text-sm font-bold tabular-nums text-slate-900 bg-slate-50 border border-slate-300 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs flex items-center justify-between">
            <span className="text-slate-600">
              {currentLang === 'bn' ? 'প্রতি ঘণ্টার মূল রেট (Hourly Base):' : 'Calculated Hourly Base Rate:'}
            </span>
            <span className="font-bold text-slate-900 tabular-nums">
              RM {hourlyRate.toFixed(2)} / hr
            </span>
          </div>

          {/* Overtime Hours Inputs */}
          <div className="space-y-3 pt-1">
            <div className="p-3 border border-slate-200 rounded-xl bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {t.calculator.normalOtHours[currentLang]}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Rate: RM {normalOtRate.toFixed(2)}/hr (1.5x)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="120"
                    value={normalOtHours}
                    onChange={(e) => setNormalOtHours(Math.max(0, Number(e.target.value)))}
                    className="w-16 px-2 py-1 text-xs text-right font-bold tabular-nums border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                  <span className="text-xs text-slate-500">hrs</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                <span>Earned:</span>
                <span className="font-semibold text-slate-900 tabular-nums">
                  RM {totalNormalOtPay.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 border border-slate-200 rounded-xl bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {t.calculator.restDayOtHours[currentLang]}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Rate: RM {restDayOtRate.toFixed(2)}/hr (2.0x)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="60"
                    value={restDayOtHours}
                    onChange={(e) => setRestDayOtHours(Math.max(0, Number(e.target.value)))}
                    className="w-16 px-2 py-1 text-xs text-right font-bold tabular-nums border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                  <span className="text-xs text-slate-500">hrs</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                <span>Earned:</span>
                <span className="font-semibold text-slate-900 tabular-nums">
                  RM {totalRestDayOtPay.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="p-3 border border-slate-200 rounded-xl bg-white">
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {t.calculator.holidayOtHours[currentLang]}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Rate: RM {holidayOtRate.toFixed(2)}/hr (3.0x)
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="40"
                    value={holidayOtHours}
                    onChange={(e) => setHolidayOtHours(Math.max(0, Number(e.target.value)))}
                    className="w-16 px-2 py-1 text-xs text-right font-bold tabular-nums border border-slate-300 rounded-md focus:outline-none focus:ring-1 focus:ring-slate-900"
                  />
                  <span className="text-xs text-slate-500">hrs</span>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                <span>Earned:</span>
                <span className="font-semibold text-slate-900 tabular-nums">
                  RM {totalHolidayOtPay.toFixed(2)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Calculation Summary Card (Right Column) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-5 bg-slate-900 text-white rounded-2xl">
          <div>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Salary Breakdown
              </span>
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-300">
                <span>Basic Salary:</span>
                <span className="font-semibold tabular-nums text-white">
                  RM {basicSalary.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Fixed Allowance:</span>
                <span className="font-semibold tabular-nums text-white">
                  RM {allowances.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Overtime ({normalOtHours + restDayOtHours + holidayOtHours}h):</span>
                <span className="font-semibold tabular-nums text-emerald-300">
                  +RM {totalOtPay.toFixed(2)}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between text-slate-300 font-semibold">
                <span>Gross Monthly Pay:</span>
                <span className="tabular-nums text-white">
                  RM {grossEarnings.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-rose-300">
                <span>{t.calculator.socsoDeduction[currentLang]}:</span>
                <span className="tabular-nums font-semibold">
                  -RM {socsoDeduction.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800">
            <span className="text-xs text-slate-400 uppercase tracking-wider block mb-1">
              {t.calculator.estimatedNet[currentLang]}
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-3xl font-extrabold text-emerald-400 tabular-nums">
                RM {estimatedNet.toFixed(2)}
              </span>
              <span className="text-xs text-slate-400">
                ≈ {(estimatedNet * 27.85).toLocaleString('en-US', { maximumFractionDigits: 0 })} BDT
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-2 leading-tight">
              {currentLang === 'bn'
                ? '*লেভি মালিক বহন করার আইনি নিয়ম। হোস্টেল ফি সাধারণত সর্বোচ্চ RM 100 কাটা যায়।'
                : '*Levy is legally born by employers. Hostel deduction is capped by law at RM 100.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
