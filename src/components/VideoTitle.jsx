function VideoTitle({ title, overview }) {
  // console.log(title);
  return (
    <div className="absolute top-0 left-0 z-30 w-screen aspect-video bg-gradient-to-r from-black/70 px-4 md:px-10 pt-[25%]">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl">
        {title}
      </h1>
      <p className="py-4 sm:py-6 text-sm sm:text-base  md:text-lg text-white max-w-sm sm:max-w-md md:max-w-xl">
        {overview}
      </p>
      <div className="flex flex-wrap gap-3 sm:gap-5">
        <button className="bg-white text-black font-bold py-2 px-5 sm:px-6 rounded-md hover:opacity-80 transition">
          ▷ Play
        </button>
        <button className="bg-white/20 text-white font-bold py-2 px-6 rounded-md hover:bg-white/30 transition">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
}

export default VideoTitle;
