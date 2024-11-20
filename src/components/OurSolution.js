import React from 'react';

function OurSolution() {
  return (
    <section className="bg-white text-black p-6 relative h-auto w-full flex flex-col items-center justify-center lg:overflow-hidden">
      {/* Heading Section */}
      <h1
        className="font-semibold leading-tight text-center md:text-left mb-8"
        style={{
          fontFamily: 'Poppins, sans-serif',
          fontSize: '36px', // Default for mobile
        }}
      >
        <span
          className="block text-3xl sm:text-4xl md:text-[50px] lg:text-[50px]"
        >
          OUR <span className="text-[#ff3131] font-extrabold">Solutions</span>
        </span>
      </h1>

      {/* Cards Section */}
      <div className="w-full flex flex-col gap-8 md:grid md:grid-cols-1 md:gap-8 text-center mt-10">
        {/* Card 1 */}
        <div className="relative p-12 bg-gray-100 rounded-lg shadow-lg mb-8 md:mb-0">
          {/* Card Number 1 */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl">
            1
          </span>
          <h3 className="text-xl font-semibold mt-10">360° SEO Management</h3>
          <p className="text-base leading-relaxed mt-4 mx-50">
            Our 360° digital marketing service optimizes your SaaS online presence by analyzing your target audience, competitors, and industry keywords to maximize results. We create tailored strategies to drive traffic, improve rankings, and accelerate growth.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative p-12 bg-gray-100 rounded-lg shadow-lg mb-8 md:mb-0">
          {/* Card Number 2 */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl">
            2
          </span>
          <h3 className="text-xl font-semibold mt-8">SEO Content</h3>
          <p className="text-base leading-relaxed mt-4">
            Our team crafts impactful content marketing strategies that enhance your brand presence across multiple channels. We produce high-quality, engaging content that resonates with your audience while adhering to the latest SEO best practices.
          </p>
        </div>
        <div className="relative p-12 bg-gray-100 rounded-lg shadow-lg mb-8 md:mb-0">
          {/* Card Number 2 */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl">
            3
          </span>
          <h3 className="text-xl font-semibold mt-8">Link Building</h3>
          <p className="text-base leading-relaxed mt-4">
          The quality and authority of websites linking to yours directly impact your brand's trustworthiness with search engines. Our proven link-building strategies help position your SaaS company as a trusted industry authority.          </p>
        </div>
        <div className="relative p-12 bg-gray-100 rounded-lg shadow-lg mb-8 md:mb-0">
          {/* Card Number 2 */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl">
            4
          </span>
          <h3 className="text-xl font-semibold mt-8">Keyword Research</h3>
          <p className="text-base leading-relaxed mt-4">
            Our team crafts impactful content marketing strategies that enhance your brand presence across multiple channels. We produce high-quality, engaging content that resonates with your audience while adhering to the latest SEO best practices.
          </p>
        </div>
        <div className="relative p-12 bg-gray-100 rounded-lg shadow-lg mb-8 md:mb-0">
          {/* Card Number 2 */}
          <span className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-[#ff3131] text-white flex items-center justify-center font-semibold text-lg sm:text-xl md:text-2xl">
            5
          </span>
          <h3 className="text-xl font-semibold mt-8">Technical Audit & Implementation</h3>
          <p className="text-base leading-relaxed mt-4">
            Our team crafts impactful content marketing strategies that enhance your brand presence across multiple channels. We produce high-quality, engaging content that resonates with your audience while adhering to the latest SEO best practices.
          </p>
        </div>
      </div>
    </section>
  );
}

export default OurSolution;
