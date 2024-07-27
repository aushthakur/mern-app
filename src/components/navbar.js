import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../img/Untitled design (8).png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsServicesOpen(false); // Close services dropdown when menu is toggled
  };

  const handleServicesToggle = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <>
      <nav id='navbar' className="fixed top-0 left-0 w-full bg-black text-white p-2 flex justify-between items-center z-40">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-16 ml-8 mt-2 sm:ml-2" />
        </div>
        <div className="hidden md:flex text-2xl gap-8">
          <Link to="/" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Home</Link>
          <div className="relative group">
            <button className="border-white rounded-xl py-0.5 px-1.5 hover:border transition-all ease-out duration-200">
              <span className="flex items-center gap-2">Services</span>
            </button>
            <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded py-2 w-48">
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Web Development</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Android / IOS Development</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Brand Identity</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">AI & ML Solutions</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">PPC</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">SEO</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Influencer Marketing</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Ecom Marketing</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">CRM Solution</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">3D Modelling & Design</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Social Media Management</a>
              <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-300 text-sm">Domain & Hosting Solutions</a>
            </div>
          </div>
          <Link to="/work" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Work</Link>
          <a href="#career" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Career</a>
          <a href="tel:8930318532" className='bg-gray-900 hover:bg-gray-700 rounded-md py-1 px-1.5 text-white mt-[-2px]'>Let's Talk</a>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <a href="tel:8930318532" className='bg-gray-900 hover:bg-gray-700 rounded-md py-1 px-3 mr-3 text-white'>Let's Talk</a>
          <div onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-start justify-center z-30 p-8">
          <Link to="/" className="py-2 text-2xl" onClick={handleMenuToggle}>Home</Link>
          <div className="py-2 text-2xl flex flex-col items-start">
            <button onClick={handleServicesToggle} className="flex items-center justify-between w-full">
              Services
            </button>
            {isServicesOpen && (
              <div className="flex flex-col items-start mt-2 bg-gray-800 rounded py-2 w-full">
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Web Development</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Android / IOS Development</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Brand Identity</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">AI & ML Solutions</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">PPC</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">SEO</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Influencer Marketing</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Ecom Marketing</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">CRM Solution</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">3D Modelling & Design</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Social Media Management</a>
                <a href="#" className="block px-4 py-2 text-gray-200 hover:bg-gray-700 text-sm">Domain & Hosting Solutions</a>
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
