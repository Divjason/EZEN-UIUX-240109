import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { getMovies } from "../api";

const Wrapper = styled.div`
  background: #000;
  height: 200vh;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Home = () => {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"], getMovies);
  return <Wrapper>{isLoading ? <Loader>Loading...</Loader> : null}</Wrapper>;
};

export default Home;
