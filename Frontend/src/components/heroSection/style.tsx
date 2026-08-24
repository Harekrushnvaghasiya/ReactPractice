import styled, { css } from "styled-components";
import { HERO_SIZE, HERO_VARIANT } from "../global/constants";
import { Typography } from "../../styles/typography";

interface HeroWrapperProps {
  $size?: (typeof HERO_SIZE)[keyof typeof HERO_SIZE];
  $variant?: (typeof HERO_VARIANT)[keyof typeof HERO_VARIANT];
  $maxWidth?: string | number;
  $maxTitleWidth?: string | number;
  $maxDescWidth?: string | number;
}

const getWidth = (value?: string | number) => {
  if (value === undefined) {
    return "100%";
  }
  return typeof value === "number" ? `${value}px` : value;
};

export const HeroWrapper = styled.div<HeroWrapperProps>`
  position: relative;
  display: flex;
  align-items: flex-end;
  width: 100%;
  overflow: hidden;
  .div {
    max-width: 1440px;
    width: 100%;
    padding-inline: 72px;
    margin-inline: auto;
    @media (max-width: 991px) {
      padding-inline: 20px;
    }
  }

  ${(props) =>
    props.$size === HERO_SIZE.LARGE &&
    css`
      min-height: 860px;
      @media (max-width: 449px) {
        min-height: 680px;
      }
    `}

  ${(props) =>
    props.$size === HERO_SIZE.MEDIUM &&
    css`
      min-height: 660px;
      @media (max-width: 991px) {
        min-height: 700px;
      }
      @media (max-width: 449px) {
        min-height: 660px;
      }
    `}

    ${(props) =>
    props.$size === HERO_SIZE.SMALL &&
    css`
      min-height: 550px;
      @media (max-width: 991px) {
        min-height: 600px;
      }
      @media (max-width: 449px) {
        min-height: 540px;
      }
    `}
`;

export const HeroImageWrapper = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--image-gradient);
    z-index: 1;
  }

  .hero-img {
    display: block;
  }
`;

export const HeroInnerWrapper = styled.div<HeroWrapperProps>`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $maxWidth }) => getWidth($maxWidth)};
  margin: 0 auto;
  padding-bottom: 64px;

  ${(props) =>
    props.$variant === HERO_VARIANT.LEFT &&
    css`
      align-items: flex-start;
      justify-content: flex-end;
      text-align: left;
    `}

  ${(props) =>
    props.$variant === HERO_VARIANT.CENTER &&
    css`
      align-items: center;
      justify-content: center;
      text-align: center;
    `}

    ${(props) =>
    props.$variant === HERO_VARIANT.RIGHT &&
    css`
      div h1 {
        margin-bottom: 0px;
      }
    `}

    @media (max-width: 991px) {
    padding-bottom: var(--spacing-40);
  }

  @media (max-width: 449px) {
    padding-bottom: var(--spacing-24);
  }
`;

export const HeroContent = styled.div<HeroWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${(props) =>
    props.$variant === HERO_VARIANT.LEFT &&
    css`
      align-items: flex-start;
      text-align: left;
    `}

  ${(props) =>
    props.$variant === HERO_VARIANT.CENTER &&
    css`
      align-items: center;
      text-align: center;
    `}

    ${(props) =>
    props.$variant === HERO_VARIANT.RIGHT &&
    css`
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: var(--spacing-24);
      @media (max-width: 991px) {
        gap: var(--spacing-20);
      }

      @media (max-width: 449px) {
        gap: var(--spacing-12);
      }
    `}
`;

export const ButtonWrapper = styled.div`
  margin-top: var(--spacing-40);
  @media (max-width: 991px) {
    margin-top: var(--spacing-32);
  }
  @media (max-width: 449px) {
    margin-top: var(--spacing-24);
  }
`;

export const HeroTag = styled.div`
  margin-bottom: var(--spacing-24);
  color: var(--text-secondary);
  ${Typography.body_4}
  text-transform: uppercase;
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-16);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-6);
  }
`;

export const HeroTitle = styled.h1<HeroWrapperProps>`
  width: 100%;
  max-width: ${({ $maxTitleWidth }) => getWidth($maxTitleWidth)};
  margin-bottom: var(--spacing-24);
  color: var(--text-secondary);
  ${Typography.heading_1}
  font-weight: 500;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-bottom: var(--spacing-20);
  }

  @media (max-width: 449px) {
    max-width: 100%;
    margin-bottom: var(--spacing-12);
  }
`;

export const HeroDescription = styled.p<HeroWrapperProps>`
  width: 100%;
  max-width: ${({ $maxDescWidth }) => getWidth($maxDescWidth)};
  color: var(--text-secondary);
  ${Typography.body_2}

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;
