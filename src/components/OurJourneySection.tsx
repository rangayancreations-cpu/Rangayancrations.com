import React from 'react';
import { 
  Building2, 
  Award, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Users, 
  ShieldCheck, 
  Printer, 
  Network, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { COMPANY_INFO, CASE_STUDIES } from '../data/mockData';

interface OurJourneySectionProps {
  onOpenRfq: () => void;
}

export const OurJourneySection: React.FC<OurJourneySectionProps> = ({ onOpenRfq }) => {
  const milestones = [
    {
      year: '2022',
      title: 'Company Incorporation & Lucknow Lab',
      desc: 'Incorporated under CIN U72900UP2022PTC158097 in Lucknow, Uttar Pradesh. Established central hardware pre-staging lab with certified Fluke testing benches and Cisco CCNP engineering pool.'
    },
    {
      year: '2023',
      title: 'GeM Premier Empanelment & Nodal Tie-ups',
      desc: 'Achieved verified seller status on Government e-Marketplace (GeM) and technical partner alignment with UPLC (UP Electronics Corporation) and UPDESCO for statewide public sector hardware modernization.'
    },
    {
      year: '2024',
      title: 'Statewide UP Reach (75 Districts)',
      desc: 'Established SLA response framework with 2-4 hour delivery across Lucknow, Barabanki, Unnao, Sitapur, and dedicated buffer inventory for fast turnaround across all 75 Uttar Pradesh districts.'
    },
    {
      year: '2025',
      title: 'Canon BIS Series Authorised Distributorship',
      desc: 'Appointed as Canon Authorised Distributors for BIS Series (Business Imaging Solutions) for Lucknow and nearby districts, deploying heavy-duty imageRUNNER digital photocopiers and genuine OEM consumables.'
    },
    {
      year: '2026',
      title: '500+ Institutional Deployments',
      desc: 'Expanded into large-scale educational computer lab setups, tier-3 server virtualization clusters, and mission-critical hospital PACS LAN integrations with zero recorded downtime.'
    }
  ];

  return (
    <div className="bg-white min-h-screen py-10 sm:py-14 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-orange-600" />
            <span>Company Evolution & Milestones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Journey & Past Experience
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Founded by certified network architects with a clear vision: delivering 100% genuine enterprise hardware, authorized Canon BIS document solutions, and Fluke-certified infrastructure to public sector institutions and enterprises across Uttar Pradesh.
          </p>
        </div>

        {/* Corporate Identity & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-orange-600" />
              <span>Built by Network Engineers, for Network Engineers</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
              <strong>Rangayan Creations Private Limited</strong> was established to bridge a crucial gap in government and enterprise IT procurement: the need for technically rigorous, OEM-authorized partners who deeply understand core routing, high-density wireless propagation, packet inspection, and heavy-duty imaging systems.
            </p>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
              Unlike generic supply brokers, every piece of equipment that leaves our facility at <strong>A-113 NBCC Commercial Complex Sector 1 Gomtinagar Ext Lucknow 226010 Uttar Pradesh India</strong> undergoes firmware verification, burn-in diagnostics, and configuration by certified engineers.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <div className="text-lg font-black text-orange-600 font-mono">2022</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Incorporation Year</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center">
                <div className="text-lg font-black text-orange-600 font-mono">500+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Deployments</div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-slate-200 text-center col-span-2 sm:col-span-1">
                <div className="text-lg font-black text-orange-600 font-mono">75</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">UP Districts</div>
              </div>
            </div>
          </div>

          {/* Corporate Credentials Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-orange-50 to-amber-50/60 border border-orange-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-orange-700 mb-2">
                Official Entity Verification
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Corporate Credentials & Alliances
              </h3>
              
              <ul className="space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Corporate Identity Number (CIN):</span>
                    <div className="font-mono text-slate-600">{COMPANY_INFO.cin}</div>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <Printer className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Canon BIS Authorization:</span>
                    <div className="text-slate-600">Canon Authorised Distributors for BIS Series for Lucknow and nearby districts.</div>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">GeM Verified Supplier:</span>
                    <div className="text-slate-600">Direct Purchase & Custom Bid Compliance (MII Class-1 Supplier).</div>
                  </div>
                </li>

                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-slate-900">Registered Corporate Facility:</span>
                    <div className="text-slate-600">A-113 NBCC Commercial Complex, Sector 1, Gomtinagar Ext, Lucknow - 226010, UP.</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-orange-200/80 mt-5">
              <button
                type="button"
                onClick={onOpenRfq}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold py-2.5 px-4 rounded-xl text-xs transition-colors shadow-xs"
              >
                <span>Initiate Technical Procurement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Chronological Milestones Timeline */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-black text-slate-900">
              Growth Milestones (2022 - Present)
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Structured evolution from networking specialists to premier Uttar Pradesh system integrator.
            </p>
          </div>

          <div className="relative border-l-2 border-orange-300 ml-4 sm:ml-32 space-y-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-8 group">
                {/* Dot */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-orange-500 group-hover:scale-125 transition-transform" />
                
                {/* Year tag for larger screens */}
                <span className="hidden sm:block absolute -left-28 top-0.5 font-mono font-bold text-sm text-orange-600 text-right w-20">
                  {m.year}
                </span>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-orange-200 hover:bg-orange-50/20 transition-all">
                  <div className="sm:hidden font-mono font-bold text-xs text-orange-600 mb-1">
                    {m.year}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900">
                    {m.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Experience / Project Case Studies - WITHOUT CONTRACT DETAILS */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Past Experience & Institutional Deployments
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Representative high-reliability infrastructure projects designed, deployed, and supported by Rangayan Creations engineers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((project) => (
              <div 
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Category & Year */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      {project.sector}
                    </span>
                    <span className="text-xs text-slate-500 font-mono font-semibold">
                      Year {project.year}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                    {project.title}
                  </h3>
                  <div className="text-xs font-semibold text-orange-700 mb-3">
                    Client: {project.client}
                  </div>

                  <div className="bg-orange-50/60 border border-orange-100 rounded-lg p-2.5 text-xs text-orange-950 font-medium mb-3">
                    <span className="font-bold text-orange-800">Deployment Scale:</span> {project.scale}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Scope Checklist */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
                      Engineering Scope:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.scope.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Key Results */}
                <div className="pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="text-[11px] font-bold text-slate-800 mb-1.5">
                    Operational Results:
                  </div>
                  <div className="space-y-1">
                    {project.results.map((res, i) => (
                      <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
                        <span>{res}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
