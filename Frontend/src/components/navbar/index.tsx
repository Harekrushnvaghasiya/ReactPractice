import { useState } from "react";
import { Link } from "react-router-dom";

import ResponsiveNavbar from "./responsiveNavbar";

import {
  NavbarContainer,
  NavbarDesktop,
  SocialLinks,
  SocialLink,
  LogoSection,
  Navigation,
  NavItem,
  NavLink,
  // Dropdown,
  DropdownLink,
  MobileMenuButton,
  DropdownContent,
  DropdownWrapper,
} from "./style";

import Button from "../buttons";
import SVGIcon from "../../assets/Icons/SVGIcon";
import { NavbarProps } from "../../utils/appType";
import Image from "../image";

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
            <Image 
              className="logo"
              src={logo}
              alt={logoAlt} 
              width={82}  
              height={'auto'}
              object-fit= 'contain'
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
                        <DropdownContent>
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
                        </DropdownContent>
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