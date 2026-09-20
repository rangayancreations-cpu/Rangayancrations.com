import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  Send, 
  Printer, 
  CheckCircle2, 
  FileSpreadsheet, 
  MessageSquare, 
  ShieldCheck, 
  Building, 
  MapPin, 
  HelpCircle,
  Info
} from 'lucide-react';
import { RFQItem, Product } from '../types';
import { COMPANY_INFO, UP_DISTRICTS } from '../data/mockData';

interface RfqModalProps {
  isOpen: boolean;
  onClose: () => void;
  rfqItems: RFQItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearAll: () => void;
}

export const RfqModal: React.FC<RfqModalProps> = ({
  isOpen,
  onClose,
  rfqItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearAll
}) => {
  const [name, setName] = useState('');
  const [organization, setOrganization] = useState('');
  const [orgType, setOrgType] = useState('Government / PSU');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('Lucknow');
  const [tenderRef, setTenderRef] = useState('');
  const [notes, setNotes] = useState('');
  const [customItemText, setCustomItemText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceNumber, setReferenceNumber] = useState('');

  if (!isOpen) return null;

  const totalItemsCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ref = 'RC-RFQ-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceNumber(ref);
    setSubmitted(true);
  };

  const handleSendWhatsApp = () => {
    const itemsList = rfqItems.map((item, idx) => {
      const isPrinterOrScanner = 
        item.product.category === 'Printers & Photocopiers' || 
        item.product.name.toLowerCase().includes('printer') || 
        item.product.name.toLowerCase().includes('scanner') ||
        item.product.name.toLowerCase().includes('copier');
      const refPrice = isPrinterOrScanner ? 'Official Price on Request' : (item.product.priceEstimate || 'RFQ');
      return `${idx + 1}. ${item.product.brand} ${item.product.name} (PN: ${item.product.partNumber}) - Qty: ${item.quantity} [Ref: ${refPrice}]`;
    }).join('\n');

    const message = 
      `*New Enterprise RFQ / BOM Request - Rangayan Creations*\n\n` +
      `*Contact Name:* ${name || 'Prospective Client'}\n` +
      `*Organization:* ${organization || 'N/A'} (${orgType})\n` +
      `*Phone:* ${phone || 'N/A'}\n` +
      `*Email:* ${email || 'N/A'}\n` +
      `*Delivery District/Location:* ${district}, Uttar Pradesh\n` +
      (tenderRef ? `*Tender / GeM Ref:* ${tenderRef}\n` : '') +
      `\n*Required Equipment Bill of Materials:*\n${itemsList || 'No standard catalog items selected'}\n` +
      (customItemText ? `\n*Additional Custom Requirements:*\n${customItemText}\n` : '') +
      (notes ? `\n*Notes/Timeline:* ${notes}\n` : '') +
      `\n_Generated via rangayancreations.com_`;

    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div 
        className="bg-white border border-orange-200 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl relative my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 sm:p-6 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shadow-xs">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-slate-900">
                Request for Quote (RFQ) & Bill of Materials (BOM)
              </h2>
              <p className="text-xs text-slate-500">
                Direct quotation, GeM pricing & specification validation from Rangayan Creations engineers.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 sm:pt-4">
          
          {submitted ? (
            /* Submission Confirmation Screen */
            <div className="py-12 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
                RFQ Successfully Registered
              </h3>
              <div className="bg-orange-50 border border-orange-200 p-3 rounded-xl mb-4 font-mono text-sm text-orange-800">
                Reference ID: <strong className="text-slate-900">{referenceNumber}</strong>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Thank you, <strong>{name}</strong>. Our enterprise hardware desk in Gomti Nagar, Lucknow will review your Bill of Materials and furnish an official quotation with OEM warranty and GeM compliance within 4 business hours.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl text-xs shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Transmit to WhatsApp Desk</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Left Column: Selected RFQ Items */}
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">
                    Selected Equipment ({totalItemsCount} units)
                  </h3>
                  {rfqItems.length > 0 && (
                    <button
                      type="button"
                      onClick={onClearAll}
                      className="text-xs text-rose-600 hover:underline font-semibold"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {/* Price Notice */}
                <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-start gap-2">
                  <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>Network & server estimates are indicative reference rates. Photocopier, printer, and scanner rates are provided exclusively via official RFQ / custom BOQ tendering.</span>
                </div>

                {rfqItems.length === 0 ? (
                  <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl text-center">
                    <p className="text-xs text-slate-500 mb-2">No hardware items currently added to your RFQ bag.</p>
                    <p className="text-[11px] text-slate-400">You can browse the hardware catalog or enter unlisted equipment in the custom box below.</p>
                  </div>
                ) : (
                  <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
                    {rfqItems.map((item) => {
                      const isPrinterOrScanner = 
                        item.product.category === 'Printers & Photocopiers' || 
                        item.product.name.toLowerCase().includes('printer') || 
                        item.product.name.toLowerCase().includes('scanner') ||
                        item.product.name.toLowerCase().includes('copier');

                      return (
                        <div 
                          key={item.product.id}
                          className="bg-slate-50 border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] font-mono font-bold bg-white text-orange-700 px-1.5 py-0.2 rounded border border-slate-200">
                                {item.product.brand}
                              </span>
                              <span className="text-[11px] text-slate-500 truncate font-mono">
                                {item.product.partNumber}
                              </span>
                            </div>
                            <div className="text-xs font-bold text-slate-900 truncate mt-0.5">
                              {item.product.name}
                            </div>
                            {isPrinterOrScanner ? (
                              <div className="text-[11px] text-amber-800 font-semibold">
                                Official Price on Request / RFQ
                              </div>
                            ) : item.product.priceEstimate ? (
                              <div className="text-[11px] text-orange-700 font-mono font-bold">
                                {item.product.priceEstimate}
                              </div>
                            ) : null}
                          </div>

                          {/* Controls */}
                          <div className="flex items-center gap-2 shrink-0">
                            <div className="flex items-center bg-white border border-slate-200 rounded-lg">
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, Math.max(1, item.quantity - 1))}
                                className="p-1 text-slate-500 hover:text-slate-800"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 text-xs font-mono font-bold text-slate-800">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                                className="p-1 text-slate-500 hover:text-slate-800"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <button
                              type="button"
                              onClick={() => onRemoveItem(item.product.id)}
                              className="p-1 text-slate-400 hover:text-rose-600 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Additional custom components field */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 text-xs">
                  <label className="block text-slate-700 font-bold mb-1">
                    Unlisted Items / Custom Components:
                  </label>
                  <textarea
                    rows={2}
                    value={customItemText}
                    onChange={(e) => setCustomItemText(e.target.value)}
                    placeholder="e.g. 5x Cat6 305m CommScope Cable Boxes, 24x 10G SFP+ 850nm Transceivers, Onsite Rack Mount..."
                    className="w-full bg-white border border-slate-200 rounded-lg p-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>

                {/* Quick Print Button */}
                {rfqItems.length > 0 && (
                  <button
                    type="button"
                    onClick={handlePrint}
                    className="w-full py-2 bg-slate-50 border border-slate-200 text-slate-700 hover:text-slate-900 text-xs font-bold rounded-lg flex items-center justify-center gap-2"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-500" />
                    <span>Print Estimate Summary</span>
                  </button>
                )}
              </div>

              {/* Right Column: Contact & Procurement Details Form */}
              <div className="lg:col-span-6 bg-slate-50/70 border border-slate-200 rounded-xl p-4 sm:p-5">
                <h3 className="text-sm font-extrabold text-slate-900 uppercase tracking-wider mb-3">
                  Procurement Information
                </h3>

                <form onSubmit={handleSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Full Name & Designation *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Procurement Officer / Assistant Director (IT)"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Organization / Department *
                      </label>
                      <input
                        type="text"
                        required
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Directorate of Higher Education"
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Client Sector
                      </label>
                      <select
                        value={orgType}
                        onChange={(e) => setOrgType(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-orange-500"
                      >
                        <option value="Government / PSU">Government / PSU</option>
                        <option value="State University / College">State University / College</option>
                        <option value="Hospital / Healthcare">Hospital / Healthcare</option>
                        <option value="Enterprise / Corporate">Enterprise / Corporate</option>
                        <option value="ISP / Data Center">ISP / Data Center</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@gov.in or name@corp.com"
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        Delivery District (UP)
                      </label>
                      <select
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 font-medium focus:outline-none focus:border-orange-500"
                      >
                        {UP_DISTRICTS.map((d) => (
                          <option key={d.name} value={d.name}>{d.name} (UP)</option>
                        ))}
                        <option value="Other Pan-India Location">Other Pan-India Location</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">
                        GeM / Tender Reference No. (Optional)
                      </label>
                      <input
                        type="text"
                        value={tenderRef}
                        onChange={(e) => setTenderRef(e.target.value)}
                        placeholder="e.g. GEM/2026/B/..."
                        className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 font-mono text-xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">
                      Delivery Timeline / Specific Instructions
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Need delivery within 5 days, require on-site rack mounting & CRAC"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  <div className="pt-3 flex flex-col sm:flex-row gap-2">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-all shadow-md shadow-orange-600/20"
                    >
                      Submit Official RFQ
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
                      title="Send directly to Rangayan Creations WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp RFQ</span>
                    </button>
                  </div>

                  <div className="text-[10px] text-slate-500 text-center mt-2">
                    Official quotation will be dispatched from <strong>support@rangayancreations.com</strong>.
                  </div>
                </form>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
