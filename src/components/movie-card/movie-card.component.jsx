import { useContext } from "react";

import Popup from "reactjs-popup";

import { FavoritesContext } from "../../contexts/favorites.context";

import Button from "../button/button.component";

import "./movie-card.styles.scss";
import "reactjs-popup/dist/index.css";

const MovieCard = ({ movie }) => {
  const { id, title, release_date, poster_path, overview, vote_average } =
    movie;
  const { favoritesMovies, addMovieToFavorites } = useContext(FavoritesContext);

  const addMovieHandler = () => addMovieToFavorites(movie);

  const isMovieFavorite = favoritesMovies.find(
    (favoriteMovie) => favoriteMovie.id === id
  );

  return (
    <div className="movie-card-container">
      <img
        alt={`movie ${title}`}
        src={`https://image.tmdb.org/t/p/w500_and_h282_face/${poster_path}`}
      />
      <div className="footer">
        <Popup
          trigger={
            <Button style={{ top: "185px" }} onClick={addMovieHandler}>
              More Details
            </Button>
          }
          modal
          nested
        >
          {(close) => (
            <div className="modal">
              <button className="close" onClick={close}>
                &times;
              </button>
              <div className="header">{title}</div>
              <div className="content">
                <b>Description</b> {overview}
              </div>
              <div className="content">
                <b>Average rating:</b> {vote_average}
              </div>
              <div className="actions">
                <button
                  className="button"
                  onClick={() => {
                    close();
                  }}
                >
                  close
                </button>
              </div>
            </div>
          )}
        </Popup>
        <span className="title">{title}</span>
        <span className="release_date">{release_date}</span>
      </div>
      {!isMovieFavorite && (
        <Button onClick={addMovieHandler}>Add to Favorite</Button>
      )}
      {isMovieFavorite && <Button>Favorite</Button>}
    </div>
  );
};

export default MovieCard;
