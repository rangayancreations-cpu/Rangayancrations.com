import React from 'react';
import { 
  Users2, 
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { RangayanPortalEmbed } from './RangayanPortalEmbed';
import { COMPANY_INFO } from '../data/mockData';

interface StaffSectionProps {
  isPage?: boolean;
}

export const StaffSection: React.FC<StaffSectionProps> = ({ isPage = false }) => {
  const portalUrl = 'https://ais-pre-malwpie6tq3v2v7crmss3j-3388070068.asia-southeast1.run.app';

  return (
    <section id="staff" className={`bg-slate-50 ${isPage ? 'pt-4 pb-12' : 'py-12 sm:py-16'} border-b border-slate-200`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Card */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold text-emerald-800">
                <Users2 className="w-3.5 h-3.5 text-emerald-700" />
                <span>Personnel, HR & Field Engineering Operations</span>
              </div>
              
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Rangayan Creations Staff & Statutory HR Portal
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
                Centralised gateway for employee attendance, statutory payroll, EPF/ESIC compliance records, field engineering dispatch schedules, and institutional project staffing.
              </p>
            </div>

            {/* Quick Status & Open in New Tab Button */}
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 shrink-0">
              <div className="hidden sm:flex items-center gap-2 bg-slate-50 border border-slate-200 px-3.5 py-2 rounded-xl text-xs text-slate-700">
                <Lock className="w-4 h-4 text-emerald-600" />
                <span className="font-semibold font-mono text-[11px]">256-Bit SSL Encrypted</span>
              </div>

              <a
                href={portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-orange-600 hover:bg-orange-700 active:bg-orange-800 text-white font-bold text-xs rounded-xl shadow-xs transition-colors"
                title="Launch HR & Payroll Portal in separate browser tab"
              >
                <span>Launch in New Window</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Compliance & Governance Feature Badges */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-600">
            <div className="flex items-center gap-1.5 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Statutory EPF & ESIC Verified</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <FileCheck2 className="w-4 h-4 text-orange-600" />
              <span>GeM Manpower Compliance Audited</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Building2 className="w-4 h-4 text-slate-500" />
              <span>Gomti Nagar Extension Headquarters</span>
            </div>
          </div>
        </div>

        {/* Embedded Portal Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
          <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-xs border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-bold tracking-wide">PORTAL INSTANCE: {COMPANY_INFO.shortName.toUpperCase()} INTERNAL HR & STATUTORY SYSTEM</span>
            </div>
            <div className="hidden sm:flex items-center gap-3 text-slate-400 text-[11px] font-mono">
              <span>CIN: {COMPANY_INFO.cin}</span>
              <span>•</span>
              <span>UP-75 Field Support</span>
            </div>
          </div>

          {/* User Requested Portal Embed */}
          <RangayanPortalEmbed 
            appUrl={portalUrl}
            height={isPage ? 'calc(100vh - 240px)' : '720px'}
            className="w-full"
          />
        </div>

      </div>
    </section>
  );
};

export default StaffSection;
