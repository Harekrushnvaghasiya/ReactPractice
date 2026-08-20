import styled from "styled-components";

export const LogoSectionWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  padding-block: var(--spacing-48);

  @media (max-width: 449px) {
    padding-block: var(--spacing-20);
  }
`;

export const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: logoScroll 30s linear infinite;
  gap: var(--spacing-70);

  @keyframes logoScroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
  @media (max-width: 449px) {
    gap: var(--spacing-20);
  }
`;

export const LogoSectionInner = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ClientLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    display: block;
    width: auto;
    height: 32px;
    object-fit: contain;
  }

  @media (max-width: 449px) {
    img {
      height: 18px;
    }
  }
`;
