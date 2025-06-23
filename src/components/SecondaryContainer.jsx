import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieCard from "./MovieCard";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movies);
  // console.log(movies);
  return (
    <div className="-mt-64 relative z-20 bg-black">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Horror Moveis"} movies={movies.nowPlayingMovies} />
    </div>
  );
}

export default SecondaryContainer;
