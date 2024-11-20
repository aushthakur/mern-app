import React from 'react';
import YourGrowthImg from '../img/YourGrowth.png';

function YourSaasGrowth() {
    return (
        <section className="bg-white text-black p-6 relative h-auto w-full flex flex-col md:flex-row items-center justify-center lg:overflow-hidden">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left p-4 mt-4 md:mt-0 w-full">
                <h1
                    className="font-bold leading-tight mt-6 md:mt-0"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                    }}
                >
                    <span
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
                    >
                        Your SaaS Growth Partner: Customized Marketing Solutions to Scale Your Success
                    </span>
                </h1>

                <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-black">
                    Welcome to the hub of success for eCommerce businesses. We’re not just a marketing agency; we’re your dedicated partners in driving revenue and taking your brand to new heights.
                </p>

                {/* Know More Button */}
                <button
                    type="button"
                    className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                >
                    Get A Quote
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center p-4 mt-6 md:mt-0 w-full">
                <img
                    src={YourGrowthImg}
                    alt="Your SaaS Growth"
                    className="transform rotate-[-90] max-h-36 sm:max-h-48 md:max-h-60 lg:max-h-[15%] w-auto object-contain"
                />
            </div>
        </section>
    );
}

export default YourSaasGrowth;
