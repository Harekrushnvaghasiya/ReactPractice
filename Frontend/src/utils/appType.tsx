import { SPACING_TYPE, TONE } from "../components/global/constants";

export interface NavbarItem {
  label: string;
  href?: string;
  children?: NavbarItem[];
}

export interface NavbarSocialLink {
  label: string;
  href: string;
}

export interface NavbarAppLink {
  label: string;
  href: string;
  image: string;
}

export interface NavbarCTA {
  label: string;
  href: string;
}

export interface NavbarProps {
  isOpen?: boolean;
  onClose?: () => void;
  logo: string;
  logoAlt?: string;
  items: NavbarItem[];
  socialLinks?: NavbarSocialLink[];
  appLinks?: NavbarAppLink[];
  cta?: NavbarCTA;
}

export interface NavbarVisibilityProps {
  children: React.ReactNode;
  hiddenRoutes?: string[];
}

export interface FooterLinkItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLinkItem[];
}

export interface FooterProps {
  galleryImages?: string[];
  newsletterTitle?: string;
  footerLinkGroups?: FooterLinkGroup[];
  disclaimer?: string;
  copyright?: string;
  instagramUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
}

export interface CtaProps {
  tag: string;
  title: string;
  Content: string;
  isBgImage?: boolean;
  variant?: (typeof SPACING_TYPE)[keyof typeof SPACING_TYPE];
  tone?: (typeof TONE)[keyof typeof TONE];
}