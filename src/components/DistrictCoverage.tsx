import React, { useState } from 'react';
import { MapPin, Truck, Search, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { UP_DISTRICTS, COMPANY_INFO } from '../data/mockData';

export const DistrictCoverage: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredDistricts = UP_DISTRICTS.filter(d => 
    d.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    d.division.toLowerCase().includes(filterQuery.toLowerCase()) ||
    d.hubOffice.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="up-reach" className="py-16 bg-slate-50/60 border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 px-3.5 py-1 rounded-full text-xs font-bold text-orange-800 mb-2 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-orange-600" />
            <span>Statewide Infrastructure Reach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Uttar Pradesh 75 Districts & Pan-India Delivery
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Headquartered at Gomti Nagar, Lucknow with direct dispatch to all 75 districts of Uttar Pradesh. On-site deployment engineers and buffer equipment stocks ensure minimal downtime.
          </p>
        </div>

        {/* Central Hub Highlights Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Central Lucknow Warehouse</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                Gomti Nagar Extension central staging facility for pre-configuration, firmware updating, and serial tagging.
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Express District SLAs</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                2 to 6 hours for Lucknow, Kanpur, Ayodhya & Central UP. 12 to 24 hours guaranteed delivery across all 75 districts.
              </div>
            </div>
          </div>

          <div className="bg-white border border-slate-200 rounded-xl p-5 flex items-start gap-3.5 shadow-xs">
            <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 text-orange-600 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-slate-900">Pan-India Logistics</div>
              <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                Comprehensive logistics tie-ups with BlueDart, SafeExpress, and V-Trans for high-value server & switch consignments nationwide.
              </div>
            </div>
          </div>
        </div>

        {/* Search District Box */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">
                Check District Delivery SLA & Hub Office
              </h3>
              <p className="text-xs text-slate-500">
                Search among major administrative and educational centers across Uttar Pradesh.
              </p>
            </div>

            <div className="relative w-full sm:w-72">
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Search district (e.g. Lucknow, Varanasi)..."
                className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2.5" />
            </div>
          </div>

          {/* District Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-96 overflow-y-auto pr-1">
            {filteredDistricts.map((dist, i) => (
              <div 
                key={i}
                className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 hover:border-orange-300 hover:bg-orange-50/40 transition-colors"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-xs font-bold text-slate-900">
                    {dist.name}
                  </span>
                  <span className="text-[10px] bg-white text-slate-600 px-1.5 py-0.2 rounded border border-slate-200 font-medium">
                    {dist.division}
                  </span>
                </div>

                <div className="mt-2 text-[11px] text-slate-600">
                  <div className="flex items-center gap-1 text-slate-700">
                    <Clock className="w-3 h-3 text-orange-600" />
                    <span>Avg Dispatch: <strong className="text-slate-900">{dist.avgDeliveryHours}</strong></span>
                  </div>
                  <div className="mt-1 truncate text-[10px] text-slate-500">
                    Hub: {dist.hubOffice}
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-slate-200/80 flex items-center justify-between text-[10px] text-slate-500">
                  <span>Deployments:</span>
                  <span className="text-orange-600 font-mono font-bold">{dist.activeDeployments}+</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
            <span>Covering all 75 Districts of Uttar Pradesh for GeM delivery and on-site engineer visit.</span>
            <span className="text-orange-700 font-bold">Pan-India Freight Transit Available</span>
          </div>
        </div>

      </div>
    </section>
  );
};
