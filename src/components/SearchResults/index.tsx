import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { StyledSearchResults } from "./styles";
import UserTile from "../UserTile";

interface ISearchResult {
  node: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

interface ISearchResponse {
  search: {
    edges: ISearchResult[];
  };
}

const SEARCH_USER = gql`
  query userSearch {
    search(first: 12, type: USER, query: "thomas") {
      edges {
        node {
          ... on User {
            id
            name
            avatarUrl
          }
        }
      }
    }
  }
`;

const SearchResults = () => {
  const { data, loading, error } = useQuery<ISearchResponse>(SEARCH_USER);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error...</p>;

  return (
    <StyledSearchResults>
      {data!.search.edges.map(item => {
        return <UserTile key={item.node.id} item={item} />;
      })}
    </StyledSearchResults>
  );
};

export default SearchResults;
