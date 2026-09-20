import React, { useState } from 'react';
import { Search, Menu, X, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { RangayanLogo } from './RangayanLogo';
import { COMPANY_INFO, PRODUCTS } from '../data/mockData';
import { NavigationTab, Product, RFQItem } from '../types';

interface NavbarProps {
  currentTab: NavigationTab;
  onNavigate: (tab: NavigationTab) => void;
  rfqItems: RFQItem[];
  onOpenRfq: () => void;
  onSelectProduct: (product: Product) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onNavigate,
  rfqItems,
  onOpenRfq,
  onSelectProduct,
  searchQuery,
  setSearchQuery
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  const totalRfqCount = rfqItems.reduce((acc, item) => acc + item.quantity, 0);

  // Search filtered items for live popover
  const filteredProducts = searchQuery.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.partNumber.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5);

  const navItems: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'categories', label: 'Categories' },
    { id: 'journey', label: 'Our Journey' },
    { id: 'reports', label: 'Reports' },
    { id: 'staff', label: 'Staff' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (tab: NavigationTab) => {
    onNavigate(tab);
    setMobileMenuOpen(false);
    // Scroll smoothly to content top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs border-b border-slate-200/80">
      {/* Top Credential Micro-Bar (Discreet & Professional) */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1 px-4 border-b border-slate-800 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-orange-400 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
              <span>Canon Authorised Distributor for BIS Series for Lucknow & nearby districts</span>
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-500" />
              <span>A-113 NBCC Commercial Complex, Sector 1, Gomtinagar Ext, Lucknow</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Phone className="w-3 h-3 text-orange-400" />
              <span className="font-semibold">{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <span className="text-slate-600">|</span>
            <span>CIN: {COMPANY_INFO.cin}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar - Exact replica of user uploaded banner image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Left: Brand Logo & Title matching image */}
          <button 
            type="button" 
            onClick={() => handleNavClick('home')}
            className="flex items-center text-left focus:outline-hidden group flex-shrink-0"
          >
            <RangayanLogo />
          </button>

          {/* Center: Exact Navigation Links matching attached image */}
          <nav className="hidden xl:flex items-center gap-7">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`text-[15px] font-semibold transition-colors relative py-2 ${
                    isActive 
                      ? 'text-orange-600 font-bold' 
                      : 'text-slate-700 hover:text-orange-600'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-orange-600 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: Search Box + Request Quote Button (Matching attached image) */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Search Input matching the image */}
            <div className="relative w-44 lg:w-56">
              <div className="relative flex items-center">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setTimeout(() => setSearchFocused(false), 250)}
                  placeholder="Search"
                  className="w-full bg-white border border-slate-300 rounded-lg pl-9 pr-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button 
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-700"
                  >
                    ×
                  </button>
                )}
              </div>

              {/* Instant Search Results Dropdown */}
              {searchFocused && filteredProducts.length > 0 && (
                <div className="absolute top-full right-0 w-80 mt-2 bg-white border border-orange-200 rounded-xl shadow-xl overflow-hidden z-50">
                  <div className="px-3 py-2 bg-orange-50/80 text-[11px] font-bold text-orange-950 border-b border-orange-100 flex justify-between">
                    <span>Matching Hardware</span>
                    <span className="text-orange-700">{filteredProducts.length} items</span>
                  </div>
                  <div className="divide-y divide-slate-100 max-h-72 overflow-y-auto">
                    {filteredProducts.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          onSelectProduct(p);
                          onNavigate('products');
                        }}
                        className="w-full text-left p-2.5 hover:bg-orange-50/60 transition-colors flex items-center justify-between group"
                      >
                        <div className="min-w-0 flex-1 pr-2">
                          <div className="text-xs font-semibold text-slate-800 group-hover:text-orange-600 truncate">
                            {p.name}
                          </div>
                          <div className="text-[10px] text-slate-500 flex items-center gap-2 mt-0.5">
                            <span className="font-mono bg-slate-100 px-1 rounded">{p.brand}</span>
                            <span className="truncate">{p.partNumber}</span>
                          </div>
                        </div>
                        {p.isCanonBIS && (
                          <span className="text-[9px] font-bold bg-orange-100 text-orange-700 px-1.5 py-0.5 rounded shrink-0">
                            Canon BIS
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Request Quote Button - Exact solid orange button matching image */}
            <button
              type="button"
              onClick={onOpenRfq}
              className="bg-[#ff5500] hover:bg-[#e04b00] active:bg-[#c94300] text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-colors shadow-2xs flex items-center gap-2 shrink-0"
            >
              <span>Request Quote</span>
              {totalRfqCount > 0 && (
                <span className="bg-white text-orange-700 text-xs px-1.5 py-0.2 rounded-full font-bold">
                  {totalRfqCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Right Controls: Search button, Quote button, Hamburger */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              type="button"
              onClick={onOpenRfq}
              className="bg-[#ff5500] text-white font-bold text-xs px-3 py-2 rounded-lg"
            >
              Quote {totalRfqCount > 0 && `(${totalRfqCount})`}
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg border border-slate-200"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 shadow-lg animate-in slide-in-from-top-2 duration-150">
          {/* Mobile Search */}
          <div className="mb-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, models, specs..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-3 py-2 text-sm"
              />
            </div>
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-between ${
                    isActive 
                      ? 'bg-orange-50 text-orange-600 font-bold border-l-4 border-orange-600' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.id === 'products' && (
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                      {PRODUCTS.length} Models
                    </span>
                  )}
                  {item.id === 'journey' && (
                    <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-semibold">
                      Since 2022
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Contact Quick Card */}
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-600 space-y-1.5">
            <div className="font-semibold text-slate-800">
              A-113 NBCC Commercial Complex Sector 1 Gomtinagar Ext Lucknow 226010 Uttar Pradesh India
            </div>
            <div className="text-orange-600 font-bold">
              Canon Authorised Distributor for BIS Series for Lucknow & nearby districts
            </div>
            <div className="flex items-center gap-3 pt-1">
              <a href={`tel:${COMPANY_INFO.phone}`} className="font-bold text-slate-900 hover:text-orange-600">
                Call: {COMPANY_INFO.phoneDisplay}
              </a>
              <span>•</span>
              <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-600 hover:text-orange-600">
                {COMPANY_INFO.email}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
