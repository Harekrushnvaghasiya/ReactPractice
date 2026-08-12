import styled from "styled-components";
import { Typography } from "../styles/typography";
// navbar wrapper

export const NavbarContainer = styled.header`
  width: 100%;
  position: relative;
  z-index: 1000;
`;

  //  DESKTOP NAVBAR

export const NavbarDesktop = styled.nav`
  width: 100%;
  min-height: 100px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  padding: 0 40px;
  background: #1b3452;
  box-sizing: border-box;

  /* Right-side CTA */
  .navbar-cta {
    justify-self: end;
  }

  @media (max-width: 991px) {
    min-height: 64px;
    padding: 0 24px;
    display: flex;
    justify-content:space-between;
    align-items:center;
    .navbar-cta {
      display:none;
    }
  }
`;
  //  SOCIAL LINKS - LEFT SIDE


export const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  min-width: 0;

  @media (max-width: 991px) {
    display: none;
  }
`;

export const SocialLink = styled.a`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  background: #ffffff;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
`;

// center section logo + content 

export const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-width: 0;

  @media (max-width: 991px) {
    align-items: flex-start;
    justify-self: start;
  }
`;
// logo

export const Logo = styled.img`
  display: block;
  width: 82px;
  height: auto;
  object-fit: contain;
  @media (max-width: 991px) {
    width: 80px;
  }
`;

// desktop navigation

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  white-space: nowrap;
  position : relative;
  @media (max-width: 991px) {
    display: none;
  }
`;

  //  NAV ITEM

export const NavItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

  //  NAV LINK

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 4px 0;
  border: 0;
  background: transparent;
  color: #ffffff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
  cursor: pointer;
  ${Typography.body_2}
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.75;
  }
  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 4px;
  }
  span {
    display: inline-flex;
    font-size: 11px;
    line-height: 1;
    transform: translateY(-1px);
  }
`;
  //  DROPDOWN

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 100% ;
  padding-top: 8px;
  // left: 50%;
  // transform: translateX(-50%);
  z-index: 1100;
  
  // &::before {
  //   content: "";
  //   position: absolute;
  //   // top: -6px;
  //   // left: 50%;
  //   // width: 12px;
  //   // height: 12px;
  //   background: #ffffff;
  //   // transform: translateX(-50%) rotate(45deg);
  // }
`;

export const DropdownContent = styled.div`
 min-width: 210px;
  padding: 18px 0;
  background: #ffffff;
  border-radius: 6px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  `
  //  DROPDOWN LINK

export const DropdownLink = styled.a`
  display: block;
  width: 100%;
  padding: 10px 16px;
  box-sizing: border-box;
  color: #1b3452;
  font-family: inherit;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
  transition:
    background 0.2s ease,
    color 0.2s ease;
  &:hover {
    background: #f3f5f7;
    color: #1b3452;
  }
  &:focus-visible {
    outline: 2px solid #1b3452;
    outline-offset: -2px;
  }
`;

  //  MOBILE MENU BUTTON

export const MobileMenuButton = styled.button`
  display: none;
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  justify-self: end;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: #ffffff;
  color: #1b3452;
  font-family: inherit;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  transition:
    transform 0.2s ease,
    background 0.2s ease;
  &:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
  }
  @media (max-width: 991px) {
    display: flex;
  }
`;