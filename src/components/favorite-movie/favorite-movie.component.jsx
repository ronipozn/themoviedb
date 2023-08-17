import { useContext } from "react";

import { FavoritesContext } from "../../contexts/favorites.context";

import "./favorite-movie.styles.scss";

const FavortieMovie = ({ favoriteMovie }) => {
  const { title, poster_path } = favoriteMovie;

  const { clearMovieFromFavorites } = useContext(FavoritesContext);

  const clearMovieHandler = () => clearMovieFromFavorites(favoriteMovie);

  return (
    <div className="favortie-item-container">
      <div className="image-container">
        <img
          alt={`movie ${title}`}
          src={`https://image.tmdb.org/t/p/w500_and_h282_face/${poster_path}`}
        />
      </div>
      <span className="title"> {title}</span>
      <div className="remove-button" onClick={clearMovieHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default FavortieMovie;
