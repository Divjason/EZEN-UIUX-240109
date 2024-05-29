const API_KEY = "0bc8bd2db453d7413d1c2844ec617b61";
const BASE_PATH = "https://api.themoviedb.org/3";

export const getMovies = () => {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};
