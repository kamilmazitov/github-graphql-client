import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { StyledSearchResults } from "./styles";
import UserTile from "../UserTile";

const SearchResults = () => {
  // const { data, loading, error } = useQuery<ISearchResponse>(SEARCH_USER);

  // if (loading) return <p>Loading..</p>;
  // if (error) return <p>Error...</p>;

  return (
    <p>hello</p>
    // <StyledSearchResults>
    //   {data!.search.edges.map(item => {
    //     return <UserTile key={item.node.id} item={item} />;
    //   })}
    // </StyledSearchResults>
  );
};

export default SearchResults;
