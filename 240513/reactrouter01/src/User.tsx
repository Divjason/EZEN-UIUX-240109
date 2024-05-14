import React from "react";
import { useOutletContext, useParams, Outlet, Link } from "react-router-dom";
import { users } from "./db";

const User = () => {
  console.log(useOutletContext());
  const { userId } = useParams();
  console.log(userId);
  return (
    <div>
      <h1>
        User with it {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="follower">See Follower</Link>
      <Outlet
        context={{
          nameOfMyUsers: users[Number(userId) - 1].name,
        }}
      />
    </div>
  );
};

export default User;
