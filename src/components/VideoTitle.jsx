function VideoTitle({ title, overview }) {
  // console.log(title);
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black/70 px-6 pl-18 absolute pt-[20%]">
      <h1 className="text-6xl w-2xl font-bold text-white ">{title}</h1>
      <h1 className="py-6 text-lg w-1/4 text-white">{overview}</h1>
      <div>
        <button className="bg-white text-black border-2 rounded-md w-22 h-10 mr-5 font-bold hover:opacity-80 cursor-pointer">
          ▷ Play
        </button>
        <button className="bg-gray-100/40 hover:opacity-90 w-32 h-10 rounded-md text-black font-bold cursor-pointer">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
