import React, { useState } from 'react';
import { 
  Building2, 
  Award, 
  CheckCircle2, 
  FileText,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { CASE_STUDIES } from '../data/mockData';
import { CaseStudy } from '../types';

export const ProjectsCaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy>(CASE_STUDIES[0]);

  return (
    <section id="case-studies" className="py-16 bg-slate-50 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <Award className="w-3.5 h-3.5 text-orange-600" />
            <span>Proven Engineering Architecture in Government & Enterprise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Past Deployments & Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Real infrastructure projects delivered across Uttar Pradesh with OEM compliance, flawless technical execution, and ongoing SLA maintenance.
          </p>
        </div>

        {/* Highlighted Case Card */}
        <div className="bg-white border border-orange-200 rounded-2xl p-6 sm:p-8 mb-8 shadow-sm">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-orange-700 mb-1">
                <span className="bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                  {selectedCase.sector}
                </span>
                <span>•</span>
                <span className="text-slate-500">Deployment Year: {selectedCase.year}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {selectedCase.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-slate-400" />
                <span>Institutional Client: <strong className="text-slate-800">{selectedCase.client}</strong></span>
              </p>
            </div>

            <div className="text-right bg-orange-50/70 px-4 py-2.5 rounded-xl border border-orange-200">
              <div className="text-[11px] uppercase tracking-wider text-orange-800 font-bold">
                Deployment Scale
              </div>
              <div className="text-sm sm:text-base font-black text-orange-600">
                {selectedCase.scale}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <div className="lg:col-span-7">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Project Architecture & Context
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
                {selectedCase.description}
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <h5 className="text-xs font-bold text-slate-800 mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-orange-600" />
                  <span>Technical Scope of Work</span>
                </h5>
                <ul className="space-y-2 text-xs text-slate-700">
                  {selectedCase.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0 mt-1.5"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between bg-orange-50/30 p-4 rounded-xl border border-orange-100">
              <div>
                <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                  <span>Key Technical Outcomes & SLA Metrics</span>
                </h4>
                <div className="space-y-3">
                  {selectedCase.results.map((res, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="font-medium">{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                <span>Commissioned by Rangayan Creations Certified Engineers</span>
                <span className="text-orange-700 font-bold">100% Verified Uptime</span>
              </div>
            </div>
          </div>

        </div>

        {/* Project Selector Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CASE_STUDIES.map((cs) => {
            const isSelected = cs.id === selectedCase.id;
            return (
              <button
                key={cs.id}
                type="button"
                onClick={() => setSelectedCase(cs)}
                className={`text-left p-4 rounded-xl transition-all border ${
                  isSelected
                    ? 'bg-white border-orange-500 shadow-md ring-1 ring-orange-500'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-orange-200 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] text-slate-500 mb-1">
                  <span className="font-semibold">{cs.sector}</span>
                  <span className="text-slate-400 font-mono">{cs.year}</span>
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-2">
                  {cs.title}
                </div>
                <div className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                  {cs.client}
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
