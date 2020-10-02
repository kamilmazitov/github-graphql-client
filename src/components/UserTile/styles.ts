import styled from "styled-components";
import { theme } from "../../config/theme";

export const StyledTile = styled.div`
  padding: 10px;
  outline: 1px solid lightgrey;
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  flex: 0 0 10%;
  margin-right: ${theme.spacing.small};
`;

export const LoginName = styled.span`
  color: ${theme.colors.grey};
`;
