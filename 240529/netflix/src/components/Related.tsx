import React from "react";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const RecommendedMovies = styled.div`
  color: ${(props) => props.theme.white.darker};
  margin-top: 20px;
  padding: 20px;
  padding-top: 0px;
  width: 1620px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
  span {
    margin-top: 10px;
    text-align: center;
  }
`;

type RecommendsProps = {
  recommends: {
    [key: number]: {
      title: string;
      backdrop_path: string;
    }[];
  };
  movieId: number;
};

const Related = ({ recommends, movieId }: RecommendsProps) => {
  const movieRecommendations = recommends[movieId] || [];
  return (
    <RecommendedMovies>
      {movieRecommendations.length > 0 ? (
        movieRecommendations.map((movie, index) => (
          <MovieCard key={index}>
            <img src={makeImagePath(movie.backdrop_path)} alt={movie.title} />
            <span>{movie.title}</span>
          </MovieCard>
        ))
      ) : (
        <div>No recommendations available!</div>
      )}
    </RecommendedMovies>
  );
};

export default Related;
