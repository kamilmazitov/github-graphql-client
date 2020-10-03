import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: minmax(150px, auto);

  /* grid-template-rows: repeat(auto-fit, minmax(150px, 1fr)); */
  grid-gap: 1rem;
`;
