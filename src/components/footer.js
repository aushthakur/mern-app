import React from 'react';
import logo from '../img/Untitled design (8).png';

function Footer() {
  return (
    <>
      <footer className="bg-white text-gray-800 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start px-6">
          {/* Logo and Description */}
          <div className="mb-8 md:mb-0">
            <img src={logo} alt="Logo" className=" h-20 mb-4" />
            <p className="text-sm">
             Boostpod is a vertical of  <br/>Techno e-Services Group Ltd. <br />pioneering business growth<br /> by merging digital marketing <br />expertise with a unique B2B<br /> podcast series. 
            </p>
            <p className="text-lg font-semibold mt-4 text-[#ff3131]">
            £50 MILLION + IN CLIENT <br />GROWTH AND STILL RISING
            </p>
          </div>

          {/* Services Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-3">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">SaaS SEO</a></li>
              <li><a href="#" className="hover:underline">SaaS Website Development</a></li>
              <li><a href="#" className="hover:underline">E-commerce SEO</a></li>
              <li><a href="#" className="hover:underline">E-commerce Website Development</a></li>
              <li><a href="#" className="hover:underline">Shopify SEO</a></li>
              <li><a href="#" className="hover:underline">Shopify Website Design</a></li>
            </ul>
          </div>

          {/* Business Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-3">Business</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">SaaS</a></li>
              <li><a href="#" className="hover:underline">Shopify Expertise</a></li>
              <li><a href="#" className="hover:underline">E-commerce</a></li>
            </ul>
          </div>

          {/* About Us Section */}
          <div className="mb-8 md:mb-0">
            <h4 className="font-semibold text-lg mb-3">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Who We Are</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Podcast</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
              <li><a href="#" className="hover:underline">Case Study</a></li>
              <li><a href="#" className="hover:underline">Best Shopify Apps</a></li>
              <li><a href="#" className="hover:underline">Top Citation Sites</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 mt-10 py-6">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 text-sm">
            {/* Contact Information */}
            <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
              <a href="tel:+18882731050" className="flex items-center mb-1 text-gray-800 hover:underline">
                <i className="fas fa-phone-alt mr-2 text-blue-600"></i> (+44) 01908904853
              </a>
              <a href="mailto:hello@wytlabs.com" className="flex items-center mb-1 text-gray-800 hover:underline">
                <i className="fas fa-envelope mr-2 text-blue-600"></i> info@boostpod.co.uk
              </a>
              <p className="flex items-center text-gray-800">
                <i className="fas fa-map-marker-alt mr-2 text-blue-600"></i> 

                Suite 5 Margaret Powell House, 401-447, <br />Milton Keynes, Buckinghamshire U.K. MK9 3BN              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-800 hover:text-blue-600">
                <i className="fab fa-pinterest"></i>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="text-center text-gray-600 mt-4 text-xs">
            &copy; {new Date().getFullYear()} Boostpod (A Brand of Techno e-Services Ltd.) All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
