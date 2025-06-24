import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className="relative z-80 bg-black mt-0">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Trending" movies={movies.trendingMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      {/* Add more categories as needed */}
    </div>
  );
}

export default SecondaryContainer;
