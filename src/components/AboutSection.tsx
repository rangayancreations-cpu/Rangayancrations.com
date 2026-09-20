import React from 'react';
import { 
  Building2, 
  Cpu, 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  Users2, 
  Clock, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Narrative */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-4 shadow-xs">
              <Building2 className="w-3.5 h-3.5 text-orange-600" />
              <span>About Rangayan Creations Private Limited</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Built by Network Engineers, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-600 to-orange-700">
                For Network Engineers
              </span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              Incorporated in January 2022 in Lucknow, Uttar Pradesh, <strong className="text-slate-900">Rangayan Creations Private Limited</strong> was founded with a singular focus: to eliminate the friction in enterprise IT procurement and network systems integration.
            </p>

            <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
              Too often, government departments and enterprises face specification discrepancies, grey-market components, or delayed deployments. As certified network engineers ourselves, we pre-validate every Bill of Materials (BOM) against OEM engineering guidelines before procurement.
            </p>

            {/* Core Values Checklist */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-700">
              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">100% Genuine OEM Sourcing</strong>
                  <span className="text-slate-500 text-[11px]">Official MAF, direct distribution & registered warranties.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Govt & GeM Specialists</strong>
                  <span className="text-slate-500 text-[11px]">Empanelled with UPLC, UPDESCO & State Govt of UP.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">Pre-Staging in Lucknow</strong>
                  <span className="text-slate-500 text-[11px]">Configuration, firmware patching, and testing before site delivery.</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-bold">SLA-Backed On-Site FMS</strong>
                  <span className="text-slate-500 text-[11px]">Dedicated engineers & standby replacement buffers.</span>
                </div>
              </div>
            </div>

            {/* Incorporation & Legal Identity Info */}
            <div className="mt-6 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-500">
              <div>
                <span>CIN:</span> <strong className="text-slate-800 font-mono">{COMPANY_INFO.cin}</strong>
              </div>
              <div>
                <span>Incorporated:</span> <strong className="text-slate-800 font-mono">13 January 2022</strong>
              </div>
              <div>
                <span>Governance:</span> <strong className="text-slate-800">Executive Board & Technical Directorate</strong>
              </div>
            </div>

          </div>

          {/* Right Card / Technical Credibility Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-50 via-white to-amber-50/50 border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-md relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white mb-6 shadow-md shadow-orange-500/20">
              <Cpu className="w-6 h-6 text-white" />
            </div>

            <h3 className="text-lg font-extrabold text-slate-900 mb-2">
              The Rangayan Creations Difference
            </h3>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              Unlike generic commercial suppliers, we bridge the gap between complex network topology design and hardware fulfillment.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 text-xs">
                <span className="w-6 h-6 rounded-full bg-orange-100 border border-orange-300 text-orange-700 flex items-center justify-center font-mono font-bold shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Bill of Quantities (BOQ) Validation</h4>
                  <p className="text-slate-600 mt-0.5">We audit transceivers, optic cables, PoE power budgets, and stack cables to prevent commissioning failures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-6 h-6 rounded-full bg-orange-100 border border-orange-300 text-orange-700 flex items-center justify-center font-mono font-bold shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">GeM Bidding & Tender Compliance</h4>
                  <p className="text-slate-600 mt-0.5">Assistance with MII certificates, Land Border Declarations, and OEM authorization forms (MAF).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs">
                <span className="w-6 h-6 rounded-full bg-orange-100 border border-orange-300 text-orange-700 flex items-center justify-center font-mono font-bold shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-slate-900">Statewide UP Rapid Logistics</h4>
                  <p className="text-slate-600 mt-0.5">Express dispatches from Gomti Nagar central hub to all 75 districts of Uttar Pradesh.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-orange-200/80 text-center">
              <span className="text-[11px] text-slate-500">
                Registered Office: {COMPANY_INFO.address}
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
