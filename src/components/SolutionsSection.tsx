import React, { useState } from 'react';
import { 
  Network, 
  FileCheck2, 
  GraduationCap, 
  Server, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Boxes, 
  Users2, 
  PhoneCall 
} from 'lucide-react';
import { SOLUTIONS, COMPANY_INFO } from '../data/mockData';
import { SolutionService } from '../types';

interface SolutionsSectionProps {
  onOpenRfq: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onOpenRfq }) => {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(SOLUTIONS[0].id);

  const activeSolution = SOLUTIONS.find(s => s.id === activeSolutionId) || SOLUTIONS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Network': return <Network className="w-5 h-5" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Server': return <Server className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Wrench': return <Wrench className="w-5 h-5" />;
      default: return <Boxes className="w-5 h-5" />;
    }
  };

  return (
    <section id="solutions" className="py-16 bg-white border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <Network className="w-3.5 h-3.5 text-orange-600" />
            <span>End-to-End Enterprise Systems Integration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive IT & Network Solutions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            From design and architectural planning to supply, deployment, and ongoing SLA maintenance. Built with certified network engineers on ground in Lucknow and across Uttar Pradesh.
          </p>
        </div>

        {/* Interactive Layout: Left Nav List + Right Detailed Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Solution Selector Tabs (Left Col) */}
          <div className="lg:col-span-4 space-y-2">
            {SOLUTIONS.map((sol) => {
              const isActive = sol.id === activeSolutionId;
              return (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left p-4 rounded-xl transition-all border flex items-start gap-3.5 ${
                    isActive
                      ? 'bg-orange-50/80 border-orange-500 shadow-md shadow-orange-500/10'
                      : 'bg-slate-50/60 border-slate-200 hover:bg-orange-50/40 hover:border-orange-200 text-slate-700'
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 mt-0.5 ${
                    isActive 
                      ? 'bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold shadow-xs' 
                      : 'bg-white border border-slate-200 text-slate-500'
                  }`}>
                    {getIcon(sol.icon)}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isActive ? 'text-orange-950' : 'text-slate-800'}`}>
                      {sol.title}
                    </div>
                    <div className="text-xs text-slate-500 mt-1 line-clamp-1">
                      {sol.tagline}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Solution Deep Dive Panel (Right Col) */}
          <div className="lg:col-span-8 bg-slate-50 border border-orange-200 rounded-2xl p-6 sm:p-8 shadow-sm relative">
            
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-700 shadow-xs">
                  {getIcon(activeSolution.icon)}
                </div>
                <div>
                  <span className="text-xs font-bold text-orange-700 uppercase tracking-wider">
                    Enterprise Capability
                  </span>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    {activeSolution.title}
                  </h3>
                </div>
              </div>

              {activeSolution.gemRelevant && (
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs px-3 py-1 rounded-full font-bold shadow-xs">
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>GeM Direct / Tender Enabled</span>
                </span>
              )}
            </div>

            {/* Overview */}
            <div className="mt-6">
              <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                Executive Overview
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed">
                {activeSolution.overview}
              </p>
            </div>

            {/* Key Deliverables */}
            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-3">
                Key Technical Scope & Deliverables
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSolution.deliverables.map((deliv, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{deliv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suited for Clients */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs text-slate-500 font-bold mr-1">
                Typical Deployments:
              </span>
              {activeSolution.suitedFor.map((item, idx) => (
                <span 
                  key={idx}
                  className="bg-white text-slate-700 text-xs px-2.5 py-1 rounded-md border border-slate-200 font-medium shadow-xs"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-xs text-slate-500 font-medium">
                Want custom architecture schematics or engineering proposal?
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rangayan%20Creations%2C%20I%20would%20like%20to%20consult%20an%20engineer%20regarding%3A%20${encodeURIComponent(activeSolution.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Consult Solution Architect</span>
                </a>

                <button
                  type="button"
                  onClick={onOpenRfq}
                  className="inline-flex items-center justify-center gap-1.5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-orange-600/20"
                >
                  <span>Request Solution Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
