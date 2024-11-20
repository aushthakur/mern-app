import React from 'react';
import keywordResearch from '../img/search-engine-optimization 1.png';
import technicalSeo from '../img/technical-support 1.png';
import contentOptimization from '../img/content-management 1.png';
import speed from '../img/deadline 1.png';
import uxImprovement from '../img/ui 1.png';
import analytics from '../img/analytics 1.png';

function OurServices() {
    return (
        <>
            <section className="bg-black text-white p-6 relative h-auto w-full flex flex-col items-center justify-center lg:overflow-hidden">

                {/* Header Section */}
                <h1
                    className="font-semibold leading-tight text-center md:text-left"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '36px', // Default for mobile
                    }}
                >
                    <span
                        className="block text-3xl sm:text-4xl md:text-[50px] lg:text-[50px]"
                    >
                        OUR <span className="text-[#ff3131] font-extrabold">SERVICES</span>
                    </span>
                </h1>

                {/* Cards Section */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={keywordResearch} alt="Keyword Research" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Keyword Research</h3>
                        <p className="text-center text-base mt-2">Unlock the power of precision with our expert keyword research, designed to drive targeted traffic.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={technicalSeo} alt="Technical SEO" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Technical SEO</h3>
                        <p className="text-center text-base mt-2">Enhance your site’s performance and search engine rankings with our expert Technical SEO.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={contentOptimization} alt="Content Optimization" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Content Optimization</h3>
                        <p className="text-center text-base mt-2">Valuable content keeps your audience engaged and boosts your store’s authority with search engines.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={speed} alt="Speed" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Speed</h3>
                        <p className="text-center text-base mt-2">Boost engagement and drive conversions with our tailored content optimization strategies.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={uxImprovement} alt="UX Improvement" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">UX Improvement</h3>
                        <p className="text-center text-base mt-2">Our conversion rate optimization strategy enhances your website’s ability to turn leads into actions.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={analytics} alt="Analytics" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Analytics</h3>
                        <p className="text-center text-base mt-2">We monitor analytics closely to track results and identify areas for improvement.</p>
                    </div>
                </div>

            </section>
        </>
    );
}

export default OurServices;
