import React from "react";
import { useSelector } from "react-redux";

const GrandBox = () => {
  const count = useSelector((state) => state.count);
  return <div>GrandBox {count}</div>;
};

export default GrandBox;
