// TODO: Bonus if the app allows fast searching.

import { useContext } from "react";

import InfiniteScroll from "react-infinite-scroll-component";

import MovieCard from "../../components/movie-card/movie-card.component";

import { MoviesContext } from "../../contexts/movies.context";

import "./movies.styles.scss";

const Movies = () => {
  const { state, movies, fetchMoreMovies } = useContext(MoviesContext);

  return state ? (
    "Oh no! Something went terribly wrong"
  ) : (
    <InfiniteScroll
      dataLength={movies.length}
      next={fetchMoreMovies}
      hasMore={true}
      loader={<h4>Loading...</h4>}
      scrollableTarget="scrollableDiv"
    >
      <div className="movies-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Movies;
