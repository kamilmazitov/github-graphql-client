import React from "react";
import { StyledHeader, Nav } from "./styles";
import { Link } from "react-router-dom";

const AppHeader = () => {
  return (
    <StyledHeader>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/popular">popular</Link>
          </li>
        </ul>
      </Nav>
    </StyledHeader>
  );
};

export default AppHeader;
