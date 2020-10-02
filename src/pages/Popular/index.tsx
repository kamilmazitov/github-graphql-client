import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const SEARCH_POPULAR_REPOS = gql`
  query searchPopularRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      repositoryCount
      edges {
        repository: node {
          ... on Repository {
            name
            descriptionHTML
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
            updatedAt
          }
        }
      }
    }
  }
`;

const Popular = () => {
  const { data, loading, error } = useQuery(SEARCH_POPULAR_REPOS, {
    variables: { queryString: "language:JavaScript stars:>10000" }
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <pre>
        <code>{JSON.stringify(data, null, 2)}</code>
      </pre>
    </div>
  );
};

export default Popular;
