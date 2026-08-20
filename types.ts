export type ProjectCategory = 'All' | 'Logo' | 'Branding' | 'Print' | 'Social Media' | 'Thumbnail' | 'App Design';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'All'>;
  shortDescription: string;
  fullDescription: string;
  client: string;
  year: string;
  deliverables: string[];
  tools: string[];
  imageUrl: string;
  featured?: boolean;
  colorPalette: { name: string; hex: string }[];
  typographyUsed?: string;
  challenge?: string;
  solution?: string;
}

export interface SkillItem {
  id: string;
  title: string;
  category: 'Core Design' | 'Print & Media' | 'Digital & Social' | 'Software Tools';
  description: string;
  iconName: string;
  proficiency: number;
  highlightTag: string;
  deliverables: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  startingPrice: string;
  priceNumeric: number;
  features: string[];
  turnaround: string;
  popular?: boolean;
  category?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
  duration: string;
}

export interface StatItem {
  value: string;
  numericTarget?: number;
  suffix?: string;
  label: string;
  description: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  avatarUrl: string;
  rating: number;
  projectTag: string;
  category?: 'Branding' | 'Print' | 'Social' | 'Digital';
  highlightOutcome?: string;
  highlightMetric?: string;
  quote: string;
  featured?: boolean;
  verifiedPlatform?: string;
  date?: string;
  isPlaceholder?: boolean;
}

export interface SocialLink {
  name: string;
  platform: 'Behance' | 'Dribbble' | 'LinkedIn' | 'Instagram';
  url: string;
  handle: string;
  iconName: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'client' | 'admin';
  company?: string;
  avatarUrl?: string;
  createdAt: string;
}

export type OrderStatus = 
  | 'Pending Advance'
  | 'Advance Verified'
  | 'In Progress'
  | 'In Review'
  | 'Delivered'
  | 'Completed'
  | 'Cancelled';

export type PaymentMethod = 'bKash' | 'Nagad' | 'Bank';

export interface Order {
  id: string;
  orderNumber: string; // e.g. MM-2026-9481
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId?: string;
  serviceName: string;
  deliveryDate: string; // Required deadline
  projectDescription: string;
  referenceLinks?: string;
  currency: 'USD' | 'BDT';
  totalPrice: number;
  advancePercentage: number; // 30%
  advanceAmount: number; // 30% of total
  remainingDue: number; // 70% of total
  paymentMethod: PaymentMethod;
  senderAccountOrPhone: string;
  transactionId: string;
  paymentStatus: 'Advance Received' | 'Advance Verified' | 'Fully Paid';
  status: OrderStatus;
  designerNotes?: string;
  deliverableFilesUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentAccountConfig {
  bkashNumber: string;
  bkashType: 'Personal' | 'Merchant' | 'Agent';
  bkashInstructions: string;
  nagadNumber: string;
  nagadType: 'Personal' | 'Merchant';
  nagadInstructions: string;
  bankName: string;
  bankAccountName: string;
  bankAccountNumber: string;
  bankBranch: string;
  bankRouting: string;
  bankSwift?: string;
  advancePercentage: number;
  usdToBdtRate: number;
}

export interface StudioInfo {
  name: string;
  shortName: string;
  tagline: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubheadline: string;
  aboutTitle: string;
  aboutBio: string;
  email: string;
  phone?: string;
  whatsapp?: string;
  availability: string;
  location: string;
  yearsExperience: string;
  badges: string[];
  toolsList: string[];
}

export interface CustomizableSiteData {
  studioInfo: StudioInfo;
  services: ServiceItem[];
  portfolioProjects: PortfolioProject[];
  testimonials: TestimonialItem[];
  paymentAccounts: PaymentAccountConfig;
}
