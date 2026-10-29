import { EmergencyContact } from '../types';

export const emergencyContacts: EmergencyContact[] = [
  {
    id: 'bd-high-commission',
    name: {
      bn: 'বাংলাদেশ হাইকমিশন, কুয়ালালামপুর',
      en: 'Bangladesh High Commission, Kuala Lumpur',
      ms: 'Suruhanjaya Tinggi Bangladesh, Kuala Lumpur',
    },
    category: 'embassy',
    phone: '+60 3-2691 6805',
    altPhone: '+60 16-368 4567',
    address: 'No. 5B & 5C, Jalan Sultan Yahya Petra, 54100 Kuala Lumpur',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:০০ (জরুরি ২৪/৭)',
      en: 'Mon - Fri: 9:00 AM - 5:00 PM (Emergency 24/7)',
      ms: 'Isnin - Jumaat: 9:00 PG - 5:00 PTG',
    },
    isUrgent: true,
  },
  {
    id: 'malaysia-emergency-999',
    name: {
      bn: 'মালয়েশিয়া জাতীয় জরুরি সেবা (পুলিশ ও অ্যাম্বুলেন্স)',
      en: 'Malaysian Emergency Services (Police & Ambulance)',
      ms: 'Talian Kecemasan Malaysia (Polis & Ambulans)',
    },
    category: 'emergency',
    phone: '999',
    availableHours: {
      bn: '২৪ ঘণ্টা নিরবচ্ছিন্ন (টোল ফ্রি)',
      en: '24/7 Toll-Free Immediate Response',
      ms: '24 Jam Percuma',
    },
    isUrgent: true,
  },
  {
    id: 'bomba-fire-rescue',
    name: {
      bn: 'দমকল ও উদ্ধার বাহিনী (বোম্বা - Bomba)',
      en: 'Fire & Rescue Department (Bomba Malaysia)',
      ms: 'Jabatan Bomba & Penyelamat Malaysia',
    },
    category: 'emergency',
    phone: '994',
    availableHours: {
      bn: '২৪ ঘণ্টা জরুরি সেবা',
      en: '24/7 Emergency Dispatch',
      ms: '24 Jam Bencana & Kebakaran',
    },
    isUrgent: true,
  },
  {
    id: 'immigration-call-center',
    name: {
      bn: 'মালয়েশিয়া ইমিগ্রেশন হেল্পলাইন (JIM Call Center)',
      en: 'Immigration Department Malaysia Helpline',
      ms: 'Pusat Panggilan Jabatan Imigresen Malaysia',
    },
    category: 'labor',
    phone: '+60 3-8000 8000',
    altPhone: '+60 3-8880 1555',
    address: 'No. 15, Tingkat 1-7 (Podium) Persiaran Perdana, Presint 2, 62550 Putrajaya',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৮:০০ - বিকাল ৫:০০',
      en: 'Mon - Fri: 8:00 AM - 5:00 PM',
      ms: 'Isnin - Jumaat: 8:00 PG - 5:00 PTG',
    },
  },
  {
    id: 'labor-dept-jtksm',
    name: {
      bn: 'মালয়েশিয়া শ্রম অধিদপ্তর (শ্রমিক অভিযোগ ও অধিকার)',
      en: 'Department of Labour Peninsular Malaysia (JTKSM)',
      ms: 'Jabatan Tenaga Kerja Semenanjung Malaysia (JTKSM)',
    },
    category: 'labor',
    phone: '+60 3-8886 5192',
    altPhone: '+60 3-8000 8000',
    address: 'Aras 5, Blok D3, Kompleks D, Pusat Pentadbiran Kerajaan Persekutuan, Putrajaya',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৮:৩০ - বিকাল ৪:৩০',
      en: 'Mon - Fri: 8:30 AM - 4:30 PM (Labour grievance intake)',
      ms: 'Isnin - Jumaat: 8:30 PG - 4:30 PTG',
    },
  },
  {
    id: 'tenaganita-migrant-ngo',
    name: {
      bn: 'তেনাগানিতা (অভিবাসী শ্রমিক সহায়তা ও আইনি শেল্টার)',
      en: 'Tenaganita Migrant Crisis & Legal Support NGO',
      ms: 'Tenaganita Bantuan Krisis & Guaman Pekerja Migran',
    },
    category: 'ngo',
    phone: '+60 11-1105 0870',
    altPhone: '+60 3-7770 3691',
    address: 'Petaling Jaya, Selangor, Malaysia',
    availableHours: {
      bn: 'জরুরি সংকটে সহায়তা হেল্পলাইন (WhatsApp ও কল)',
      en: 'Crisis hotline for human rights, unpaid wages & distress',
      ms: 'Talian krisis bantuan hak asasi dan gaji tertunggak',
    },
    isUrgent: true,
  },
  {
    id: 'fomema-careline',
    name: {
      bn: 'ফোমেমা মেডিকেল কাস্টমার কেয়ার হেল্পলাইন',
      en: 'FOMEMA Customer Careline & Inquiries',
      ms: 'Talian Khidmat Pelanggan FOMEMA',
    },
    category: 'labor',
    phone: '+60 3-2782 8777',
    address: 'Lot 1.01, Tingkat 1, Wisma FOMEMA, No 1, Jalan Medan Tuanku 1, Kuala Lumpur',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৮:৩০ - বিকাল ৫:৩০',
      en: 'Mon - Fri: 8:30 AM - 5:30 PM',
      ms: 'Isnin - Jumaat: 8:30 PG - 5:30 PTG',
    },
  },
  {
    id: 'nepal-embassy',
    name: {
      bn: 'নেপাল দূতাবাস, কুয়ালালামপুর',
      en: 'Embassy of Nepal, Kuala Lumpur',
      ms: 'Kedutaan Nepal, Kuala Lumpur',
    },
    category: 'embassy',
    phone: '+60 3-2020 1898',
    address: 'Wisma Paradise, Jalan Ampang, Kuala Lumpur',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:০০',
      en: 'Mon - Fri: 9:00 AM - 5:00 PM',
      ms: 'Isnin - Jumaat: 9:00 PG - 5:00 PTG',
    },
  },
  {
    id: 'india-high-commission',
    name: {
      bn: 'ভারত হাইকমিশন, কুয়ালালামপুর',
      en: 'High Commission of India, Kuala Lumpur',
      ms: 'Suruhanjaya Tinggi India, Kuala Lumpur',
    },
    category: 'embassy',
    phone: '+60 3-4024 1010',
    address: 'Level 28, Menara 1 Mon’t Kiara, No. 1, Jalan Kiara, Mont Kiara, Kuala Lumpur',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:৩০',
      en: 'Mon - Fri: 9:00 AM - 5:30 PM',
      ms: 'Isnin - Jumaat: 9:00 PG - 5:30 PTG',
    },
  },
  {
    id: 'indonesia-embassy',
    name: {
      bn: 'ইন্দোনেশিয়া দূতাবাস (KBRI Kuala Lumpur)',
      en: 'Embassy of the Republic of Indonesia (KBRI KL)',
      ms: 'Kedutaan Besar Republik Indonesia (KBRI KL)',
    },
    category: 'embassy',
    phone: '+60 3-2116 4016',
    address: 'No. 233, Jalan Tun Razak, 50400 Kuala Lumpur',
    availableHours: {
      bn: 'সোম - শুক্র: সকাল ৯:০০ - বিকাল ৫:০০',
      en: 'Mon - Fri: 9:00 AM - 5:00 PM',
      ms: 'Isnin - Jumaat: 9:00 PG - 5:00 PTG',
    },
  },
];
