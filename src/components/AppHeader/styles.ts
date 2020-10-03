import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledHeader = styled.header`
  padding: 1rem;
  background-color: ${theme.colors.tileGrey};
`;

export const Nav = styled.nav`
  ul {
    list-style-type: none;
    display: flex;
    li {
      margin-right: 10px;
      a {
        text-decoration: none;
        color: whitesmoke;
      }
    }
  }
`;
