import React from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Printer, 
  Network, 
  FileCheck2, 
  CheckCircle2, 
  Building2,
  Boxes,
  Zap,
  PhoneCall,
  MapPin,
  FileText
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';
import { NavigationTab } from '../types';

interface HeroProps {
  onOpenRfq: () => void;
  onNavigate?: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRfq, onNavigate }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-orange-50/40 border-b border-orange-100 pt-8 pb-16 lg:pt-12 lg:pb-20">
      {/* Background Subtle Warm Saffron Grid Pattern */}
      <div className="absolute inset-0 opacity-40 pointer-events-none bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:28px_28px]"></div>
      
      {/* Glowing accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-300/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Prominent Canon BIS Series Authorised Distributorship Ribbon */}
        <div className="mb-6 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-600 text-white px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md shadow-orange-600/20 border border-orange-400/40 animate-in fade-in duration-300">
            <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
            <span className="uppercase tracking-wider">Official OEM Mandate:</span>
            <span className="text-white font-extrabold underline decoration-amber-300 decoration-2 underline-offset-2">
              Canon Authorised Distributors for BIS Series for Lucknow and nearby districts
            </span>
          </div>
        </div>

        {/* Top Government & System Integrator Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
          <div className="inline-flex items-center gap-2 bg-white border border-orange-200 px-3.5 py-1 rounded-full text-xs font-semibold text-orange-900 shadow-xs backdrop-blur-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-orange-600" />
            <span>State Govt of Uttar Pradesh System Integrator</span>
          </div>

          <div className="inline-flex items-center gap-2 bg-white border border-emerald-200 px-3.5 py-1 rounded-full text-xs font-semibold text-emerald-800 shadow-xs backdrop-blur-sm">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>GeM Verified Premier Seller (Government e-Marketplace)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 bg-white border border-slate-200 px-3.5 py-1 rounded-full text-xs font-semibold text-slate-700 shadow-xs">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>Nodal Partner: UPLC & UPDESCO</span>
          </div>
        </div>

        {/* Main Hero Headline */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Engineering Motto Tagline */}
          <div className="inline-block mb-3">
            <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-orange-800 bg-orange-100 border border-orange-300 px-3.5 py-1.5 rounded-lg shadow-xs">
              {COMPANY_INFO.tagline}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight sm:leading-none">
            Enterprise IT Hardware, <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">
              Networking Equipment
            </span>{' '}
            & Integration
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            <strong>Rangayan Creations Private Limited</strong> is your trusted OEM-authorized technology partner in Uttar Pradesh. We supply and commission high-performance switching, next-generation security firewalls, compute servers, structured fiber backbones, and are the <strong>Canon Authorised Distributors for BIS Series for Lucknow and nearby districts</strong>.
          </p>

          {/* Office Address Banner */}
          <div className="mt-4 inline-flex items-center gap-2 bg-slate-100/90 border border-slate-200 text-slate-700 px-4 py-1.5 rounded-xl text-xs font-medium max-w-2xl mx-auto">
            <MapPin className="w-3.5 h-3.5 text-orange-600 shrink-0" />
            <span className="truncate">Office: {COMPANY_INFO.address}</span>
          </div>

          {/* Primary Action Buttons matching the navbar style */}
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => onNavigate ? onNavigate('products') : undefined}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-sm"
            >
              <Boxes className="w-4 h-4" />
              <span>Explore Products & Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={onOpenRfq}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold px-6 py-3.5 rounded-xl shadow-md shadow-orange-600/20 transition-all text-sm"
            >
              <FileCheck2 className="w-4 h-4" />
              <span>Request Quote / BOM</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate ? onNavigate('categories') : undefined}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-orange-50 text-slate-800 font-bold px-5 py-3.5 rounded-xl border border-slate-300 transition-all text-sm hover:border-orange-300"
            >
              <Printer className="w-4 h-4 text-orange-600" />
              <span>Canon BIS Series Copiers</span>
            </button>
          </div>

          {/* Direct WhatsApp Callout */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-slate-600">
            <span>Need immediate technical consultation or urgent dispatch?</span>
            <a 
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rangayan%20Creations%2C%20I%20need%20pricing%20and%20specifications%20for%20networking%20hardware%20and%20Canon%20BIS%20Series.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 font-bold hover:underline inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct WhatsApp: {COMPANY_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* 4 Core Pillars / Statistics Bar */}
        <div className="mt-12 pt-8 border-t border-orange-200/80 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="bg-white border border-orange-100 rounded-2xl p-4 sm:p-5 text-center hover:border-orange-300 shadow-xs transition-colors"
            >
              <div className="text-2xl sm:text-3xl font-black text-orange-600 font-mono">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Key Hardware Technology Pillars */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-orange-200 shadow-xs font-bold text-orange-900">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Canon BIS Series Heavy-Duty MFPs (Lucknow & Districts)</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Cisco Catalyst & Modular Core Switching</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
            <span>Fortinet & Sophos Next-Gen Security</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
            <span>HPE ProLiant & Dell PowerEdge Compute</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-xs font-medium">
            <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
            <span>75 UP Districts On-Site SLA Dispatch</span>
          </div>
        </div>

      </div>
    </section>
  );
};
