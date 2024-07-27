import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import video1 from '../img/video.mp4'; // Ensure this path is correct
import Image from '../img/work.png';
import Image1 from '../img/img1.png';
import Video2 from '../img/video9.mp4';
import Image2 from '../img/img3.png';
import Footer from '../components/footer';

const Work = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center py-20 px-6">
        {/* First Div: Centered Text */}
        <div className="text-center mb-16">
          <h1 className="text-4xl mt-9 font-bold mb-2">Superior design solutions for</h1>
          <h1 className="text-4xl font-bold">your digital products</h1>
        </div>

        {/* Second Div: Filter and Anchor Tags */}
        <div className="mb-16">
          <span className="text-lg font-bold mr-4">Filter by - All</span>
          <Link to="/" className="text-grey-800 hover:underline mr-4">App Development</Link>
          <Link to="/" className="text-grey-800 hover:underline mr-4">Brand Identity</Link>
          <Link to="/" className="text-grey-800 hover:underline mr-4">Print Media</Link>
          <Link to="/" className="text-grey-800 hover:underline mr-4">Social Media</Link>
          <Link to="/" className="text-grey-800 hover:underline">Website</Link>
        </div>

        {/* Third Div: Two Videos */}
        {/* <!-- Mobile view --> */}
<div class="flex flex-col justify-center mx-6 gap-4 md:flex-row">
  <div class="w-full mb-4 md:w-1/2 md:mb-0">
    <video class="w-full md:rounded-2xl md:h-80 sm:h-auto sm:rounded-3xl" loop autoplay muted>
      <source src={video1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
  
  <div class="w-full md:w-1/2">
    <img src={Image} alt="" />
  </div>
</div>

<br></br>

<div class="flex flex-col justify-center mt-3 mx-5 gap-4 md:flex-row">
  <div class="w-full mb-4 md:w-1/2 md:mb-0">
    <img src={Image1} alt="" />
  </div>
 
  <div class="w-full md:w-1/2">
    <video class="w-full md:rounded-2xl md:h-80 sm:h-auto sm:rounded-3xl" loop autoplay muted>
      <source src={Video2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>
<br></br>

<div class="flex flex-col justify-center mt-3 mx-7 gap-6 md:flex-row">
  <div class="w-full md:w-1/2 md:mb-0">
    <img src={Image1} alt="" />
  </div>
  <div class="w-full md:w-1/2">
    <img src={Image2} alt="" />
  </div>
</div>
      </div>

      <Footer />
    </div>

  );
};

export default Work;
