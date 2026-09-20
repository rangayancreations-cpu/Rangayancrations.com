import React from 'react';
import { 
  X, 
  Check, 
  ShieldCheck, 
  Clock, 
  Plus, 
  Minus, 
  FileText, 
  MessageSquare,
  Cpu,
  Layers,
  Award,
  Truck
} from 'lucide-react';
import { Product } from '../types';
import { COMPANY_INFO } from '../data/mockData';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToRfq: (product: Product, quantity?: number) => void;
  isInRfq: boolean;
  rfqQuantity: number;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToRfq,
  isInRfq,
  rfqQuantity
}) => {
  const [qty, setQty] = React.useState(1);

  React.useEffect(() => {
    if (rfqQuantity > 0) {
      setQty(rfqQuantity);
    } else {
      setQty(1);
    }
  }, [rfqQuantity, product]);

  if (!product) return null;

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Rangayan Creations, I would like to request an official quotation and stock availability for:\n` +
      `Product: ${product.name}\n` +
      `Part Number: ${product.partNumber}\n` +
      `Quantity: ${qty}\n` +
      `Brand: ${product.brand}`
    );
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white border border-orange-200 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold px-2.5 py-0.5 rounded">
              {product.brand}
            </span>
            <span className="bg-slate-100 text-slate-700 text-xs px-2.5 py-0.5 rounded border border-slate-200 font-medium">
              {product.category}
            </span>
            {product.gemAvailable && (
              <span className="bg-emerald-50 text-emerald-800 border border-emerald-300 text-xs font-bold px-2.5 py-0.5 rounded inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>GeM Approved</span>
              </span>
            )}
            {product.badge && (
              <span className="bg-orange-100 text-orange-900 border border-orange-200 text-xs font-semibold px-2 py-0.5 rounded">
                {product.badge}
              </span>
            )}
          </div>

          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            {product.name}
          </h2>

          <div className="flex items-center gap-2 text-xs font-mono text-orange-700 mb-4 bg-orange-50/70 px-3 py-1.5 rounded-lg border border-orange-200 w-fit">
            <span>Part Number / SKU:</span>
            <strong className="text-slate-900 select-all font-bold">{product.partNumber}</strong>
          </div>

          {/* Body Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-4">
            
            {/* Left Image & Quick Specs */}
            <div className="md:col-span-5 flex flex-col gap-4">
              <div className="relative aspect-video sm:aspect-square bg-slate-50 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-4">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Status pills */}
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Stock Status:</span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {product.inStock ? 'Available for Dispatch' : 'Procure on Order'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="text-slate-800 font-semibold">{product.warranty}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Lead Time:</span>
                  <span className="text-orange-700 font-semibold">{product.leadTime}</span>
                </div>
                {(() => {
                  const isPrinterOrScanner = 
                    product.category === 'Printers & Photocopiers' || 
                    product.name.toLowerCase().includes('printer') || 
                    product.name.toLowerCase().includes('scanner') ||
                    product.name.toLowerCase().includes('copier');

                  if (isPrinterOrScanner) {
                    return (
                      <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                        <span className="text-slate-500">Commercial Rate:</span>
                        <span className="text-amber-800 font-bold text-xs">Official Price on Request / RFQ</span>
                      </div>
                    );
                  }

                  if (product.priceEstimate) {
                    return (
                      <div className="flex items-center justify-between border-t border-slate-200 pt-2">
                        <span className="text-slate-500">Indicative Rate:</span>
                        <span className="text-orange-700 font-mono font-bold">{product.priceEstimate}</span>
                      </div>
                    );
                  }

                  return null;
                })()}
              </div>
            </div>

            {/* Right Specifications & Features */}
            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Technical Specifications & Overview
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {product.shortDesc}
                </p>

                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
                  <div className="text-xs font-bold text-slate-900 mb-2.5 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-600" />
                    <span>Key Engineering Parameters</span>
                  </div>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {product.keySpecs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></span>
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {product.gemCategoryName && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 mb-4 flex items-center justify-between">
                    <span>GeM Category: <strong>{product.gemCategoryName}</strong></span>
                    <span className="text-[11px] bg-emerald-200/60 font-bold px-2 py-0.5 rounded text-emerald-900">Tender Ready</span>
                  </div>
                )}
              </div>

              {/* Quantity & Action Controls */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-600 font-semibold">Units:</span>
                  <div className="flex items-center bg-white border border-slate-300 rounded-lg shadow-xs">
                    <button
                      type="button"
                      onClick={() => setQty(Math.max(1, qty - 1))}
                      className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
                      disabled={qty <= 1}
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-mono font-bold text-slate-800">
                      {qty}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQty(qty + 1)}
                      className="p-2 text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleWhatsAppQuote}
                    className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white px-3.5 py-2 rounded-lg text-xs font-bold transition-colors shadow-xs"
                    title="Send via WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      onAddToRfq(product, qty);
                      onClose();
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md shadow-orange-600/25"
                  >
                    <FileText className="w-4 h-4" />
                    <span>{isInRfq ? 'Update RFQ Bag' : 'Add to RFQ Bag'}</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
