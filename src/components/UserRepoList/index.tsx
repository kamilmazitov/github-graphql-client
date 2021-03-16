import React from "react";
import { Grid } from "./styles";
import RepoListItem from "../RepoListItem";

interface IProps {
  language?: string;
  repositories: {
    nodes: Array<{ name: string;
                   id: string;
                   description: string;
                   updatedAt: Date;
                   licenseInfo: {
                     spdxId: string;
                   };
                   stargazers: {
                     totalCount: number;
                   };
                   forks: {
                     totalCount: number;
                   };
                   primaryLanguage: {
                     id: string;
                     name: string;
                     color: string;
                   }; }>;
  };

}

const UserRepoList = ({ language = "javascript", repositories }: IProps) => {
  return (
    <Grid>
      {repositories.nodes.map(( node ) => (
        <RepoListItem repository={node} key={node.id} />
      ))}
    </Grid>
  );
};

export default UserRepoList;
