import React from "react";
import { StyledTile, Avatar, LoginName } from "./styles";

const UserTile = ({ item }: any) => {
  return (
    <StyledTile>
      <Avatar>
        <img
          style={{ maxWidth: 40 }}
          src={item.node.avatarUrl}
          alt={item.node.name}
        />
      </Avatar>
      <div>
        <h3>{item.node.name}</h3>
        <LoginName>{item.node.login}</LoginName>
      </div>
    </StyledTile>
  );
};

export default UserTile;
