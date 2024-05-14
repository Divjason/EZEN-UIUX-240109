import React from "react";
import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUsers: string;
}

const Follower = () => {
  const { nameOfMyUsers } = useOutletContext<IFollowersContext>();
  return <h1>Here are {nameOfMyUsers}의 Follower</h1>;
};

export default Follower;
