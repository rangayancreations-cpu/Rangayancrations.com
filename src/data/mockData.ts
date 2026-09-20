import { Product, SolutionService, CaseStudy, DistrictInfo, StaffMember, ProcurementReport } from '../types';

export const COMPANY_INFO = {
  name: 'Rangayan Creations Private Limited',
  shortName: 'Rangayan Creations',
  tagline: 'Built by network engineers, for network engineers.',
  subTagline: 'Enterprise IT Hardware, Structured Networking Infrastructure & System Integration Partner',
  address: 'A-113 NBCC Commercial Complex Sector 1 Gomtinagar Ext Lucknow 226010 Uttar Pradesh India',
  addressShort: 'A-113 NBCC Commercial Complex, Sector 1, Gomti Nagar Ext, Lucknow - 226010',
  canonAuthorization: 'Canon Authorised Distributor for BIS Series for Lucknow and nearby districts',
  phone: '+91-630-7777-824',
  phoneDisplay: '+91 63077 77824',
  whatsapp: '916307777824',
  email: 'support@rangayancreations.com',
  altEmail: 'rangayancreations@gmail.com',
  workingHours: 'Mon - Sat: 10:00 AM - 7:00 PM IST',
  cin: 'U72900UP2022PTC158097',
  incorporatedYear: '2022',
  governance: 'Board of Directors & Technical Directorate',
  gemSellerId: 'GEM-SELLER-VERIFIED',
  nodalPartners: ['UPLC (UP Electronics Corporation Ltd.)', 'UPDESCO (UP Development Systems Corporation Ltd.)'],
  stats: [
    { label: 'Institutional Deployments', value: '500+' },
    { label: 'Canon BIS & OEM Tier Alliances', value: '25+' },
    { label: 'UP Districts Covered', value: '75' },
    { label: 'OEM Genuine Hardware & Spares', value: '100%' },
  ]
};

export const BRAND_PARTNERS = [
  { 
    name: 'Canon', 
    tier: 'Authorised Distributor for BIS Series', 
    category: 'BIS Series Photocopiers & Heavy-Duty MFPs',
    coverage: 'Lucknow and nearby districts',
    featured: true
  },
  { name: 'Cisco Systems', tier: 'Authorized Networking Partner', category: 'Enterprise Switching & Routing' },
  { name: 'Hewlett Packard Enterprise', tier: 'HPE Enterprise Partner', category: 'Servers & Storage Solutions' },
  { name: 'HP Inc.', tier: 'Commercial PC & Print Partner', category: 'Laptops, Desktops & Enterprise Printers' },
  { name: 'Fortinet', tier: 'Fortinet Engage Partner', category: 'Next-Gen Firewalls & UTM' },
  { name: 'Dell Technologies', tier: 'Dell Solutions Provider', category: 'PowerEdge Servers & Client Systems' },
  { name: 'Konica Minolta', tier: 'bizhub Commercial Partner', category: 'Digital Production & Office Copiers' },
  { name: 'Acer', tier: 'Commercial Education Partner', category: 'Laptops, Monitors & Workstations' },
  { name: 'TP-Link Omada', tier: 'Enterprise Solution Provider', category: 'Managed Switches & Business Wi-Fi' },
  { name: 'Ubiquiti Networks', tier: 'UniFi Certified Deployer', category: 'Enterprise Wi-Fi 7 & Mesh APs' },
  { name: 'Schneider Electric / APC', tier: 'Elite Power Specialist', category: 'Online UPS, Racks & Power Distribution' },
  { name: 'Sophos', tier: 'Synchronized Security Partner', category: 'XGS Firewalls & Endpoint Defense' },
  { name: 'CommScope / Systimax', tier: 'Structured Cabling Partner', category: 'Cat6, Cat6A & Fiber Optic Backbones' },
  { name: 'D-Link', tier: 'Network Infrastructure Partner', category: 'Industrial Switches & Surveillance' },
  { name: 'Lenovo', tier: 'ThinkSystem / ThinkCentre Partner', category: 'Enterprise Desktops & Workstations' },
  { name: 'Vertiv Liebert', tier: 'Critical Infrastructure Partner', category: 'Modular 3-Phase Online UPS Systems' },
];

export const PRODUCTS: Product[] = [
  // Canon BIS Series (Prominently featured)
  {
    id: 'canon-ir-2925i-bis',
    model: 'imageRUNNER 2925i BIS Series',
    brand: 'Canon',
    category: 'Printers & Photocopiers',
    name: 'Canon imageRUNNER 2925i BIS Series A3 Monochrome Digital Copier & Multifunction Printer',
    partNumber: 'Canon-iR2925i-BIS',
    shortDesc: 'Authorised BIS Series multifunction digital copier with 25 ppm speed, cloud connectivity, uniFLOW Online Express, and heavy-duty duplex ADF.',
    keySpecs: [
      'Canon Authorised Distributor for BIS Series for Lucknow and nearby districts',
      'Speed: 25 ppm (A4), 15 ppm (A3) Heavy-Duty Laser Monochrome',
      'Print, Copy, Scan, Send with standard DADF-BA1 automatic duplex feeder',
      '7-inch Color Touch Panel with intuitive smartphone-style gesture navigation',
      'Standard Ethernet LAN, Wi-Fi, and uniFLOW Online Express cloud printing',
      'Genuine Canon NPG-88 Black Toner cartridge with high page yields'
    ],
    portsOrCapacity: 'A3 Heavy-Duty BIS Series (25 ppm)',
    warranty: '1 Year Canon Comprehensive Onsite Warranty + Genuine Consumables SLA',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Multifunction Photocopier (BIS)',
    leadTime: 'Same-Day Dispatch in Lucknow & Nearby Districts',
    badge: 'Canon BIS Authorised Distributor',
    image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?auto=format&fit=crop&w=600&q=80',
    isCanonBIS: true
  },
  {
    id: 'canon-ir-c3326i-bis',
    model: 'imageRUNNER C3326i Colour BIS Series',
    brand: 'Canon',
    category: 'Printers & Photocopiers',
    name: 'Canon imageRUNNER C3326i Colour BIS Series A3 Digital Multifunction Printer',
    partNumber: 'Canon-iRC3326i-BIS',
    shortDesc: 'Vibrant color BIS Series digital photocopier with V2 Colour technology, 26 ppm speed, mobile printing, and robust document security.',
    keySpecs: [
      'Canon Authorised Distributor for BIS Series for Lucknow and nearby districts',
      'Speed: 26 ppm A4 Color & Monochrome high-definition laser printing',
      '7-inch TFT LCD color touch screen with customizable one-touch workflows',
      'Standard 2 x 550-sheet cassettes plus 100-sheet multi-purpose tray',
      'Advanced scan-to-cloud (Google Drive, OneDrive, SharePoint) and searchable PDF',
      'Full AMC and genuine Canon toner support across Lucknow & adjacent regions'
    ],
    portsOrCapacity: 'A3 Full Colour BIS Series (26 ppm)',
    warranty: '1 Year Canon Manufacturer Onsite Warranty with Preventive Maintenance',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Color Multifunction Photocopier (BIS)',
    leadTime: '24 - 48 Hours in Lucknow / Nearby Districts',
    badge: 'Canon BIS Series Colour',
    image: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=600&q=80',
    isCanonBIS: true
  },
  {
    id: 'canon-ir-2730i-bis',
    model: 'imageRUNNER 2730i BIS Series',
    brand: 'Canon',
    category: 'Printers & Photocopiers',
    name: 'Canon imageRUNNER 2730i BIS Series Enterprise A3 Workgroup Photocopier',
    partNumber: 'Canon-iR2730i-BIS',
    shortDesc: 'High-speed 30 ppm enterprise BIS series digital copier designed for high monthly duty cycles in government departments, colleges, and corporations.',
    keySpecs: [
      'Canon Authorised Distributor for BIS Series for Lucknow and nearby districts',
      'Heavy-duty output: 30 ppm (A4), 15 ppm (A3) fast first-copy-out time',
      'Single-pass duplex scanning feeder handling up to 70 ipm',
      'Department ID management, hard disk encryption, and TPM 2.0 security',
      'High-capacity paper feeding up to 2,300 sheets with optional dual cassette',
      'Genuine Canon spare parts and certified technician backup'
    ],
    portsOrCapacity: 'A3 Enterprise BIS Series (30 ppm)',
    warranty: '1 Year Canon Onsite Warranty + Dedicated Service Engineer Support',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Enterprise Multifunction Copier (BIS)',
    leadTime: '24 - 48 Hours Dispatch',
    badge: 'Canon BIS Heavy-Duty',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    isCanonBIS: true
  },
  {
    id: 'canon-dr-g2120-scanner',
    model: 'imageFORMULA DR-G2120 Production Scanner',
    brand: 'Canon',
    category: 'Printers & Photocopiers',
    name: 'Canon imageFORMULA DR-G2120 High-Speed A3 Production Document Scanner',
    partNumber: 'Canon-DR-G2120',
    shortDesc: 'Authorised Canon BIS series heavy-duty production scanner delivering up to 120 ppm / 240 ipm scanning speed for government digitisation and administrative archiving.',
    keySpecs: [
      'Canon Authorised Distributor for BIS Series for Lucknow and nearby districts',
      'Ultra-fast speed: 120 ppm / 240 ipm duplex A3 scanning',
      '500-sheet automatic document feeder (ADF) with active separation',
      'Hardware barcode & patch code recognition with advanced OCR image processing',
      'Heavy-duty duty cycle: up to 70,000 scans per day',
      'USB 3.1 & 1000Base-T Gigabit Ethernet network connectivity'
    ],
    portsOrCapacity: 'A3 High-Speed 120 ppm / 500-Sheet ADF',
    warranty: '1 Year Canon Manufacturer Onsite Warranty + AMC',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Document Scanner (High Speed)',
    leadTime: 'Same-Day / 24-Hour Dispatch in Lucknow & Nearby Districts',
    badge: 'Canon BIS Production Scanner',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80',
    isCanonBIS: true
  },
  {
    id: 'cisco-cat-9200l',
    model: 'Catalyst 9200L 24P PoE+',
    brand: 'Cisco',
    category: 'Switches & Routers',
    name: 'Cisco Catalyst 9200L 24-Port Gigabit PoE+ Managed Switch',
    partNumber: 'C9200L-24P-4G-E',
    shortDesc: 'Layer 3 enterprise campus switch with 370W PoE+ budget and 4x 1G SFP fixed uplinks, supporting Cisco DNA.',
    keySpecs: [
      '24 x 10/100/1000 Ethernet PoE+ ports',
      '370W total available PoE power budget',
      '4 x 1G SFP fixed uplink ports',
      'Network Essentials license stackable up to 80 Gbps',
      'Full Layer 3 routing (OSPF, EIGRP, RIP)'
    ],
    portsOrCapacity: '24 Ports PoE+ (370W)',
    warranty: 'Enhanced Limited Lifetime (E-LLW)',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Network Switch (V2)',
    leadTime: '24 - 48 Hours Dispatch',
    priceEstimate: '₹6,20,000 - ₹7,40,000 (indicative)',
    badge: 'Best Seller for Campus LAN',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'cisco-isr-4331',
    model: 'ISR 4331 / K9',
    brand: 'Cisco',
    category: 'Switches & Routers',
    name: 'Cisco ISR 4331 Integrated Services Enterprise Router',
    partNumber: 'ISR4331/K9',
    shortDesc: 'Modular branch router delivering 100 Mbps to 300 Mbps aggregate throughput with integrated voice, video, and security.',
    keySpecs: [
      '100 Mbps standard throughput (upgradeable to 300 Mbps)',
      '3 x Gigabit Ethernet WAN/LAN ports (RJ-45 & SFP)',
      '2 x NIM slots and 1 x SM-X slot for modular expansion',
      'Integrated hardware encryption acceleration (IPsec/SSL)',
      'Dual redundant power supply capability'
    ],
    portsOrCapacity: '3x GE, 2x NIM, 1x SM-X',
    warranty: '90-Day Cisco Limited / 1-3 Yr Smart Net Care',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Enterprise Core Router',
    leadTime: '3 - 5 Days',
    priceEstimate: '₹9,25,000 - ₹10,75,000 (indicative)',
    badge: 'Govt Nodal Standard',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tplink-sg3428',
    model: 'JetStream TL-SG3428',
    brand: 'TP-Link Omada',
    category: 'Switches & Routers',
    name: 'TP-Link JetStream 28-Port Gigabit L2+ Managed Switch with 4 SFP Slots',
    partNumber: 'TL-SG3428',
    shortDesc: 'Cost-effective L2+ managed switch integrated with Omada SDN for centralized cloud management and robust enterprise switching.',
    keySpecs: [
      '24 x Gigabit RJ45 ports + 4 x Gigabit SFP slots',
      'Integrated into Omada SDN for zero-touch cloud management',
      'L2+ feature: Static Routing for internal traffic segmentation',
      'Robust security: IP-MAC-Port Binding, ACL, Port Security, DoS Defend',
      'Optimized voice & video applications with L2/L3/L4 QoS'
    ],
    portsOrCapacity: '24 GE Ports + 4 SFP',
    warranty: 'Limited Lifetime Warranty',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Managed Network Switch',
    leadTime: 'Same Day Dispatch (Lucknow Staging)',
    priceEstimate: '₹1,45,000 - ₹1,75,000 (indicative)',
    badge: 'Omada Cloud Ready',
    image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'fortinet-fg-60f',
    model: 'FortiGate 60F',
    brand: 'Fortinet',
    category: 'Firewalls & Security',
    name: 'Fortinet FortiGate 60F Next-Generation Hardware Firewall Appliance',
    partNumber: 'FG-60F-BDL-950-12',
    shortDesc: 'Compact desktop NGFW powered by SOC4 security processor, providing enterprise threat protection, SSL inspection, and integrated SD-WAN.',
    keySpecs: [
      'Firewall Throughput: 10 Gbps | IPS Throughput: 1.4 Gbps',
      'NGFW Throughput: 1 Gbps | Threat Protection: 700 Mbps',
      '10 x GE RJ45 ports (including 2x WAN, 1x DMZ, 5x Internal, 2x FortiLink)',
      'Built-in Secure SD-WAN with application-aware path selection',
      '1 Year FortiCare Premium and FortiGuard Unified Threat Protection (UTP)'
    ],
    portsOrCapacity: '10x GE RJ45, 10 Gbps FW',
    warranty: '1 Year Fortinet Manufacturer Hardware + FortiCare Support',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'UTM / Hardware Firewall',
    leadTime: '24 - 48 Hours',
    priceEstimate: '₹4,40,000 - ₹5,25,000 (indicative)',
    badge: 'SOC4 Accelerated',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hpe-dl380-gen10',
    model: 'ProLiant DL380 Gen10 Plus',
    brand: 'Hewlett Packard Enterprise',
    category: 'Servers & Storage',
    name: 'HPE ProLiant DL380 Gen10 Plus 2U Rack Mountable Server',
    partNumber: 'P56949-B21',
    shortDesc: 'Adaptable for diverse workloads and environments, 2P 2U server delivering world-class performance and supreme expandability.',
    keySpecs: [
      'Dual Intel Xeon Silver 4314 (16 Core, 2.4 GHz, 135W)',
      '64 GB DDR4-3200 Registered SDRAM (expandable to 8 TB)',
      'HPE Smart Array P408i-a SR Gen10 12G SAS Modular Controller with battery',
      '8 x SFF SAS/SATA drive bays, scalable to 24 SFF drives',
      'Dual 800W Flex Slot Platinum hot-plug redundant power supplies',
      'HPE iLO 5 ASIC with Silicon Root of Trust security architecture'
    ],
    portsOrCapacity: '2U Rack, 2P Intel Xeon',
    warranty: '3-Year Parts, 3-Year Labor, 3-Year Onsite Support with Next Business Day',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Rack Server (V2)',
    leadTime: '3 - 5 Days',
    priceEstimate: '₹18,50,000 - ₹22,00,000 (indicative)',
    badge: 'Tier-3 Datacenter Grade',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hp-elitedesk-800',
    model: 'EliteDesk 800 G8 SFF',
    brand: 'HP Inc.',
    category: 'Laptops & Workstations',
    name: 'HP EliteDesk 800 Small Form Factor Commercial Desktop PC',
    partNumber: 'HP-ED800-G8-SFF',
    shortDesc: 'Commercial grade compact workstation desktop equipped with 11th Gen Intel Core i7, TPM 2.0, and HP Sure Start self-healing BIOS.',
    keySpecs: [
      'Intel Core i7-11700 processor (8 Cores, 16 Threads, up to 4.9 GHz)',
      '16 GB DDR4 RAM (expandable to 128 GB)',
      '512 GB PCIe NVMe High-Speed SSD + 1 TB 7200rpm HDD',
      'Integrated Intel UHD Graphics 750 (Dual DisplayPort 1.4 + HDMI)',
      'Windows 11 Pro Commercial Edition with HP Wolf Pro Security',
      'Matching HP Commercial USB Keyboard & Optical Mouse bundled'
    ],
    portsOrCapacity: 'Core i7 / 16GB / 512GB SSD',
    warranty: '3 Years Comprehensive Onsite Warranty from HP',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Desktop Computer (V2)',
    leadTime: '24 - 48 Hours',
    priceEstimate: '₹3,60,000 - ₹4,25,000 (indicative)',
    badge: 'Govt Office Standard',
    image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'ubiquiti-u6-pro',
    model: 'UniFi U6 Pro',
    brand: 'Ubiquiti Networks',
    category: 'Wireless & Access Points',
    name: 'Ubiquiti UniFi 6 Pro High-Performance Wi-Fi 6 Ceiling Access Point',
    partNumber: 'U6-Pro',
    shortDesc: 'High-density Wi-Fi 6 AP with 5.3 Gbps aggregate throughput rate, 4x4 MU-MIMO on 5 GHz, and support for 350+ concurrent clients.',
    keySpecs: [
      'Dual-band Wi-Fi 6 (802.11ax) technology',
      '5 GHz band (4x4 MU-MIMO and OFDMA) with 4.8 Gbps rate',
      '2.4 GHz band (2x2 MU-MIMO and OFDMA) with 573.5 Mbps rate',
      'Powered by 802.3at PoE+ (PoE injector or PoE switch required)',
      'Centrally managed via UniFi Network Controller / Cloud Gateway',
      'Guest portal hotspot with voucher system and SMS authentication'
    ],
    portsOrCapacity: '1x GbE PoE+, 350+ Clients',
    warranty: '1 Year Manufacturer Replacement Warranty',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Wireless Access Point',
    leadTime: 'Same Day Dispatch (Lucknow Depot)',
    priceEstimate: '₹1,25,000 - ₹1,55,000 (indicative)',
    badge: 'High-Density Campus Wi-Fi',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'apc-srt5kxli',
    model: 'Smart-UPS SRT 5000VA',
    brand: 'Schneider Electric / APC',
    category: 'Power & UPS',
    name: 'APC Smart-UPS On-Line SRT 5000VA (5kVA) 230V Double Conversion UPS',
    partNumber: 'SRT5KXLI',
    shortDesc: 'High density, true double-conversion on-line power protection with expandable runtime and embedded Network Management Card.',
    keySpecs: [
      '5000VA / 4500 Watts continuous pure sine-wave output',
      'True Online Double Conversion with zero transfer time',
      'Pre-installed AP9641 Network Management Card for remote SNMP',
      'Rack/Tower convertible chassis (3U height)',
      'Hot-swappable user-replaceable battery modules'
    ],
    portsOrCapacity: '5000VA / 4500W (3U Rack/Tower)',
    warranty: '3 Years Repair or Replace (2 Years on Battery)',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'Online UPS (V2)',
    leadTime: '3 - 5 Days Dispatch',
    priceEstimate: '₹12,00,000 - ₹14,25,000 (indicative)',
    badge: 'Critical Infrastructure',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'commscope-cat6-box',
    model: 'Systimax GigaSPEED XL Cat6',
    brand: 'CommScope / Systimax',
    category: 'Server Racks & Cabling',
    name: 'CommScope Systimax Category 6 UTP Unshielded Twisted Pair Solid Cable (305m Box)',
    partNumber: '1071E-BL-4/23-R1000',
    shortDesc: 'Premise horizontal copper network cable tested to exceed ANSI/TIA-568.2-D Category 6 specifications up to 550 MHz.',
    keySpecs: [
      '4-pair 23 AWG solid copper conductors with central spline separator',
      'Verified performance beyond 500 MHz for Gigabit Ethernet backbones',
      'Flame rating: CMR (Riser) UL listed, low smoke emission',
      'Reel-in-a-Box 305 meters (1000 feet) packaging',
      'Compatible with Systimax 25-year extended structured cabling warranty'
    ],
    portsOrCapacity: '305m (1000ft) Reel Box',
    warranty: '25-Year System Performance Warranty when certified',
    inStock: true,
    gemAvailable: true,
    gemCategoryName: 'LAN / Structured Copper Cable',
    leadTime: 'Instant Dispatch from Lucknow Warehouse',
    priceEstimate: '₹1,05,000 - ₹1,25,000 (indicative)',
    badge: 'Fluke Certified Standard',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80'
  }
];

export const SOLUTIONS: SolutionService[] = [
  {
    id: 'canon-bis-distribution',
    title: 'Canon BIS Series Authorised Distribution & Document Solutions',
    tagline: 'Canon Authorised Distributors for BIS Series for Lucknow and nearby districts.',
    icon: 'Printer',
    overview: 'As the Authorised Distributor for Canon BIS Series (Business Imaging Solutions), Rangayan Creations supplies, configures, and maintains Canon imageRUNNER and imageRUNNER ADVANCE heavy-duty digital multifunction copiers with genuine consumable support across Lucknow and surrounding districts.',
    deliverables: [
      'Direct OEM supply of Canon BIS Series digital monochrome & color A3 photocopiers',
      'Authorized warranty registration, genuine NPG toner distribution, and spare parts supply',
      'Complete uniFLOW document workflow configuration, secure swipe card print release, and audit tracking',
      'Comprehensive and Non-Comprehensive Annual Maintenance Contracts (AMC) with dedicated resident engineers',
      'Priority on-site service dispatch across Lucknow, Barabanki, Unnao, Sitapur, Raebareli, Hardoi, and Ayodhya'
    ],
    suitedFor: ['Government Secretariats', 'District Collectorates', 'Universities & Exam Halls', 'High Court & Judicial Complexes', 'Public Sector Undertakings'],
    gemRelevant: true
  },
  {
    id: 'enterprise-networking',
    title: 'Enterprise Network Architecture & Structured Cabling',
    tagline: 'High-speed campus LAN, WAN, 10G/40G fiber backbones & managed switching.',
    icon: 'Network',
    overview: 'Engineered by certified network architects. We design, deploy, and certify structured Cat6/6A copper and single-mode/multimode fiber optic networks with Fluke-certified testing and end-to-end documentation.',
    deliverables: [
      'Site survey, active/passive heatmapping, and CAD schematic designs',
      'Campus-wide backbone routing with redundant fiber rings and Spanning Tree/OSPF',
      'Core, distribution, and access layer switch configuration with VLAN/QoS segmentation',
      'Full structured cabling with patch panels, cable managers, and certified Fluke OTDR reports',
      '24x7 monitoring integration and SNMP trap configuration'
    ],
    suitedFor: ['State Universities', 'Govt Secretariats', 'Hospitals & Medical Colleges', 'Large Corporate Campuses'],
    gemRelevant: true
  },
  {
    id: 'gem-procurement',
    title: 'GeM & Government Procurement Facilitation',
    tagline: 'Direct GeM purchase, BOQ creation, PAC compliance & technical tender bidding.',
    icon: 'FileCheck2',
    overview: 'As a verified seller and government-bid verified partner on the Government e-Marketplace (GeM), Rangayan Creations assists government procurement officers in formulating accurate technical specifications, validating BOQs, and fulfilling orders with strict compliance.',
    deliverables: [
      'Validation of Bill of Quantities (BOQ) with OEM part numbers to prevent delivery mismatches',
      'Custom GeM Bid creation and compliance documentation (Make in India - MII, Land Border, OEM Authorization)',
      'PAC (Proprietary Article Certificate) support and direct purchase cataloging',
      'Timely delivery, installation report generation, and CRAC (Consignee Receipt and Acceptance Certificate) assistance',
      'Tally and GeM portal order synchronization for transparent audit trails'
    ],
    suitedFor: ['UP Government Departments', 'PSUs', 'Autonomous Educational Bodies', 'Defense & Police Establishments'],
    gemRelevant: true
  },
  {
    id: 'educational-labs',
    title: 'Smart Classrooms & Educational IT Lab Setup',
    tagline: 'Design, supply, installation & maintenance of computer centers & STEM labs.',
    icon: 'GraduationCap',
    overview: 'Specialized turnkey execution for higher education and government training centers. Proven track record in state-wide educational computer lab implementations for Uttar Pradesh government technical departments.',
    deliverables: [
      'Turnkey computer laboratory setup (50 to 500+ client nodes with centralized master server)',
      'Interactive Flat Panels (IFPD) with 4K touch, optical bonding, and smart teaching software',
      'Network power distribution with centralized 3-phase Online UPS and spike suppressors',
      'Thin client / VDI and fat client workstation integration with multi-OS boot',
      'Comprehensive on-site operational training and warranty maintenance'
    ],
    suitedFor: ['Technical Universities', 'Government Polytechnic Colleges', 'Secondary School Lab Initiatives', 'Skill Development Centers'],
    gemRelevant: true
  },
  {
    id: 'servers-datacenter',
    title: 'Server Infrastructure & Data Center Integration',
    tagline: 'Enterprise compute, virtualization clusters, SAN/NAS storage & server room conditioning.',
    icon: 'Server',
    overview: 'From rack enclosures to multi-node VMware/KVM hypervisors, we build fault-tolerant data center nodes equipped with automated backup systems, high-speed storage, and remote out-of-band management (iLO / iDRAC).',
    deliverables: [
      'Blade and 2U rack server installation with redundant power supplies and RAID arrays',
      'VMware ESXi, Microsoft Hyper-V, and Proxmox virtualization clustering with HA failover',
      'Dedicated SAN/NAS iSCSI storage fabric provisioning for database and archival storage',
      'Server room power infrastructure: 3-phase Online UPS, static bypass, and ATS switches',
      'Precision air cooling (PAC) coordination and hot/cold aisle thermal containment'
    ],
    suitedFor: ['Data Centers', 'District Headquarters', 'E-Governance Portals', 'Financial Institutions'],
    gemRelevant: true
  },
  {
    id: 'cybersecurity-perimeter',
    title: 'Perimeter Cybersecurity, UTM & Secure SD-WAN',
    tagline: 'Next-gen firewalls, zero-trust network access (ZTNA), SSL inspection & IPS.',
    icon: 'ShieldAlert',
    overview: 'Certified Fortinet and Sophos security specialists architecting multi-layered defense to shield public networks, critical government databases, and educational intranets from modern cyber threats.',
    deliverables: [
      'High-availability (HA) active-passive and active-active firewall clustering',
      'Deep Packet Inspection (DPI) for encrypted SSL/TLS traffic without latency degradation',
      'Zero-Trust Network Access (ZTNA) and multi-factor authentication (MFA) for remote staff',
      'Secure SD-WAN connecting distributed district offices and remote campuses over IPsec VPN',
      'Network Access Control (NAC) enforcing 802.1X device identity authentication'
    ],
    suitedFor: ['Government Networks', 'Enterprises & Banks', 'Internet Service Providers', 'Private Hospitals'],
    gemRelevant: true
  }
];

// Past Experience - WITHOUT ANY CONTRACT VALUES OR FINANCIAL CONTRACT DETAILS
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'up-it-dept-labs',
    title: 'Turnkey Educational Computer Laboratories & Smart Classrooms',
    client: 'Department of Information Technology & Electronics, Govt of Uttar Pradesh',
    sector: 'Government',
    year: '2026',
    scale: 'Statewide Institutional Deployment',
    description: 'Designed, supplied, commissioned, and maintained modern educational computer laboratories across Uttar Pradesh, providing commercial workstations, structured network switching, power conditioning, and interactive displays.',
    scope: [
      'Comprehensive deployment of commercial client desktop systems and high-throughput server nodes',
      'Complete passive structured cabling with CommScope Cat6 and 24-Port gigabit switches',
      'High-capacity Online UPS systems with extended backup battery banks',
      'Interactive smart touch flat panels with digital recording for instructor desks',
      'On-site technical maintenance and warranty SLA support across multiple regional centers'
    ],
    results: [
      'Successfully commissioned across target training centers in Uttar Pradesh ahead of timeline',
      'Zero downtime recorded during state-level technical testing evaluations',
      'Complete compliance with technical specifications and consignee acceptance'
    ]
  },
  {
    id: 'state-university-campus',
    title: 'Campus-Wide 10G Armored Fiber Backbone & High-Density Wi-Fi',
    client: 'State Technical University Campus',
    sector: 'Higher Education',
    year: '2025',
    scale: '14 Academic Blocks & Hostels',
    description: 'Modernization of campus network with 10 Gbps armored single-mode fiber optic backbone connecting academic departments, residential hostels, and administrative headquarters.',
    scope: [
      'Outdoor armored fiber optic backbone laying with fusion splicing and OTDR certification',
      'Deployment of redundant Cisco Catalyst core switches with OSPF routing',
      'High-density Wi-Fi 6 & 7 access points covering active student and faculty population',
      'Centralized Captive Portal authentication integrated with student ERP system'
    ],
    results: [
      'Bandwidth throughput expanded tenfold across all departmental faculties',
      'Seamless roaming throughout campus with centralized controller dashboard',
      'Sub-millisecond latency for laboratory research servers'
    ]
  },
  {
    id: 'district-hospital-lan',
    title: 'Hospital-Wide Medical LAN & Diagnostic PACS Server Integration',
    client: 'Regional Medical College & Hospital',
    sector: 'Healthcare',
    year: '2024',
    scale: 'Multi-Building Medical Facility',
    description: 'Implementation of an isolated high-availability medical network linking MRI, CT scan, diagnostic labs, and operation theatres with secure zero-trust segmentation.',
    scope: [
      'Dedicated medical VLAN architecture isolating patient imaging traffic from general internet',
      'HPE ProLiant rack servers configured for Picture Archiving and Communication System (PACS)',
      'Fortinet FortiGate NGFW with strict HIPAA/data protection access policies',
      'Dual Online UPS power backup ensuring uninterrupted operation for surgical imaging displays'
    ],
    results: [
      'Instant radiologist access to high-resolution CT/MRI scans in under 2 seconds',
      'High system availability with redundant link failover',
      'Effective protection against ransomware vectors through segmented VLAN security'
    ]
  },
  {
    id: 'collectorate-secure-wan',
    title: 'District Administrative Headquarters IT & Imaging Modernization',
    client: 'District Collectorate & Administrative Complex',
    sector: 'Government',
    year: '2023',
    scale: 'District Administrative Campus',
    description: 'End-to-end upgrade of government office computing, Canon BIS Series digital photocopiers, secure video conferencing conference halls, and gigabit switching infrastructure for citizen e-services.',
    scope: [
      'Supply of commercial desktop workstations and Canon BIS Series heavy-duty network copiers',
      'Managed Layer 2+ gigabit switches with port security and 802.1X access control',
      'High-definition video conference studio setup with noise-canceling boundary microphones',
      'Dedicated Resident Engineer deployment for ongoing facility management support'
    ],
    results: [
      'Seamless inter-connectivity for citizen grievance redressal portals',
      'Significant reduction in paper print costs via centralized Canon network MFPs',
      'Rapid technical support resolution under 15 minutes by resident engineers'
    ]
  }
];

export const UP_DISTRICTS: DistrictInfo[] = [
  { name: 'Lucknow', division: 'Lucknow', hubOffice: 'Headquarters & Central Warehouse (Gomtinagar Ext)', avgDeliveryHours: '2 - 4 Hours', activeDeployments: 142, isNearbyLucknow: true },
  { name: 'Barabanki', division: 'Ayodhya', hubOffice: 'Lucknow HQ Direct Delivery', avgDeliveryHours: '2 - 3 Hours', activeDeployments: 22, isNearbyLucknow: true },
  { name: 'Unnao', division: 'Lucknow', hubOffice: 'Lucknow / Kanpur Direct Link', avgDeliveryHours: '2 - 3 Hours', activeDeployments: 21, isNearbyLucknow: true },
  { name: 'Sitapur', division: 'Lucknow', hubOffice: 'Lucknow HQ Direct Delivery', avgDeliveryHours: '3 - 5 Hours', activeDeployments: 18, isNearbyLucknow: true },
  { name: 'Raebareli', division: 'Lucknow', hubOffice: 'Lucknow HQ Direct Delivery', avgDeliveryHours: '3 - 5 Hours', activeDeployments: 19, isNearbyLucknow: true },
  { name: 'Hardoi', division: 'Lucknow', hubOffice: 'Lucknow HQ Direct Delivery', avgDeliveryHours: '4 - 6 Hours', activeDeployments: 15, isNearbyLucknow: true },
  { name: 'Ayodhya', division: 'Ayodhya', hubOffice: 'Central East Service Unit', avgDeliveryHours: '4 - 6 Hours', activeDeployments: 34, isNearbyLucknow: true },
  { name: 'Kanpur Nagar', division: 'Kanpur', hubOffice: 'Kanpur Regional Depot', avgDeliveryHours: '4 - 6 Hours', activeDeployments: 68, isNearbyLucknow: true },
  { name: 'Varanasi', division: 'Varanasi', hubOffice: 'Eastern UP Service Desk', avgDeliveryHours: '8 - 12 Hours', activeDeployments: 54 },
  { name: 'Prayagraj', division: 'Prayagraj', hubOffice: 'Southern UP Service Center', avgDeliveryHours: '6 - 8 Hours', activeDeployments: 47 },
  { name: 'Gorakhpur', division: 'Gorakhpur', hubOffice: 'Gorakhpur Regional Unit', avgDeliveryHours: '8 - 12 Hours', activeDeployments: 41 },
  { name: 'Agra', division: 'Agra', hubOffice: 'Western UP Liaison Desk', avgDeliveryHours: '8 - 12 Hours', activeDeployments: 36 },
  { name: 'Meerut', division: 'Meerut', hubOffice: 'NCR / Western Support Hub', avgDeliveryHours: '12 - 24 Hours', activeDeployments: 32 },
  { name: 'Gautam Buddha Nagar (Noida)', division: 'Meerut', hubOffice: 'NCR Enterprise Hub', avgDeliveryHours: '12 - 24 Hours', activeDeployments: 49 },
  { name: 'Ghaziabad', division: 'Meerut', hubOffice: 'NCR Enterprise Hub', avgDeliveryHours: '12 - 24 Hours', activeDeployments: 28 },
  { name: 'Bareilly', division: 'Bareilly', hubOffice: 'Rohilkhand Support Desk', avgDeliveryHours: '8 - 12 Hours', activeDeployments: 23 },
  { name: 'Jhansi', division: 'Jhansi', hubOffice: 'Bundelkhand Regional Hub', avgDeliveryHours: '12 - 18 Hours', activeDeployments: 19 },
  { name: 'Aligarh', division: 'Aligarh', hubOffice: 'Western Hub Depot', avgDeliveryHours: '8 - 12 Hours', activeDeployments: 21 },
  { name: 'Moradabad', division: 'Moradabad', hubOffice: 'Western Hub Depot', avgDeliveryHours: '12 - 18 Hours', activeDeployments: 17 },
  { name: 'Sultanpur', division: 'Ayodhya', hubOffice: 'Central East Service Unit', avgDeliveryHours: '4 - 6 Hours', activeDeployments: 14, isNearbyLucknow: true }
];

export const STAFF_MEMBERS: StaffMember[] = [];

export const PROCUREMENT_REPORTS: ProcurementReport[] = [
  {
    id: 'rep-canon-bis-auth',
    title: 'Canon Authorised Distributorship Authorization & BIS Series Territory Mandate',
    category: 'Authorization',
    documentNumber: 'CAN-BIS-UP-LKO-2026/04',
    date: 'Current & Valid 2026',
    summary: 'Official Manufacturer Authorization for Canon BIS Series (Business Imaging Solutions) Photocopiers, Consumables, and Field Engineering covering Lucknow and nearby districts.',
    highlights: [
      'Authorized to supply Canon imageRUNNER and imageRUNNER ADVANCE multifunction printers',
      'Exclusive OEM spare parts and genuine Canon NPG toner guarantee',
      'Authorized factory-trained service technicians for Lucknow and adjacent districts',
      'Full eligibility for Government GeM custom catalog bids and direct departmental procurements'
    ],
    downloadable: true,
    fileSize: '1.4 MB PDF'
  },
  {
    id: 'rep-gem-mii-compliance',
    title: 'Government e-Marketplace (GeM) & Make in India (MII) Class-1 Supplier Certificate',
    category: 'Compliance',
    documentNumber: 'GEM-MII-RC-2026-V2',
    date: 'Annual Audit 2026',
    summary: 'Technical specification conformity, Land Border compliance declaration (Rule 144(xi)), and Make in India local content verification for government buyers.',
    highlights: [
      'Make in India (MII) local value addition verification across commercial hardware lines',
      'Strict adherence to Rule 144(xi) GFR 2017 land-border sharing certification',
      'Consignee Receipt and Acceptance Certificate (CRAC) streamlined fulfillment protocol',
      'Active verification on GeM Portal as registered and verified vendor'
    ],
    downloadable: true,
    fileSize: '980 KB PDF'
  },
  {
    id: 'rep-fluke-cable-cert',
    title: 'Structured Cabling Fluke DTX / DSX-8000 OTDR Certification Standard',
    category: 'Audit',
    documentNumber: 'FLUKE-DSX-RC-UP75',
    date: 'Quarterly Verified',
    summary: 'Testing and certification procedure methodology for Cat6/6A copper links and single-mode fiber optic backbone backbones installed in Uttar Pradesh institutional campuses.',
    highlights: [
      'Comprehensive Return Loss, NEXT, PS-NEXT, and Insertion Loss parameters passing ISO/IEC 11801',
      'OTDR optical fiber link loss budget validation at 850nm, 1310nm, and 1550nm',
      'Permanent link certification reports supplied with every installation for client asset audit',
      'Eligible for 25-year CommScope / Systimax structured cabling performance warranty'
    ],
    downloadable: true,
    fileSize: '2.1 MB PDF'
  },
  {
    id: 'rep-up-sla-dispatch',
    title: '75 Districts of Uttar Pradesh Logistics & SLA Response Audit',
    category: 'SLA & Logistics',
    documentNumber: 'UP-SLA-LOG-2026-Q1',
    date: 'Q1 2026 Audit',
    summary: 'Field dispatch performance log verifying 2-4 hour delivery and engineer arrival in Lucknow and adjoining districts, and 4-12 hours statewide across Uttar Pradesh.',
    highlights: [
      'Lucknow & nearby districts (Barabanki, Unnao, Sitapur, Raebareli): 99.4% on-time dispatch rate',
      'Buffer inventory of Cisco switches, Fortinet firewalls, and Canon BIS toner maintained at Gomti Nagar Extension',
      'Dedicated standby resident engineers dispatched with pre-configured staging units',
      'Escalation matrix and 24x7 emergency helpline for critical institutional networks'
    ],
    downloadable: true,
    fileSize: '1.2 MB PDF'
  }
];
