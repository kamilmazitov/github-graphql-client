import React from "react";

const RepoListItem = ({ repository }: any) => {
  return (
    <li>
      {JSON.stringify(repository)}
      {/* {repository.name} - {repository.stargazers.totalCount}
      <p>{repository.descriptionHTML}</p> */}
    </li>
  );
};

export default RepoListItem;
