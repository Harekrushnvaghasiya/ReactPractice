import React from "react";
import { HeroProps } from "../../utils/appType";
import {
  ButtonWrapper,
  HeroContent,
  HeroDescription,
  HeroImageWrapper,
  HeroInnerWrapper,
  HeroTag,
  HeroTitle,
  HeroWrapper,
} from "./style";
import Button from "../buttons";
import { HERO_SIZE, HERO_VARIANT } from "../global/constants";
import { Images } from "../../assets/images";
import { Container } from "../styles/commonStyle";

const Hero: React.FC<HeroProps> = ({
  tag,
  title,
  description,
  size = HERO_SIZE.LARGE,
  variant = HERO_VARIANT.LEFT,
  primaryButtonLink,
  primaryButtonText,
  maxTitleWidth = 677,
  maxDescWidth = 539,
  maxWidth,
  heroImage
}) => {
  const isShowButton = primaryButtonText && primaryButtonLink;

  return (
    <HeroWrapper $size={size}>
      {/* HERO IMAGE */}
      <HeroImageWrapper>
        {heroImage && <img src={heroImage} alt="" />}
      </HeroImageWrapper>

      {/* HERO CONTENT */}
      <div className="div">
        <HeroInnerWrapper $variant={variant} $maxWidth={maxWidth}>
          {tag && <HeroTag>{tag}</HeroTag>}

          <HeroContent $variant={variant}>
            <HeroTitle $maxTitleWidth={maxTitleWidth}>{title}</HeroTitle>

            <HeroDescription $maxDescWidth={maxDescWidth}>
              {description}
            </HeroDescription>
          </HeroContent>

          {/* BUTTON */}
          {isShowButton && (
          <ButtonWrapper>
              <Button
                title={primaryButtonText}
                href={primaryButtonLink}
                size="small"
                isShowIcon
                variant="secondary"
              />
            </ButtonWrapper>
            )}
        </HeroInnerWrapper>
      </div>
    </HeroWrapper>
  );
};

export default Hero;
