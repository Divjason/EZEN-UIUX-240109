import React from "react";
import { useParams } from "react-router-dom";

interface RouterParams {
  coinId: string;
}

const Coin = () => {
  const { coinId } = useParams<RouterParams | any>();
  return <h1>Coin : {coinId}</h1>;
};

export default Coin;
