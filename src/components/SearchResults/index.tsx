import React from "react";
import { StyledSearchResults } from "./styles";
import UserTile from "../UserTile";
import Debug from "../Debug";
import { ApolloError } from "apollo-boost";
import Container from "../Container";

interface IUserSearchResult {
  node: {
    id: string;
    name: string;
    avatarUrl: string;
  };
}

interface IProps {
  loading: boolean;
  error: ApolloError | undefined;
  data: {
    search: {
      edges: IUserSearchResult[];
    };
  };
}

const SearchResults = ({ loading, error, data }: IProps) => {
  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container maxWidth={1200}>
      <StyledSearchResults>
        {data &&
          data.search.edges.map(item => {
            return <UserTile key={item.node.id} item={item} />;
          })}
      </StyledSearchResults>
      <Debug data={data} />
    </Container>
  );
};

export default SearchResults;
