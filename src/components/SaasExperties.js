import React from 'react'
import SassExperties from '../img/SaasExperties.png';
function SaasExperties() {
    return (
        <section className="bg-black text-white p-6 relative h-screen w-full flex flex-col md:flex-row items-center justify-center lg:overflow-hidden">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left p-4">
                <h1
                    className="font-bold leading-tight"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                    }}
                >
                    <span
                        className="block text-3xl sm:text-4xl md:text-5xl lg:text-[50px]"
                    >
                        See How Our Expertise Scaled SEO for Leading SaaS Brands!
                    </span>
                </h1>

                {/* Know More Button */}
                <button
                    type="button"
                    className="mt-20  px-6 py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                >
                    Know More
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center p-4">
                <img
                    src={SassExperties}
                    alt="Share_Experties"
                    className="transform rotate-[-90] max-h-60 sm:max-h-80 md:max-h-full w-auto object-contain"
                />
            </div>
        </section>
    );
}

export default SaasExperties
