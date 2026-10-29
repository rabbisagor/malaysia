import { GuideItem } from '../types';

export const guidesData: GuideItem[] = [
  {
    id: 'fake-visa-prevention',
    category: 'visa',
    readTime: '3 min',
    title: {
      bn: 'দালাল প্রতারণা ও নকল ভিসা চেনার ৪টি নিশ্চিত উপায়',
      en: 'How to Identify Fake Malaysian Visas & Avoid Scams',
      ms: 'Cara Mengenal Pasti Visa Palsu & Mengelak Penipuan',
    },
    summary: {
      bn: 'দালাল বা ভুয়া এজেন্সির দেওয়া পিডিএফ ভিসা যাচাই করার পদ্ধতি ও সতর্কতা',
      en: 'Key verification steps before making payments or booking flights to Malaysia',
      ms: 'Langkah pengesahan penting sebelum membuat sebarang pembayaran visa',
    },
    points: {
      bn: [
        '১. কোনো এজেন্ট ভিসা বা ই-ভিসা দিলে সাথে সাথে অফিসিয়াল ইমিগ্রেশন পোর্টালে (malaysiavisa.imi.gov.my) স্টিকার নম্বর ও পাসপোর্ট নম্বর দিয়ে যাচাই করুন।',
        '২. ভেরিফিকেশন পোর্টালে যদি আপনার পাসপোর্ট ও ছবির হুবহু তথ্য না দেখায়, তবে সেটি ১০০% ফটোশপ বা ভুয়া এডিট করা ভিসা।',
        '৩. ইমিগ্রেশনের কিউআর কোড (QR Code) স্মার্টফোনের সাধারণ ক্যামেরা দিয়ে স্ক্যান করলে সরাসরি imi.gov.my ডোমেইনের আসল লিঙ্ক খুলতে হবে। অন্য কোনো ভুয়া ওয়েবসাইটের লিঙ্ক থাকলে সাবধান হোন।',
        '৪. সরকারি ভেরিফিকেশনে রেকর্ড না আসা পর্যন্ত কোনো এজেন্টকে বিমানের টিকিট কাটার টাকা বা চূড়ান্ত পেমেন্ট দেবেন না।',
      ],
      en: [
        '1. Check the sticker number and passport number immediately on the official immigration portal (malaysiavisa.imi.gov.my).',
        '2. If the official portal does not return an exact record with your uploaded photograph and bio-data, the document is an edited forgery.',
        '3. Scan the QR code printed on the visa using your smartphone camera: it must lead to an authentic .imi.gov.my domain.',
        '4. Never release final payments or ticket fees until status confirmation is visible on the official government database.',
      ],
      ms: [
        '1. Semak nombor pelekat dan nombor pasport serta-merta di portal rasmi imigresen.',
        '2. Jika rekod rasmi tidak memaparkan butiran dan gambar anda, dokumen tersebut adalah palsu.',
        '3. Kod QR mesti mengarah ke pautan rasmi domain imi.gov.my.',
        '4. Jangan buat bayaran penuh selagi rekod sah belum wujud dalam sistem rasmi kerajaan.',
      ],
    },
  },
  {
    id: 'fomema-unfit-solution',
    category: 'medical',
    readTime: '4 min',
    title: {
      bn: 'ফোমেমা মেডিকেল রিপোর্ট পেন্ডিং বা আনফিট হলে কি করবেন?',
      en: 'What to Do If Your FOMEMA Medical Result Is Unfit or Pending',
      ms: 'Tindakan Jika Keputusan FOMEMA Tidak Sesuai (Unfit) atau Menunggu',
    },
    summary: {
      bn: 'আপিল করার সময়সীমা, পুনঃপরীক্ষার নিয়মাবলী ও প্রতিকার',
      en: 'Appeal deadlines, re-test procedures, and medical review protocols',
      ms: 'Tempoh rayuan, tatacara ujian semula dan semakan perubatan',
    },
    points: {
      bn: [
        '১. ফোমেমা রিপোর্টে "UNFIT" আসলে হতাশ হবেন না; ফল প্রকাশের ২১ দিনের মধ্যে অফিসিয়াল আপিল (Appeal) করার সুযোগ থাকে।',
        '২. আপনার নিয়োগকর্তা বা কোম্পানির মাধ্যমে ফোমেমা অফিসে আপিল ফরম জমা দিন এবং নির্ধারিত স্পেশালিস্ট হাসপাতালে রি-টেস্ট করান।',
        '৩. যদি রক্তে সুগার বা উচ্চ রক্তচাপের কারণে টেম্পোরারি আনফিট আসে, চিকিৎসকের প্রেসক্রিপশন অনুযায়ী ওষুধ খেয়ে দ্রুত ক্লিনিকে যোগাযোগ করুন।',
        '৪. ফলাফল "PENDING" থাকলে সাধারণত এক্স-রে বা ব্লাড স্যাম্পল সেন্ট্রাল ল্যাবরেটরিতে ক্রস-চেক হচ্ছে। অতিরিক্ত ৩-৫ দিন অপেক্ষা করুন।',
      ],
      en: [
        '1. If your result is labeled "UNFIT", you have a statutory window of 21 days from result issuance to submit an official appeal.',
        '2. Submit an official appeal via your registered employer to FOMEMA and arrange an authorized specialist re-examination.',
        '3. For hypertension or glucose spikes, stabilize symptoms under medical supervision and obtain certified doctor clearance.',
        '4. A "PENDING" status typically means a second-tier lab review of chest X-rays or blood tests is ongoing. Allow 3 to 5 business days.',
      ],
      ms: [
        '1. Sekiranya keputusan menunjukkan "UNFIT", rayuan rasmi boleh dibuat dalam tempoh 21 hari.',
        '2. Hantar borang rayuan melalui majikan ke pejabat FOMEMA untuk pemeriksaan pakar.',
        '3. Jika disebabkan tekanan darah atau gula, dapatkan rawatan doktor panel yang berdaftar.',
        '4. Status "PENDING" bermakna semakan lanjut makmal sedang berjalan.',
      ],
    },
  },
  {
    id: 'passport-lost-help',
    category: 'passport',
    readTime: '3 min',
    title: {
      bn: 'মালয়েশিয়ায় পাসপোর্ট হারিয়ে গেলে করণীয়',
      en: 'What to Do If You Lose Your Passport in Malaysia',
      ms: 'Tindakan Jika Pasport Hilang di Malaysia',
    },
    summary: {
      bn: 'পুলিশ রিপোর্ট করা থেকে শুরু করে নতুন পাসপোর্ট ও ট্রাভেল পাস পাওয়ার ধাপ',
      en: 'From filing a police report to obtaining a replacement or Travel Permit',
      ms: 'Daripada laporan polis sehingga permohonan pasport gantian atau pas keluar',
    },
    points: {
      bn: [
        '১. পাসপোর্ট হারানোর সাথে সাথে নিকটস্থ মালয়েশিয়ান পুলিশ স্টেশনে (Balai Polis) গিয়ে লস্ট রিপোর্ট (Polis Report) করুন।',
        '২. পুলিশ রিপোর্টের মূল কপি নিয়ে বাংলাদেশ হাইকমিশন কুয়ালালামপুরে নতুন পাসপোর্টের জন্য আবেদন করুন।',
        '৩. যদি জরুরি প্রয়োজনে দেশে ফিরতে চান, তবে হাইকমিশন থেকে "ট্রাভেল পারমিট" (Travel Permit / Outpass) সংগ্রহ করা সম্ভব।',
        '৪. নতুন পাসপোর্ট হাতে পাওয়ার পর কোম্পানির মাধ্যমে ইমিগ্রেশনে গিয়ে পুরানো ভিসার সিল/স্টিকার নতুন পাসপোর্টে ট্রান্সফার (Endorsement) করিয়ে নিন।',
      ],
      en: [
        '1. File a report immediately at the nearest Malaysian Police Station (Balai Polis). Keep multiple certified copies.',
        '2. Bring the police report to your embassy/consulate to initiate a replacement passport application.',
        '3. For urgent repatriation without waiting for a new book, request an emergency Travel Permit (Outpass).',
        '4. Once the replacement passport arrives, arrange with your employer to transfer existing valid visa endorsements at Immigration.',
      ],
      ms: [
        '1. Buat laporan di Balai Polis terdekat dengan segera dan simpan salinan laporan tersebut.',
        '2. Bawa laporan polis ke kedutaan untuk memohon pasport gantian.',
        '3. Bagi kecemasan untuk pulang segera, mohon Pas Lawatan Kecemasan / Perakuan Cemas (Outpass).',
        '4. Pindahkan endorsement permit sedia ada ke pasport baharu melalui majikan di Jabatan Imigresen.',
      ],
    },
  },
  {
    id: 'labor-rights-laws',
    category: 'legal',
    readTime: '4 min',
    title: {
      bn: 'মালয়েশিয়া শ্রম আইন অনুযায়ী কর্মীদের মৌলিক অধিকার',
      en: 'Worker Rights Under Malaysian Employment Act 1955',
      ms: 'Hak Pekerja Asing di Bawah Akta Kerja 1955',
    },
    summary: {
      bn: 'ন্যূনতম মজুরি, দৈনিক কাজের সময়, সাপ্তাহিক ছুটি ও অতিরিক্ত কাজের পারিশ্রমিক',
      en: 'Minimum wage, working hours limit, rest days, and overtime calculation standards',
      ms: 'Gaji minimum, had jam bekerja, hari rehat mingguan dan hak elaun lebih masa',
    },
    points: {
      bn: [
        '১. মালয়েশিয়ার আইন অনুযায়ী সাধারণ কাজের সময় সপ্তাহে সর্বোচ্চ ৪৫ ঘণ্টা (দৈনিক ৮ ঘণ্টা)।',
        '২. সাধারণ কাজের পর অতিরিক্ত কাজের জন্য প্রতি ঘণ্টার মূল বেতনের ১.৫ গুণ হারে ওটি প্রদান বাধ্যতামূলক।',
        '৩. সাপ্তাহিক ছুটির দিনে কাজ করালে দ্বিগুণ (২.০ গুণ) এবং সরকারি গেজেটভুক্ত ছুটির দিনে কাজ করালে তিনগুণ (৩.০ গুণ) ওটি পাওয়ার অধিকার রয়েছে।',
        '৪. মালিক বা কোম্পানি শ্রমিকের পাসপোর্ট জোরপূর্বক আটকে রাখা আইনত দণ্ডনীয় অপরাধ। বেতনের স্লিপ (Payslip) পাওয়া প্রতিটি শ্রমিকের আইনি অধিকার।',
      ],
      en: [
        '1. Standard working hours are capped at 45 hours per week (normally 8 hours per day).',
        '2. Overtime performed beyond normal hours must be compensated at a minimum of 1.5x hourly rate.',
        '3. Work on weekly rest days is compensated at 2.0x, and gazetted Public Holidays at 3.0x hourly base.',
        '4. Withholding a worker passport without written voluntary consent is strictly illegal under the Passports Act 1966.',
      ],
      ms: [
        '1. Waktu kerja standard ditetapkan maksimum 45 jam seminggu.',
        '2. Kerja lebih masa (OT) biasa mesti dibayar pada kadar sekurang-kurangnya 1.5 kali ganda kadar sejam.',
        '3. Kerja pada hari rehat dibayar 2.0 kali ganda dan hari kelepasan am 3.0 kali ganda.',
        '4. Majikan dilarang menahan pasport pekerja tanpa kebenaran bertulis.',
      ],
    },
  },
];
