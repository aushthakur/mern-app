import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../img/Untitled design (8).png';
import { Link } from 'react-router-dom';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { MdCall } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false);
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header Section */}
      <div className="fixed top-0 left-0 w-full bg-[#2e3c45] text-white py-2 px-8 md:px-16 z-50 flex items-center justify-between">
        <div className="flex items-center justify-between w-full gap-8">
          <span className="text-sm md:text-base lg:text-lg">
            Driving <span className="text-[#FE3033]">£50M+</span> In Client Growth & Still Rising
          </span>
          <span className="text-[#FE3033] font-semibold text-sm md:text-base lg:text-lg">
            Techno e-Services Group Ltd.
          </span>
          <a href="tel:+4401908904853" className="flex items-center font-semibold hover:text-[#FE3033]">
            <MdCall className="text-2xl text-[#FE3033] mr-1" />
            (+44) 01908904856
          </a>
        </div>
      </div>

      {/* Scroll Loader */}
      <div
        style={{ width: `${scrollProgress}%`, zIndex: 100 }}
        className="fixed top-[2.5rem] left-0 h-1 bg-[#FE3033] transition-all duration-200"
      ></div>

      {/* Navbar Section */}
      <nav id="navbar" className="fixed top-[2.5rem] left-0 w-full bg-white text-black py-3 px-8 flex justify-between shadow-md items-center z-40">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-16" />
        </div>
        <div className="hidden md:flex items-center text-lg gap-10">
          <Link to="/" className="text-black hover:text-[#ff3131]">Home</Link>
          <div className="relative group">
            <button className="text-black hover:text-[#ff3131] flex items-center gap-1">
              Who We Help <IoIosArrowDown />
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded py-2 w-48">
              <div className="relative group">
                <button className="flex justify-between items-center w-full px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Industries <IoIosArrowForward />
                </button>
                {/* Nested Dropdown */}
                <div className="absolute left-full top-0 hidden group-hover:block bg-white shadow-lg rounded py-2 w-48">
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Clothing Brands</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">FMCG</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">SaaS & PPC Services</a>
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shopify Solutions</a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-black hover:text-[#ff3131] flex items-center gap-1">
              Shopify <IoIosArrowDown />
            </button>
            {/* Dropdown */}
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded py-2 w-48">
              <div className="relative group">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shopify SEO</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shopify PPC</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shopify Website Design</a>
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Shopify E-commerce</a>
              </div>
            </div>
          </div>
          <Link to="#career" className="text-black hover:text-[#ff3131]">Company</Link>
          <button className="bg-[#FE3033] text-white py-2 px-4 rounded transition-transform transform hover:-translate-y-1 hover:scale-105">
            Share Your Story
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <a href="tel:8930318532" className="bg-[#ff3131] text-white font-bold py-1 px-3 rounded mr-3">Let's Talk</a>
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
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700">Android / IOS Development</a>
              </div>
            )}
          </div>
          <Link to="/work" className="py-2 text-2xl" onClick={handleMenuToggle}>Work</Link>
          <a href="#career" className="py-2 text-2xl" onClick={handleMenuToggle}>Career</a>
        </div>
      )}
    </>
  );
};

export default Navbar;
