import {
  BUTTON_SIZE,
  BUTTON_VARIANTS,
  SPACING_TYPE,
  TONE,
} from "../components/global/constants";
import { HERO_VARIANT, HERO_SIZE } from "../components/global/constants";

export interface BtnProps {
  title: string | undefined;
  onClick?: () => void;
  isDisabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  hrefTarget?: string;
  ariaLabel?: string;
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
  isShowIcon?: boolean;
}
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

export interface SVGIconProps {
  name?: string;
  style?: React.CSSProperties;
  fill?: string;
  viewBox?: string;
  height?: string;
  width?: string;
  className?: string;
  strokeWidth?: number;
  stroke?: string;
  stopColor?: string;
}


export interface ImageProps {
  src: string;
  alt?: string;
  width?: number | `${number}` | string;
  height?: number | `${number}` | string;
  borderRadius?: string;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down" | "unset";
  loading?: "eager" | "lazy";
  priority?: boolean;
  objectPosition?: string;
  className?:string;
}

interface ImgProps {
  borderRadius?: string;
  objectFit?: string;
}

export interface CtaProps {
  tag: string;
  title: string;
  Content: string;
  isBgImage?: boolean;
  variant?: (typeof SPACING_TYPE)[keyof typeof SPACING_TYPE];
  tone?: (typeof TONE)[keyof typeof TONE];
}

export interface HeroProps {
  variant?: (typeof HERO_VARIANT)[keyof typeof HERO_VARIANT];
  size?: (typeof HERO_SIZE)[keyof typeof HERO_SIZE];
  tag?: string;
  title: string;
  description: string;
  heroImage?: string;
  primaryButtonLink?: string;
  primaryButtonText?: string;
  maxWidth?: string | number;
  maxTitleWidth?: string | number;
  maxDescWidth?: string | number;
}

export interface ServiceItem {
  id?: string;
  number?: string;
  title: string;
  cardImage: string;
  description?: string;
  featured?: boolean;
}

export interface ServiceProps {
  tag?: string;
  title: string;
  services: ServiceItem[];
  onPrevious?: () => void;
  onNext?: () => void;
}

export interface Logo {
  url: string;
  title?: string;
}

export interface LogoProps {
  logos: Logo[];
}

export interface VisionProps {
  leftImage: string;
  rightImage: string;
  tag: string;
  title: string;
  description: string;
  primaryButtonLink?: string;
  primaryButtonText?: string;
}