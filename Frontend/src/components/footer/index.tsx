import {
  FooterWrapper,
  FooterGallery,
  FooterGalleryItem,
  FooterContentWrapper,
  FooterContentTop,
  FooterTagline,
  FooterNewsletter,
  FooterNewsletterTitle,
  FooterNewsletterInput,
  FooterContentMiddle,
  FooterLogoBlock,
  FooterColumn,
  FooterColumnTitle,
  FooterLink,
  FooterDisclaimer,
  FooterDivider,
  FooterContentBottom,
  FooterCopyright,
  FooterSocialLinks,
  FooterSocialLink,
  MarginTop,
  FooterRightBlock,
} from "./style";

import SVGIcon from "../../assets/Icons/SVGIcon";
import Button from "../buttons";
import Image from "../image";
import { FooterProps } from "../../utils/appType";
import AppDownload from "../appDownload";

const Footer = ({
  logo,
  galleryImages,
  tagline,
  newsletter,
  footerLinks,
  disclaimer,
  copyright,
  socialLinks,
}: FooterProps) => {
  return (
    <FooterWrapper>
      {/* IMAGE GALLERY */}
      <FooterGallery>
        {galleryImages.map((image, index) => (
          <FooterGalleryItem key={index}>
            <Image
              className="footer-gallery-image"
              src={image}
              alt="Pause studio"
              height="100%"
              width="100%"
              objectFit="cover"
            />
          </FooterGalleryItem>
        ))}
      </FooterGallery>

      {/* FOOTER CONTENT */}
      <FooterContentWrapper>
        {/* TOP */}
        <FooterContentTop>
          <FooterTagline>{tagline}</FooterTagline>

          <FooterNewsletter>
            <FooterNewsletterTitle>{newsletter.title}</FooterNewsletterTitle>

            <FooterNewsletterInput
              type="email"
              placeholder={newsletter.placeholder}
            />

            <MarginTop>
              <Button
                variant="secondary"
                title={newsletter.buttonText}
                size="small"
              />
            </MarginTop>
          </FooterNewsletter>
        </FooterContentTop>

        {/* MIDDLE */}
        <FooterContentMiddle>
          {/* LOGO + APPS */}
          <FooterLogoBlock>
            <Image
              className="footer-logo"
              src={logo}
              alt="Pause"
              width={153}
              height="auto"
            />

            <AppDownload />
          </FooterLogoBlock>

          {/* FOOTER COLUMNS */}
          <FooterRightBlock>
            {footerLinks.map((column) => (
              <FooterColumn key={column.title}>
                <FooterColumnTitle>{column.title}</FooterColumnTitle>

                {column.links.map((link) => (
                  <FooterLink key={link.label} href={link.href}>
                    {link.label}
                  </FooterLink>
                ))}
              </FooterColumn>
            ))}
          </FooterRightBlock>
        </FooterContentMiddle>

        {/* DISCLAIMER */}
        <FooterDisclaimer>{disclaimer}</FooterDisclaimer>

        <FooterDivider />

        {/* BOTTOM */}
        <FooterContentBottom>
          <FooterCopyright>{copyright}</FooterCopyright>

          <FooterSocialLinks>
            {socialLinks.map((social) => (
              <FooterSocialLink
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <SVGIcon
                  name={social.label}
                  width="20"
                  height="20"
                  fill="var(--text-secondary)"
                />
              </FooterSocialLink>
            ))}
          </FooterSocialLinks>
        </FooterContentBottom>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
