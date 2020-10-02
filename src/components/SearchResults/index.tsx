import React from "react";
import { UserGrid } from "./styles";
import UserTile from "../UserTile";
import Debug from "../Debug";
import { ApolloError, gql } from "apollo-boost";
import Container from "../Container";
import { useQuery } from "@apollo/react-hooks";
import FetchMoreButton from "../FetchMoreButton";

interface IUserSearchResult {
  node: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

interface IProps {
  searchTerm: string;
  // loading: boolean;
  // error: ApolloError | undefined;
  // data: {
  //   search: {
  //     edges: IUserSearchResult[];
  //   };
  // };
}

const SearchResults = ({ searchTerm }: IProps) => {
  const { data, loading, error, fetchMore } = useQuery(SEARCH_USER, {
    variables: { queryString: searchTerm }
  });
  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth={1200}>
      <UserGrid>
        {data &&
          data.search.edges.map((item: any) => {
            return <UserTile key={item.node.id} item={item} />;
          })}
      </UserGrid>
      {data.search.edges.length > 0 && (
        <FetchMoreButton edges={data.search.edges} fetchMore={fetchMore} />
      )}
      {/* <Debug data={data} /> */}
    </Container>
  );
};

export default SearchResults;

// use alias for node / user? see chris toomey example

const SEARCH_USER = gql`
  query userSearch($queryString: String!, $cursor: String) {
    search(query: $queryString, type: USER, first: 12, after: $cursor) {
      edges {
        cursor
        node {
          ... on User {
            id
            name
            avatarUrl
            login
          }
        }
      }
    }
  }
`;
