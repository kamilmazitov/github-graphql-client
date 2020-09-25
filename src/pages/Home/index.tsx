import React from "react";
import SearchForm from "../../components/SearchForm";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";

const Home = () => {
  // const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  return (
    <>
      <Container>
        <h1>User search</h1>
        <SearchForm />
      </Container>
      <Container maxWidth={1400}>
        <SearchResults />
      </Container>
    </>
  );
};

export default Home;
