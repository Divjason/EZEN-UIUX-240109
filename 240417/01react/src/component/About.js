import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const goToHomepage = () => {
    navigate("/");
  };
  return (
    <div>
      <div>About page</div>
      <button onClick={goToHomepage}>Go to Home page</button>
    </div>
  );
};

export default About;
