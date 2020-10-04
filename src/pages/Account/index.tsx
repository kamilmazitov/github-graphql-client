import React from "react";
import Container from "../../components/Container";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { UserInfo, Img } from "./styles";
import Heading from "../../components/Heading";

interface IGetUserResponse {
  viewer: {
    login: string;
    name: string;
    location: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    starredRepositories: {
      edges: {
        node: {
          id: string;
          name: string;
        };
      };
    };
  };
}

const Account = () => {
  const { data, loading, error } = useQuery<IGetUserResponse>(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  return (
    <Container>
      <UserInfo>
        <Img>
          <img src={data?.viewer.avatarUrl} alt={data?.viewer.name} />
        </Img>
        <div>
          <Heading as={"h1"} size={"1.5rem"}>
            {data?.viewer.name}
          </Heading>
          <p>{data?.viewer.location}</p>
          <p>{data?.viewer.bio}</p>
          <p>{data?.viewer.websiteUrl}</p>
        </div>
      </UserInfo>
    </Container>
  );
};

const GET_USER = gql`
  query getUser {
    viewer {
      login
      name
      location
      avatarUrl(size: 150)
      bio
      websiteUrl
      starredRepositories(last: 10) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export default Account;
