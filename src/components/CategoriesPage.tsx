import React from 'react';
import { 
  Printer, 
  Network, 
  ShieldAlert, 
  Server, 
  Monitor, 
  Wifi, 
  Zap, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck,
  FileCheck2,
  Package
} from 'lucide-react';
import { ProductCategory } from '../types';

interface CategoriesPageProps {
  onSelectCategory: (cat: ProductCategory) => void;
  onOpenRfq: () => void;
}

export const CategoriesPage: React.FC<CategoriesPageProps> = ({
  onSelectCategory,
  onOpenRfq
}) => {
  const categoriesList: {
    category: ProductCategory;
    title: string;
    tagline: string;
    icon: React.ReactNode;
    featured?: boolean;
    featuredBadge?: string;
    description: string;
    keyBrands: string[];
    topModels: string[];
    turnaround: string;
  }[] = [
    {
      category: 'Printers & Photocopiers',
      title: 'Canon BIS Series & Enterprise Photocopiers',
      tagline: 'Canon Authorised Distributors for BIS Series for Lucknow and nearby districts',
      icon: <Printer className="w-6 h-6 text-orange-600" />,
      featured: true,
      featuredBadge: 'Authorised Canon BIS Distributor',
      description: 'Official distribution and turnkey servicing of Canon Business Imaging Solutions (BIS Series). Heavy-duty A3 digital photocopiers, duplex color network MFPs, genuine OEM toner consumables, uniFLOW document management, and comprehensive on-site AMC support for government, educational, and corporate institutions.',
      keyBrands: ['Canon BIS Series', 'Konica Minolta bizhub'],
      topModels: ['Canon imageRUNNER 2925i (BIS)', 'Canon imageRUNNER C3326i Colour (BIS)', 'Canon imageRUNNER 2730i (BIS)'],
      turnaround: 'Same-Day / 24-Hour Dispatch in Lucknow & Nearby Districts'
    },
    {
      category: 'Switches & Routers',
      title: 'Enterprise Switching & Modular Routers',
      tagline: 'Campus LAN backbones, Layer 2/3 core switching, and branch WAN routing',
      icon: <Network className="w-6 h-6 text-orange-600" />,
      description: 'High-density Gigabit and 10G/40G fiber switches equipped with PoE+ budgets for VoIP and IP cameras. Stackable Cisco Catalyst, TP-Link JetStream, and industrial switches with zero-touch management.',
      keyBrands: ['Cisco Systems', 'TP-Link Omada', 'D-Link'],
      topModels: ['Cisco Catalyst 9200L 24P PoE+', 'Cisco ISR 4331/K9', 'TP-Link JetStream SG3428'],
      turnaround: '24 - 48 Hours Dispatch'
    },
    {
      category: 'Firewalls & Security',
      title: 'Next-Gen Firewalls, UTM & Zero-Trust Defense',
      tagline: 'Hardware security appliances with deep SSL inspection and SD-WAN',
      icon: <ShieldAlert className="w-6 h-6 text-orange-600" />,
      description: 'Certified Fortinet and Sophos perimeter defense appliances. Protect internal networks with IPS, antivirus, application control, and encrypted SD-WAN links interconnecting district branches.',
      keyBrands: ['Fortinet FortiGate', 'Sophos XGS'],
      topModels: ['FortiGate 60F UTP Bundle', 'FortiGate 100F', 'Sophos XGS 126'],
      turnaround: '24 - 48 Hours Dispatch'
    },
    {
      category: 'Servers & Storage',
      title: 'Compute Servers, SAN/NAS & Data Center Clusters',
      tagline: 'Tier-3 data center rack nodes, virtualization hypervisors & RAID arrays',
      icon: <Server className="w-6 h-6 text-orange-600" />,
      description: 'Heavy-duty 1U/2U enterprise compute servers equipped with dual Intel Xeon Silver/Gold processors, ECC memory, hot-swappable SAS storage, and redundant platinum power supplies.',
      keyBrands: ['HPE ProLiant', 'Dell PowerEdge', 'Lenovo ThinkSystem'],
      topModels: ['HPE ProLiant DL380 Gen10 Plus', 'Dell PowerEdge R750', 'HPE MSA SAN Storage'],
      turnaround: '3 - 5 Days Staged'
    },
    {
      category: 'Laptops & Workstations',
      title: 'Commercial Desktops, Laptops & Smart IFPD Panels',
      tagline: 'Mil-spec commercial client computers, VDI nodes & interactive flat panels',
      icon: <Monitor className="w-6 h-6 text-orange-600" />,
      description: 'Enterprise-grade client devices with TPM 2.0 security, HP Sure Start self-healing BIOS, and long lifecycle stability for government secretariats, colleges, and examination centers.',
      keyBrands: ['HP Inc.', 'Dell Technologies', 'Lenovo', 'Acer'],
      topModels: ['HP EliteDesk 800 G8 SFF', 'Lenovo ThinkCentre M70q', 'Acer Veriton Commercial'],
      turnaround: '24 - 48 Hours Dispatch'
    },
    {
      category: 'Wireless & Access Points',
      title: 'High-Density Wi-Fi 6 / 7 & Enterprise Access Points',
      tagline: 'Seamless indoor/outdoor mesh APs with captive portals for 350+ clients per AP',
      icon: <Wifi className="w-6 h-6 text-orange-600" />,
      description: 'Campus-wide wireless infrastructure with cloud controller integration, VLAN mapping, guest captive portals, and 802.1X enterprise authentication for universities and hospital wards.',
      keyBrands: ['Ubiquiti UniFi', 'TP-Link Omada', 'Cisco Catalyst Wireless'],
      topModels: ['Ubiquiti UniFi 6 Pro (U6-Pro)', 'Omada EAP670 Wi-Fi 6', 'Ubiquiti U6-Enterprise'],
      turnaround: 'Same-Day Dispatch (Lucknow Staging)'
    },
    {
      category: 'Power & UPS',
      title: 'Double-Conversion Online UPS & Power Backup',
      tagline: 'True online pure sine-wave UPS with SNMP management and extended runtimes',
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      description: 'Zero transfer time double-conversion online UPS systems ensuring uninterruptible power for critical diagnostic equipment, server rooms, data centers, and network racks.',
      keyBrands: ['Schneider Electric / APC', 'Vertiv Liebert'],
      topModels: ['APC Smart-UPS SRT 5000VA (5kVA)', 'APC Smart-UPS 3000VA', 'Vertiv Liebert GXT5'],
      turnaround: '3 - 5 Days'
    },
    {
      category: 'Server Racks & Cabling',
      title: '42U Server Racks, Structured Copper & Fiber Cabling',
      tagline: 'Fluke-certified Cat6/6A UTP, armored outdoor fiber optic cables & patch panels',
      icon: <Cpu className="w-6 h-6 text-orange-600" />,
      description: 'High-grade structured cabling and data center containment. CommScope Systimax Category 6/6A reels, fiber patch cords, PDU power strips, and 42U ventilated server enclosures.',
      keyBrands: ['CommScope / Systimax', 'Schneider Electric NetShelter', 'D-Link'],
      topModels: ['CommScope Systimax Cat6 (305m Box)', 'APC NetShelter 42U Enclosure', '24-Port Cat6 Patch Panels'],
      turnaround: 'Immediate Dispatch from Lucknow Warehouse'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 sm:py-14 animate-in fade-in duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-200 text-orange-800 px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Package className="w-3.5 h-3.5 text-orange-600" />
            <span>Product & Solution Classifications</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Equipment Categories & Systems
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Rangayan Creations supplies OEM-certified enterprise IT and networking hardware. Browse by hardware classification to view models, technical specifications, and generate your Bill of Materials.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categoriesList.map((cat, idx) => (
            <div 
              key={idx}
              className={`bg-white rounded-2xl border p-6 transition-all hover:shadow-lg flex flex-col justify-between ${
                cat.featured 
                  ? 'border-orange-300 ring-2 ring-orange-500/20 shadow-md' 
                  : 'border-slate-200/90 hover:border-orange-200'
              }`}
            >
              <div>
                {/* Top header row */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      cat.featured ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {cat.icon}
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900 leading-tight">
                        {cat.title}
                      </h2>
                      <div className="text-xs text-orange-700 font-semibold mt-0.5">
                        {cat.tagline}
                      </div>
                    </div>
                  </div>

                  {cat.featuredBadge && (
                    <span className="bg-orange-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 shadow-xs">
                      {cat.featuredBadge}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                  {cat.description}
                </p>

                {/* Brands & Models Badges */}
                <div className="space-y-2 mb-5">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-500 font-medium">OEM Alliances:</span>
                    {cat.keyBrands.map((b, i) => (
                      <span key={i} className="bg-slate-100 text-slate-800 font-semibold px-2 py-0.5 rounded text-[11px]">
                        {b}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs">
                    <span className="text-slate-500 font-medium">Flagship Models:</span>
                    {cat.topModels.map((m, i) => (
                      <span key={i} className="bg-orange-50 text-orange-800 font-mono text-[11px] px-2 py-0.5 rounded border border-orange-200/60">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{cat.turnaround}</span>
                </span>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => onSelectCategory(cat.category)}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-colors"
                  >
                    <span>View Models</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenRfq}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 bg-[#ff5500] hover:bg-[#e04b00] text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-2xs"
                  >
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
