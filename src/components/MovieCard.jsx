import { IMG_CDN_URL } from "../utils/constantValues";

function MovieCard({ posterPath }) {
  return (
    <div className="min-w-[100px] max-w-[100px] sm:min-w-[140px] md:min-w-[160px] lg:min-w-[180px] xl:min-w-[200px] rounded overflow-hidden transition-transform hover:scale-105">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="Movie Poster"
        className="w-full h-auto object-cover rounded"
      />
    </div>
  );
}

export default MovieCard;
