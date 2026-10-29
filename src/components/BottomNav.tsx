import React from 'react';
import { LayoutGrid, Calculator, FolderHeart, BookOpen, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface BottomNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  currentLang: Language;
}

export const BottomNav: React.FC<BottomNavProps> = ({
  activeTab,
  onTabChange,
  currentLang,
}) => {
  const t = translations;

  const navItems = [
    {
      id: 'services',
      label: t.nav.services[currentLang],
      icon: LayoutGrid,
    },
    {
      id: 'calculator',
      label: t.nav.calculator[currentLang],
      icon: Calculator,
    },
    {
      id: 'vault',
      label: t.nav.myTracker[currentLang],
      icon: FolderHeart,
    },
    {
      id: 'guides',
      label: t.nav.guides[currentLang],
      icon: BookOpen,
    },
    {
      id: 'emergency',
      label: t.nav.emergency[currentLang],
      icon: PhoneCall,
    },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-md mx-auto px-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`flex flex-col items-center justify-center h-full min-h-[48px] px-1 transition-colors ${
                isActive ? 'text-slate-900 font-semibold' : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              <div className="relative">
                <Icon
                  className={`w-5 h-5 transition-transform ${
                    isActive ? 'scale-110 text-emerald-700' : ''
                  }`}
                  aria-hidden="true"
                />
                {isActive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-emerald-700 rounded-full" />
                )}
              </div>
              <span className="text-[10px] tracking-tight mt-1 truncate max-w-full">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
