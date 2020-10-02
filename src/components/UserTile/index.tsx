import React from "react";
import { StyledTile, Avatar, LoginName } from "./styles";
import { IUser } from "../../types";

interface IProps {
  user: IUser;
}

const UserTile = ({ user }: IProps) => {
  return (
    <StyledTile>
      <Avatar>
        <img style={{ maxWidth: 40 }} src={user.avatarUrl} alt={user.name} />
      </Avatar>
      <div>
        <h3>{user.name}</h3>
        <LoginName>{user.login}</LoginName>
      </div>
    </StyledTile>
  );
};

export default UserTile;
