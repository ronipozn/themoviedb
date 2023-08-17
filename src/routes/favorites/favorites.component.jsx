import { useContext } from "react";

import { FavoritesContext } from "../../contexts/favorites.context";

import FavoritetMovie from "../../components/favorite-movie/favorite-movie.component";

import "./favorites.styles.scss";

const Favorites = () => {
  const { favoritesMovies } = useContext(FavoritesContext);

  return (
    <div className="favorite-container">
      <div className="favorite-header">
        <div className="header-block">
          <span>Movie</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {favoritesMovies?.map((favoriteMovie) => (
        <FavoritetMovie key={favoriteMovie.id} favoriteMovie={favoriteMovie} />
      ))}
    </div>
  );
};

export default Favorites;
