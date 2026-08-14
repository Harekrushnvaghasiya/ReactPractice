import styled from "styled-components";

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding-inline: var(--spacing-72);
  @media (max-width: 991px) {
    padding-inline: var(--spacing-20);
  }
`;
