import { API_OPTIONS } from "../utils/constantValues";
import useFetchTrailerData from "../hooks/useFetchTrailerData";
import { useSelector } from "react-redux";

function VideoBackground({ movieId }) {
  const trailerId = useSelector((store) => store.movies.trailerVideo);
  useFetchTrailerData(movieId);
  return (
    <div className="relative w-full aspect-video overflow-hidden z-10">
      <iframe
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerId}`}
        allow="autoplay; "
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-80"></div>
    </div>
  );
}

export default VideoBackground;
