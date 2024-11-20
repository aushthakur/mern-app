import React from 'react';
import expertiesImg from '../img/bro.png';
import '../styles/hero3.css';

function ShareYourExpertise() {
    return (
        <section className="bg-black text-white p-6 relative h-screen w-full flex flex-col items-center justify-center md:flex-row lg:overflow-hidden">
        {/* Text Section */}
        <div className="flex-1 text-left p-4 w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="font-bold leading-tight"
            style={{
              fontFamily: 'Poppins, sans-serif',
            }}
          >
            <div className="text-container">
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-[55px]"
                style={{
                  marginBottom: '24px', // Increased spacing between text
                }}
              >
                Share Your
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-[55px]"
                style={{
                  marginBottom: '24px', // Increased spacing between text
                }}
              >
                Expertise Inspire,
              </span>
              <span
                className="block text-2xl sm:text-3xl md:text-4xl lg:text-[50px]"
                style={{
                  marginBottom: '24px', // Increased spacing between text
                }}
              >
                Our Listeners{' '}-{' '}
                <span className="text-[#ff3131] font-extrabold">
                  Join
                  <br />
                  <span
                    className="text-[#ff3131] font-extrabold"
                    style={{ marginTop: '14px', display: 'block' }}
                  >
                    as a Guest!
                  </span>
                </span>
              </span>
            </div>
          </h1>
      
          {/* Know More Button */}
          <div className="mt-4 sm:mt-8 w-full flex justify-center md:justify-start">
            <button
              type="button"
              className="px-6 py-3 bg-[#ff3131] text-white font-bold rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
            >
              Know More
            </button>
          </div>
        </div>
      
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center p-4 mt-6 md:mt-0">
          <img
            src={expertiesImg}
            alt="Share_Experties"
            className="w-full max-w-[412px] object-contain"
          />
        </div>
      </section>
      
    );
}

export default ShareYourExpertise;