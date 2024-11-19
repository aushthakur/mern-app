import React from 'react';
import video from '../img/video2.mp4';

const FireSection = () => {
  return (
    <section className="main-div bg-black text-white p-6 relative h-[80vh] w-full flex flex-col items-center justify-center md:flex-row lg:overflow-hidden top-0">
    {/* Text Section */}
    <div className="flex-1 p-9 text-center md:text-left mt-0">
      <h1 className="pop-text text-white text-4xl sm:text-5xl font-bold">Popular podcasts</h1>
      <span className="Snippets text-[#ff3131] text-4xl sm:text-5xl font-semibold">Snippets</span>
      <br />
      <h2 className="mt-6 text-lg sm:text-2xl">Top Podcast Snippets You Can't Miss!</h2>
      {/* Know More Button */}
      <br></br>
      <button
        type="button"
        className="mt-12 px-6 py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
      >
        Watch More
      </button>
    </div>
  
    {/* Image Section */}
    <div className="video flex-1 flex justify-center items-center p-4">
      <video
        src={video}
        alt="Share_Experties"
        className="transform max-h-60 sm:max-h-80 md:max-h-full w-auto object-contain"
        controls
        autoPlay
        loop
        muted
      />
    </div>
  </section>
  

  
  );
};

export default FireSection;
