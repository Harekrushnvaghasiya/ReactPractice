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
  FooterApps,
  FooterAppLink,
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

import FooterImage1 from "../../assets/images/FooterImage1.avif";
import FooterImage2 from "../../assets/images/FooterImage2.avif";
import FooterImage3 from "../../assets/images/FooterImage3.avif";
import FooterImage4 from "../../assets/images/FooterImage4.avif";
import FooterImage5 from "../../assets/images/FooterImage5.avif";
import FooterImage6 from "../../assets/images/FooterImage6.avif";
import FooterImage7 from "../../assets/images/FooterImage7.avif";
import googlelogo from "../../assets/images/Google Play.webp";
import logo from "../../assets/images/logo.svg";
import IOS from "../../assets/images/IOS.webp";
import SVGIcon from "../../assets/Icons/SVGIcon";
import Button from "../buttons";
import {
  pagesLinks,
  quickLinks,
  legacyLinks,
  socialLinks,
} from "../../helpers/raw";
import Image from "../image";
const Footer = () => {
  return (
    <FooterWrapper>
      {/* Image Gallery */}
      <FooterGallery>
        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage1}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>

        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage2}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />

          {/* <InstagramButton
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <SVGIcon name="instagram-icon" width="24" height="24" />
          </InstagramButton> */}
        </FooterGalleryItem>

        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage3}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>

        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage4}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>
        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage5}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>
        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage6}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>
        <FooterGalleryItem>
          <Image
            className="footer-gallery-image"
            src={FooterImage7}
            alt="Pause studio"
            height={"100%"}
            width={"100%"}
            objectFit="cover"
          />
        </FooterGalleryItem>
      </FooterGallery>

      {/* Footer Content */}

      <FooterContentWrapper>
        {/* TOP */}
        <FooterContentTop>
          <FooterTagline>
            Elevate Your Mental, Physical and Emotional well-being
          </FooterTagline>

          <FooterNewsletter>
            <FooterNewsletterTitle>
              Subscribe to be in touch
            </FooterNewsletterTitle>

            <FooterNewsletterInput type="email" placeholder="Your e-mail" />

            <MarginTop>
              <Button variant="secondary" title="Submit" size="small" />
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
              height={"auto"}
            />

            <FooterApps>
              <FooterAppLink href="#">
                <Image
                  src={IOS}
                  alt="Download on App Store"
                  width={"auto"}
                  height={40}
                />
              </FooterAppLink>

              <FooterAppLink href="#">
                <Image
                  src={googlelogo}
                  alt="Get it on Google Play"
                  width={"auto"}
                  height={40}
                />
              </FooterAppLink>
            </FooterApps>
          </FooterLogoBlock>

          {/* PAGES */}
          <FooterRightBlock>
            <FooterColumn>
              <FooterColumnTitle>PAGES</FooterColumnTitle>

              {pagesLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            {/* QUICK LINKS */}
            <FooterColumn>
              <FooterColumnTitle>QUICK LINKS</FooterColumnTitle>

              {quickLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>

            {/* LEGACY */}
            <FooterColumn>
              <FooterColumnTitle>LEGACY</FooterColumnTitle>

              {legacyLinks.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </FooterRightBlock>
        </FooterContentMiddle>

        {/* DISCLAIMER */}
        <FooterDisclaimer>
          The statements made regarding these products and services have not
          been evaluated by the Food and Drug Administration. These products and
          services are not intended to diagnose, treat, cure or prevent any
          disease. The material on this website is provided for informational
          purposes only and is not medical advice. All information presented
          here is not meant as a substitute for or an alternative to information
          from healthcare practitioners. Please consult your healthcare
          professional about potential interactions or other possible
          complications before using any product or service.
        </FooterDisclaimer>

        <FooterDivider />

        {/* BOTTOM */}
        <FooterContentBottom>
          <FooterCopyright>
            Copyright © 2025 Pause. All rights reserved.
          </FooterCopyright>

          <FooterSocialLinks>
            {socialLinks.map((social) => {
              return (
                <FooterSocialLink
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
              );
            })}
          </FooterSocialLinks>
        </FooterContentBottom>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
