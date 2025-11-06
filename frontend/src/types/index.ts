// Strapi Media Type
export interface StrapiMedia {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail?: StrapiMediaFormat;
    small?: StrapiMediaFormat;
    medium?: StrapiMediaFormat;
    large?: StrapiMediaFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface StrapiMediaFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  url: string;
}

// Component Types
export interface Link {
  id: number;
  href: string;
  label: string;
  isExternal: boolean;
}

export interface ImageLink {
  id: number;
  image: StrapiMedia;
  href: string;
  url: string;
  isUrl: boolean;
  label: string;
}

export interface DropdownItem {
  id: number;
  label: string;
  url: string;
}

export interface MenuItem {
  id: number;
  label: string;
  url: string;
  hasDropdown: boolean;
  dropdownItems: DropdownItem[];
}

export interface FooterColumn {
  id: number;
  title: string;
  links: Link[];
}

export interface Address {
  id: number;
  addressText: string;
  placeHref: string;
  phone: string;
  email: string;
}

export interface TermsAndConditions {
  id: number;
  links: Link[];
  text: any[]; // Strapi blocks type
}

export interface ClimateForMonth {
  id: number;
  Month: 'Jan' | 'Feb' | 'Mar' | 'Apr' | 'May' | 'Jun' | 'Jul' | 'Aug' | 'Sep' | 'Oct' | 'Nov' | 'Dec';
  avgTemp: number;
  sunnyDays: number;
}

export interface Climate {
  id: number;
  months: ClimateForMonth[];
}

export interface TourCard {
  id: number;
  image: StrapiMedia;
  location: string;
  duration: string;
  title: string;
  highlights: Link[];
  price: string;
  link: string;
}

export interface ToursSection {
  id: number;
  title: string;
  subtitle: string;
  tourCards: TourCard[];
  viewAllButton: Link;
}

// Layout Component Types
export interface Header {
  id: number;
  links: Link[];
  menuTabs: MenuItem[];
  phone: Link;
  language: MenuItem;
  logo: ImageLink;
  button: Link;
}

export interface Footer {
  id: number;
  footerColumns: FooterColumn[];
  logo: ImageLink;
  socialLinks: ImageLink[];
  termsAndConditions: TermsAndConditions;
  address: Address;
  sustainablePolicy: any[]; // Strapi blocks type
}

// Global Type
export interface Global {
  id: number;
  title: string;
  description: string;
  header: Header;
  footer: Footer;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// HomePage Type
export interface HomePage {
  id: number;
  title: string;
  description: any[]; // Strapi blocks type
  region: string;
  button1: Link;
  button2: Link;
  image1: StrapiMedia;
  image2: StrapiMedia;
  climate: Climate;
  toursSection: ToursSection;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// API Response Types
export interface StrapiResponse<T> {
  data: T;
  meta: {
    pagination?: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
