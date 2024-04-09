import React from "react";
import Header from "../component/Header";
import Button from "../component/Button";

const Home = () => {
  return (
    <div>
      <Header
        title="Home"
        leftChild={
          <Button
            text="긍정버튼"
            type="positive"
            onClick={() => alert("positive button")}
          />
        }
        rightChild={
          <Button
            text="부정버튼"
            type="negative"
            onClick={() => alert("negative button")}
          />
        }
      />
    </div>
  );
};

export default Home;
