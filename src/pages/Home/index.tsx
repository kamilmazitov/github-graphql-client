import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Input from "../../components/Input";
import UserTile from "../../components/UserTile";

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
  query userSearch($queryString: String!) {
    search(query: $queryString, type: USER, first: 15) {
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

const Home = () => {
  // const [searchResult, setSearchResult] = useState<any | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [loadSearchResults, { loading, data, error }] = useLazyQuery(
    SEARCH_USER
  );

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>{error.message}</p>;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    loadSearchResults({ variables: { queryString: searchTerm } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <Container>
        <h1>User search</h1>

        <form onSubmit={handleSubmit}>
          <Input value={searchTerm} onChange={e => handleChange(e)} />
        </form>
      </Container>
      <Container maxWidth={1400}>
        {data &&
          data.search.edges.map((item: any) => {
            return <UserTile key={item.node.id} item={item} />;
          })}
      </Container>
    </>
  );
};

export default Home;
