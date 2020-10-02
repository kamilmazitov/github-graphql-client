import React from "react";
import { StyledButton } from "./styles";

interface IProps {
  fetchMore: any;
  edges: any;
}

const FetchMoreButton = ({ fetchMore, edges }: IProps) => {
  const handleLoadMore = (fetchMore: any, edges: any) => {
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

  return (
    <StyledButton onClick={() => handleLoadMore(fetchMore, edges)}>
      Load more
    </StyledButton>
  );
};

export default FetchMoreButton;
