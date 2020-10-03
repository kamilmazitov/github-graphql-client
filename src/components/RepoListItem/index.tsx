import React from "react";
import { StyledRepoItem } from "./styles";
import { IRepository } from "../../types";

interface IProps {
  repository: IRepository;
}

const RepoListItem = ({ repository }: IProps) => {
  return (
    <StyledRepoItem>
      <h3>{repository.name}</h3>
      <p>{repository.stargazers.totalCount}</p>
    </StyledRepoItem>
  );
};

export default RepoListItem;
