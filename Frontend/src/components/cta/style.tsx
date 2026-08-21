import styled, { css } from "styled-components";
import { TONE, SPACING_TYPE } from "../global/constants";
import { Typography } from "../../styles/typography";
import { Images } from "../../assets/images";

interface CTAWrapperProps {
  $isBgImage?: boolean;
  $variant?: (typeof SPACING_TYPE)[keyof typeof SPACING_TYPE];
  $tone?: (typeof TONE)[keyof typeof TONE];
}
export const OuterWrapper = styled.div<CTAWrapperProps>`
  ${(Props) =>
    Props.$tone === TONE.CREAM &&
    css`
      background-color: var(--bg-primary);
    `}

  ${(Props) =>
    Props.$tone === TONE.WHITE &&
    css`
      background-color: var(--bg-secondary);
    `}

    ${(Props) =>
    Props.$variant === SPACING_TYPE.NONE &&
    css`
      padding: 0px;
    `}

    ${(Props) =>
    Props.$variant === SPACING_TYPE.CENTER &&
    css`
      padding-block: 120px;
      @media (max-width: 991px) {
        padding-block: 80px;
      }

      @media (max-width: 449px) {
        padding-block: 60px;
      }
    `}

    ${(Props) =>
    Props.$variant === SPACING_TYPE.TOP &&
    css`
      padding-bottom: 120px;
      @media (max-width: 991px) {
        padding-bottom: 80px;
      }

      @media (max-width: 449px) {
        padding-bottom: 60px;
      }
    `}

    ${(Props) =>
    Props.$variant === SPACING_TYPE.BOTTOM &&
    css`
      padding-top: 120px;
      @media (max-width: 991px) {
        padding-top: 80px;
      }

      @media (max-width: 449px) {
        padding-top: 60px;
      }
    `}
`;

export const CTAWrapper = styled.section<CTAWrapperProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-72);
  overflow: hidden;
  background-color: var(--bg-blue);
  border-radius: var(--spacing-8);
  border-bottom-right-radius: 200px;
  box-sizing: border-box;
  ${(Props) =>
    Props.$isBgImage &&
    css`
      background-image: url(${Images.Map});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}

  @media (max-width: 991px) {
    padding: var(--spacing-32) var(--spacing-40);
    border-bottom-right-radius: 140px;
  }

  @media (max-width: 449px) {
    flex-direction: column;
    padding: var(--spacing-32) var(--spacing-22);
    border-bottom-right-radius: 8px;
  }
`;

export const CTAContent = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 660px;
`;

export const CTATag = styled.span`
  margin-bottom: var(--spacing-16);
  ${Typography.tag}
  color: var(--text-orange);
  text-transform: uppercase;
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-12);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-6);
  }
`;

export const CTATitle = styled.h2`
  margin: 0 0 var(--spacing-24);
  ${Typography.heading_2}
  font-weight: 300;
  color: var(--text-secondary);
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-20);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-12);
  }
`;

export const CTAContentText = styled.p`
  max-width: 660px;
  width: 100%;
  margin: 0;
  ${Typography.body_2}
  color: var(--text-secondary);
`;

export const CTAButtonWrapper = styled.div`
  margin-top: var(--spacing-40);
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 991px) {
    margin-top: var(--spacing-32);
  }
  @media (max-width: 449px) {
    margin-top: var(--spacing-24);
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991px) {
    svg {
      height: 80px;
      width: 80px;
    }
  }
  @media (max-width: 449px) {
    svg {
      display: none;
    }
  }
`;
