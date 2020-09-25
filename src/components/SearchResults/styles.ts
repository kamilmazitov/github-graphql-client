import styled from "styled-components";

export const StyledSearchResults = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }
`;
