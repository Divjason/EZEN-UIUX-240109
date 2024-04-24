import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../Redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies, loading } =
    useSelector((state) => state.movie);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <div className="slide">
        <ClipLoader
          color="#fff"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  }
  return (
    <div className="slide">
      {popularMovies.results && <Banner movie={popularMovies.results[1]} />}
      <div className="movieContents">
        <h1>Popular Movie</h1>
        <MovieSlide moives={popularMovies} />
        <h1>TopRated Movie</h1>
        <MovieSlide moives={topRatedMovies} />
        <h1>Upcoming Movie</h1>
        <MovieSlide moives={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
