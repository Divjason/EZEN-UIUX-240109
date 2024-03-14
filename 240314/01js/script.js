import { API_KEY } from "./env.js";
const form = document.querySelector("form");

const movieDetail = (e) => {
  const { id } = e.target.parentElement;
  const detailURL = `https://www.themoviedb.org/movie/${id}`;
  window.open(detailURL, "_blank");
};

const createBlock = ({
  id,
  poster_path,
  original_title,
  title,
  vote_average,
  release_date,
}) => {
  const parent = document.querySelector(".contents");
  const movie = document.createElement("div");
  const poster = document.createElement("img");
  const detail = document.createElement("div");
  const h3 = document.createElement("h3");
  const info = document.createElement("div");
  const date = document.createElement("div");
  const rate = document.createElement("div");

  movie.className = "movie";
  detail.className = "detail";
  info.className = "info";
  date.className = "date";
  rate.className = "rate";

  movie.id = id;
  poster.src = `https://image.tmdb.org/t/p/original/${poster_path}`;
  h3.innerText = `${title} / ${original_title}`;
  date.innerText = `${release_date}`;
  rate.innerText = `⭐⭐⭐⭐ ${vote_average}`;

  info.append(date, rate);
  detail.append(info, h3);
  movie.append(poster, detail);
  parent.appendChild(movie);

  poster.addEventListener("click", movieDetail);
};

const getPopularMovies = () => {
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko&page=1`;
  fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((movie) => {
        createBlock(movie);
      });
    });
};

getPopularMovies();

const removeAll = () => {
  const movies = document.querySelectorAll(".movie");

  movies.forEach((movie) => {
    movie.remove();
  });
};

const searchMovie = (e) => {
  e.preventDefault();
  const input = document.querySelector("input");
  const { value: keyword } = input;
  const searchURL = `https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${API_KEY}`;

  if (keyword) {
    removeAll();

    fetch(searchURL)
      .then((response) => response.json())
      .then(({ results }) => {
        results.forEach((movie) => {
          createBlock(movie);
        });
      });
  }
};

form.addEventListener("submit", searchMovie);
