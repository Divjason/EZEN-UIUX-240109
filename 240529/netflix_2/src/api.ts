const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface IMovie {
  id: number;
  title: string;
  name: string;
  overview: string;
  first_air_date: string;
  release_date: string;
  adult: boolean;
  vote_average: number;
  vote_count: number;
  genre_ids: number[];
  backdrop_path: string;
  poster_path: string;
}

export interface IGetmoviesResult {
  dates: {
    maximum: string;
    minimun: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

interface IGenere {
  id: number;
  name: string;
}

export interface IGetGeneresResult {
  genres: IGenere[];
}

export const getMovies = () => {
  return fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr&region=kr`
  ).then((response) => response.json());
};

export const getGenres = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=ko-kr`
  ).then((response) => response.json());
};
