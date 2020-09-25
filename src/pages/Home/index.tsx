import React, { useState } from "react";
import SearchForm from "../../components/SearchForm";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Input from "../../components/Input";
import UserTile from "../../components/UserTile";

const SEARCH_USER = gql`
  query userSearch($queryString: String!) {
    search(query: $queryString, type: USER, first: 12) {
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
  const [searchTerm, setSearchTerm] = useState("");
  const [loadSearchResults, { loading, error, data }] = useLazyQuery(
    SEARCH_USER
  );

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
      <SearchResults loading={loading} error={error} data={data} />
    </>
  );
};

export default Home;
