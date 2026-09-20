import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Filter, 
  ShieldCheck, 
  Check, 
  Plus, 
  Minus, 
  ArrowRight, 
  ExternalLink,
  SlidersHorizontal,
  Package,
  Layers,
  Sparkles,
  FileSpreadsheet,
  Info
} from 'lucide-react';
import { PRODUCTS, COMPANY_INFO } from '../data/mockData';
import { Product, ProductCategory, RFQItem } from '../types';
import { ProductDetailModal } from './ProductDetailModal';

interface ProductCatalogProps {
  rfqItems: RFQItem[];
  onAddToRfq: (product: Product, quantity?: number) => void;
  onRemoveFromRfq: (productId: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedProductForModal: Product | null;
  setSelectedProductForModal: (product: Product | null) => void;
  onOpenRfq: () => void;
  initialCategory?: ProductCategory | 'All';
}

const CATEGORIES: ProductCategory[] = [
  'All',
  'Switches & Routers',
  'Firewalls & Security',
  'Servers & Storage',
  'Laptops & Workstations',
  'Wireless & Access Points',
  'Printers & Photocopiers',
  'Server Racks & Cabling',
  'Power & UPS'
];

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  rfqItems,
  onAddToRfq,
  onRemoveFromRfq,
  searchQuery,
  setSearchQuery,
  selectedProductForModal,
  setSelectedProductForModal,
  onOpenRfq,
  initialCategory
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>(initialCategory || 'All');
  const [selectedBrand, setSelectedBrand] = useState<string>('All');
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);
  const [onlyGem, setOnlyGem] = useState<boolean>(false);
  const [onlyCanonBIS, setOnlyCanonBIS] = useState<boolean>(false);

  // Sync initialCategory when it changes externally
  React.useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Extract unique brands
  const brands = useMemo(() => {
    const list = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.brand)))];
    return list;
  }, []);

  // Filtered product items
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All' && item.brand !== selectedBrand) {
        return false;
      }
      // Stock filter
      if (onlyInStock && !item.inStock) {
        return false;
      }
      // GeM filter
      if (onlyGem && !item.gemAvailable) {
        return false;
      }
      // Canon BIS filter
      if (onlyCanonBIS && !item.isCanonBIS) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchName = item.name.toLowerCase().includes(query);
        const matchModel = item.model.toLowerCase().includes(query);
        const matchBrand = item.brand.toLowerCase().includes(query);
        const matchPart = item.partNumber.toLowerCase().includes(query);
        const matchSpecs = item.keySpecs.some(s => s.toLowerCase().includes(query));
        return matchName || matchModel || matchBrand || matchPart || matchSpecs;
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, onlyInStock, onlyGem, searchQuery]);

  const getRfqQuantity = (productId: string) => {
    const found = rfqItems.find(item => item.product.id === productId);
    return found ? found.quantity : 0;
  };

  return (
    <section id="catalog" className="py-16 bg-slate-50/70 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <Package className="w-3.5 h-3.5 text-orange-600" />
            <span>OEM Sourced IT & Network Equipment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Enterprise Hardware Catalog
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Engineered hardware from Cisco, HP, Dell, Fortinet, Canon, and Acer. All products are verified with OEM warranty and available for direct GeM and enterprise procurement.
          </p>

          {/* Pricing Notice Callout */}
          <div className="mt-4 inline-flex items-center gap-2 bg-amber-50 border border-amber-300 text-amber-900 text-xs px-4 py-2 rounded-xl font-medium shadow-xs">
            <Info className="w-4 h-4 text-amber-700 shrink-0" />
            <span>
              <strong>Pricing Notice:</strong> Photocopier, printer, and scanner pricing is provided strictly on request via official RFQ / custom BOQ tendering. Network and server estimates are reference rates.
            </span>
          </div>
        </div>

        {/* Filter Bar & Controls */}
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-5 mb-8 shadow-sm">
          
          {/* Category Pills (Horizontal scrollable) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-3.5 py-2 rounded-lg font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-orange-50 hover:text-orange-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Secondary Filter Row: Search, Brand dropdown, Toggles */}
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by part number, model, brand (e.g. 9200L, FortiGate, DL380)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 absolute right-3 top-2.5 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Brand Dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-600 font-semibold hidden sm:inline">Brand:</span>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-xs text-slate-700 font-medium focus:outline-none focus:border-orange-500"
              >
                {brands.map((b) => (
                  <option key={b} value={b}>
                    {b === 'All' ? 'All Brands' : b}
                  </option>
                ))}
              </select>
            </div>

            {/* In-Stock, GeM, and Canon BIS Toggles */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold">
              <label className="flex items-center gap-1.5 cursor-pointer text-orange-800 bg-orange-50 border border-orange-200 px-2.5 py-1 rounded-lg hover:bg-orange-100 select-none">
                <input
                  type="checkbox"
                  checked={onlyCanonBIS}
                  onChange={(e) => setOnlyCanonBIS(e.target.checked)}
                  className="rounded border-orange-400 text-orange-600 focus:ring-0"
                />
                <span className="font-bold">Canon BIS Only</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-orange-700 select-none">
                <input
                  type="checkbox"
                  checked={onlyGem}
                  onChange={(e) => setOnlyGem(e.target.checked)}
                  className="rounded border-slate-300 text-orange-600 focus:ring-0"
                />
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>GeM Ready Only</span>
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-slate-700 hover:text-orange-700 select-none">
                <input
                  type="checkbox"
                  checked={onlyInStock}
                  onChange={(e) => setOnlyInStock(e.target.checked)}
                  className="rounded border-slate-300 text-orange-600 focus:ring-0"
                />
                <span>Ready Stock</span>
              </label>
            </div>

          </div>

          {/* Quick Stats on filtered items */}
          <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
            <span>
              Showing <strong className="text-slate-800">{filteredProducts.length}</strong> enterprise items
              {selectedCategory !== 'All' && ` in ${selectedCategory}`}
              {selectedBrand !== 'All' && ` (${selectedBrand})`}
            </span>
            {rfqItems.length > 0 && (
              <button
                type="button"
                onClick={onOpenRfq}
                className="text-orange-600 hover:underline font-bold"
              >
                View RFQ Bag ({rfqItems.length} items) &rarr;
              </button>
            )}
          </div>

        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-xs">
            <Package className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-1">No products match your criteria</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
              We supply custom enterprise models and custom BOQs beyond catalog listings. Contact our Lucknow engineering desk for immediate requisition.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBrand('All');
                setSearchQuery('');
                setOnlyInStock(false);
                setOnlyGem(false);
              }}
              className="bg-orange-600 hover:bg-orange-500 text-white text-xs px-4 py-2 rounded-lg font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => {
              const rfqQty = getRfqQuantity(product.id);
              const isAdded = rfqQty > 0;

              return (
                <div
                  key={product.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-orange-400 transition-all flex flex-col justify-between group hover:shadow-xl shadow-xs"
                >
                  <div>
                    {/* Image & Badges */}
                    <div className="relative aspect-[16/10] bg-slate-50 overflow-hidden border-b border-slate-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                        <span className="bg-white/95 backdrop-blur-sm border border-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">
                          {product.brand}
                        </span>
                        {product.gemAvailable && (
                          <span className="bg-emerald-50 backdrop-blur-sm border border-emerald-300 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
                            <ShieldCheck className="w-3 h-3 text-emerald-600" />
                            <span>GeM</span>
                          </span>
                        )}
                        {product.isCanonBIS && (
                          <span className="bg-gradient-to-r from-orange-600 to-amber-600 text-white text-[10px] font-extrabold px-2 py-0.5 rounded shadow-xs">
                            Canon BIS Authorised
                          </span>
                        )}
                      </div>

                      {product.badge && (
                        <div className="absolute top-3 right-3 bg-orange-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                          {product.badge}
                        </div>
                      )}

                      <div className="absolute bottom-2 right-2 bg-white/95 text-slate-700 text-[10px] font-medium px-2 py-0.5 rounded border border-slate-200 shadow-xs">
                        {product.leadTime}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      {/* Model & Part Number */}
                      <div className="flex items-baseline justify-between gap-2 mb-1">
                        <span className="text-xs font-mono text-orange-600 font-bold truncate">
                          {product.partNumber}
                        </span>
                        <span className="text-[11px] text-slate-500 shrink-0 font-medium">
                          {product.category}
                        </span>
                      </div>

                      <h3 
                        onClick={() => setSelectedProductForModal(product)}
                        className="text-base font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2 cursor-pointer mb-2"
                        title={product.name}
                      >
                        {product.name}
                      </h3>

                      <p className="text-xs text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                        {product.shortDesc}
                      </p>

                      {/* Key specs bullet list */}
                      <div className="space-y-1.5 bg-slate-50 p-3 rounded-xl border border-slate-200/80 mb-4 text-[11px] text-slate-700">
                        {product.keySpecs.slice(0, 3).map((spec, idx) => (
                          <div key={idx} className="flex items-start gap-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0"></span>
                            <span className="truncate font-medium">{spec}</span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing with (indicative) */}
                      <div className="flex items-center justify-between text-xs text-slate-600 mb-1 pt-1 border-t border-slate-100">
                        <span>Warranty: <strong className="text-slate-800">{product.warranty}</strong></span>
                        {(() => {
                          const isPrinterOrScanner = 
                            product.category === 'Printers & Photocopiers' || 
                            product.name.toLowerCase().includes('printer') || 
                            product.name.toLowerCase().includes('scanner') ||
                            product.name.toLowerCase().includes('copier');
                          
                          if (isPrinterOrScanner) {
                            return (
                              <span className="bg-amber-50 border border-amber-200 text-amber-900 font-semibold text-[11px] px-2 py-0.5 rounded">
                                Price on Request / RFQ
                              </span>
                            );
                          }

                          if (product.priceEstimate) {
                            return (
                              <span className="bg-orange-50 border border-orange-200 text-orange-800 font-mono font-bold text-xs px-2 py-0.5 rounded">
                                {product.priceEstimate}
                              </span>
                            );
                          }

                          return null;
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between gap-2 mt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedProductForModal(product)}
                      className="text-xs text-slate-600 hover:text-orange-600 py-2 font-bold"
                    >
                      Technical Specs &rarr;
                    </button>

                    {/* RFQ Add / Qty Control */}
                    <div className="flex items-center gap-1.5">
                      {isAdded ? (
                        <div className="flex items-center bg-white border border-orange-300 rounded-lg shadow-xs">
                          <button
                            type="button"
                            onClick={() => {
                              if (rfqQty > 1) {
                                onAddToRfq(product, rfqQty - 1);
                              } else {
                                onRemoveFromRfq(product.id);
                              }
                            }}
                            className="p-1.5 text-slate-600 hover:text-orange-600"
                            title="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2 text-xs font-mono font-bold text-orange-600">
                            {rfqQty}
                          </span>
                          <button
                            type="button"
                            onClick={() => onAddToRfq(product, rfqQty + 1)}
                            className="p-1.5 text-slate-600 hover:text-orange-600"
                            title="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => onAddToRfq(product, 1)}
                          className="inline-flex items-center gap-1.5 bg-orange-600 hover:bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to RFQ</span>
                        </button>
                      )}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Custom BOQ Callout banner below catalog */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl shadow-orange-600/15">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Have an existing Tender BOQ or Custom Equipment List?
              </h3>
              <p className="text-xs sm:text-sm text-orange-100 mt-1 max-w-2xl">
                Upload or paste your Bill of Quantities. Our network engineers will cross-verify part numbers, check compatibility with Cisco / Fortinet / HPE guidelines, and submit lowest compliant pricing with Make-in-India certificates.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenRfq}
            className="shrink-0 bg-white hover:bg-orange-50 text-orange-800 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-all"
          >
            Submit Custom BOQ / Tender
          </button>
        </div>

      </div>

      {/* Modal for Details */}
      {selectedProductForModal && (
        <ProductDetailModal
          product={selectedProductForModal}
          onClose={() => setSelectedProductForModal(null)}
          onAddToRfq={onAddToRfq}
          isInRfq={getRfqQuantity(selectedProductForModal.id) > 0}
          rfqQuantity={getRfqQuantity(selectedProductForModal.id)}
        />
      )}
    </section>
  );
};
