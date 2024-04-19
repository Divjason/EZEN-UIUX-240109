import React from "react";
import { useSelector } from "react-redux";
import GrandBox from "./GrandBox";

const Box = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <div>Box {count}</div>
      <GrandBox />
    </div>
  );
};

export default Box;
