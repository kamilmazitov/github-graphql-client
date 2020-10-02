import React from "react";
import { UserGrid } from "./styles";
import UserTile from "../UserTile";
import { gql } from "apollo-boost";
import Container from "../Container";
import { useQuery } from "@apollo/react-hooks";
import FetchMoreButton from "../FetchMoreButton";
import { IUser } from "../../types";

interface ISearchUserResult {
  search: {
    edges: { cursor: string; user: IUser }[];
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
        <FetchMoreButton edges={data.search.edges} fetchMore={fetchMore} />
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
