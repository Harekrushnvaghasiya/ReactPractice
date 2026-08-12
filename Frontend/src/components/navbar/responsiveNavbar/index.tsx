import { useState } from "react";
import { Link } from "react-router-dom";

import {
  ResponsiveContainer,
  ResponsiveHeader,
  ResponsiveLogo,
  CloseButton,
  ResponsiveContent,
  MobileNavigation,
  MobileNavItem,
  MobileNavLink,
  MobileDropdownButton,
  MobileDropdown,
  MobileDropdownLink,
  MobileFooter,
  MobileSocialLinks,
  MobileSocialLink,
  MobileAppLinks,
  MobileAppLink,
  MobileCTA,
  ResponsiveButtonWrapper,
  LogosWrapper
} from "./style";

import SVGIcon from "../../../assets/Icons/SVGIcon";
import Button from "../../buttons";
import { Images } from "../../../assets/images";
import { NavbarProps } from "../../../utils/appType";

const ResponsiveNavbar = ({
  isOpen,
  onClose,
  logo,
  logoAlt = "Logo",
  items,
  socialLinks = [],
  appLinks = [],
  cta,
}: NavbarProps) => {
  const [openDropdown, setOpenDropdown] =
    useState<number | null>(null);

  if (!isOpen) {
    return null;
  }

  const toggleDropdown = (index: number) => {
    setOpenDropdown((previous) =>
      previous === index ? null : index,
    );
  };

  return (
    <ResponsiveContainer>
      {/* HEADER */}
      <ResponsiveHeader>
        <Link to="/" onClick={onClose}>
          <ResponsiveLogo
            src={logo}
            alt={logoAlt}
          />
        </Link>

        <CloseButton
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
        >
          ×
        </CloseButton>
      </ResponsiveHeader>

      {/* MENU CONTENT */}
      <ResponsiveContent>
        <MobileNavigation>
          {items.map((item, index) => {
            const hasChildren =
              Boolean(item.children?.length);
// normal link
            if (!hasChildren) {
              return (
                <MobileNavItem
                  key={item.label}
                >
                  <MobileNavLink
                    as={Link}
                    to={item.href ?? "#"}
                    onClick={onClose}
                  >
                    {item.label}
                  </MobileNavLink>
                </MobileNavItem>
              );
            }

// dropdown

            const isOpen =
              openDropdown === index;

            return (
              <MobileNavItem
                key={item.label}
              >
                <MobileDropdownButton
                  type="button"
                  onClick={() =>
                    toggleDropdown(index)
                  }
                  aria-expanded={isOpen}
                >
                  <span>{item.label}</span>

                  <SVGIcon className="dropdown-icon" name="dropdown-icon" fill="var(--text-secondary)" height="20" width="20"/>
                </MobileDropdownButton>

                {isOpen && (
                  <MobileDropdown>
                    {item.children?.map(
                      (child) => (
                        <MobileDropdownLink
                          key={child.label}
                          as={Link}
                          to={
                            child.href ?? "#"
                          }
                          onClick={onClose}
                        >
                          {child.label}
                        </MobileDropdownLink>
                      ),
                    )}
                  </MobileDropdown>
                )}
              </MobileNavItem>
            );
          })}
        </MobileNavigation>
        <MobileFooter>
          {/* FOOTER */}

        <LogosWrapper> 
          {/* SOCIAL ICONS */}
          {socialLinks.length > 0 && (
            <MobileSocialLinks>
              {socialLinks.map((social) => (
                <MobileSocialLink
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                >
                <SVGIcon name={social.label} height="20" width="20" />
                </MobileSocialLink>
              ))}
            </MobileSocialLinks>
          )}

          {/* APP STORE LINKS */}
          {appLinks.length > 0 && (
            <MobileAppLinks>
              {appLinks.map((app) => (
                <MobileAppLink
                  key={app.label}
                  href={app.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={app.image}
                    alt={app.label}
                  />
                </MobileAppLink>
              ))}
            </MobileAppLinks>
          )}
          </LogosWrapper>  

          {/* BOOK NOW */}
          {cta && (
            <ResponsiveButtonWrapper>
              <Button variant="secondary" size="small" title="Book Now" />
            </ResponsiveButtonWrapper>
          )}
        </MobileFooter>
      </ResponsiveContent>
    </ResponsiveContainer>
  );
};

export default ResponsiveNavbar;