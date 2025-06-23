import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constantValues";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

API_OPTIONS;
function useFetchTrailerData(movieId) {
  const dispatch = useDispatch();
  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    console.log(movieId);
    const { results } = await data.json();
    // console.log(results);

    const trailer = results.filter(
      (video) => video.name === "Official Trailer"
    );
    dispatch(addTrailerVideo(trailer[0].key));
    // setTrailerId(trailer[0].key);
    console.log(`https://www.youtube.com/watch?v=${trailer[0].key}`);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
}

export default useFetchTrailerData;
