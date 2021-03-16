import React, { useState } from "react";
import Container from "../../components/Container";
import { useQuery } from "@apollo/react-hooks";
import { LOGGED_IN_USER } from "../../Queries";
import StatusForm from "../../components/StatusForm";
import UserProfileCard from "../../components/UserProfileCard";
import UserRepoList from "../../components/UserRepoList";

interface IGetUserResponse {
  viewer: {
    id: string;
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
    repositories: {
      nodes: Array<{ name: string;
                     id: string;
                     description: string;
                     updatedAt: Date;
                     licenseInfo: {
                       spdxId: string;
                     };
                     stargazers: {
                       totalCount: number;
                     };
                     forks: {
                       totalCount: number;
                     };
                     primaryLanguage: {
                       id: string;
                       name: string;
                       color: string;
                     }; }>;
    };
  };
}

const Account = () => {
  const { data, loading, error } = useQuery<IGetUserResponse>(LOGGED_IN_USER);
  const [language] = useState("javascript");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <UserProfileCard user={data!.viewer} />
      <StatusForm />
      <UserRepoList language={language} repositories={data!.viewer.repositories} />
    </Container>
  );
};

export default Account;
