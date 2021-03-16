import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { USER } from "../../Queries";
import UserProfileCard from "../../components/UserProfileCard";
import UserRepoList from "../../components/UserRepoList";
import { IUser } from "../../types";

interface IUserResponse {
  user: IUser;
}

const UserProfile = () => {
  const [language] = useState("javascript");
  const { id } = useParams();
  const { data, loading, error } = useQuery<IUserResponse>(USER, {
    variables: { username: id }
  });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <UserProfileCard user={data!.user} />
      <UserRepoList language={language} repositories={data!.user.repositories} />
    </div>
  );
};

export default UserProfile;
