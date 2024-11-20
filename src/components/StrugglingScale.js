import React from 'react'
import Proven from '../img/Proven.png';
import SassMastery from '../img/SaasMastery.png';
import Strategy from '../img/strategy 1.png';
import result from '../img/results 1.png';
import elite from '../img/Elite.png';
import communication from '../img/communication.png';
import clientSatisfaction from '../img/ClientSatisfaction.png';
import target  from '../img/target 1.png';
import technique from '../img/technique 1.png';
function StrugglingScale() {
    return (
        <>
            <section className="bg-black text-white p-6 relative h-auto w-full flex flex-col items-center justify-center lg:overflow-hidden">

                {/* Header Section */}
                <h1
                    className="font-semibold leading-tight text-center md:text-left"
                    style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontSize: '28px', // Default for mobile
                    }}
                >
                    <span
                        className="block text-3xl sm:text-4xl md:text-[50px] lg:text-[50px]"
                    >
                        Why Are You <span className="text-[#ff3131] font-extrabold">Struggling To Scale</span>
                    </span>
                </h1>

                {/* Cards Section */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={Proven} alt="Keyword Research" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Proven Excellence</h3>
                        <p className="text-center text-base mt-2">  We deliver exceptional results for our clients, time and time again.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={SassMastery} alt="Technical SEO" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">SAAS Mastery</h3>
                        <p className="text-center text-base mt-2">We understand the unique challenges and opportunities within the SaaS landscape. </p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={Strategy} alt="Content Optimization" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Tailored Strategies</h3>
                        <p className="text-center text-base mt-2">We crafts customized marketing strategies that align perfectly with your specific SaaS business goals.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={result} alt="Speed" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Results that Matter</h3>
                        <p className="text-center text-base mt-2">Our data-driven approach ensures your marketing efforts translate into real growth for your SaaS business.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={elite} alt="UX Improvement" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Elite Team Driving Your Success</h3>
                        <p className="text-center text-base mt-2">Our leading SaaS marketing agency has a team of passionate digital marketing specialists.</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={communication} alt="Analytics" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Transparent Communication</h3>
                        <p className="text-center text-base mt-2">We keep you informed every step of the way. Our team provides clear and regular communication</p>
                    </div>
                    <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={clientSatisfaction} alt="Analytics" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Client Satisfaction</h3>
                        <p className="text-center text-base mt-2">We go the extra mile to ensure our SaaS marketing services exceed your expectations.</p>
                    </div> <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={target} alt="Analytics" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">80/20 Focus</h3>
                        <p className="text-center text-base mt-2">We leverage the 80/20 principle to maximize results.</p>
                    </div> <div className="bg-white text-black p-6 rounded-lg shadow-lg flex flex-col items-center max-w-[400px] h-[350px]">
                        <img src={technique} alt="Analytics" className="mb-4 max-h-30 w-auto object-contain" />
                        <h3 className="text-xl font-semibold mb-4 mt-2">Pioneering Techniques</h3>
                        <p className="text-center text-base mt-2">Our SaaS digital marketing agency leverages cutting-edge marketing technologies to deliver exceptional results for your SaaS offering.</p>
                    </div>
                </div>
                <button
                        type="button"
                        className="mt-10 px-4 py-2 sm:px-6 sm:py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        Get A Quote
                    </button>
            </section>
        </>
    );
}

export default StrugglingScale
