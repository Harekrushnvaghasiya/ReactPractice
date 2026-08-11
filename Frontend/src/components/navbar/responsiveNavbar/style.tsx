import styled from "styled-components";

export const ResponsiveContainer = styled.aside`
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100dvh;
  background: #1d3b5d;
  color: #ffffff;
  overflow-y: auto;
  @media (min-width: 901px) {
    display: none;
  }
`;
export const ResponsiveButtonWrapper = styled.div`
  width : 100%;
  max-width:300px;
  margin-inline: auto;
  button{
  width:100%}
`

export const ResponsiveHeader = styled.div`
  min-height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid
    rgba(255, 255, 255, 0.15);
  box-sizing: border-box;
`;

export const ResponsiveLogo = styled.img`
  width: 80px;
  height: auto;
  display: block;
`;

export const CloseButton = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  background: #ffffff;
  color: #1d3b5d;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
`;

export const ResponsiveContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const MobileNavigation = styled.nav`
  width: 100%;
`;

export const MobileNavItem = styled.div`
  width: 100%;
  border-bottom: 1px solid
    rgba(255, 255, 255, 0.12);
`;

export const MobileNavLink = styled.a`
  min-height: 46px;
  display: flex;
  align-items: center;
  width: 100%;
  color: #ffffff;
  font-size: 14px;
  text-decoration: none;
  box-sizing: border-box;
`;

export const MobileDropdownButton = styled.button`
  width: 100%;
  min-height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  border: none;
  background: transparent;
  color: #ffffff;
  font-size: 14px;
  text-align: left;
  cursor: pointer;
`;

export const MobileDropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 10px 10px;
`;

export const MobileDropdownLink = styled.a`
  padding: 6px 0;
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  line-height: 1.4;
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: #ffffff;
  }
`;

export const MobileFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: auto;
  padding: 24px 0;
  box-sizing: border-box;
`;

export const MobileSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MobileSocialLink = styled.a`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffffff;
  color: #1d3b5d;
  text-decoration: none;
`;

export const MobileAppLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MobileAppLink = styled.a`
  display: block;
  img {
    display: block;
    width: 105px;
    height: auto;
  }
`;

export const MobileCTA = styled.a`
  width: 100%;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: #ffffff;
  color: #1d3b5d;
  font-size: 13px;
  font-weight: 400;
  text-decoration: none;
`;