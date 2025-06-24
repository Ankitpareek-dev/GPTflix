import { useState } from "react";
import MovieCard from "./MovieCard";

function CardList({ title, movies }) {
  const [page, setPage] = useState(0);
  if (!movies) return null;
  const cardsPerPage = 5;
  const totalPages = Math.ceil(movies.length / cardsPerPage);

  const handlePrev = () => {
    setPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const containerWidth = 100 * totalPages;
  const translateX = `-${page * (100 / totalPages)}%`;

  return (
    <div className="space-y-4 relative w-full">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-white px-4">
        {title}
      </h2>

      <div className="relative overflow-hidden w-full">
        <div className="flex items-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="hidden sm:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-20 hover:bg-black/80 transition"
          >
            ◀
          </button>

          {/* Slider */}
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${containerWidth}%`,
                transform: `translateX(${translateX})`,
              }}
            >
              {Array.from({ length: totalPages }).map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-full flex justify-center gap-3 px-4"
                  style={{ width: `${100 / totalPages}%` }}
                >
                  {movies
                    .slice(i * cardsPerPage, (i + 1) * cardsPerPage)
                    .map((movie) => (
                      <MovieCard
                        key={movie.id}
                        posterPath={movie.poster_path}
                      />
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="hidden sm:flex items-center justify-center w-10 h-10 bg-black/50 text-white rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-20 hover:bg-black/80 transition"
          >
            ▶
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardList;
