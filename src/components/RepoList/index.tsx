import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from "../Container";
import { Grid } from "./styles";

import RepoListItem from "../RepoListItem";
import { IRepository } from "../../types";

interface IRepoSearchResult {
  search: {
    edges: Array<{ repository: IRepository }>;
  };
}

interface IProps {
  language?: string;
}

const RepoList = ({ language = "javascript" }: IProps) => {
  const { data, loading, error } = useQuery<IRepoSearchResult>(
    SEARCH_POPULAR_REPOS,
    {
      variables: { queryString: `language:${language} stars:>10000` }
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth={1900}>
      <Grid>
        {data?.search.edges.map(({ repository }) => (
          <RepoListItem key={repository.id} repository={repository} />
        ))}
      </Grid>
    </Container>
  );
};

export default RepoList;

const SEARCH_POPULAR_REPOS = gql`
  query searchPopularRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        repository: node {
          ... on Repository {
            id
            name
            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`;
