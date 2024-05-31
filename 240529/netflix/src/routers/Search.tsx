import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, IGetGeneresResult, getGenres } from "../api";
import { makeImagePath } from "../utils";

const SearchBox = styled.div`
  padding: 100px;
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const SearchTitle = styled.div`
  font-size: 42px;
  background-color: ${(props) => props.theme.red};
  border-radius: 14px 0 14px 0;
`;

const SearchOverview = styled.p`
  font-size: 18px;
  margin: 10px 0;
  margin-bottom: 32px;
  padding: 18px 0;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;

const SearchDate = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchValue = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchPoint = styled.div`
  font-size: 18px;
  margin: 10px 0;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const SearchGeneres = styled.div`
  font-size: 18px;
  span {
    display: inline-block;
    width: 100px;
    text-align: center;
    background-color: #ffa300;
    color: ${(props) => props.theme.black.darker};
    border-radius: 14px 0 0 0;
    margin-right: 8px;
    padding: 8px;
  }
`;

const Search = () => {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
  const BASE_PATH = "https://api.themoviedb.org/3";

  const searchedMovies = () => {
    return fetch(
      `${BASE_PATH}/search/multi?query=${keyword}&api_key=${API_KEY}&language=ko-kr&page=1`
    ).then((response) => response.json());
  };

  const { data: movieData, isLoading: movieLoading } =
    useQuery<IGetmoviesResult>(["movies", keyword], searchedMovies);

  const { data: genereData, isLoading: genereLoading } =
    useQuery<IGetGeneresResult>(["getGeneres"], getGenres);

  return (
    <div>
      {movieLoading && genereLoading ? (
        <div>Loading...</div>
      ) : (
        movieData?.results.map((movie, index) => (
          <SearchBox key={index}>
            <img src={makeImagePath(movie?.backdrop_path)} />
            <div>
              <SearchTitle>
                ({movie?.title} {movie?.name})
              </SearchTitle>
              <SearchOverview>{movie?.overview}</SearchOverview>
              <SearchDate>
                <span>릴리즈</span>
                {movie?.release_date} {movie?.first_air_date}
              </SearchDate>
              <SearchValue>
                <span>관람등급</span>
                {movie?.adult ? "청소년관람불가" : "전체관람가"}
              </SearchValue>
              <SearchPoint>
                <span>영화평점</span>
                {movie?.vote_average !== undefined
                  ? movie?.vote_average.toFixed(2)
                  : "N/A"}
                {movie?.vote_count
                  ? movie?.vote_count.toLocaleString("ko-kr")
                  : "0"}
                명 투표참여)
              </SearchPoint>
              <SearchGeneres>
                <span>장르</span>
                {movie?.genre_ids
                  ? movie?.genre_ids
                      .map(
                        (id) =>
                          genereData?.genres.find((item) => item.id === id)
                            ?.name
                      )
                      .filter((name) => name)
                      .join(", ")
                  : "N/A"}
              </SearchGeneres>
            </div>
          </SearchBox>
        ))
      )}
    </div>
  );
};

export default Search;
