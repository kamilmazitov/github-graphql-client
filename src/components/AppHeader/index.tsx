import React from "react";
import { StyledHeader, Nav } from "./styles";
import { useHistory } from "react-router"
import { Link } from "react-router-dom";
import { GoMarkGithub } from "react-icons/go";
import { theme } from "../../config/theme";
import { useStores } from "../../contexts";
import { observer } from 'mobx-react-lite';
import { StyledButton } from "../Button/styles";

const AppHeader = () => {
  const { appStore: store } = useStores();
  const history = useHistory();

  return (
    <StyledHeader>
      <GoMarkGithub color={theme.colors.primary} size={50} />
      <Nav>
        {store.isLogged &&
        <ul>
          <li>
            <Link to="/"><StyledButton>Home</StyledButton></Link>
          </li>
          <li>
            <Link to="/popular"><StyledButton>Popular</StyledButton></Link>
          </li>
          <li>
            <Link to="/account"><StyledButton>My Account</StyledButton></Link>
          </li>
          <li>
            <StyledButton onClick={() => {
              store.logout()
              history.push("/login")
            }}>
              Logout
            </StyledButton>
          </li>
        </ul>
        }
        {!store.isLogged &&
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
        }
      </Nav>
    </StyledHeader>
  );
};

export default observer(AppHeader);
