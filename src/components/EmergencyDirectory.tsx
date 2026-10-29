import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldAlert, Building2, HeartHandshake } from 'lucide-react';
import { EmergencyContact, Language } from '../types';
import { emergencyContacts } from '../data/emergencyContacts';
import { translations } from '../data/translations';

interface EmergencyDirectoryProps {
  currentLang: Language;
}

export const EmergencyDirectory: React.FC<EmergencyDirectoryProps> = ({ currentLang }) => {
  const t = translations;
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const filteredContacts = emergencyContacts.filter((item) => {
    if (filterCategory === 'all') return true;
    return item.category === filterCategory;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Phone className="w-5 h-5 text-rose-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {t.emergency.title[currentLang]}
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              {t.emergency.subtitle[currentLang]}
            </p>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg overflow-x-auto self-start sm:self-auto">
            <button
              onClick={() => setFilterCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'bn' ? 'সকল' : 'All'}
            </button>
            <button
              onClick={() => setFilterCategory('embassy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterCategory === 'embassy'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'bn' ? 'দূতাবাস' : 'Embassies'}
            </button>
            <button
              onClick={() => setFilterCategory('emergency')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterCategory === 'emergency'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'bn' ? 'পুলিশ ও জরুরি' : 'Emergency 999'}
            </button>
            <button
              onClick={() => setFilterCategory('labor')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterCategory === 'labor'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'bn' ? 'ইমিগ্রেশন ও শ্রম' : 'Labour & JIM'}
            </button>
            <button
              onClick={() => setFilterCategory('ngo')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap ${
                filterCategory === 'ngo'
                  ? 'bg-white text-slate-900 shadow-xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {currentLang === 'bn' ? 'এনজিও ও আশ্রয়' : 'NGO / Shelter'}
            </button>
          </div>
        </div>
      </div>

      {/* Contacts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={`bg-white rounded-2xl border p-5 shadow-2xs flex flex-col justify-between transition-colors ${
              contact.isUrgent
                ? 'border-rose-200 hover:border-rose-300'
                : 'border-slate-200 hover:border-slate-300'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  {contact.category === 'embassy'
                    ? 'Embassy / Consulate'
                    : contact.category === 'emergency'
                    ? 'Police / Rescue'
                    : contact.category === 'ngo'
                    ? 'Human Rights / Shelter'
                    : 'Government Department'}
                </span>
                {contact.isUrgent && (
                  <span className="text-[11px] font-bold text-rose-700">
                    24/7 Priority
                  </span>
                )}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                {contact.name[currentLang]}
              </h4>

              <div className="space-y-1.5 text-xs text-slate-600 mb-4">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                  <span>{contact.availableHours[currentLang]}</span>
                </div>
                {contact.address && (
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="line-clamp-2">{contact.address}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dial Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
              <a
                href={`tel:${contact.phone.replace(/[\s-]/g, '')}`}
                className="flex-1 px-4 py-2.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{contact.phone}</span>
              </a>
              {contact.altPhone && (
                <a
                  href={`tel:${contact.altPhone.replace(/[\s-]/g, '')}`}
                  className="px-3 py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center min-h-[44px]"
                  title="Alternative Number"
                >
                  Alt
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
