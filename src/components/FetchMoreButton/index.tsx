import React from "react";
import Button from "../Button";

interface IProps {
  fetchMore: any;
  edges: any;
}

const FetchMoreButton = ({ fetchMore, edges }: IProps) => {
  const handleLoadMore = () => {
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

  return <Button onClick={() => handleLoadMore()}>Load more</Button>;
};

export default FetchMoreButton;
