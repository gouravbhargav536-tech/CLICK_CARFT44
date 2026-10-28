export type LanguageCode =
  | 'en'
  | 'hi'
  | 'raj'
  | 'gu'
  | 'mr'
  | 'pa'
  | 'bn'
  | 'ta'
  | 'te'
  | 'kn'
  | 'ml'
  | 'ur'
  | 'es'
  | 'ar'
  | 'fr';

export interface LanguageInfo {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  rtl?: boolean;
  flag: string;
}

export type ServiceId =
  | 'digital-marketing'
  | 'business-growth'
  | 'advertising'
  | 'business-analytics'
  | 'creative-strategy'
  | 'sell-car'
  | 'astrology-ads'
  | 'landing-page';

export interface ServiceItem {
  id: ServiceId;
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  formKey: string;
}

export interface TestimonialItem {
  name: string;
  business: string;
  location: string;
  quote: string;
  metric: string;
  metricLabel: string;
  rating: number;
}

export interface BeforeAfterPoint {
  problem: string;
  solution: string;
}

export interface TranslationSchema {
  nav: {
    home: string;
    about: string;
    services: string;
    difference: string;
    reviews: string;
    founder: string;
    contact: string;
    getStarted: string;
    callNow: string;
  };
  hero: {
    offerBadge: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    guaranteeText: string;
    stats: {
      reach: string;
      reachLabel: string;
      roas: string;
      roasLabel: string;
      clients: string;
      clientsLabel: string;
      satisfaction: string;
      satisfactionLabel: string;
    };
  };
  about: {
    tag: string;
    title: string;
    lead: string;
    locationNote: string;
    missionTag: string;
    missionTitle: string;
    missionDescription: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    requestBtn: string;
    items: ServiceItem[];
  };
  difference: {
    tag: string;
    title: string;
    subtitle: string;
    ordinaryAgency: string;
    clickcraftWay: string;
    points: BeforeAfterPoint[];
  };
  testimonials: {
    tag: string;
    title: string;
    subtitle: string;
    items: TestimonialItem[];
  };
  founder: {
    tag: string;
    name: string;
    role: string;
    bio: string;
    visionQuote: string;
    visionLabel: string;
    skills: string[];
    contactFounderBtn: string;
  };
  form: {
    tag: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    serviceLabel: string;
    serviceOptions: { value: string; label: string }[];
    detailsLabel: string;
    detailsPlaceholder: string;
    submitBtn: string;
    submittingBtn: string;
    successTitle: string;
    successMessage: string;
    whatsappDirectBtn: string;
    callDirectBtn: string;
    submitAnotherBtn: string;
    privacyNote: string;
  };
  floating: {
    chatWhatsApp: string;
    callDirect: string;
  };
  footer: {
    description: string;
    quickLinks: string;
    servicesTitle: string;
    contactTitle: string;
    location: string;
    phone: string;
    servingNote: string;
    rights: string;
    netlifyBadge: string;
  };
}

export interface LeadFormData {
  name: string;
  email: string;
  whatsapp: string;
  service: string;
  details: string;
}

export interface BusinessTemplate {
  id: string;
  title: string;
  category: string;
  targetBusiness: string;
  scriptSnippet: string;
  prompt: string;
  duration: string;
  aspectRatio: '9:16' | '16:9' | '1:1';
  language: string;
  gradient: string;
  accentColor: string;
  tag: string;
}

export interface ModelEngine {
  id: string;
  name: string;
  provider: string;
  badge: string;
  description: string;
  aspectRatios: string[];
  maxDuration: string;
  recommendedFor: string;
  iconType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyINR: number;
  annualINR: number;
  credits: number;
  videosEstimate: string;
  isBestValue?: boolean;
  tagline: string;
  features: string[];
  ctaLabel: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

