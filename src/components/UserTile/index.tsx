import React from "react";
import { StyledTile, Avatar } from "./styles";

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
        <p>{item.node.login}</p>
      </div>
    </StyledTile>
  );
};

export default UserTile;
