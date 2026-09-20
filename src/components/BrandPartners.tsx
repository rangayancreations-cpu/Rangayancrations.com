import React from 'react';
import { ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { BRAND_PARTNERS } from '../data/mockData';

export const BrandPartners: React.FC = () => {
  return (
    <section id="brands" className="py-16 bg-white border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <Award className="w-3.5 h-3.5 text-orange-600" />
            <span>Direct OEM Authorization & Genuine Warranties</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Authorized Brand Partnerships
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            We source 100% genuine hardware directly from authorized national distributors and OEMs. Every shipment includes official manufacturer warranty registration and authentic serial traceability.
          </p>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {BRAND_PARTNERS.map((partner, index) => (
            <div 
              key={index}
              className="bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col justify-between hover:border-orange-300 hover:bg-orange-50/40 transition-all group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-orange-700">
                    OEM PARTNER
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                </div>

                <h3 className="text-base font-extrabold text-slate-900 group-hover:text-orange-700 transition-colors">
                  {partner.name}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs">
                <div className="text-slate-800 font-bold">
                  {partner.category}
                </div>
                <div className="text-[11px] text-slate-500 mt-0.5">
                  {partner.tier}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OEM Authenticity Guarantee Strip */}
        <div className="mt-10 bg-orange-50/80 border border-orange-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3 text-xs text-slate-700">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-slate-900 block text-sm font-bold">100% Genuine Serial Verification</strong>
              <span>All enterprise hardware includes Manufacturer Authorization Form (MAF) and OEM warranty support.</span>
            </div>
          </div>

          <div className="text-xs text-slate-600 font-semibold shrink-0">
            <span>Verified in GeM Portal & Nodal Tenders</span>
          </div>
        </div>

      </div>
    </section>
  );
};
