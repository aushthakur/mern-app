import React from 'react';
import whychooseUs from '../img/rafiki.png';

function WhyChooseUs() {
    return (
        <>
            <section className="bg-white text-black p-6 relative h-screen w-full flex flex-col md:flex-row items-center justify-center lg:overflow-hidden">
                {/* Image Section */}
                <div className="flex-1 flex justify-center items-center p-4 max-w-full md:max-w-[50%] mb-6 md:mb-0">
                    <img
                        src={whychooseUs}
                        alt="Professional SEO Illustration"
                        className="max-h-40 sm:max-h-52 md:max-h-64 lg:max-h-[80%] w-auto object-contain"
                    />
                </div>

                {/* Text Section */}
                <div className="flex-1 text-center md:text-left p-4 max-w-full md:max-w-[50%]">
                    <h1
                        className="font-bold leading-tight"
                        style={{
                            fontFamily: 'Poppins, sans-serif',
                        }}
                    >
                        <span
                            className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl"
                        >
                            Why <span className="text-[#ff3131] font-extrabold">Choose Us</span>?
                        </span>
                    </h1>
                    <p className="mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
                        We specialize in Shopify SEO, helping your store attract more traffic and increase sales. Our team has deep expertise in the Shopify platform and offers customized, data-driven strategies that improve rankings and drive conversions. We focus on both on-page and technical SEO, ensuring your store is optimized for search engines and user experience. With a proven track record and ongoing support, we’re dedicated to delivering measurable results and sustainable growth for your Shopify business. Choose us to take your online store to the next level.
                    </p>
                    {/* Get a Quote Button */}
                    <button
                        type="button"
                        className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Read More
                    </button>
                </div>
            </section>
        </>
    );
}

export default WhyChooseUs;
