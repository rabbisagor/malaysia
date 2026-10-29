import React, { useState, useEffect } from 'react';
import {
  FolderHeart,
  Plus,
  Trash2,
  Copy,
  Check,
  AlertTriangle,
  Calendar,
  ExternalLink,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { WorkerDocument, Language } from '../types';
import { translations } from '../data/translations';

interface DocumentVaultProps {
  currentLang: Language;
}

const STORAGE_KEY = 'my_worker_vault_documents_v1';

export const DocumentVault: React.FC<DocumentVaultProps> = ({ currentLang }) => {
  const t = translations;
  const [documents, setDocuments] = useState<WorkerDocument[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form states
  const [docType, setDocType] = useState<WorkerDocument['type']>('passport');
  const [holderName, setHolderName] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [workerCode, setWorkerCode] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [employerName, setEmployerName] = useState('');
  const [notes, setNotes] = useState('');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setDocuments(JSON.parse(stored));
      } else {
        // Initial sample document for helpful orientation
        const initialDoc: WorkerDocument = {
          id: 'demo-passport-1',
          type: 'passport',
          holderName: 'MD RAHMAN',
          documentNumber: 'A08976542',
          expiryDate: '2027-11-15',
          employerName: 'TOP GLOVE CORP BHD',
          notes: 'Renewal reminder set for 6 months prior',
          createdAt: new Date().toISOString(),
        };
        setDocuments([initialDoc]);
        localStorage.setItem(STORAGE_KEY, JSON.stringify([initialDoc]));
      }
    } catch {
      // Ignore fallback
    }
  }, []);

  const saveDocumentsToStorage = (updated: WorkerDocument[]) => {
    setDocuments(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // Ignore fallback
    }
  };

  const handleAddDocument = (e: React.FormEvent) => {
    e.preventDefault();
    if (!documentNumber.trim()) return;

    const newDoc: WorkerDocument = {
      id: 'doc_' + Date.now(),
      type: docType,
      holderName: holderName.trim() || 'My Document',
      documentNumber: documentNumber.trim(),
      workerCode: workerCode.trim() || undefined,
      expiryDate: expiryDate || undefined,
      employerName: employerName.trim() || undefined,
      notes: notes.trim() || undefined,
      createdAt: new Date().toISOString(),
    };

    const updated = [newDoc, ...documents];
    saveDocumentsToStorage(updated);

    // Reset form
    setDocumentNumber('');
    setHolderName('');
    setWorkerCode('');
    setExpiryDate('');
    setEmployerName('');
    setNotes('');
    setShowAddForm(false);
  };

  const handleDelete = (id: string) => {
    const updated = documents.filter((d) => d.id !== id);
    saveDocumentsToStorage(updated);
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getDaysLeft = (dateStr?: string) => {
    if (!dateStr) return null;
    const target = new Date(dateStr).getTime();
    const now = new Date().getTime();
    const diff = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
    return diff;
  };

  const getTypeLabel = (type: WorkerDocument['type']) => {
    switch (type) {
      case 'passport':
        return currentLang === 'bn' ? 'পাসপোর্ট (Passport)' : 'Passport';
      case 'permit':
        return currentLang === 'bn' ? 'ওয়ার্ক পারমিট (PLKS)' : 'Work Permit (PLKS)';
      case 'fomema':
        return currentLang === 'bn' ? 'ফোমেমা মেডিকেল কার্ড' : 'FOMEMA Card';
      case 'evisa':
        return currentLang === 'bn' ? 'ই-ভিসা (eVisa)' : 'eVisa';
      case 'cidb':
        return currentLang === 'bn' ? 'সিআইডিবি গ্রিন কার্ড' : 'CIDB Green Card';
    }
  };

  const getCheckPortalUrl = (type: WorkerDocument['type']) => {
    switch (type) {
      case 'fomema':
        return 'https://online.fomema.com.my/search/';
      case 'permit':
        return 'https://eservices.imi.gov.my/myimms/PRAStatus';
      case 'evisa':
        return 'https://malaysiavisa.imi.gov.my/evisa/vlsl_checkstatus.jsp';
      case 'passport':
        return 'http://bdhckl.gov.bd/';
      case 'cidb':
        return 'https://cims.cidb.gov.my/';
      default:
        return 'https://eservices.imi.gov.my/myimms/PRAStatus';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <FolderHeart className="w-5 h-5 text-emerald-700" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                {t.vault.title[currentLang]}
              </h3>
            </div>
            <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
              {t.vault.subtitle[currentLang]}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2.5 text-xs font-semibold bg-slate-900 text-white hover:bg-slate-800 rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap self-start sm:self-auto min-h-[44px]"
          >
            <Plus className="w-4 h-4" />
            <span>{t.vault.addDoc[currentLang]}</span>
          </button>
        </div>

        {/* Add Document Inline Form */}
        {showAddForm && (
          <form
            onSubmit={handleAddDocument}
            className="mt-6 p-4 sm:p-5 bg-slate-50 border border-slate-200 rounded-xl space-y-4 animate-in fade-in duration-200"
          >
            <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              {currentLang === 'bn' ? 'নতুন ডকুমেন্টের তথ্য পূরণ করুন' : 'Enter Document Details'}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'ডকুমেন্টের ধরন' : 'Document Type'}
                </label>
                <select
                  value={docType}
                  onChange={(e) => setDocType(e.target.value as WorkerDocument['type'])}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="passport">Passport (পাসপোর্ট)</option>
                  <option value="permit">Work Permit PLKS (পারমিট)</option>
                  <option value="fomema">FOMEMA Medical (ফোমেমা)</option>
                  <option value="evisa">eVisa / Approval (ই-ভিসা)</option>
                  <option value="cidb">CIDB Green Card (সিআইডিবি)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'ডকুমেন্ট / পাসপোর্ট নম্বর *' : 'Document / Passport No. *'}
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. A08976542"
                  value={documentNumber}
                  onChange={(e) => setDocumentNumber(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'মেয়াদ শেষের তারিখ (Expiry Date)' : 'Expiry Date'}
                </label>
                <input
                  type="date"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'ধারকের নাম (Worker Name)' : 'Worker Name'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. MD RAHMAN"
                  value={holderName}
                  onChange={(e) => setHolderName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 uppercase"
                />
              </div>

              {docType === 'fomema' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Worker Code (ফোমেমা কোড)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. W12345678"
                    value={workerCode}
                    onChange={(e) => setWorkerCode(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 font-mono"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'কোম্পানি / মালিকের নাম' : 'Employer / Company'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Sdn Bhd Name"
                  value={employerName}
                  onChange={(e) => setEmployerName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              <div className="sm:col-span-2 md:col-span-3">
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {currentLang === 'bn' ? 'নোট বা মন্তব্য (ঐচ্ছিক)' : 'Personal Notes (Optional)'}
                </label>
                <input
                  type="text"
                  placeholder="e.g. Boss promised renewal next month"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-semibold bg-slate-900 text-white rounded-lg hover:bg-slate-800"
              >
                Save to Vault
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Documents List */}
      {documents.length === 0 ? (
        <div className="bg-white rounded-2xl border border-slate-200 p-8 text-center text-slate-500 text-xs sm:text-sm">
          {t.vault.noDocs[currentLang]}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {documents.map((doc) => {
            const daysLeft = getDaysLeft(doc.expiryDate);
            const isExpired = daysLeft !== null && daysLeft <= 0;
            const isUrgent = daysLeft !== null && daysLeft > 0 && daysLeft <= 60;

            return (
              <div
                key={doc.id}
                className="bg-white rounded-2xl border border-slate-200 p-5 shadow-2xs flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* Top row: Type and Expiry indicator */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                    <span className="font-semibold text-slate-700">
                      {getTypeLabel(doc.type)}
                    </span>
                    {daysLeft !== null && (
                      <div className="flex items-center gap-1 font-semibold text-xs">
                        {isExpired ? (
                          <span className="text-rose-600 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {t.vault.expired[currentLang]}
                          </span>
                        ) : isUrgent ? (
                          <span className="text-amber-700 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            {daysLeft} {t.vault.daysLeft[currentLang]}
                          </span>
                        ) : (
                          <span className="text-emerald-700 flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5" />
                            {daysLeft} {t.vault.daysLeft[currentLang]}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Document Number with copy button */}
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-between gap-2 mb-3">
                    <div className="truncate">
                      <span className="text-[10px] text-slate-500 uppercase block tracking-wider font-semibold">
                        {doc.holderName}
                      </span>
                      <span className="text-base font-extrabold font-mono text-slate-900 tracking-wide truncate">
                        {doc.documentNumber}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(doc.id, doc.documentNumber)}
                      className="px-2.5 py-1.5 text-xs font-medium bg-white border border-slate-200 rounded-lg hover:bg-slate-100 transition-colors shrink-0 flex items-center gap-1 text-slate-700"
                      title="Copy Document Number"
                    >
                      {copiedId === doc.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-[11px] font-semibold text-emerald-700">
                            {t.vault.copied[currentLang]}
                          </span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[11px]">{t.vault.copyNumber[currentLang]}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1 text-xs text-slate-600">
                    {doc.workerCode && (
                      <div className="flex justify-between">
                        <span>Worker Code:</span>
                        <span className="font-mono font-semibold text-slate-800">
                          {doc.workerCode}
                        </span>
                      </div>
                    )}
                    {doc.expiryDate && (
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>Expiry:</span>
                        </span>
                        <span className="font-semibold text-slate-800 tabular-nums">
                          {doc.expiryDate}
                        </span>
                      </div>
                    )}
                    {doc.employerName && (
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-1 text-slate-500">
                          <Building className="w-3.5 h-3.5" />
                          <span>Employer:</span>
                        </span>
                        <span className="truncate max-w-[180px] font-medium text-slate-800">
                          {doc.employerName}
                        </span>
                      </div>
                    )}
                    {doc.notes && (
                      <p className="text-[11px] text-slate-500 italic pt-1 border-t border-slate-100">
                        {doc.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <a
                    href={getCheckPortalUrl(doc.type)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-3 py-2 text-xs font-semibold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                  >
                    <span>{currentLang === 'bn' ? 'স্ট্যাটাস চেক করুন' : 'Check Status'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    type="button"
                    onClick={() => handleDelete(doc.id)}
                    className="p-2 text-slate-400 hover:text-rose-600 rounded-lg hover:bg-rose-50 transition-colors"
                    title="Delete from Vault"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
