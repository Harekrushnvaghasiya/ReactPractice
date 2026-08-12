import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";

import ResponsiveNavbar from "./responsiveNavbar";

import {
  NavbarContainer,
  NavbarDesktop,
  SocialLinks,
  SocialLink,
  LogoSection,
  Logo,
  Navigation,
  NavItem,
  NavLink,
  // Dropdown,
  DropdownLink,
  MobileMenuButton,
  DropdownConten,
  DropdownWrapper,
} from "./style";

import Button from "../buttons";
import SVGIcon from "../../assets/Icons/SVGIcon";

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
  logo: string;
  logoAlt?: string;
  items: NavbarItem[];
  socialLinks?: NavbarSocialLink[];
  appLinks?: NavbarAppLink[];
  cta?: NavbarCTA;
}

const Navbar = ({
  logo,
  logoAlt = "Logo",
  items,
  socialLinks = [],
  appLinks = [],
  cta,
}: NavbarProps) => {
  
  //  * Controls whether the responsive/mobile menu is open.
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [openDropdown, setOpenDropdown] =
    useState<number | null>(null);

  //  * Opens/closes the mobile menu.

  const handleMobileMenu = () => {
    setIsMobileMenuOpen((previous) => !previous);
  };

  // Closes the mobile menu.

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <NavbarContainer>
   
      <NavbarDesktop>
        <SocialLinks>
          {socialLinks.map((social) => (
            <SocialLink
              key={social.label}
              href={social.href}
              aria-label={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SVGIcon name={social.label} width="20" height="20"  />
            </SocialLink>
          ))}
        </SocialLinks>

{/* // CENTER // Logo + Navigation */}

        <LogoSection>
          {/* Logo */}
          <Link to="/">
            <Logo
              src={logo}
              alt={logoAlt}
            />
          </Link>

          {/* Navigation */}
          <Navigation>
            {items.map((item, index) => {
              const hasChildren =
                Boolean(item.children?.length);

              return (
                <NavItem
                  key={item.label}
                  onMouseEnter={() => {
                    if (hasChildren) {
                      setOpenDropdown(index);
                    }
                  }}
                  onMouseLeave={() => {
                    if (hasChildren) {
                      setOpenDropdown(null);
                    }
                  }}
                >
                
{/* // NORMAL NAVIGATION LINK */}
                
                  {item.href ? (
                    <NavLink
                      as={Link}
                      to={item.href}
                    >
                      {item.label}
                      {hasChildren && (
                        <SVGIcon className="dropdown-icon" name="dropdown-icon" fill="var(--text-secondary)" height="22" width="22"/>
                      )}
                    </NavLink>
                  ) : (
                   
//  DROPDOWN TRIGGER
                
                    <NavLink
                      as="button"
                      type="button"
                    >
                      {item.label}
                      {hasChildren && (
                        <SVGIcon className="dropdown-icon" name="dropdown-icon" fill="var(--text-secondary)" height="22" width="22"/>
                      )}
                    </NavLink>
                  )}

{/* // DROPDOWN */}
                  
                  {hasChildren &&
                    openDropdown === index && (
                      <DropdownWrapper>
                        <DropdownConten>
                        {item.children?.map(
                          (child) => (
                            <DropdownLink
                              key={child.label}
                              as={Link}
                              to={
                                child.href ?? "#"
                              }
                            >
                              {child.label}
                
                            </DropdownLink>
                          ),
                        )}
                        </DropdownConten>
                      </DropdownWrapper>
                    )}
                </NavItem>
              );
            })}
          </Navigation>
        </LogoSection>

            {/* // Reusable Button component */}

        <div className="navbar-cta">
          {cta && (
             <Button
             href=""
               variant="secondary"
               size="small"
               title="Book Now"
             />
          )}
        </div>

    {/* MOBILE MENU BUTTON */}

        <MobileMenuButton
          type="button"
          onClick={handleMobileMenu}
          aria-label={
            isMobileMenuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? "×" : "☰"}
        </MobileMenuButton>
      </NavbarDesktop>

  {/* RESPONSIVE / MOBILE NAVBAR */}

      <ResponsiveNavbar
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        logo={logo}
        logoAlt={logoAlt}
        items={items}
        socialLinks={socialLinks}
        appLinks={appLinks}
        cta={cta}
      />
    </NavbarContainer>
  );
};

export default Navbar;