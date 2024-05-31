import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import { getMovies, IGetmoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Wrapper = styled.div`
  background: #000;
  height: 100%;
`;

const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vh;
`;

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string }>`
  background-color: #fff;
  background-image: url(${(props) => props.bgPhoto});
  background-size: cover;
  background-position: center center;
  height: 200px;
  margin-bottom: 10px;
  color: #fff;
  font-size: 30px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: ${(props) => props.theme.black.lighter};
  padding: 20px;
  opacity: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
`;

const BigMovie = styled(motion.div)`
  width: 40vw;
  height: 60vh;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${(props) => props.theme.black.lighter};
`;

const BigCover = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
`;

const BigTitle = styled.h3`
  color: ${(props) => props.theme.white.lighter};
  /* text-align: center; */
  font-size: 28px;
  padding: 10px;
  position: relative;
  top: -60px;
`;

const BigOverView = styled.p`
  padding: 20px;
  position: relative;
  top: -60px;
  color: ${(props) => props.theme.white.lighter};
`;

const rowVariants = {
  hidden: {
    x: window.outerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: {
    zIndex: 99,
    scale: 1.3,
    y: -50,
    transition: { delay: 0.3, type: "tween" },
  },
};

const infoVariants = {
  hover: {
    opacity: 1,
    transition: { delay: 0.3, type: "tween" },
  },
};

const offset = 6;

const Home = () => {
  const { scrollY } = useScroll();
  const history = useNavigate();
  const bigMovieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  console.log(bigMovieMatch);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };
  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const { data, isLoading } = useQuery<IGetmoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );
  console.log(data);

  const onBoxClicked = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history("/");
  };

  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find(
      (movie) => movie.id === Number(bigMovieMatch.params.movieId)
    );
  console.log(clickedMovie);
  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[3].backdrop_path || "")}
          >
            <Title>{data?.results[3].title}</Title>
            <Overview>{data?.results[3].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                key={index}
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{
                  type: "tween",
                  duration: 1,
                }}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, index * offset + offset)
                  .map((movie) => (
                    <Box
                      layoutId={movie.id + ""}
                      onClick={() => onBoxClicked(movie.id)}
                      key={movie.id}
                      bgPhoto={makeImagePath(movie.backdrop_path)}
                      variants={boxVariants}
                      initial="normal"
                      transition={{ type: "tween" }}
                      whileHover="hover"
                    >
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {bigMovieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <BigMovie
                  layoutId={bigMovieMatch.params.movieId}
                  style={{
                    top: scrollY.get() + 100,
                  }}
                >
                  {clickedMovie && (
                    <>
                      <BigCover
                        style={{
                          backgroundImage: `linear-gradient(to top, black, transparent), url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <BigTitle>{clickedMovie.title}</BigTitle>
                      <BigOverView>{clickedMovie.overview}</BigOverView>
                    </>
                  )}
                </BigMovie>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Wrapper>
  );
};

export default Home;
