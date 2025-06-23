import MovieCard from "./MovieCard";

function MovieList({ title, movies }) {
  if (!movies) return null;

  console.log(movies[0]);
  return (
    <div className="p-3 bg-black/50 ml-7">
      <h1 className="text-3xl font-bold pb-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll  ">
        <div className="flex">
          {movies.map((movie) => {
            return <MovieCard posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
