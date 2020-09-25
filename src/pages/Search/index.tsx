import React, { useState } from "react";
import Container from "../../components/Container";
import SearchResults from "../../components/SearchResults";
import Input from "../../components/Input";

const Search = () => {
  const [formValue, setFormValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setSearchTerm(formValue);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(e.target.value);
  };

  return (
    <>
      <Container>
        <h1>User search</h1>
        <form onSubmit={handleSubmit}>
          <Input value={formValue} onChange={e => handleChange(e)} />
        </form>
      </Container>
      <SearchResults searchTerm={searchTerm} />
    </>
  );
};

export default Search;
