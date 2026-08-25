import styled from "styled-components";
import { Typography } from "../../styles/typography";

// MAIN FOOTER
export const FooterWrapper = styled.footer`
  width: 100%;
  background: var(--bg-blue);
  color: var(--text-secondary);
`;

// IMAGE GALLERY
export const FooterGallery = styled.div`
  width: 100%;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  overflow: hidden;
  @media (max-width: 449px) {
    height: 180px;
  }
`;

export const FooterGalleryItem = styled.div`
  position: relative;
  width: 418px;
  height: 300px;
  overflow: hidden;
  cursor: pointer;

  .footer-gallery-image {
    display: block;
    transition: transform 0.3s ease;
  }

  &:hover {
    .footer-gallery-image {
      transform: scale(1.03);
    }
  }

  @media (max-width: 449px) {
    width: 196px;
    height: 180px;
  }
`;



// INSTAGRAM OVER GALLERY
export const InstagramButton = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--bg-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: transform 0.2s ease;
  &:hover {
    transform: translate(-50%, -50%) scale(1.08);
  }
`;

// CONTENT WRAPPER
export const FooterContentWrapper = styled.div`
  width: 100%;
  padding: 120px 60px 32px;
  @media (max-width: 991px) {
    padding: 80px 20px 24px;
  }
  @media (max-width: 449px) {
    padding: 60px 20px 16px;
  }
`;

// top content
export const FooterContentTop = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-bottom: 80px;
  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-40);
    margin-bottom: 60px;
  }
  @media (max-width: 449px) {
    gap: 24px;
    margin-bottom: 36px;
  }
`;

export const FooterTagline = styled.h2`
  margin: 0;
  max-width: 456px;
  ${Typography.heading_4}
  color: var(--text-secondary);
`;

// newsletter
export const FooterNewsletter = styled.div`
  width: 100%;
  max-width: 550px;
`;

export const FooterNewsletterTitle = styled.h3`
  margin: 0 0 30px;
  ${Typography.body_1}
  color: var(--text-secondary);
`;

export const FooterNewsletterInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--border-primary);
  background: transparent;
  padding: 0 0 10px;
  outline: none;
  color: var(--text-secondary);
  ${Typography.body_2}
  &::placeholder {
    color: var(--bg-midnight-blue);
  }
  &:focus {
    border-bottom-color: var(--border-white);
  }
`;

// middle section
export const FooterContentMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: var(--spacing-50);
  align-items: flex-start;
  margin-bottom: 80px;

  @media (max-width: 991px) {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-40);
    margin-bottom: 60px;
  }
  @media (max-width: 449px) {
    gap: var(--spacing-32);
    margin-bottom: 36px;
  }
`;

// logo
export const FooterLogoBlock = styled.div`
  margin-bottom: 28px;
  display: flex;
  flex-direction: column;
  gap: 46px;
  .footer-logo {
    display: block;
    @media (max-width: 449px) {
      width: 126px;
    }
  }
  @media (max-width: 991px) {
    display: flex;
    flex-wrap: wrap;
    column-gap: 46px;
    row-gap: 30px;
    margin-bottom: 0px;
  }
  @media (max-width: 449px) {
    gap: 24px;
    flex-direction: column;
    align-items: flex-start;
  }
`;


// APP STORE LINKS
export const FooterApps = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  @media (max-width: 991px) {
    gap: 20px;
  }
`;

export const FooterAppLink = styled.a`
  display: block;
  height: 40px;
  div {
    display: block;
  }
`;

//  FOOTER COLUMNS
export const FooterRightBlock = styled.div`
  display: flex;
  gap: 60px;
  justify-content: space-between;
  width: 100%;
  max-width: 550px;
  @media (max-width: 991px) {
    max-width: none;
    justify-content: flex-start;
  }
`;
export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 991px) {
    max-width: 150px;
    width: 100%;
  }
`;

export const FooterColumnTitle = styled.h4`
  margin: 0 0 20px;
  ${Typography.tag}
  font-weight: 500;
  color: var(--text-secondary);
  @media (max-width: 449px) {
    margin: 0 0 12px;
  }
`;

export const FooterLink = styled.a`
  margin-bottom: 16px;
  color: var(--text-midnight-blue);
  ${Typography.body_3}
  text-decoration: none;
  transition: color 0.2s ease;
  &:hover {
    color: var(--text-secondary);
  }
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 449px) {
    margin-bottom: 8px;
  }
`;

// DISCLAIMER
export const FooterDisclaimer = styled.p`
  max-width: 900px;
  margin: 0;
  color: var(--text-midnight-blue);
  ${Typography.body_4};
  @media (max-width: 991px) {
    max-width: none;
  }
`;

//  DIVIDER
export const FooterDivider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--border-primary);
  margin: 30px 0 32px;
  @media (max-width: 991px) {
    margin: 32px 0 24px;
  }
  @media (max-width: 449px) {
    margin: 20px 0 18px;
  }
`;

// BOTTOM SECTION
export const FooterContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 449px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    gap: 16px;
  }
`;

export const FooterCopyright = styled.p`
  margin: 0;
  color: var(--text-midnight-blue);
  ${Typography.body_4}
`;

// Social links
export const FooterSocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const FooterSocialLink = styled.a`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  svg {
    display: block;
  }
  &:hover {
    opacity: 0.7;
  }
`;

export const MarginTop = styled.div`
  margin-top: 18px;
`;
