import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hero2 from "../img/hero2.jpg"
import { faDesktop, faArrowUp, faBullhorn, faUserFriends, faMobileAlt, faLightbulb, faGamepad } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="flex   md:flex-row  md:mt-0  sm:text-sm sm:flex-col">
      <div className="w-full sm:hidden md:block md:w-1/2 bg-cover bg-center sm:mt-3 sm:bg-top-0  md:mt-8: " style={{ backgroundImage: `url(${hero2})` }}>
        <h2 className=" md:mt-0 sm:mt-32 sm:text-3xl sm:text-center sm:mt md:text-4xl ">Our viewpoint is <span className='font-bold'>innovative</span>, and our <span className='font-bold'> creations </span> are one-of-a-kind.</h2>
      </div>
        <h2 className=" md:hidden sm:block md:mt-0 sm:mt-32 sm:text-3xl sm:text-center sm:mt md:text-4xl ">Our viewpoint is <span className='font-bold'>innovative</span>, and our <span className='font-bold'> creations </span> are one-of-a-kind.</h2>
      <div className="w-full  md:w-1/2 p-12">
        <div className="  flex flex-wrap justify-center md:text-md md:flex-wrap">
          <div className="w-full  md:w-1/2 xl:w-1/3 pt-5">
            <FontAwesomeIcon icon={faDesktop} className="md:text-4xl mb-3 text-3xl" />
            <h3 className="text-xl font-bold">Web Design & Development</h3>
            <p>We utilize the intensity of structure to tackle complex issues and change.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 rounded-full">Learn More</button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 py-4">
            <FontAwesomeIcon icon={faBullhorn} className="text-4xl mb-2 sm:text-3xl" />
            <h3 className="text-xl font-bold">Digital Marketing</h3>
            <p>We have successfully generated many lead campaigns for multiple brands.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-9 rounded-full">Learn More</button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3  p-3">
            <FontAwesomeIcon icon={faUserFriends} className="text-4xl mb-2 sm:text-3xl" />
            <h3 className="text-xl font-bold">Social Media Management</h3>
            <p>We are passionate about handling social media accounts and engagement on your social profiles.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-5   rounded-full">Learn More</button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <FontAwesomeIcon icon={faMobileAlt} className="text-4xl mb-2 sm:text-3xl" />
            <h3 className="text-xl font-bold">App Development</h3>
            <p>We offer you Android and IOS app developments with maximum customization.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-10 rounded-full">Learn More</button>
          </div>
          <div className="w-full  md:w-1/2 xl:w-1/3 p-4">
            <FontAwesomeIcon icon={faLightbulb} className="text-4xl mb-3 sm:text-3xl" />
            <h3 className="text-xl font-bold">Brand Identity and Strategy</h3>
            <p>We help digital companies to volume their self-interest and get a space.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-2 rounded-full">Learn More</button>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4">
            <FontAwesomeIcon icon={faGamepad} className="md:text-4xl mb-2 sm:text-3xl" />
            <h3 className="text-xl font-bold">Game Development</h3>
            <p>We offer you multiplayer game development, casino game development and many more.</p>
            <button className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 mt-4 rounded-full">Learn More</button>
          </div>
        </div>
      </div>

      {/* Mobile view */}
      {/* <div className="md:hidden sm:block flex flex-col p-4">
        <h2 className="text-sm mb-4">Our Services</h2>
        <div className="flex flex-wrap justify-center">
         <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faDesktop} className="text-sm" />
            <h3 className="text-xl font-bold">Web Design & Development</h3>
          </div>
          <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faBullhorn} className="text-2xl" />
            <h3 className="text-xl font-bold">Digital Marketing</h3>
          </div>
          <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faUserFriends} className="text-2xl" />
            <h3 className="text-xl font-bold">Social Media Management</h3>
          </div>
          <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faMobileAlt} className="text-2xl" />
            <h3 className="text-xl font-bold">App Development</h3>
          </div>
          <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faLightbulb} className="text-2xl" />
            <h3 className="text-xl font-bold">Brand Identity and Strategy</h3>
          </div>
          <div className="w-1/2 p-2">
            <FontAwesomeIcon icon={faGamepad} className="text-2xl" />
            <h3 className="text-xl font-bold">Game Development</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;