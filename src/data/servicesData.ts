import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'fomema-medical',
    category: 'medical',
    title: {
      bn: 'ফোমেমা মেডিকেল রিপোর্ট চেক (FOMEMA)',
      en: 'FOMEMA Foreign Worker Medical Result',
      ms: 'Semakan Keputusan Perubatan FOMEMA',
    },
    subtitle: {
      bn: 'মেডিকেল ফিট বা আনফিট কিনা অনলাইনে সরাসরি চেক করুন',
      en: 'Check medical examination Fit/Unfit status online directly',
      ms: 'Semak status pemeriksaan kesihatan Layak/Tidak Layak dalam talian',
    },
    agency: 'FOMEMA Sdn. Bhd.',
    portalUrl: 'https://online.fomema.com.my/search/',
    iconName: 'HeartPulse',
    isPopular: true,
    requiredFields: {
      bn: [
        'ওয়ার্কার কোড (Worker Code) - যেমন: W12345678',
        'পাসপোর্ট নম্বর (Passport Number)',
        'জাতীয়তা (Country of Origin: Bangladesh / Nepal / India ইত্যাদি)',
      ],
      en: [
        'Worker Code (e.g., W12345678)',
        'Passport Number',
        'Country of Origin (e.g., Bangladesh, Nepal, India, etc.)',
      ],
      ms: [
        'Kod Pekerja (cth: W12345678)',
        'Nombor Pasport',
        'Warganegara Asal',
      ],
    },
    steps: {
      bn: [
        '১. নিচের "অফিসিয়াল পোর্টালে যান" বাটনে ক্লিক করে ফোমেমা সার্চ পেজে যান।',
        '২. আপনার নিয়োগকর্তা বা এজেন্সির দেওয়া "Worker Code" লিখুন।',
        '৩. আপনার সঠিক পাসপোর্ট নম্বর প্রদান করুন।',
        '৪. "Search" বাটনে চাপুন। আপনার বর্তমান স্ট্যাটাস (Fit / Unfit / Pending / In-progress) দেখতে পাবেন।',
      ],
      en: [
        '1. Click the "Go to Official Government Portal" button below to open FOMEMA.',
        '2. Enter your assigned Worker Code (provided on the registration slip).',
        '3. Enter your current valid Passport Number.',
        '4. Click "Search" to view the latest result (Fit, Unfit, Pending, or In-progress).',
      ],
      ms: [
        '1. Klik butang "Layari Portal Rasmi" untuk membuka carian FOMEMA.',
        '2. Masukkan Kod Pekerja yang tertera pada slip pendaftaran.',
        '3. Masukkan Nombor Pasport yang sah.',
        '4. Tekan "Search" untuk melihat keputusan terkini (Sesuai / Tidak Sesuai / Sedang Diproses).',
      ],
    },
    importantNotes: {
      bn: 'মেডিকেল সম্পন্ন হওয়ার পর সাধারণত ৩ থেকে ৭ কর্মদিবসের মধ্যে রিপোর্ট অনলাইনে আসে। যদি স্ট্যাটাস "Pending" বা "Review" দেখায় তবে ক্লিনিকে যোগাযোগ করে অতিরিক্ত টেস্ট করাতে হতে পারে।',
      en: 'Results are typically available within 3 to 7 working days post-examination. If your status shows "Pending" or "Requires Follow-up", consult your registered panel clinic promptly.',
      ms: 'Keputusan biasanya dikeluarkan dalam tempoh 3 hingga 7 hari bekerja selepas pemeriksaan. Sekiranya status menunjukkan "Pending", sila hubungi klinik panel berkenaan.',
    },
  },
  {
    id: 'myimms-permit-plks',
    category: 'permit',
    title: {
      bn: 'ওয়ার্ক পারমিট / পিএলকেএস স্ট্যাটাস (PLKS Check)',
      en: 'Foreign Worker Permit (PLKS) Status',
      ms: 'Semakan Status Pas Lawatan Kerja Sementara (PLKS)',
    },
    subtitle: {
      bn: 'মালয়েশিয়া ইমিগ্রেশন ডিপার্টমেন্টের অফিসিয়াল পারমিট অনুমোদন যাচাই',
      en: 'Verify official foreign worker permit renewal and approval with Immigration',
      ms: 'Semakan kelulusan permit kerja pekerja asing di Jabatan Imigresen',
    },
    agency: 'Jabatan Imigresen Malaysia (JIM)',
    portalUrl: 'https://eservices.imi.gov.my/myimms/PRAStatus',
    iconName: 'FileCheck',
    isPopular: true,
    requiredFields: {
      bn: [
        'কোম্পানির রেজিস্ট্রেশন নম্বর (ROC No.) বা মালিকের আইসি (IC / Passport)',
        'শ্রমিকের পাসপোর্ট নম্বর (Worker Passport No.)',
        'আবেদন রেফারেন্স নম্বর (Application No. যদি থাকে)',
      ],
      en: [
        'Employer ROC (Company Registration Number) or Employer IC',
        'Worker Passport Number',
        'Application Reference Number (optional)',
      ],
      ms: [
        'No. ROC Syarikat Majikan atau No. Kad Pengenalan Majikan',
        'Nombor Pasport Pekerja',
        'Nombor Rujukan Permohonan (jika ada)',
      ],
    },
    steps: {
      bn: [
        '১. লিঙ্কে গিয়ে MyIMMs e-Services সিস্টেমে প্রবেশ করুন।',
        '২. আপনার নিয়োগকারী প্রতিষ্ঠানের ROC নম্বর অথবা মালিকের বিবরণ সিলেক্ট করুন।',
        '৩. কর্মীর পাসপোর্ট নম্বর ও জাতীয়তা নির্ধারণ করুন।',
        '৪. "Carian" (Search) বাটনে চাপ দিলে পারমিট ইস্যু বা রিনিউ হয়েছে কিনা দেখা যাবে।',
      ],
      en: [
        '1. Access the MyIMMs e-Services portal using the link below.',
        '2. Choose lookup method: Employer ROC / Business Reg. No. or Application ID.',
        '3. Enter the worker passport number and country of origin.',
        '4. Click "Carian" (Search) to see if the PLKS has been approved, printed, or is in process.',
      ],
      ms: [
        '1. Layari portal e-Services MyIMMs Jabatan Imigresen.',
        '2. Pilih kaedah carian: No. ROC Majikan atau No. Permohonan.',
        '3. Masukkan nombor pasport pekerja dan warganegara.',
        '4. Klik "Carian" untuk menyemak sama ada permit telah diluluskan, dicetak atau dalam proses.',
      ],
    },
    importantNotes: {
      bn: 'দালালের কথায় বিশ্বাস না করে সবসময় এই অফিসিয়াল সিস্টেমে কোম্পানির ROC দিয়ে স্ট্যাটাস নিশ্চিত হোন। যদি পারমিট "LULUS" দেখায় তবে লেভি পরিশোধ করে স্টিকার লাগানো সম্ভব।',
      en: 'Always verify permit legitimacy through the official MyIMMs portal rather than relying on unverified third-party claims. "LULUS" indicates approved status.',
      ms: 'Sentiasa pastikan kesahihan permit melalui portal rasmi kerajaan. Status "LULUS" menunjukkan permit telah diluluskan oleh imigresen.',
    },
  },
  {
    id: 'malaysia-evisa-check',
    category: 'visa',
    title: {
      bn: 'মালয়েশিয়া ই-ভিসা যাচাইকরণ (eVisa Verification)',
      en: 'Malaysia eVisa & Approval Letter (VAL) Check',
      ms: 'Semakan Ketulenan e-Visa Malaysia',
    },
    subtitle: {
      bn: 'ভিসা আসল নাকি নকল তা বারকোড ও পাসপোর্ট নম্বর দিয়ে চেক করুন',
      en: 'Verify the authenticity of your Malaysian eVisa or Visa Approval Letter (VAL)',
      ms: 'Semak ketulenan e-Visa Malaysia menggunakan nombor pasport dan pelekat',
    },
    agency: 'Immigration Department of Malaysia',
    portalUrl: 'https://malaysiavisa.imi.gov.my/evisa/vlsl_checkstatus.jsp',
    iconName: 'ShieldCheck',
    isPopular: true,
    requiredFields: {
      bn: [
        'পাসপোর্ট নম্বর (Passport Number)',
        'স্টিকার / ই-ভিসা রেফারেন্স নম্বর (eVisa Sticker / Reference No.)',
        'জাতীয়তা (Nationality)',
      ],
      en: [
        'Passport Number',
        'Sticker / eVisa Reference Number',
        'Nationality',
      ],
      ms: [
        'Nombor Pasport',
        'Nombor Pelekat / Rujukan e-Visa',
        'Warganegara',
      ],
    },
    steps: {
      bn: [
        '১. অফিসিয়াল e-Visa ভেরিফিকেশন পোর্টালে প্রবেশ করুন।',
        '২. আপনার ভিসার প্রিন্ট কপিতে থাকা "eVisa Reference No" অথবা "Sticker No" লিখুন।',
        '৩. মূল পাসপোর্টে থাকা সঠিক নম্বরটি লিখুন।',
        '৪. "Verify" বাটনে চাপুন। ভিসা বৈধ হলে আপনার ছবি ও বিবরণ সহ অনুমোদন দেখাবে।',
      ],
      en: [
        '1. Open the official Malaysia eVisa portal using the button below.',
        '2. Enter the reference number printed on your eVisa document.',
        '3. Enter your valid passport number matching the visa record.',
        '4. Click "Verify" to validate the document and confirm matching bio-data.',
      ],
      ms: [
        '1. Buka laman web rasmi semakan e-Visa Malaysia.',
        '2. Masukkan nombor rujukan e-Visa atau nombor pelekat.',
        '3. Masukkan nombor pasport anda.',
        '4. Klik butang "Sahkan / Verify" untuk melihat maklumat terperinci.',
      ],
    },
    importantNotes: {
      bn: 'অনেক ভুয়া এজেন্সি নকল এডিটেড পিডিএফ ভিসা দেয়। অনলাইনে সার্চ দিয়ে বিবরণ না মিললে ফ্লাইটের টিকিট কাটবেন না বা কোনো বড় লেনদেন করবেন না।',
      en: 'Counterfeit visas are frequently generated by fraudulent agents. If the online portal does not return matching records with your photograph, do not purchase flight tickets.',
      ms: 'Elakkan penipuan visa palsu. Pastikan data di portal rasmi sepadan dengan dokumen yang anda pegang sebelum membuat sebarang pembayaran.',
    },
  },
  {
    id: 'bd-embassy-passport',
    category: 'passport',
    title: {
      bn: 'বাংলাদেশ হাইকমিশন কুয়ালালামপুর পাসপোর্ট ট্র্যাকার',
      en: 'Bangladesh High Commission KL Passport Tracking',
      ms: 'Semakan Pasport Suruhanjaya Tinggi Bangladesh KL',
    },
    subtitle: {
      bn: 'নতুন পাসপোর্ট ডেলিভারি হয়েছে কিনা বা পোস্ট অফিসের মাধ্যমে বিতরণের স্ট্যাটাস',
      en: 'Track new passport delivery, printing, and POS Malaysia post delivery in KL',
      ms: 'Semakan status penyerahan dan cetakan pasport baharu di KL',
    },
    agency: 'Bangladesh High Commission, Kuala Lumpur',
    portalUrl: 'http://bdhckl.gov.bd/',
    iconName: 'BookMarked',
    isPopular: true,
    requiredFields: {
      bn: [
        'এনরোলমেন্ট আইডি / ডেলিভারি স্লিপ নম্বর (Enrollment ID or Delivery Slip No.)',
        'পুরাতন পাসপোর্ট নম্বর (Previous Passport Number)',
        'পোস্ট অফিসের ট্র্যাকিং নম্বর (যদি পোজ লাজু দিয়ে থাকেন)',
      ],
      en: [
        'Enrollment ID / Delivery Slip Number',
        'Old Passport Number',
        'Pos Laju Tracking Number (for postal collection)',
      ],
      ms: [
        'Nombor Slip Penyerahan / ID Pendaftaran',
        'Nombor Pasport Lama',
        'Nombor Penjejakan Pos Laju',
      ],
    },
    steps: {
      bn: [
        '১. বাংলাদেশ হাইকমিশন মালয়েশিয়ার অফিসিয়াল ওয়েবসাইটে যান।',
        '২. "পাসপোর্ট ডেলিভারি স্ট্যাটাস" মেন্যু সিলেক্ট করুন।',
        '৩. ডেলিভারি স্লিপে থাকা বারকোড নম্বর অথবা পুরাতন পাসপোর্ট নম্বর দিন।',
        '৪. আপনার পাসপোর্ট দূতাবাস বা পোজ লাজুতে পৌঁছেছে কিনা নিশ্চিত হন।',
      ],
      en: [
        '1. Visit the Bangladesh High Commission KL official portal.',
        '2. Navigate to "Passport Delivery Status" tracking module.',
        '3. Input the barcode enrollment ID or old passport number.',
        '4. Check whether your new e-Passport or MRP is ready for collection or dispatched via Pos Laju.',
      ],
      ms: [
        '1. Layari portal rasmi Suruhanjaya Tinggi Bangladesh KL.',
        '2. Pilih modul semakan status penyerahan pasport.',
        '3. Masukkan nombor slip permohonan atau nombor pasport lama.',
        '4. Semak sama ada pasport telah siap untuk diambil atau dihantar.',
      ],
    },
    importantNotes: {
      bn: 'হাইকমিশনে পাসপোর্ট সংগ্রহ করার সময় মূল ডেলিভারি স্লিপ এবং পুরাতন পাসপোর্ট সাথে রাখতে হবে। পোস্টালে আবেদনের ক্ষেত্রে পোজ লাজু ট্র্যাকিং চেক করুন।',
      en: 'Always carry the original physical delivery slip and your previous passport when collecting from the embassy counter.',
      ms: 'Bawa slip asal permohonan dan pasport lama semasa mengambil pasport di kaunter.',
    },
  },
  {
    id: 'rtk-recalibration-check',
    category: 'legal',
    title: {
      bn: 'আরটিকে ২.০ রিক্যালিব্রেশন ও দেশে ফেরার মেমো (RTK 2.0)',
      en: 'RTK 2.0 Recalibration & Repatriation Check',
      ms: 'Semakan Program Rekalibrasi Tenaga Kerja (RTK 2.0)',
    },
    subtitle: {
      bn: 'শ্রমিক বৈধকরণ এবং চেক-আউট মেমো (COM) দেশে ফেরার স্ট্যাটাস',
      en: 'Workforce legalization status & checkout repatriation program check',
      ms: 'Semakan status pemutihan pekerja dan program penghantaran pulang (COM)',
    },
    agency: 'Jabatan Imigresen Malaysia (JIM)',
    portalUrl: 'https://imigresen-online.imi.gov.my/myimms/rtk/semakan',
    iconName: 'UserCheck',
    isPopular: false,
    requiredFields: {
      bn: [
        'পাসপোর্ট নম্বর (Worker Passport No.)',
        'আবেদন স্লিপ রেফারেন্স (RTK Application Ref)',
        'কোম্পানির তথ্য বা রসিদ নম্বর',
      ],
      en: [
        'Worker Passport Number',
        'RTK Application Reference ID',
        'Company Registration Number',
      ],
      ms: [
        'Nombor Pasport Pekerja',
        'No. Rujukan Permohonan RTK',
        'Maklumat Majikan',
      ],
    },
    steps: {
      bn: [
        '১. ইমিগ্রেশনের অনলাইন আরটিকে পোর্টালে যান।',
        '২. শ্রমিকের পাসপোর্ট নম্বর এবং আবেদনের রেফারেন্স নম্বর লিখুন।',
        '৩. ভেরিফিকেশন কোড (Captcha) দিয়ে সাবমিট করুন।',
        '৪. বায়োমেট্রিক ও পারমিট চূড়ান্ত হয়েছে কিনা দেখতে পাবেন।',
      ],
      en: [
        '1. Open the official JIM RTK online enquiry page.',
        '2. Enter the applicant passport number and application reference.',
        '3. Complete the security captcha challenge.',
        '4. View the status of biometric completion, compound clearance, and issuance.',
      ],
      ms: [
        '1. Masukkan pautan semakan RTK dalam talian JIM.',
        '2. Masukkan nombor pasport dan no rujukan permohonan.',
        '3. Lengkapkan kod keselamatan captcha.',
        '4. Semak status biometrik dan pelepasan kompaun.',
      ],
    },
    importantNotes: {
      bn: 'রেক্যালিব্রেশন প্রোগ্রামে কোনো দালাল বা মধ্যস্বত্বভোগীকে নগদ টাকা দেবেন না। সরকার নির্ধারিত ফি সরাসরি ইমিগ্রেশন কাউন্টারে কার্ডের মাধ্যমে দিতে হয়।',
      en: 'Do not pay cash to middlemen for RTK programs. Official government compounds must be settled directly at immigration counters via cashless payment.',
      ms: 'Jangan bayar tunai kepada orang tengah. Bayaran kompaun rasmi dilakukan tanpa tunai di kaunter imigresen.',
    },
  },
  {
    id: 'cidb-green-card',
    category: 'legal',
    title: {
      bn: 'সিআইডিবি কনস্ট্রাকশন গ্রিন কার্ড চেক (CIDB Green Card)',
      en: 'CIDB Construction Personnel Green Card Verification',
      ms: 'Semakan Kad Hijau Personel Binaan CIDB',
    },
    subtitle: {
      bn: 'নির্মাণ শ্রমিকদের বৈধ সিআইডিবি কার্ডের মেয়াদ ও অনুমোদন যাচাই',
      en: 'Verify validity and safety registration for foreign construction site workers',
      ms: 'Pengesahan pendaftaran dan keselamatan bagi pekerja tapak pembinaan',
    },
    agency: 'Lembaga Pembangunan Industri Pembinaan Malaysia (CIDB)',
    portalUrl: 'https://cims.cidb.gov.my/',
    iconName: 'HardHat',
    isPopular: false,
    requiredFields: {
      bn: [
        'শ্রমিকের পাসপোর্ট নম্বর (Worker Passport No.)',
        'অথবা সিআইডিবি রেজিস্ট্রেশন নম্বর (CIDB Reg. No.)',
      ],
      en: [
        'Worker Passport Number',
        'Or CIDB Registration Number',
      ],
      ms: [
        'Nombor Pasport Pekerja',
        'Atau Nombor Pendaftaran CIDB',
      ],
    },
    steps: {
      bn: [
        '১. সিআইডিবি সেন্ট্রালাইজড ম্যানেজমেন্ট সিস্টেমে (CIMS) যান।',
        '২. "Semakan Personel Binaan" অপশনটি সিলেক্ট করুন।',
        '৩. আপনার পাসপোর্ট নম্বর দিন এবং সার্চ করুন।',
        '৪. আপনার গ্রিন কার্ড সক্রিয় আছে কিনা ও ইনস্যুরেন্সের মেয়াদ দেখতে পাবেন।',
      ],
      en: [
        '1. Open the CIDB CIMS online portal.',
        '2. Select "Construction Personnel Verification / Semakan".',
        '3. Enter your passport number and search.',
        '4. Confirm current validity and associated safety takaful coverage.',
      ],
      ms: [
        '1. Layari portal CIDB CIMS rasmi.',
        '2. Pilih bahagian semakan personel binaan.',
        '3. Masukkan nombor pasport dan buat carian.',
        '4. Sahkan status kad hijau dan perlindungan takaful.',
      ],
    },
    importantNotes: {
      bn: 'মালয়েশিয়ায় কনস্ট্রাকশন বা নির্মাণ সাইটে কাজের জন্য সিআইডিবি কার্ড বাধ্যতামূলক। মেয়াদোত্তীর্ণ কার্ডে কাজ করলে বড় অঙ্কের জরিমানা হতে পারে।',
      en: 'A valid CIDB green card is legally mandatory for any worker entering construction premises in Malaysia.',
      ms: 'Kad hijau CIDB adalah wajib untuk semua pekerja di tapak pembinaan.',
    },
  },
  {
    id: 'socso-perkeso',
    category: 'legal',
    title: {
      bn: 'সোস্যো / পেরকেসো স্কিম ও ক্ষতিপূরণ (SOCSO / PERKESO)',
      en: 'SOCSO Foreign Worker Scheme & Injury Protection',
      ms: 'Skim Kemalangan Bencana Kerja Pekerja Asing (PERKESO)',
    },
    subtitle: {
      bn: 'কর্মক্ষেত্রে দুর্ঘটনা ও চিকিৎসার জন্য বিদেশি শ্রমিকদের সরকারি সুরক্ষা',
      en: 'Check mandatory social security coverage for accidents and hospital benefits',
      ms: 'Perlindungan keselamatan sosial bagi kemalangan tempat kerja pekerja asing',
    },
    agency: 'Pertubuhan Keselamatan Sosial (PERKESO)',
    portalUrl: 'https://www.perkeso.gov.my/',
    iconName: 'ShieldAlert',
    isPopular: false,
    requiredFields: {
      bn: [
        'পাসপোর্ট নম্বর বা সোস্যো সোশ্যাল সিকিউরিটি নম্বর',
        'মালিক বা কোম্পানির নাম ও কোড',
      ],
      en: [
        'Passport Number or SOCSO Identification ID',
        'Employer Name or Code',
      ],
      ms: [
        'Nombor Pasport atau Kod Pengenalan PERKESO',
        'Nama atau Kod Majikan',
      ],
    },
    steps: {
      bn: [
        '১. পেরকেসো পোর্টালে যান অথবা কাস্টমার কেয়ার হেল্পলাইনে যোগাযোগ করুন।',
        '২. আপনার পাসপোর্ট নম্বর দিয়ে নিয়োগকর্তা মাসিক প্রিমিয়াম জমা দিচ্ছেন কিনা চেক করুন।',
        '৩. কর্মক্ষেত্রে কোনো আঘাত পেলে কোম্পানির মাধ্যমে পেরকেসোতে দ্রুত রিপোর্ট করান।',
      ],
      en: [
        '1. Visit the PERKESO portal or call the helpline at 1-300-22-8000.',
        '2. Provide your passport number to verify active monthly employer contributions.',
        '3. In case of workplace injury, ensure your employer submits the accident report within 48 hours.',
      ],
      ms: [
        '1. Layari portal PERKESO atau hubungi 1-300-22-8000.',
        '2. Semak status caruman bulanan majikan menggunakan pasport.',
        '3. Laporkan kemalangan tempat kerja dengan segera untuk tuntutan pampasan.',
      ],
    },
    importantNotes: {
      bn: 'আইন অনুযায়ী সকল বৈধ বিদেশি শ্রমিক পেরকেসো (SOCSO) বীমার আওতায় চিকিৎসাসেবা ও অঙ্গহানির ক্ষতিপূরণ পাওয়ার অধিকারী।',
      en: 'All legal foreign workers are entitled by law to receive medical expenses and disability compensation through the Employment Injury Scheme.',
      ms: 'Semua pekerja asing yang sah dilindungi di bawah Skim Bencana Kerja PERKESO.',
    },
  },
  {
    id: 'esd-expatriate-status',
    category: 'visa',
    title: {
      bn: 'ইএসডি এক্সপ্যাট্রিয়েট পাস স্ট্যাটাস (ESD / EP Check)',
      en: 'ESD Expatriate Employment Pass Status',
      ms: 'Semakan Status Pas Penggajian Ekspatriat (ESD)',
    },
    subtitle: {
      bn: 'প্রফেশনাল ও স্কিলড কর্মীদের এমপ্লয়মেন্ট পাস (EP) যাচাই',
      en: 'Status enquiry for Employment Pass (EP), Professional Visit Pass (PVP)',
      ms: 'Semakan status Pas Penggajian (EP) bagi tenaga pakar & profesional',
    },
    agency: 'Expatriate Services Division (ESD)',
    portalUrl: 'https://esd.imi.gov.my/',
    iconName: 'Briefcase',
    isPopular: false,
    requiredFields: {
      bn: [
        'পাসপোর্ট নম্বর (Passport Number)',
        'জাতীয়তা (Nationality)',
        'কোম্পানির নাম (Company Name)',
      ],
      en: [
        'Passport Number',
        'Nationality',
        'Sponsoring Company Name',
      ],
      ms: [
        'Nombor Pasport',
        'Warganegara',
        'Nama Syarikat Penaja',
      ],
    },
    steps: {
      bn: [
        '১. ESD অফিসিয়াল ওয়েবসাইটে প্রবেশ করুন।',
        '২. "Enquiry / Application Status" সেকশনে যান।',
        '৩. কর্মীর পাসপোর্ট ও রেফারেন্স কোড দিন।',
        '৪. আবেদন এপ্রুভাল বা ডিপেনডেন্ট পাসের স্ট্যাটাস চেক করুন।',
      ],
      en: [
        '1. Visit the ESD Immigration portal.',
        '2. Go to the Application Status verification screen.',
        '3. Enter the candidate passport number and application ID.',
        '4. Check the stage of review, approval, or endorsement.',
      ],
      ms: [
        '1. Buka laman web ESD Jabatan Imigresen.',
        '2. Masukkan nombor pasport dan ID rujukan.',
        '3. Semak peringkat kelulusan atau endorsement pas.',
      ],
    },
    importantNotes: {
      bn: 'সাধারণত ক্যাটাগরি ১, ২ ও ৩ এমপ্লয়মেন্ট পাসের ফলাফল ৫ থেকে ১৪ কর্মদিবসের মধ্যে জানা যায়।',
      en: 'Category I, II, and III Employment Pass applications typically require 5 to 14 business days for processing.',
      ms: 'Permohonan Pas Penggajian biasanya mengambil masa 5 hingga 14 hari bekerja.',
    },
  },
];
