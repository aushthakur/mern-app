import React from 'react';
import { Link } from 'react-router-dom';
import video1 from '../img/video1.mp4'; // Ensure this path is correct
// import video2 from '../img/video2.mp4'; // Ensure this path is correct
import work from '../img/wrok.jpg'
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const Work = () => {
  return (
    <>
    <Navbar/>
    <div className="bg-black text-white min-h-screen mt-5 flex  flex-col items-center py-20 px-4">
      {/* First Div: Centered Text */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-2">Superior design solutions for</h1>
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
      <div className="flex sm:flex-col rounded-xl justify-center gap-8">
        <div className="w-full md:w-1/2">
          <video className="w- h-auto" loop autoPlay muted>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full md:w-1/2">
         <img src={work} alt="" />
        </div>
      </div>
      <div className="flex sm:flex-col rounded-xl justify-center mt-4 gap-8">
        <div className="w-full md:w-1/2">
          <video className="rounded-3xl h-auto" loop autoPlay muted>
            <source src={video1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="w-full  md:w-1/2">
         <img src={work} alt="" />
        </div>
      </div>
    </div>
    <hr />
    <Footer/>
    </>
  );
};

export default Work;