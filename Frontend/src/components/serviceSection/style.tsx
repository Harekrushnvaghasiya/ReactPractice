import styled, { css } from "styled-components";
import { Typography } from "../styles/typography";

export const ServiceWrapper = styled.section`
  width: 100%;
  padding-block: var(--spacing-120);
  overflow: hidden;
  background-color: var(--bg-primary);

  .mobile-visible {
    display: none;
  }
  .mobile-visible {
    @media (max-width: 449px) {
      display: flex;
    }
  }

  @media (max-width: 991px) {
    padding-block: var(--spacing-60);
  }

  @media (max-width: 449px) {
    padding-block: var(--spacing-40);
  }
`;

export const ServiceTopWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: var(--spacing-40);
  width: 100%;
  margin-bottom: var(--spacing-60);

  @media (max-width: 991px) {
    gap: var(--spacing-24);
    padding-inline: 0;
  }

  @media (max-width: 449px) {
    align-items: flex-start;
    padding-inline: 0;
    margin-bottom: var(--spacing-36);
  }
`;

export const ServiceTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-12);
  max-width: 700px;

  @media (max-width: 449px) {
    max-width: 100%;
  }
`;

export const ServiceTag = styled.span`
  color: var(--text-orange);
  ${Typography.body_4}
  text-transform: uppercase;
`;

export const ServiceTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
  ${Typography.heading_2}
  font-family : var(--font-family-secondary);
`;

export const ServiceButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  flex-shrink: 0;

  @media (max-width: 449px) {
    display: none;
    align-items: center;
    justify-content: center;
    margin-top: var(--spacing-36);
  }
`;

export const ServiceArrowButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 1px solid var(--border-primary);
  border-radius: 50%;
  background: transparent;
  color: var(--text-primary);
  cursor: pointer;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease;

  svg {
    display: block;
  }

  svg path {
    stroke: currentColor !important;
  }

  &:hover {
    background-color: var(--bg-blue);
    color: var(--text-secondary);
    border-color: var(--bg-blue);
  }
  &:disabled {
    color: var(--border-secondary);
    border-color: var(--border-secondary);
    cursor: not-allowed;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const ServiceBottomWrapper = styled.div`
  /* width: calc(100% - 80px);
  margin-inline: 40px; */
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 991px) {
    width: calc(100% - 40px);
    margin-inline: 20px;
  }
`;

export const ServiceCards = styled.div`
  display: flex;
  align-items: stretch;
  gap: var(--spacing-20);
  margin: 0 auto;

  @media (min-width: 1440px) {
    margin-left: calc(-678px + 50vw);
  }

  @media (max-width: 1439px) and (min-width: 992px) {
    margin-left: var(--spacing-40);
  }

  @media (max-width: 991px) {
    gap: var(--spacing-20);
    margin-left: 0;
  }

  @media (max-width: 449px) {
    gap: var(--spacing-16);
  }
`;

export const ServiceNumber = styled.span`
  color: var(--text-primary);
  ${Typography.body_2}
`;

export const ServiceCardTitle = styled.h3`
  margin: 0;
  color: var(--text-primary);
  ${Typography.heading_5}
  font-weight: var(--font-weight-medium);
  @media (max-width: 991px) {
    max-width: 244px;
  }
`;

export const ServiceTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-8);
  margin-bottom: var(--spacing-12);
  position: relative;
  z-index: 5;
`;

export const ServiceImage = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transform: scale(1);
`;

export const ServiceDescription = styled.p`
  padding-bottom: 24px;
  color: var(--text-secondary);
  ${Typography.body_1}
  line-height: 26px;
`;

export const ServiceCardArrow = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 6;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--border-white);
  border-radius: 50%;
  color: var(--text-secondary);
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.25s ease,
    visibility 0.25s ease;

  @media (max-width: 991px) {
    opacity: 1;
    visibility: visible;
  }
`;

export const ServiceCardBlock = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 3px;
  z-index: 4;
  display: flex;
  align-items: flex-end;
  min-height: 55%;
  padding-inline: 20px;
  background: var(--image-linear);
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition:
    opacity 0.35s ease,
    transform 0.35s ease,
    visibility 0.35s ease;

  @media (max-width: 991px) {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
    bottom: 0px;
  }
`;

export const ServiceImageWrapper = styled.div<{ $featured?: boolean }>`
  position: relative;
  width: 100%;
  height: 396px;
  overflow: hidden;
  border-radius: var(--spacing-8);
  transition:
    width 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    height 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 1439px) and (min-width: 992px) {
    height: 400px;
  }

  @media (max-width: 991px) {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  @media (max-width: 449px) {
    height: 100%;
  }
`;

export const ServiceCard = styled.div<{ $featured?: boolean }>`
  position: relative;
  width: 396px;
  min-width: 396px;
  height: 470px;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-30) var(--spacing-30) 0 var(--spacing-30);
  overflow: hidden;
  border-radius: var(--spacing-8);


  @media (max-width: 991px) {
    width: 324px;
    min-width: 324px;
    height: 400px;
    padding: var(--spacing-20);
  }

  @media (max-width: 449px) {
    width: 280px;
    min-width: 280px;
    height: 378px;
    padding: var(--spacing-16);
  }

  &:hover {
    ${ServiceImageWrapper} {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
    }

    ${ServiceTitleBlock} {
      position: absolute;
      inset: 20px;
      z-index: 5;
      margin: 0;
      pointer-events: none;
      @media (max-width: 449px) {
        inset: 16px;
      }
    }

    ${ServiceNumber},
    ${ServiceCardTitle} {
      display: none;
    }

    ${ServiceCardBlock} {
      opacity: 1;
      visibility: visible;
    }

    ${ServiceCardArrow} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 991px) {
    ${ServiceTitleBlock} {
      position: absolute;
      top: 20px;
      left: 20px;
      right: 20px;
      z-index: 5;
      margin: 0;
    }

    ${ServiceNumber} {
      display: none;
    }

    ${ServiceCardTitle} {
      display: block !important;
      color: var(--text-secondary);
    }

    ${ServiceCardBlock} {
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
    }

    ${ServiceCardArrow} {
      opacity: 1;
      visibility: visible;
    }
  }

  @media (max-width: 449px) {
    ${ServiceTitleBlock} {
      top: 16px;
      left: 16px;
      right: 16px;
    }
  }
`;
