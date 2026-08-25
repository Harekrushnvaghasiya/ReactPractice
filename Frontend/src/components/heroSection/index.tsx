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
import Image from "../image";

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
  const height = size === HERO_SIZE.LARGE ? 860 : HERO_SIZE.MEDIUM ? 660 : 550;
  return (
    <HeroWrapper $size={size}>
      {/* HERO IMAGE */}
      <HeroImageWrapper>
        {heroImage && (
          <Image
            src={heroImage}
            alt=""
            className="hero-img"
            height={height}
            width={"100%"}
            objectFit="cover"
            objectPosition="center"
            priority
          />
        )}
      </HeroImageWrapper>

      {/* HERO CONTENT */}
      <div className="hero-content">
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
