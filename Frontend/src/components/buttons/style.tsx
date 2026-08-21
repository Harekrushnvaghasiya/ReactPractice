import { Typography } from "../../styles/typography";
import styled, { css } from "styled-components";
import { BUTTON_SIZE, BUTTON_VARIANTS } from "../global/constants";

interface ButtonProps {
  variant?: (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];
  size?: (typeof BUTTON_SIZE)[keyof typeof BUTTON_SIZE];
}

export const Buttons = styled.button<ButtonProps>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--bg-blue);
  color: var(--text-secondary);
  padding: var(--spacing-10) var(--spacing-28);
  ${Typography.body_2}
  gap : 10px;
  border-radius: 44px;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid transparent;
  white-space: nowrap;
  width: max-content;
  svg path {
    fill: var(--text-secondary);
  }
  span {
    position: relative;
    z-index: 1;
  }
  .hover-effect {
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    background-color: var(--bg-orange);
    transform: scale(0);
    transform-origin: center center;
    pointer-events: none;
    transition: transform 0.5s ease-in;
  }
  @media (max-width: 449px) {
    padding: var(--spacing-8) var(--spacing-24);
  }

  ${(Props) =>
    Props.size === BUTTON_SIZE.SMALL &&
    css`
      padding: var(--spacing-8) var(--spacing-24);
      ${Typography.body_3}
      @media (max-width: 449px) {
        padding: var(--spacing-6) var(--spacing-20);
      }
    `}

  ${(Props) =>
    Props.variant === BUTTON_VARIANTS.PRIMARY &&
    css`
            border-color=transparent;
            @media (min-width : 992px){
                &:hover {
                .hover-effect{
                    transform : scale(50);
                    height :100%;
                    width : 100%;
                    }
                svg path {
                  fill: var(--text-secondary);
                }    
            }
        }
    `}

    ${(Props) =>
    Props.variant === BUTTON_VARIANTS.SECONDARY &&
    css`
      background-color: var(--bg-secondary);
      color: var(--text-primary);
      .hover-effect {
        background-color: var(--bg-light-blue);
      }
      svg path {
        fill: var(--text-primary);
      }
      @media (min-width: 992px) {
        &:hover {
          .hover-effect {
            transform: scale(50);
            height: 100%;
            width: 100%;
          }
          svg path {
            fill: var(--text-primary);
          }
        }
      }
    `}

    ${(Props) =>
    Props.variant === BUTTON_VARIANTS.TERTIARY &&
    css`
      transition: all 0.2s linear;
      background-color: transparent;
      border: 1px solid var(--border-white);
      color: var(--text-secondary);
      @media (min-width: 992px) {
        &:hover {
          background-color: var(--bg-secondary);
          color: var(--text-primary);
          svg path {
            fill: var(--text-primary);
          }
        }
      }
    `}
    
  ${(Props) =>
    Props.variant === BUTTON_VARIANTS.DISABLE &&
    css`
      border-color: transparent;
      color: var(--text-secondary);
      background-color: var(--bg-border);
      @media (min-width: 992px) {
        &:hover {
          svg path {
            fill: var(--text-secondary);
          }
        }
      }
    `}
`;
export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;
