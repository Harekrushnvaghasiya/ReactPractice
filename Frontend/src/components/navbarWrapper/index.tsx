import Navbar from "../navbar";
import NavbarVisibility from "./navbarVisibility";
import logo from "../../assets/images/logo.svg";
import { appLinks, navbarItems, socialLinks } from "../../helpers/raw";

const NavbarWrapper = () => {
  return (
    <NavbarVisibility hiddenRoutes={["/login", "/checkout"]}>
      <Navbar
        logo={logo}
        logoAlt="Pause"
        items={navbarItems}
        socialLinks={socialLinks}
        appLinks={appLinks}
        cta={{
          label: "Book now",
          href: "/book-now",
        }}
      />
    </NavbarVisibility>
  );
};

export default NavbarWrapper;
