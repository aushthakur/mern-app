import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../img/Untitled design (8).png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      {/* Fixed Header Section */}
      <div className="fixed top-0 left-0 w-full bg-gray-100 text-gray-700 py-2 px-8 md:px-16 z-50 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-semibold">POWERING £50 MILLION + IN CLIENT GROWTH AND STILL RISING</span>
          <span className="text-[#ff3131] font-bold">TECHNO E-SERVICES GROUP LTD.</span>
        </div>
        <a href="tel:+4401908904853" className="flex items-center text-[#ff3131] font-bold hover:text-black">
          <span className="material-icons-outlined mr-1">call</span>
          (+44) 01908904853
        </a>
      </div>

      {/* Navbar Section */}
      <nav id='navbar' className="fixed top-[1.2rem] left-0 w-full bg-white text-black p-2 flex justify-between shadow-lg items-center z-40">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-16 ml-8 mt-2 sm:ml-2" />
        </div>
        <div className="hidden md:flex items-center text-xl gap-8">
          <Link to="/" className="border-white rounded-lg py-0.5 px-1.5 hover:text-[#ff3131]">Home</Link>
          <div className="relative inline-block group">
            <button className="border-white rounded-xl py-0.5 px-1.5 hover:text-[#ff3131]">
              <span className="flex items-center gap-2 hover:text-[#ff3131]">
                Who We Help <IoIosArrowDown />
              </span>
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded py-2 w-48">
              <div className="relative group">
                <button className="flex justify-between items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">
                  Industries <IoIosArrowForward />
                </button>
                {/* Nested Dropdown */}
                <div className="absolute left-full top-0 hidden group-hover:block mt-0 bg-white shadow-lg rounded py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Clothing Brands</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">FMCG</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">SaaS & PPC Services</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Shopify Solutions</a>
                </div>
              </div>
            </div>
          </div>
          <a href="#career" className="hover:text-[#ff3131]">Company</a>
          <button className="bg-[#ff3131] transition ease-in-out delay-150 hover:-translate-x-2 hover:scale-110 hover:bg-black text-white font-bold py-2 px-3 rounded relative overflow-hidden">
            Join Our Podcast
            <span className="absolute inset-0 bg-white opacity-30 rounded blur-md" style={{ animation: 'shine 2s infinite' }} />
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <a href="tel:8930318532" className="bg-[#ff3131] hover:bg-black rounded-md py-1 px-3 mr-3 text-white">Let's Talk</a>
          <div onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[3.5rem] left-0 w-full h-screen bg-black text-white flex flex-col items-start justify-center z-30 p-8">
          <Link to="/" className="py-2 text-2xl" onClick={handleMenuToggle}>Home</Link>
          <div className="py-2 text-2xl flex flex-col items-start">
            <button onClick={handleServicesToggle} className="flex items-center justify-between w-full">
              Services
            </button>
            {isServicesOpen && (
              <div className="flex flex-col items-start mt-2 bg-gray-800 rounded py-2 w-full">
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Android / IOS Development</a>
              </div>
            )}
          </div>
          <Link to="/work" className="py-2 text-2xl" onClick={handleMenuToggle}>Work</Link>
          <a href="#career" className="py-2 text-2xl" onClick={handleMenuToggle}>Career</a>
        </div>
      )}

      {/* Shine Animation Keyframes */}
      <style>
        {`
          @keyframes shine {
            0% {
              transform: translateX(-100%);
            }
            50% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
