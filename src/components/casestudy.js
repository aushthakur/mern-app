import React, { useState } from 'react';
import bordcast from '../img/cuate.png';
import mick from '../img/bros.png';
import newImage from '../img/Group 75.png'
import '../styles/casestudy.css';

const CaseStudiesSolarSystem = () => {


  return (
    <section className="p-4 relative h-auto md:h-screen w-full flex flex-col-reverse md:flex-row items-center justify-between lg:overflow-hidden">
    {/* Container for both Image and Text Section */}
    <div className="img-responsive flex flex-col md:flex-row items-center justify-between w-full h-auto md:h-full">
      
      {/* Image Section */}
      <div className="flex-1 relative flex justify-center items-center p-4 mb-6 md:order-1"> {/* Set margin-bottom to 6px */}
        
        {/* New image for mobile view with increased size */}
        <img
          src={newImage} // Replace 'newImage' with the new image path you provide
          alt="New Image"
          className="w-full sm:w-[656px] sm:h-auto md:hidden object-contain relative z-10 mb-0" // No margin on mobile
        />
        
        {/* Old Image for larger screens */}
        <img
          src={bordcast} // Retain the original image for larger screens
          alt="Podcast Illustration"
          className="Podcast w-full sm:w-[545px] sm:h-auto md:w-[734px] md:h-auto object-contain relative z-10 mb-0 md:block hidden" // Removed margin bottom here
        />
        
        {/* Additional Image for Larger Screens (Optional if you want to show it only on larger screens) */}
        <img
          src={mick}
          alt="Microphone Illustration"
          className="Microphone w-full sm:w-[321px] sm:h-auto md:w-[512px] md:h-auto object-contain absolute top-[90px] left-0 z-0 ml-[232px] mb-0 md:block hidden" // Reduced margin
        />
      </div>
  
      {/* Text Section */}
      <div className="content  flex-1 text-center md:text-left p-4 md:order-2">
        <div className="hh">
          <h1 className="text-3xl text-black">About <span className="text-3xl text-[#ff3131]">Us</span></h1>
        </div>
        <br />
        <br />
        <div>
          <p className='sm:mt-0'>
            Boostpod is an innovative podcasting platform brought to you by Techno E-Services Group LTD, 
            designed to empower entrepreneurs, business leaders, and budding startups. 
            Based in the UK, Boostpod is more than just a podcast; it’s a resource hub for those who seek insight, inspiration, and practical strategies to navigate the complex world of business and technology. 
            Our episodes dive deep into real-world challenges and solutions as we host thought leaders and industry experts who share their journeys, setbacks, and achievements.
          </p>
        </div>
        
        {/* Read More Button */}
        <br />
        <br />
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
        >
          Read More
        </button>
      </div>
    </div>
  </section>
  

  );
};

export default CaseStudiesSolarSystem;
