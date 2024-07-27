import React from 'react';
import logo from '../img/Untitled design (8).png'

function Footer() {
  return (
    <> 
       <footer className= "md:block sm:hidden lg:overflow-hidden bg-black sm:text-sm text-gray-500 p-1">
      <div className="container mx-auto flex flex-col p-9 md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row">
          <div className="mr-6">
            <a href="#" className="font-bold text-sm py-1 px-1 ">
            <img src={logo} alt="Logo" className="h-16 mr-4" />
            </a>
            <div className='gap-3'>
           <input type="email" placeholder='Your Email Address' className='bg-zinc-700 text-slate-300  outline-none  rounded m-1 px-7 py-1.5 text-sm  ' />
           <button className='bg-zinc-700 text-slate-300 rounded py-1 px-3'>Subscribe</button>
           </div>
          </div>

          <div className="mr-32 mt-6">
            <h4 className=" mx-3 mb-2">Services</h4>
            
            <ul className=" text-sm  text-white pl-4">
            <a href="">  <li>Web Design and Devlopment</li> </a>
            <a href="">  <li>Android / IOS Devlopment</li></a>
            <a href=""> <li>Social Media Manage Ment</li></a>
            <a href=""> <li>Brand Identity & Management</li></a>
            <a href="">   <li>Digital Marketing</li></a>
            <a href="">  <li>Influencer Marketing</li></a>
            </ul>
            
          </div>
          <div className="mr-6 mt-6">
            <h4 className=" mb-2  mx-3">Work Inquiries</h4>
            <ul className=" pl-4">
              <li>
                <a href="#" className="text-white hover:underline">
                  Interested Working with us
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  info@digitaldrivesolution.com
                </a>
              </li>
              <li>
                <a href="#" className=" hover:underline">
                  inquiry@digitaldrivesolution.com
                </a>
              </li>
              <li>
                <br />
                <a href="#" className="  hover:underline">
                  Phone
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  +91-8930318532
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:underline">
                  +91 8168439591
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mr-4">
            <a href="#" className="mr-2">
              <i className="fab fa-linkedin-in text-blue-500"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-facebook-f text-blue-600"></i>
            </a>
            <a href="#" className="mr-2">
              <i className="fab fa-instagram text-pink-500"></i>
            </a>
          </div>
        
        </div>
      </div>
      <p className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Digital Drive. All rights reserved.
      </p>
    </footer>
    {/* mobileview */}
    <footer className="sm:block  md:hidden overflow-hidden bg-black  text-gray-500 p-9">
      <div className="container  flex justify-between items-center">
        <div className="flex  text-[9px] ">

        
          <div className="mr-0 w-40 ">
            <h4 className=" mx-3 mb-2 pl-3  ">Services</h4>
           <div className=''>
            <ul className="  text-[8px] w-full px-10 gap-1   text-white pl-6">
            <a href="" >  <li>Web Design and Devlopment</li> </a>
            <a href="">  <li>Android / IOS Devlopment</li></a>
            <a href=""> <li>Social Media Manage Ment</li></a>
            <a href=""> <li>Brand Identity & Management</li></a>
            <a href="">   <li>Digital Marketing</li></a>
            <a href="">  <li>Influencer Marketing</li></a>
            </ul>
            </div> 
            
          </div>
          <div className="items-center pl-0">
            <h4 className=" mb-2  mx-2 pl-0">Work Inquiries</h4>
            <ul className=" pl-[-29px]">
              <li>
                <a href="#" className="text-white hover:underline">
                  Interested Working with us
                </a>
              </li>
              <li>
                <a href="mailto:info@digitaldrivesolution.com" className=" hover:underline">
                  info@digitaldrivesolution.com
                </a>
              </li>
              <li>
                <a href="mailto:inquiry@digitaldrivesolution.com" className=" hover:underline">
                  inquiry@digitaldrivesolution.com
                </a>
              </li>
              <li>
                <br />
                <a href="#" className="  hover:underline">
                  Phone
                </a>
              </li>
              <li>
                <a href="tel:8930318532" className="text-white hover:underline">
                  +91-8930318532
                </a>
              </li>
              <li>
                <a href="tel:8168439591" className="text-white hover:underline">
                  +91-8168439591
                </a>
              </li>
            </ul>
          </div>
        </div>
        
   
      </div>
      <div className="mr-0 items-center">
           
            <div className='gap-3 flex py-0.5 ml-0 mt-6'>
           <input type="email" placeholder='Your Email Address' className='bg-zinc-700 text-slate-300 rounded m-1 px-7 py-1.5 text-[9px]  ' />
           <button className='bg-zinc-700 text-slate-300 text-[9px] rounded py-1  px-3'>Subscribe</button>
           </div>
           <a href="#" className="font-bold text-sm py-1 px-1 ">
            <img src={logo} alt="Logo" className="h-16  ml-16" />
            </a>
          </div>
      <p className="mt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} Digital Drive. All rights reserved.
      </p>
    </footer>
    </>

  );
}

export default Footer;