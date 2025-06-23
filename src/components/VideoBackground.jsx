import { API_OPTIONS } from "../utils/constantValues";
import useFetchTrailerData from "../hooks/useFetchTrailerData";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const trailerId = useSelector((store) => store.movies.trailerVideo);
  useFetchTrailerData(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video z-20"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&showinfo=0&loop=1&playlist=${trailerId}`}
        title="Trailer"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;

//https://www.youtube.com/watch?v=dTi45nTsSU0
