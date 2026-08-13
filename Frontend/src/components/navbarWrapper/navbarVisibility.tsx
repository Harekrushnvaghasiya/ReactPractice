import { useLocation } from "react-router-dom";
import { NavbarVisibilityProps } from "../../utils/appType";

const NavbarVisibility = ({
  children,
  hiddenRoutes = [],
}: NavbarVisibilityProps) => {
  const location = useLocation();

  const shouldHideNavbar =
    hiddenRoutes.includes(location.pathname);

  if (shouldHideNavbar) {
    return null;
  }

  return <>{children}</>;
};

export default NavbarVisibility;