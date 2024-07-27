import React from 'react';
import careerBg from '../img/Home10.png'; // Adjust the path to your background image
import mobileview from '../img/careermobile.png'

const CareerSection = () => {
  return (
    <>  <section 
      className=" md:block sm:hidden h-1/2 py-20 sm:bg-contain  md:bg-cover bg-center" 
      style={{ backgroundImage: `url(${careerBg})` }}
    >
      <div className="  text-white container mx-auto flex flex-col md:flex-row items-start bg-white bg-opacity-0 p-8 rounded-md">
        {/* Left Div */}
        <div className="w-full md:w-1/2 p-8 md:p-12">
          <h2 className=" text-2xl md:text-4xl sm:text-xl mb-11">Career</h2>
          <p className="md:text-4xl sm:text-xl font-bold">Join our team to<br></br> create the best digital <br></br>solutions</p>
        </div>
        {/* Right Div */}
        <div className="w-full md:w-1/2 p-8 md:p-12 ">
          <p className="md:text-lg sm:text-md mb-24">We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity.</p>
          <button className="bg-black sm:text-md md:text-xl hover:bg-gray-900 text-white font-bold md:py-2 md:px-4 sm:py-1 sm:px-2 rounded-md ">See Open Positions</button>
        </div>
      </div>
    </section>
{/* mobileview     */}
    <section 
      className="sm:block md:hidden h-1/2  bg-center bg-cover" 
      style={{ backgroundImage: `url(${mobileview})` }}
    >
      <div className="  text-white container  flex flex-col w-full  items-start bg-white bg-opacity-0  rounded-md">
        {/* Left Div */}
        <div className="w-full  p-6   ">
          <h2 className=" text-2xl   mb-8">CAREERS</h2>
          <p className="text-3xl w-full font-bold">Join our team to <br /> create the best digital <br />solutions</p>
        </div>
        {/* Right Div */}
        <div className="w-full p-8 ">
          <p className="text-sm   mb-12">We’re a team of creatives who are excited about unique ideas and help digital and fin-tech companies to create amazing identity.</p>
          <button className="bg-black text-md hover:bg-gray-900 text-white font-bold  py-3 px-4 rounded-md ">See Open Positions</button>
        </div>
      </div>
    </section>
    </>
  
  );
};

export default CareerSection;