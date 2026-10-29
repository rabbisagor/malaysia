export type Language = 'bn' | 'en' | 'ms';

export type ServiceCategory = 'all' | 'visa' | 'medical' | 'passport' | 'permit' | 'legal';

export interface ServiceItem {
  id: string;
  category: ServiceCategory;
  title: Record<Language, string>;
  subtitle: Record<Language, string>;
  agency: string;
  portalUrl: string;
  iconName: string;
  requiredFields: Record<Language, string[]>;
  steps: Record<Language, string[]>;
  importantNotes: Record<Language, string>;
  isPopular?: boolean;
}

export interface WorkerDocument {
  id: string;
  type: 'passport' | 'permit' | 'fomema' | 'evisa' | 'cidb';
  holderName: string;
  documentNumber: string;
  workerCode?: string;
  expiryDate?: string;
  employerName?: string;
  employerRoc?: string;
  notes?: string;
  createdAt: string;
}

export interface GuideItem {
  id: string;
  title: Record<Language, string>;
  summary: Record<Language, string>;
  category: string;
  readTime: string;
  points: Record<Language, string[]>;
}

export interface EmergencyContact {
  id: string;
  name: Record<Language, string>;
  category: 'embassy' | 'emergency' | 'labor' | 'ngo';
  phone: string;
  altPhone?: string;
  address?: string;
  availableHours: Record<Language, string>;
  isUrgent?: boolean;
}
