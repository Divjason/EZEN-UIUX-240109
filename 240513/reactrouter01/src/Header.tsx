import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onAboutClick = () => {
    navigate("/about");
  };
  return (
    <div>
      <ul style={{ display: "flex", gap: "10px" }}>
        <li style={{ listStyle: "none" }}>
          <Link to={"/"}>Home</Link>
        </li>
        {/* <li style={{ listStyle: "none" }}>
          <Link to={"/about"}>About</Link>
        </li> */}
        <li style={{ listStyle: "none" }}>
          <button onClick={onAboutClick}>About</button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
