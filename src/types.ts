export type ProductCategory = 
  | 'All'
  | 'Printers & Photocopiers'
  | 'Switches & Routers'
  | 'Firewalls & Security'
  | 'Servers & Storage'
  | 'Laptops & Workstations'
  | 'Wireless & Access Points'
  | 'Server Racks & Cabling'
  | 'Power & UPS';

export type NavigationTab = 
  | 'home' 
  | 'products' 
  | 'categories' 
  | 'journey' 
  | 'reports' 
  | 'staff' 
  | 'contact';

export interface Product {
  id: string;
  model: string;
  brand: string;
  category: ProductCategory;
  name: string;
  partNumber: string;
  shortDesc: string;
  keySpecs: string[];
  portsOrCapacity?: string;
  warranty: string;
  inStock: boolean;
  gemAvailable: boolean;
  gemCategoryName?: string;
  leadTime: string;
  priceEstimate?: string;
  badge?: string;
  image: string;
  isCanonBIS?: boolean;
}

export interface RFQItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface SolutionService {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  overview: string;
  deliverables: string[];
  suitedFor: string[];
  gemRelevant: boolean;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  sector: 'Government' | 'Higher Education' | 'Healthcare' | 'Enterprise';
  year: string;
  scale: string;
  description: string;
  scope: string[];
  results: string[];
}

export interface DistrictInfo {
  name: string;
  division: string;
  hubOffice: string;
  avgDeliveryHours: string;
  activeDeployments: number;
  isNearbyLucknow?: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  specialization: string;
  experience: string;
  location: string;
  email: string;
  phone: string;
  avatar: string;
  availability: string;
  badges: string[];
}

export interface ProcurementReport {
  id: string;
  title: string;
  category: 'Compliance' | 'Audit' | 'SLA & Logistics' | 'Authorization';
  documentNumber: string;
  date: string;
  summary: string;
  highlights: string[];
  downloadable: boolean;
  fileSize?: string;
}
