import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { users } from "./db";

const Home = () => {
  const [readSearchParams, setReadSearchParams] = useSearchParams();
  setTimeout(() => {
    setReadSearchParams({
      day: "today",
      tomorrow: "123",
    });
  }, 3000);
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user, idx) => (
          <li key={idx}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
