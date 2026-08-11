import Navbar from "../navbar";
import NavbarVisibility from "./navbarVisibility";
import logo from "../../assets/images/logo.svg";

const navbarItems = [
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

const socialLinks = [
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

const NavbarWrapper = () => {
  return (
    <NavbarVisibility
      hiddenRoutes={[
        "/login",
        "/checkout",
      ]}
    >
      <Navbar
        logo={logo}
        logoAlt="Pause"
        items={navbarItems}
        socialLinks={socialLinks}
        cta={{
          label: "Book now",
          href: "/book-now",
        }}
      />
    </NavbarVisibility>
  );
};

export default NavbarWrapper;