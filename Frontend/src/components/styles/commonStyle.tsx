import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding: var(--spacing-0) var(--spacing-72);
  @media (max-width: 991px) {
    padding: var(--spacing-0) var(--spacing-20);
  }
`;
