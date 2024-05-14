import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useLocation } from "react-router-dom";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 30px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  text-align: center;
`;

interface RouterParams {
  coinId: string;
}

interface LocationState {
  state: string;
}

interface InfoData {}

const Coin = () => {
  const { state } = useLocation() as LocationState;
  const [info, setInfo] = useState([]);
  const [price, setPriceInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams<RouterParams | any>();

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(
          "https://my-json-server.typicode.com/Divjason/coinlist/coins"
        )
      ).json();
      console.log(infoData);
      const priceData = await (
        await fetch(
          `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
        )
      ).json();
      console.log(priceData);
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>{state || "Loading..."} Information</Title>
      </Header>
      {loading ? <Loader>"Loading..."</Loader> : null}
    </Container>
  );
};

export default Coin;
