import React from 'react';
import { 
  ShieldCheck, 
  FileSpreadsheet, 
  Award, 
  Building, 
  CheckCircle, 
  ExternalLink,
  Download,
  PhoneCall,
  Sparkles
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

interface GemGovtBannerProps {
  onOpenRfq: () => void;
}

export const GemGovtBanner: React.FC<GemGovtBannerProps> = ({ onOpenRfq }) => {
  return (
    <section id="gem-portal" className="py-16 bg-gradient-to-b from-white to-orange-50/40 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-800 mb-2 shadow-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Government e-Marketplace (GeM) & State Nodal Empanelment</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Government Procurement & System Integration Desk
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Empowering government departments, state universities, health facilities, and PSUs across Uttar Pradesh with 100% compliant GeM bids, BOQ creation, and execution.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenRfq}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs sm:text-sm shadow-md shadow-orange-600/20 transition-all"
            >
              <FileSpreadsheet className="w-4 h-4" />
              <span>Submit GeM BOQ for Validation</span>
            </button>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Turnkey Educational Computer Lab Projects */}
          <div className="bg-white border border-emerald-200 rounded-2xl p-6 relative overflow-hidden group hover:border-emerald-400 hover:shadow-lg transition-all">
            <div className="absolute top-0 right-0 bg-emerald-600 text-white px-3 py-1 rounded-bl-xl text-[11px] font-mono font-bold shadow-xs">
              GeM Empanelled Partner
            </div>

            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-4">
              <Award className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              Turnkey Educational Computer Lab Projects
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Executed for the <strong className="text-slate-900">Department of Information Technology & Electronics, Government of Uttar Pradesh</strong> for the design, installation, and maintenance of modern computer education centers across the state.
            </p>

            <ul className="space-y-2 text-xs text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Turnkey computer laboratory hardware deployment</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Structured networking, power backup & interactive displays</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Multi-year comprehensive maintenance & SLA warranty</span>
              </li>
            </ul>
          </div>

          {/* Card 2: Empanelment & Nodal Partnerships */}
          <div className="bg-white border border-orange-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-4">
              <Building className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              UPLC & UPDESCO Authorized Partner
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Partnered with Uttar Pradesh state nodal agencies for execution of IT modernization, smart campus initiatives, and hardware supply across government directorates.
            </p>

            <div className="space-y-2.5 text-xs text-slate-700 bg-orange-50/50 p-3.5 rounded-xl border border-orange-200/70">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">UPLC</span>
                <span className="text-orange-700 font-semibold text-[11px]">UP Electronics Corp. Ltd.</span>
              </div>
              <div className="h-px bg-orange-200/60"></div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">UPDESCO</span>
                <span className="text-orange-700 font-semibold text-[11px]">UP Development Systems Corp.</span>
              </div>
              <div className="h-px bg-orange-200/60"></div>
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-900">State GeM Status</span>
                <span className="text-emerald-700 font-bold text-[11px]">Verified Government Bidder</span>
              </div>
            </div>
          </div>

          {/* Card 3: GeM Buyer Services */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600 mb-4">
              <FileSpreadsheet className="w-6 h-6" />
            </div>

            <h3 className="text-lg font-bold text-slate-900 mb-2">
              GeM Procurement & BOQ Assistance
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              Avoid technical disqualifications and specification mismatches. Our certified network engineers vet your technical parameters prior to publishing tenders.
            </p>

            <div className="space-y-2 text-xs text-slate-700">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Direct Purchase & L1 comparison compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>PAC (Proprietary Article Certificate) documentation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Make in India (MII) & OEM authorization compliance</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                <span>Rapid dispatch with installation and CRAC generation</span>
              </div>
            </div>
          </div>

        </div>

        {/* GeM Bottom CTA Bar */}
        <div className="mt-8 bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700 text-white rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg shadow-orange-600/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Are you a Government Procurement Officer or Nodal In-Charge?
              </div>
              <div className="text-xs text-orange-100">
                Contact our dedicated GeM Tender Desk in Gomti Nagar, Lucknow for immediate OEM MAF and customized BOQ support.
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rangayan%20Creations%2C%20I%20am%20inquiring%20from%20a%20Government%20Department%20regarding%20GeM%20procurement%20and%20BOQ%20support.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-white hover:bg-orange-50 text-orange-800 text-xs font-bold px-4 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
              <span>Connect with GeM Desk</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
