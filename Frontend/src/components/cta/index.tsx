import React from "react";
import { TONE, SPACING_TYPE, BUTTON_VARIANTS, BUTTON_SIZE } from "../global/constants";
import Button from "../buttons";
import SVGIcon from "../../assets/Icons/SVGIcon";
import {
  CTAWrapper,
  CTAContent,
  CTATag,
  CTATitle,
  CTAContentText,
  CTAButtonWrapper,
  IconWrapper,
  OuterWrapper
} from "./style";
import { CtaProps } from "../../utils/appType";
import { Container } from "../styles/commonStyle";

/**
 * CTA Component
 * @param {Object} CtaProps - The props for the Button component.
 * @param {void} CtaProps.onClick - Function to be called when the button is clicked.
 * @param {string} CtaProps.type - The type of the button (button, submit, reset).
 * @param {string} CtaProps.ariaLabel - The aria-label attribute for accessibility.
 * @param {string} CtaProps.title - The text to be displayed on the button.
 * @param {string} CtaProps.variant - The variant of the button (primary, secondary, etc.).
 * @param {string} CtaProps.type - The size of button(small,medium etc..)
 * @param {string} CtaProps.type - The size of button(small,medium etc..)
 * @param {boolean} Props.isBgImage  - show icon or not.
 */

const CTA: React.FC<CtaProps> = ({
  tag,
  title,
  Content,
  isBgImage = false,
  variant = SPACING_TYPE.NONE,
  tone = TONE.CREAM,
}) => {
  return (
    <OuterWrapper $variant={variant} $tone={tone}>
      <Container>
        <CTAWrapper $isBgImage={isBgImage}>
          <CTAContent>
            <CTATag>{tag}</CTATag>
            <CTATitle>{title}</CTATitle>
            <CTAContentText>{Content}</CTAContentText>
            <CTAButtonWrapper>
              <Button
                href=""
                variant={BUTTON_VARIANTS.SECONDARY}
                title="Apply Now"
                size={BUTTON_SIZE.SMALL}
              />
              <Button
                href=""
                variant={BUTTON_VARIANTS.TERTIARY}
                title="Learn More"
                size={BUTTON_SIZE.SMALL}
              />
            </CTAButtonWrapper>
          </CTAContent>
          <IconWrapper>
            <SVGIcon
              name="pause-cta-icon"
              height="100"
              width="100"
              fill="var(--text-secondary)"
            />
          </IconWrapper>
        </CTAWrapper>
      </Container>
    </OuterWrapper>
  );};

export default CTA;