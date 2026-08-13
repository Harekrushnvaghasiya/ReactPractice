import Navbar from "../navbar";
import NavbarVisibility from "./navbarVisibility";
import { Images } from "../../assets/images";
import { appLinks, navbarItems, socialLinks } from "../helpers/raw";


const NavbarWrapper = () => {
  return (
    <NavbarVisibility
      hiddenRoutes={[
        "/login",
        "/checkout",
      ]}
    >
      <Navbar
        logo={Images.logo}
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