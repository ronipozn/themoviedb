import { createContext, useState, useEffect } from "react";

const API_ENDPOINT = "https://api.themoviedb.org/3/movie/popular?api_key=";
const API_KEY = "8ff87228fd0cf9be1c4a700a96b9ab25";

export const MoviesContext = createContext({
  movies: [],
});

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [state, setState] = useState(false);

  const fetchMovies = (page) =>
    fetch(`${API_ENDPOINT}${API_KEY}&language=en-US&page=${page}`)
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Server responds with error!");
        }
        return response.json();
      })
      .then(
        (response) => response.results,
        (err) => {
          setState({
            err,
          });
        }
      );

  const fetchMoreMovies = (movieToAdd) => {
    fetchMovies(movies.length / 2 + 1).then((data) =>
      setMovies(movies.concat(data))
    );
  };

  useEffect(() => {
    fetchMovies(1).then((data) => setMovies(data));
  }, []);

  const value = {
    fetchMoreMovies,
    state,
    movies,
  };

  return (
    <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
  );
};
