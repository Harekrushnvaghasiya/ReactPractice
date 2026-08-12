import { useLocation } from "react-router-dom";

interface NavbarVisibilityProps {
  children: React.ReactNode;

  hiddenRoutes?: string[];
}

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