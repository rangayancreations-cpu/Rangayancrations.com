import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  ShieldCheck, 
  Printer, 
  CheckCircle2, 
  ExternalLink, 
  FileSpreadsheet, 
  Calendar, 
  Building2, 
  FileCheck2,
  Lock,
  ArrowRight,
  Info
} from 'lucide-react';
import { PROCUREMENT_REPORTS, COMPANY_INFO } from '../data/mockData';
import { ProcurementReport } from '../types';

interface ReportsSectionProps {
  onOpenRfq: () => void;
}

export const ReportsSection: React.FC<ReportsSectionProps> = ({ onOpenRfq }) => {
  const [selectedReport, setSelectedReport] = useState<ProcurementReport | null>(PROCUREMENT_REPORTS[0]);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleDownload = (report: ProcurementReport) => {
    // Generate official printable report sheet
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>${report.title} - Rangayan Creations Pvt Ltd</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; padding: 40px; color: #1e293b; }
            .header { border-bottom: 2px solid #ea580c; padding-bottom: 20px; margin-bottom: 30px; }
            .logo-text { font-size: 22px; font-weight: bold; color: #0f172a; }
            .sub { color: #64748b; font-size: 12px; margin-top: 4px; }
            .title { font-size: 20px; font-weight: bold; color: #0f172a; margin-bottom: 10px; }
            .badge { display: inline-block; background: #ffedd5; color: #9a3412; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
            .meta { background: #f8fafc; border: 1px solid #e2e8f0; padding: 15px; border-radius: 8px; margin: 20px 0; font-size: 13px; line-height: 1.8; }
            .section-title { font-size: 15px; font-weight: bold; color: #0f172a; margin-top: 25px; margin-bottom: 10px; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; }
            ul { line-height: 1.8; font-size: 14px; }
            .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #cbd5e1; font-size: 11px; color: #64748b; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo-text">Rangayan Creations Private Limited</div>
            <div class="sub">IT • NETWORKING • ENTERPRISE • CIN: ${COMPANY_INFO.cin}</div>
            <div class="sub">${COMPANY_INFO.address}</div>
          </div>

          <div class="badge">${report.category} Report</div>
          <h1 class="title">${report.title}</h1>
          
          <div class="meta">
            <strong>Document Reference:</strong> ${report.documentNumber}<br/>
            <strong>Audit Status:</strong> ${report.date}<br/>
            <strong>Issuing Authority:</strong> Technical Compliance & OEM Alliances Directorate<br/>
            <strong>Mandate:</strong> ${COMPANY_INFO.canonAuthorization}
          </div>

          <div class="section-title">Executive Summary</div>
          <p style="font-size: 14px; line-height: 1.7;">${report.summary}</p>

          <div class="section-title">Key Audit Observations & Compliance Findings</div>
          <ul>
            ${report.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>

          <div class="footer">
            Official Technical Compliance Sheet issued by Rangayan Creations Private Limited.<br/>
            For verification contact: support@rangayancreations.com | +91 63077 77824
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.focus();
      setTimeout(() => {
        printWindow.print();
      }, 500);
    }

    setDownloadSuccess(`Compliance docket for "${report.title}" generated.`);
    setTimeout(() => setDownloadSuccess(null), 4000);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <FileText className="w-3.5 h-3.5 text-orange-600" />
            <span>Technical Compliance & Audit Dockets</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Procurement Reports & OEM Verifications
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Official validation documentation, Canon BIS Series distributorship certificates, Make-in-India declarations, and Fluke structured cabling reports for institutional procurement committees.
          </p>
        </div>

        {downloadSuccess && (
          <div className="max-w-2xl mx-auto mb-6 bg-emerald-50 border border-emerald-300 text-emerald-800 px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>{downloadSuccess}</span>
            </div>
            <span className="text-[10px] text-emerald-600">Audit Ready</span>
          </div>
        )}

        {/* Two-Column Reports Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Report List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Available Compliance Reports ({PROCUREMENT_REPORTS.length})
            </div>

            {PROCUREMENT_REPORTS.map((rep) => {
              const isSelected = selectedReport?.id === rep.id;
              return (
                <div
                  key={rep.id}
                  onClick={() => setSelectedReport(rep)}
                  className={`cursor-pointer rounded-2xl p-5 border transition-all ${
                    isSelected 
                      ? 'bg-white border-orange-500 shadow-md ring-2 ring-orange-500/20' 
                      : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-50 text-orange-700 border border-orange-200">
                      {rep.category}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">
                      {rep.documentNumber}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                    {rep.title}
                  </h3>

                  <p className="text-xs text-slate-500 line-clamp-2 mt-1">
                    {rep.summary}
                  </p>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{rep.date}</span>
                    </span>
                    <span className="text-orange-600 font-bold flex items-center gap-1">
                      <span>View Docket</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Direct Requisition Box */}
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 text-white rounded-2xl p-5 shadow-md">
              <h4 className="text-sm font-bold mb-1">Need a Custom Tender Technical BOQ?</h4>
              <p className="text-xs text-orange-100 leading-relaxed mb-4">
                Our GeM tender and network architects can prepare bespoke compliance matrices, proprietary PAC dockets, and OEM authorization letters.
              </p>
              <button
                type="button"
                onClick={onOpenRfq}
                className="w-full bg-white text-orange-700 hover:bg-orange-50 font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
              >
                Request Custom Compliance Dossier
              </button>
            </div>
          </div>

          {/* Right Column: Detailed Document Preview */}
          <div className="lg:col-span-7">
            {selectedReport ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                
                {/* Document Header Bar */}
                <div className="border-b border-slate-200 pb-5 mb-6">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
                    <span className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1 rounded-full">
                      {selectedReport.category} Verification
                    </span>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      Ref: {selectedReport.documentNumber}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {selectedReport.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 mt-3">
                    <span>Effective: <strong>{selectedReport.date}</strong></span>
                    <span>•</span>
                    <span>Facility: <strong>Gomtinagar Ext, Lucknow</strong></span>
                  </div>
                </div>

                {/* Document Body */}
                <div className="space-y-6 text-xs sm:text-sm text-slate-700">
                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                      Report Overview:
                    </h4>
                    <p className="leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-200">
                      {selectedReport.summary}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
                      Verified Technical Parameters & Compliances:
                    </h4>
                    <div className="space-y-2.5">
                      {selectedReport.highlights.map((h, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mandate Callout */}
                  <div className="bg-orange-50/80 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
                    <Info className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-orange-900 text-xs">Official Territorial Mandate</div>
                      <div className="text-xs text-orange-800 mt-0.5 leading-relaxed">
                        Rangayan Creations Private Limited operates as <strong>Canon Authorised Distributors for BIS Series for Lucknow and nearby districts</strong>. All equipment, toner, and parts carry authentic serial number validation directly traceable on the OEM portal.
                      </div>
                    </div>
                  </div>
                </div>

                {/* Print & Download Action Row */}
                <div className="pt-6 border-t border-slate-200 mt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-xs text-slate-500 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Certified by Rangayan Creations Engineering Lab</span>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => handleDownload(selectedReport)}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-xs"
                    >
                      <Download className="w-4 h-4" />
                      <span>Print / Save Report</span>
                    </button>

                    <button
                      type="button"
                      onClick={onOpenRfq}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2.5 rounded-xl text-xs transition-colors"
                    >
                      <span>Attach to RFQ</span>
                    </button>
                  </div>
                </div>

              </div>
            ) : (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center text-slate-400">
                Select a report from the left panel to inspect details.
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
