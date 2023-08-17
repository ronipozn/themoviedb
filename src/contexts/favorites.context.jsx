import { createContext, useState, useEffect } from "react";

const addFavoritesMovie = (favoritesMovies, movieToAdd) => {
  return [...favoritesMovies, movieToAdd];
};

const clearFavoritesMovie = (favoritesMovies, favoritesMovieToClear) =>
  favoritesMovies.filter(
    (favoritesMovie) => favoritesMovie.id !== favoritesMovieToClear.id
  );

export const FavoritesContext = createContext({
  favoritesMovies: [],
  addMovieToFavorites: () => {},
  clearMovieFromFavorites: () => {},
});

export const FavoritesProvider = ({ children }) => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

  useEffect(() => {
    var storedArray = JSON.parse(localStorage.getItem("favorites"));
    setFavoritesMovies(storedArray);
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesMovies));
  }, [favoritesMovies]);

  const addMovieToFavorites = (movieToAdd) => {
    setFavoritesMovies(addFavoritesMovie(favoritesMovies, movieToAdd));
  };

  const clearMovieFromFavorites = (favoritesMovieToClear) => {
    setFavoritesMovies(
      clearFavoritesMovie(favoritesMovies, favoritesMovieToClear)
    );
  };

  const value = {
    addMovieToFavorites,
    clearMovieFromFavorites,
    favoritesMovies,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
