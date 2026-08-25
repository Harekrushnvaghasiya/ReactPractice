import styled from "styled-components";

export const LogoSectionWrapper = styled.section`
  width: 100%;
  overflow: hidden;
  padding-block: var(--spacing-48);
`;

export const LogoTrack = styled.div`
  display: flex;
  align-items: center;
  width: max-content;
  animation: logoScroll 30s linear infinite;
  will-change: transform;

  @keyframes logoScroll {
    from {
      transform: translate3d(0, 0, 0);
    }

    to {
      transform: translate3d(calc(-1 * var(--marquee-distance)), 0, 0);
    }
  }
`;

export const LogoSectionInner = styled.div`
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--spacing-70);
`;

export const ClientLogo = styled.div`
  flex: 0 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  .client-logo {
    display: block;
    width: auto;
    height: 32px;
    object-fit: contain;
  }

  @media (max-width: 991px) {
    .client-logo {
      height: 28px;
    }
  }

  @media (max-width: 449px) {
    .client-logo {
      height: 18px;
    }
  }
`;
