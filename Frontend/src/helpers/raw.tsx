import hollywood from "../assets/images/hollywood.svg";
import w from "../assets/images/w.svg";
import nbc from "../assets/images/nbc.svg";
import wwd from "../assets/images/wwd.svg";
import goop from "../assets/images/goop.svg";
import people from "../assets/images/people.svg";
import losAngeles from "../assets/images/losAngeles.svg";
import forbes from "../assets/images/forbes.svg";
import fastCompany from "../assets/images/fastCompany.svg";
import googlelogo from "../assets/images/Google Play.webp";
import IOS from "../assets/images/IOS.webp";
import infrared from "../assets/images/infrared.avif";
import float from "../assets/images/Float.avif";
import NAD from "../assets/images/NAD.avif";
import IVDrips from "../assets/images/IV Drips.avif";
import LEDTherapy from "../assets/images/LEDTherapy.avif";
import ContrasTherapy from "../assets/images/ContrastTherapy.avif";
import compression from "../assets/images/Compression Therapy.avif";
import Cryotherapy from "../assets/images/Cryotherapy.avif";
import VisionLeft from "../assets/images/our-vision-left.avif";
import VisionRight from "../assets/images/our-vision-right.avif";
import HomeHero from "../assets/images/HomeHero.avif";
import FooterImage1 from "../assets/images/FooterImage1.avif";
import FooterImage2 from "../assets/images/FooterImage2.avif";
import FooterImage3 from "../assets/images/FooterImage3.avif";
import FooterImage4 from "../assets/images/FooterImage4.avif";
import FooterImage5 from "../assets/images/FooterImage5.avif";
import FooterImage6 from "../assets/images/FooterImage6.avif";
import FooterImage7 from "../assets/images/FooterImage7.avif";

export const galleryImages = [
  FooterImage1,
  FooterImage2,
  FooterImage3,
  FooterImage4,
  FooterImage5,
  FooterImage6,
  FooterImage7,
];

export const socialLinks = [
  {
    label: "instagram-icon",
    href: "",
  },
  {
    label: "facebook-icon",
    href: "",
  },
  {
    label: "linkedIn-icon",
    href: "",
  },
];

export const navbarItems = [
  {
    label: "Services",

    children: [
      {
        label: "Contrast Therapy",
        href: "/services/contrast-therapy",
      },

      {
        label: "Infrared Sauna",
        href: "/services/infrared-sauna",
      },

      {
        label: "Float",
        href: "/services/float",
      },

      {
        label: "LED Light Therapy",
        href: "/services/led-light-therapy",
      },

      {
        label: "NAD+",
        href: "/services/nad",
      },

      {
        label: "IV Drips & Vitamin Shots",
        href: "/services/iv-drips",
      },

      {
        label: "Cryotherapy",
        href: "/services/cryotherapy",
      },

      {
        label: "Compression Therapy",
        href: "/services/compression-therapy",
      },
    ],
  },

  {
    label: "Membership",
    href: "/membership",
  },

  {
    label: "About",
    href: "/about",
  },

  {
    label: "Franchise",
    href: "/franchise",
  },

  {
    label: "Locations",
    href: "/locations",
  },
];

export const footerContent = {
  tagline: "Elevate Your Mental, Physical and Emotional well-being",
  newsletter: {
    title: "Subscribe to be in touch",
    placeholder: "Your e-mail",
    buttonText: "Submit",
  },
  footerLinks: [
    {
      title: "PAGES",
      links: [
        {
          label: "Locations",
          href: "/locations",
        },
        {
          label: "About",
          href: "/about",
        },
        {
          label: "Franchise",
          href: "/franchise",
        },
        {
          label: "Contact",
          href: "/contact",
        },
      ],
    },
    {
      title: "QUICK LINKS",
      links: [
        {
          label: "Booking",
          href: "/book-now",
        },
        {
          label: "Services",
          href: "/services",
        },
        {
          label: "Membership",
          href: "/membership",
        },
        {
          label: "FAQ",
          href: "/faq",
        },
      ],
    },

    {
      title: "LEGACY",
      links: [
        {
          label: "Terms of Service",
          href: "/terms-of-service",
        },
        {
          label: "Privacy Policy",
          href: "/privacy-policy",
        },
      ],
    },
  ],

  disclaimer:
    "The statements made regarding these products and services have not been evaluated by the Food and Drug Administration. These products and services are not intended to diagnose, treat, cure or prevent any disease. The material on this website is provided for informational purposes only and is not medical advice. All information presented here is not meant as a substitute for or an alternative to information from healthcare practitioners. Please consult your healthcare professional about potential interactions or other possible complications before using any product or service.",

  copyright: "Copyright © 2025 Pause. All rights reserved.",
};

export const heroContent = {
  title: "Elevate your Mental, Physical and Emotional well-being",
  description:
    "Explore science-backed therapies designed to enhance recovery, reduce stress, and rejuvenate your entire being.",
  primaryButtonText: "Pause Now",
  primaryButtonLink: "/",
  maxTitleWidth: 863,
  heroImage: HomeHero,
};

export const ctaContent = {
  tag: "FIND YOUR LOCATION",
  title: "Find a Pause Near You",
  Content:
    "Pause is redefining one-stop-wellness for today’s demanding lifestyle.",
};

export const appLinks = [
  {
    label: "Google Play",
    href: "https://play.google.com/",
    image: googlelogo,
  },
  {
    label: "App Store",
    href: "https://www.apple.com/app-store/",
    image: IOS,
  },
];

export const serviceContent = {
  tag: "Our Services",
  title: "Science-Backed Recovery",

  services: [
    {
      number: "01",
      title: "Contrast Therapy",
      description:
        "Maximize recovery with alternating hot and cold therapies to reduce inflammation and stimulate circulation.",
      cardImage: ContrasTherapy,
    },

    {
      number: "02",
      title: "Infrared Sauna",
      description:
        "Detoxify, reduce muscle tension, and promote relaxation with deep-penetrating infrared heat.",
      cardImage: infrared,
    },

    {
      number: "03",
      title: "Float",
      description:
        "Experience total weightlessness in a sensory deprivation tank filled with warm Epsom salt water. Float therapy relaxes the body and quiets the mind to restore true balance.",
      cardImage: float,
    },

    {
      number: "04",
      title: "LED Light Therapy",
      description:
        "Our full-body LED Light Therapy supports cellular repair, boosts ATP production, reduces inflammation, and promotes collagen for radiant, youthful skin.",
      cardImage: LEDTherapy,
    },

    {
      number: "05",
      title: "NAD+",
      description:
        "Supercharge your cells, repair DNA, slow aging, and reduce inflammation. This advanced treatment boosts cognition, energy, and focus. Our NAD+ IV drips and vitamin shots deliver maximum bioavailability for fast, effective results.",
      cardImage: NAD,
    },

    {
      number: "06",
      title: "IV Drips",
      description:
        "The ultimate fast-track to feeling your best. Our IV drips and vitamin shots deliver essential vitamins, minerals, and nutrients directly into your bloodstream for immediate absorption with tailored formulas designed to support your unique wellness goals.",
      cardImage: IVDrips,
    },

    {
      number: "07",
      title: "Cryotherapy",
      description:
        "Accelerate recovery and optimize peak performance with whole-body cryotherapy. Exposure to ultra-cold temperatures decreases inflammation and promotes physical resilience.",
      cardImage: Cryotherapy,
    },

    {
      number: "08",
      title: "Compression Therapy",
      description:
        "Trusted by elite athletes and proven to enhance performance, NormaTec Compression Therapy promotes lymphatic drainage, boosts circulation, and speeds recovery.",
      cardImage: compression,
    },
  ],
};

export const logos = [
  {
    title: "The hollywood reporter",
    url: hollywood,
  },
  {
    title: "Goop",
    url: goop,
  },
  {
    title: "WWD",
    url: wwd,
  },
  {
    title: "Los Angeles",
    url: losAngeles,
  },
  {
    title: "People",
    url: people,
  },
  {
    title: "w",
    url: w,
  },
  {
    title: "Forbes",
    url: forbes,
  },
  {
    title: "Fast Company",
    url: fastCompany,
  },
  {
    title: "NBC",
    url: nbc,
  },
];

export const ourVisionContent = {
  leftImage: VisionLeft,
  rightImage: VisionRight,
  tag: "OUR VISION",
  title: "The Solution to Modern Living",
  description:
    "Stress, anxiety, lack of quality sleep, inefficient recovery and compromised immunity are universal problems.  Combining the most advanced recovery modalities with inspired design and experiential service, Pause is redefining one-stop-wellness for today’s demanding lifestyle.",
  primaryButtonLink: "/",
  primaryButtonText: "Find Your Location",
};
