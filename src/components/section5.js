import React from 'react';

const FireSection = () => {
  return (
    <div className="bg-[#ff3131] text-white py-16 px-6 flex justify-around flex-wrap space-y-10 md:space-y-0 md:space-x-10">
      
      <div className="w-full md:w-1/4 flex flex-col items-center transition transform hover:scale-105 duration-300 ease-out">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full p-8 text-center relative space-y-4 h-96 flex flex-col justify-between">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/2932/2932894.png" // replace with actual image URL
            alt="Spark"
            className="w-20 h-20 mx-auto animate-pulse"
          />
          <h3 className="text-2xl font-bold text-gray-800">Analyse</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We define your brand messaging, audience, and approach. Using data-driven insights, we identify channels and tactics to effectively reach your audience and prompt action.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-center transition transform hover:scale-105 duration-300 ease-out">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full p-8 text-center relative space-y-4 h-96 flex flex-col justify-between">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/615/615569.png" // replace with actual image URL
            alt="Ignite"
            className="w-20 h-20 mx-auto animate-bounce"
          />
          <h3 className="text-2xl font-bold text-gray-800">Realise</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We create the assets you need, building and launching highly targeted campaigns that ensure results. Your campaigns reach the right audience and convert effectively.
          </p>
        </div>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-center transition transform hover:scale-105 duration-300 ease-out">
        <div className="bg-gray-200 rounded-lg shadow-lg w-full p-8 text-center relative space-y-4 h-96 flex flex-col justify-between">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/2909/2909735.png" // replace with actual image URL
            alt="Blaze"
            className="w-20 h-20 mx-auto animate-ping"
          />
          <h3 className="text-2xl font-bold text-gray-800">Optimise</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            We optimise campaigns for growth and success. With A/B testing, segmentation, and performance analysis, we ensure your campaigns deliver the best outcomes.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default FireSection;
