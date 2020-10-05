import React from "react";
import Container from "../../components/Container";
import { useQuery } from "@apollo/react-hooks";
import { UserInfo, Img } from "./styles";
import Heading from "../../components/Heading";
import { GET_USER } from "../../Queries";

import StatusForm from "../../components/StatusForm";

interface IGetUserResponse {
  viewer: {
    login: string;
    name: string;
    location: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    status: {
      id: string;
      message: string;
      emoji: string;
    };
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
  if (error) return <p>{error.message}</p>;

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
          <ul>
            <li>{data?.viewer.location}</li>
            <li>{data?.viewer.bio}</li>
            <li>{data?.viewer.websiteUrl}</li>
            <li>Status: {data?.viewer.status.message}</li>
          </ul>
        </div>
      </UserInfo>
      <StatusForm />
    </Container>
  );
};

export default Account;
