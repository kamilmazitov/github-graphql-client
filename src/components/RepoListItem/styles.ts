import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledRepoItem = styled.div`
  background-color: ${theme.colors.tileGrey};
  color: white;
  padding: ${theme.spacing.normal};
  p {
    color: grey;
  }
`;
