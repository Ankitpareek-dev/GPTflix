import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const moviesList = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!moviesList) return <div>loading</div>;

  const mainMovie = moviesList[0];

  const { original_title, overview, id } = mainMovie;
  // console.log(mainMovie);
  //   console.log(mainMovie);
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  );
};

export default MainContainer;
