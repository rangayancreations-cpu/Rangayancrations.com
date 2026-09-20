import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  ArrowUp,
  MessageSquare,
  Building2,
  Printer
} from 'lucide-react';
import { RangayanLogo } from './RangayanLogo';
import { COMPANY_INFO } from '../data/mockData';
import { NavigationTab } from '../types';

interface FooterProps {
  onNavigate?: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (tab: NavigationTab) => {
    if (onNavigate) {
      onNavigate(tab);
    } else {
      scrollToTop();
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-orange-200/40 pt-16 pb-12 text-xs relative">
      
      {/* Floating WhatsApp Quick Action Button */}
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Rangayan%20Creations%2C%20I%20would%20like%20to%20inquire%20about%20IT%20hardware%20and%20Canon%20BIS%20Series.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 font-bold text-xs transition-transform hover:scale-105 active:scale-95 group border-2 border-white"
        title="Chat with Technical Sales on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 text-white" />
        <span className="hidden sm:inline text-white font-extrabold pr-1">WhatsApp Quick Support</span>
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Brand & Profile */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-2.5 rounded-xl inline-block">
              <RangayanLogo />
            </div>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm">
              Rangayan Creations Private Limited delivers enterprise IT, campus networking, tier-3 compute server clusters, and is the <strong>Canon Authorised Distributor for BIS Series for Lucknow and nearby districts</strong>.
            </p>

            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-orange-300 font-bold">Canon Authorised Distributors for BIS Series (Lucknow & nearby)</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-slate-300">GeM Premier Verified Seller & System Integrator</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-orange-400 shrink-0" />
                <span className="text-slate-300">Nodal Partner: UPLC & UPDESCO (Govt of UP)</span>
              </div>
              <div className="text-[11px] font-mono text-slate-400">
                CIN: {COMPANY_INFO.cin} • Inc. Jan 2022
              </div>
            </div>
          </div>

          {/* Col 3: Hardware Categories */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Hardware & Equipment
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button type="button" onClick={() => handleNav('categories')} className="hover:text-orange-400 transition-colors text-left">Canon BIS Series Copiers</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">Cisco Catalyst Switching</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">Fortinet & Sophos Firewalls</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">HPE & Dell PowerEdge Servers</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">Ubiquiti UniFi Wi-Fi 6/7 APs</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">Commercial Client Laptops</button></li>
              <li><button type="button" onClick={() => handleNav('products')} className="hover:text-orange-400 transition-colors text-left">APC Online Conversion UPS</button></li>
              <li><button type="button" onClick={() => handleNav('categories')} className="hover:text-orange-400 transition-colors text-left">View All 8 Categories &rarr;</button></li>
            </ul>
          </div>

          {/* Col 4: Solutions & Team */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Corporate & Governance
            </h4>
            <ul className="space-y-2 text-xs">
              <li><button type="button" onClick={() => handleNav('home')} className="hover:text-orange-400 transition-colors text-left">Home</button></li>
              <li><button type="button" onClick={() => handleNav('journey')} className="hover:text-orange-400 text-orange-300 font-bold transition-colors text-left">Our Journey (2022-2026)</button></li>
              <li><button type="button" onClick={() => handleNav('reports')} className="hover:text-orange-400 transition-colors text-left">Procurement & Audit Reports</button></li>
              <li><button type="button" onClick={() => handleNav('staff')} className="hover:text-orange-400 transition-colors text-left">Staff & Leadership Portal</button></li>
              <li><button type="button" onClick={() => handleNav('journey')} className="hover:text-orange-400 transition-colors text-left">Past Engineering Deployments</button></li>
              <li><button type="button" onClick={() => handleNav('home')} className="hover:text-orange-400 transition-colors text-left">UP 75 Districts SLA Coverage</button></li>
              <li><button type="button" onClick={() => handleNav('contact')} className="hover:text-orange-400 transition-colors text-left">Contact & Requisition</button></li>
            </ul>
          </div>

          {/* Col 5: Contact Info */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Registered Office
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="text-slate-300 leading-relaxed font-medium">
                {COMPANY_INFO.address}
              </p>
              <div>
                <span className="block text-slate-500 text-[11px]">Phone / WhatsApp Sales:</span>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-orange-400 hover:underline font-bold font-mono">
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px]">Email Inquiries:</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-300 hover:text-white font-mono">
                  {COMPANY_INFO.email}
                </a>
              </div>
              <div>
                <span className="block text-slate-500 text-[11px]">Working Hours:</span>
                <span className="text-slate-300">{COMPANY_INFO.workingHours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Rangayan Creations Private Limited. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Engineering Excellence • Gomti Nagar Ext, Lucknow</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-orange-600 transition-colors flex items-center gap-1"
              title="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
