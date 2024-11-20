import React from 'react';
import TopChoiceimg from '../img/topChoice.png';

function TopChoice() {
  return (
    <>
      <section className="bg-black text-black p-6 relative h-screen w-full flex flex-col items-start lg:items-center justify-start lg:justify-center lg:overflow-hidden">
        {/* Heading Section */}
        <h3 className="font-bold leading-tight text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center w-full mb-6">
          Why We’re the <span className="text-[#ff3131] font-extrabold">Top Choice</span> for Shopify SEO Success?
        </h3>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
          {/* Text Section */}
          <div className="flex-1 text-white text-left p-4 md:mr-6">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
              Our dedication to your growth, driving ROI, and ensuring your satisfaction is what sets us apart as Shopify SEO experts. We’re passionate about transforming business ideas into thriving Shopify stores. What makes us the leading Shopify SEO agency is our focus on revitalizing your store with tailored strategies. As a Shopify SEO company, we prioritize building SEO-friendly site architecture that enhances visibility, performance, and conversions.
            </p>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center p-4 md:ml-6">
            <img
              src={TopChoiceimg}
              alt="Top Choice Illustration"
              className="max-h-48 sm:max-h-64 md:max-h-80 lg:max-h-96 w-auto object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default TopChoice;
