import React from "react";
import portfolio from "../img/Home5.png";
import design from "../img/Home6.png";

function Hero3() {
  return (
    <div className="flex lg:overflow-hidden sm:flex-col md:flex-row  md:h-screen sm:py-0 md:mt-28">
      <div
        className="md:w-1/2 md:h-screen sm:w-full sm:py-20   flex flex-col justify-center  p-2"
        style={{
          backgroundImage: `url(${portfolio})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="md:text-4xl sm:text-xl sm:text-center md:text-left text-white mb-4">
          You must build a{" "}
          <span className="font-bold">
            {" "}
            website
            <br />
            with passion{" "}
          </span>
          , as we do for
          <br />
          our clients through our
          <br />
          <span className="font-bold"> portfolio. </span>
        </h1>
        <div className="button2 sm:text-center md:text-left"><button class="bg-black md:text-lg sm:text-sm text-white font-bold py-1 px-5 rounded border-2  border-white hover:border-gray-500 inline-flex items-center">
          <span>Portfolio</span>
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button></div>
      </div>
      <div
        className="md:w-1/2 sm:w-full sm:py-20  flex flex-col justify-center p-2"
        style={{
          backgroundImage: `url(${design})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="md:text-4xl sm:text-xl md:text-left sm:text-center text-white mb-4">
          <span className="font-bold"> Digital Presence </span> is all about
          <br />
          building the best graphics
          <br />
          and Visuals to enhance
          <br />
          your <span className="font-bold"> brand Identity. </span>
        </h1>

      <div className="button sm:text-center md:text-left">  <button class=" bg-black md:text-lg sm:text-sm text-white font-bold  py-1 px-5 rounded border-2 border-white hover:border-gray-500 inline-flex items-center">
          <span> Designs</span>
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            ></path>
          </svg>
        </button></div>
      </div>
    </div>
  );
}

export default Hero3;
