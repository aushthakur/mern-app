import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../img/Untitled design (8).png';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav id='navbar' className="fixed top-0 left-0 w-full bg-black text-white p-2 flex justify-between items-center z-40">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" className="h-16 ml-8 mt-2" />
        </div>
        <div className="hidden md:flex text-2xl gap-8">
          <Link to="/" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Home</Link>
          <div className="relative group">
            <button className="border-white rounded-xl py-0.5 px-1.5 hover:border transition-all ease-out duration-200">
              <span className="flex items-center gap-2">Services</span>
            </button>
            <div className="absolute hidden group-hover:block mt-2 bg-white shadow-lg rounded py-2 w-48">
              {/* services dropdown menu */}
            </div>
          </div>
          <Link to="/work" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Work</Link>
          <a href="#career" className="border-white rounded-lg py-0.5 px-1.5 hover:border transition-all ease-out duration-200">Career</a>
          <a href="tel:8930318532" className='bg-gray-900 hover:bg-gray-700 rounded-md py-1 px-2 text-white mt-[-2px]'>Let's Talk</a>
        </div>
        <div className="md:hidden flex justify-between items-center">
          <a href="tel:8930318532" className='bg-gray-900 hover:bg-gray-700 rounded-md py-1 px-3 mr-3 text-white'>Let's Talk</a>
          <div onClick={handleMenuToggle}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-black text-white flex flex-col items-center justify-center z-30">
          <Link to="/" className="py-2 text-2xl" onClick={handleMenuToggle}>Home</Link>
          <Link to="/services" className="py-2 text-2xl " onClick={handleMenuToggle}>Services</Link>
          <Link to="/work" className="py-2 text-2xl" onClick={handleMenuToggle}>Work</Link>
          <a href="#career" className="py-2 text-2xl" onClick={handleMenuToggle}>Career</a>
        </div>
      )}
    </>
  );
};

export default Navbar;