import styled from "styled-components";
import { Typography } from "../../styles/typography";

export const VisionSection = styled.div`
  display: flex;
  justify-content: center;
`;

export const VisionWrapper = styled.div`
  padding: 120px 72px 120px 0;
  display: flex;
  align-items: center;
  max-width: 1440;
  margin: 0px auto;
  gap: var(--spacing-60);
  @media (max-width: 991px) {
    flex-direction: column;
    padding: 80px 20px;
  }
  @media (max-width: 449px) {
    padding: 60px 20px;
    gap: var(--spacing-36);
  }
`;

export const VisionImageWrapper = styled.div`
  display: flex;
  gap: var(--spacing-20);
  img {
    border-radius: 8px;
    object-fit: cover;
    aspect-ratio: auto;
  }
  @media (max-width: 1024px) {
    img {
      width: 250px;
      height: 530px;
    }
  }
  @media (max-width: 991px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    img {
      width: 100%;
      height: 100%;
    }
  }
  @media (max-width: 449px) {
    width: 100%;
    gap: 9px;
    grid-template-columns: repeat(1, 1fr);
    img {
      height: 305px;
    }
  }
`;

export const VisionContentWrapper = styled.div`
  max-width: 556px;
  width: 100%;
  @media (max-width: 991px) {
    max-width: none;
  }
`;
export const VisionTag = styled.div`
  color: var(--text-orange);
  ${Typography.body_3}
  text-transform: uppercase;
  margin-bottom: var(--spacing-16);
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-12);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-6);
  }
`;

export const VisionTitle = styled.h2`
  margin: 0;
  color: var(--text-primary);
  ${Typography.heading_2}
  font-family : var(--font-family-secondary);
  font-weight: 300;
  margin-bottom: var(--spacing-24);
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-20);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-12);
  }
`;

export const VisionDescription = styled.p`
  color: var(--text-primary);
  ${Typography.body_2}
  font-family : var(--font-family-secondary);
  margin-bottom: var(--spacing-40);
  @media (max-width: 991px) {
    margin-bottom: var(--spacing-32);
  }
  @media (max-width: 449px) {
    margin-bottom: var(--spacing-24);
  }
`;
