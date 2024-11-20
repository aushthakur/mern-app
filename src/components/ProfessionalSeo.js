import React from 'react';
import amico from '../img/amico.png';

function ProfessionalSeo() {
    return (
        <section className="bg-white text-black p-6 relative h-screen w-full flex flex-col md:flex-row items-center justify-center lg:overflow-hidden">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left p-4 max-w-full md:max-w-[50%]">
                <h1
                    className="font-bold leading-tight"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                    }}
                >
                    <span
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-[45px]"
                    >
                        Professional SEO
                    </span>
                    <span
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-[45px]"
                    >
                        Solutions for Shopify
                    </span>
                    <span
                        className="block text-2xl sm:text-3xl md:text-4xl lg:text-[45px]"
                    >
                        Stores
                    </span>
                </h1>
                <p className="mt-10 text-base sm:text-lg md:text-xl leading-relaxed">
                    We are dedicated to providing eCommerce SEO expertise 
                    that boosts your Shopify store's ranking, drives sales, 
                    and makes it a top choice.
                </p>
                {/* Get a Quote Button */}
                <button
                    type="button"
                    className="mt-10 px-6 py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                >
                    Get a Quote
                </button>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center items-center p-4 max-w-full md:max-w-[50%]">
                <img
                    src={amico}
                    alt="Professional SEO Illustration"
                    className="max-h-56 sm:max-h-72 md:max-h-96 lg:max-h-[110%] w-auto object-contain"
                />
            </div>
        </section>
    );
}

export default ProfessionalSeo;
