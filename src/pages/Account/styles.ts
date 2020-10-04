import styled from "styled-components";
import { theme } from "../../config/theme";

export const UserInfo = styled.div`
  background-color: ${theme.colors.tileGrey};
  padding: ${theme.spacing.normal};
  display: flex;
`;

export const Img = styled.figure`
  margin-right: ${theme.spacing.normal};
`;
