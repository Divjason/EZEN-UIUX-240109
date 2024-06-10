import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, Routes, Route, Link, useMatch } from "react-router-dom";
import { useQuery } from "react-query";
import { IGetmoviesResult, IGetGeneresResult, getGenres, IMovie } from "../api";
import { makeImagePath } from "../utils";
import YouTube from "react-youtube";
import Review from "../components/Review";
import Related from "../components/Related";
import Pagination from "react-js-pagination";

const SearchBox = styled.div`
  padding: 100px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentSection = styled.div`
  display: flex;
  img {
    width: 800px;
    margin-right: 20px;
  }
`;

const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
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
  margin-bottom: 10px;
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

const Tabs = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 25px 0;
  padding-left: 100px;
  gap: 10px;
`;

const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  background-color: rgba(255, 255, 255, 1);
  padding: 7px 30px;
  border-radius: 10px;
  color: ${(props) =>
    props.isActive ? props.theme.red : props.theme.black.darker};
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) => props.theme.red};
    color: #fff;
  }
`;

const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  ul {
    display: flex;
    list-style: none;
    padding: 0;
  }
  li {
    display: inline;
    margin: 0 5px;
    a {
      text-decoration: none;
      color: #fff;
      padding: 5px 10px;
      border-radius: 50%;
      transition: background-color 0.3s, color 0.3s;
      &:hover {
        background-color: ${(props) => props.theme.red};
        color: #fff;
      }
    }
    &.active a {
      color: #fff;
      background-color: ${(props) => props.theme.red};
    }
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

  type Content = {
    author: string;
    content: string;
    title: string;
    backdrop_path: string;
  };

  type ContentsState<T> = {
    [key: number]: T[];
  };

  const [reviews, setReviews] = useState<ContentsState<Content>>({});
  const [videos, setVideos] = useState<ContentsState<string>>({});
  const [recommends, setRecommends] = useState<ContentsState<Content>>({});

  const fetchReviews = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/reviews?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  const fetchVideos = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/videos?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  const fetchRecommends = (movieId: number) => {
    return fetch(
      `${BASE_PATH}/movie/${movieId}/recommendations?language=en-US&page=1&api_key=${API_KEY}`
    ).then((response) => response.json());
  };

  useEffect(() => {
    if (movieData) {
      movieData.results.forEach((movie) => {
        fetchReviews(movie.id).then((reviewData) =>
          setReviews((prev) => ({
            ...prev,
            [movie.id]: reviewData?.results?.map((review: any) => ({
              author: review.author,
              content: review.content,
            })),
          }))
        );

        fetchVideos(movie.id).then((videoData) => {
          const videoIds = videoData?.results?.map((video: any) => video.key);
          console.log(`Movie ID: ${movie.id}, Video IDs: ${videoIds}`);
          setVideos((prev) => ({
            ...prev,
            [movie.id]: videoIds,
          }));
        });

        fetchRecommends(movie.id).then((recommendData) => {
          setRecommends((prev) => ({
            ...prev,
            [movie.id]: recommendData?.results?.map((recommend: any) => ({
              title: recommend.title,
              backdrop_path: recommend.backdrop_path,
            })),
          }));
        });
      });
    }
  }, [movieData]);

  console.log(videos, reviews, recommends);

  const reviewMatch = useMatch("search/review");
  const relatedMatch = useMatch("search/related");

  const [showReviewContent, setShowReviewContent] = useState(false);
  const [showRelatedContent, setShowRelatedContent] = useState(false);

  const toggleReviewContent = () => {
    setShowReviewContent(!showReviewContent);
  };
  const toggleRelatedContent = () => {
    setShowRelatedContent(!showRelatedContent);
  };

  // pagination 기능
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoivesPerPage] = useState(4);

  // page 변경함수
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에 해당하는 영화 데이터 계산
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies: IMovie[] =
    movieData?.results.slice(indexOfFirstMovie, indexOfLastMovie) || [];

  // 페이지 변경 시, 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div>
      {movieLoading && genereLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {currentMovies?.map((movie, index) => (
            <SearchBox key={index}>
              <ContentSection>
                <img src={makeImagePath(movie?.backdrop_path)} />
                <ContentInfo>
                  <SearchTitle>
                    ({movie?.title}
                    {movie?.name})
                  </SearchTitle>
                  <SearchOverview>{movie?.overview}</SearchOverview>
                  <SearchDate>
                    <span>릴리즈</span>
                    {movie?.release_date}
                    {movie?.first_air_date}
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
                    /
                    {movie?.vote_count
                      ? movie?.vote_count.toLocaleString("ko-kr")
                      : "0"}
                    명 투표참여
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
                </ContentInfo>
              </ContentSection>
              <Tabs>
                <Tab
                  onClick={toggleReviewContent}
                  isActive={reviewMatch !== null}
                >
                  <Link to={`review${location.search}`}>Review</Link>
                </Tab>
                <Tab
                  onClick={toggleRelatedContent}
                  isActive={relatedMatch !== null}
                >
                  <Link to={`related${location.search}`}>Related</Link>
                </Tab>
              </Tabs>
              <Routes>
                {showReviewContent && (
                  <Route
                    path="review"
                    element={<Review reviews={reviews} movieId={movie.id} />}
                  />
                )}
                {showRelatedContent && (
                  <Route
                    path="related"
                    element={
                      <Related recommends={recommends} movieId={movie.id} />
                    }
                  />
                )}
              </Routes>
              <div>
                {videos[movie.id]?.length > 0 ? (
                  <YouTube
                    videoId={videos[movie.id][0]}
                    opts={{
                      width: "1620px",
                      height: "800px",
                      playerVars: {
                        autoplay: 0,
                        modestbranding: 1,
                        loop: 0, //반복 재생
                        playlist: videos[movie.id][0],
                      },
                    }}
                    onReady={(e) => {
                      e.target.mute(); //소리 끔
                    }}
                  />
                ) : (
                  "No Available!"
                )}
              </div>
            </SearchBox>
          ))}
          <StyledPagination>
            <Pagination
              onChange={handlePageChange}
              activePage={currentPage}
              itemsCountPerPage={moviesPerPage}
              totalItemsCount={movieData?.results.length || 0}
              pageRangeDisplayed={5}
            />
          </StyledPagination>
        </>
      )}
    </div>
  );
};

export default Search;
