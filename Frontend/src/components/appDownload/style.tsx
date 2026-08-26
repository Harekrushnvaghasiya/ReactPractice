import styled from "styled-components";

export const AppDownloadWrapper = styled.div<{ $isNavbar: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ $isNavbar }) => ($isNavbar ? "16px" : "24px")};

  @media (max-width: 449px) {
    gap: ${({ $isNavbar }) => ($isNavbar ? "16px" : "20px")};
    a, a img{
        height: var(--spacing-36);
    }
  }
`;

export const AppDownloadLink = styled.a`
  display: block;
  text-decoration: none;
`;
