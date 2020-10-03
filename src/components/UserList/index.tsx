import React from "react";
import { UserGrid } from "./styles";
import UserTile from "../UserTile";
import { gql } from "apollo-boost";
import Container from "../Container";
import { useQuery } from "@apollo/react-hooks";
import { IUser } from "../../types";
import Button from "../Button";

interface IEdge {
  cursor: string;
  user: IUser;
}

interface ISearchUserResult {
  search: {
    edges: IEdge[];
  };
}

interface IProps {
  searchTerm: string;
}

const UserList = ({ searchTerm }: IProps) => {
  const { data, loading, error, fetchMore } = useQuery<ISearchUserResult>(
    SEARCH_USER,
    {
      variables: { queryString: searchTerm }
    }
  );

  const handleLoadMore = (edges: IEdge[]) => {
    const { cursor } = edges[edges.length - 1];

    fetchMore({
      variables: { cursor },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        return {
          ...previousResult,
          search: {
            __typename: previousResult.search.__typename,
            edges: [
              ...previousResult.search.edges,
              ...fetchMoreResult.search.edges
            ]
          }
        };
      }
    });
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth={1200}>
      <UserGrid>
        {data &&
          data.search.edges.map(({ user }) => {
            return <UserTile key={user.id} user={user} />;
          })}
      </UserGrid>
      {data && data.search.edges.length > 0 && (
        <Button onClick={() => handleLoadMore(data.search.edges)}>
          load more
        </Button>
      )}
    </Container>
  );
};

export default UserList;

const SEARCH_USER = gql`
  query userSearch($queryString: String!, $cursor: String) {
    search(query: $queryString, type: USER, first: 12, after: $cursor) {
      edges {
        cursor
        user: node {
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
