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