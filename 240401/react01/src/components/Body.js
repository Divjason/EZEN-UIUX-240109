import React from "react";

const Body = () => {
  const num = 19;
  if (num % 2 === 0) {
    return <div>{num}은(는) 짝수입니다.</div>;
  } else {
    return <div>{num}은(는) 홀수입니다.</div>;
  }
};

export default Body;
