import React, { useEffect, useState } from 'react';
import mobileImage from '../img/mobileview.jpg';
import heroImage from '../img/hero.jpg';
import { FaLinkedin, FaInstagram, FaTelegram, FaFacebook, FaTwitter, FaTimes } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ClipLoader } from 'react-spinners'; // For loading animation
import { FloatingWhatsApp } from 'react-floating-whatsapp'; // Correct import

const SocialLink = ({ href, icon: Icon, colorClass }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={`hover:text-gray-400 ${colorClass}`}>
    <Icon className="w-6 h-6" />
  </a>
);

const Hero = () => {
  const [showCookies, setShowCookies] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [iconColor, setIconColor] = useState('text-white');

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      const element = document.elementFromPoint(window.innerWidth - 10, yOffset + window.innerHeight / 2);
      if (element && element.nodeType === 1) { // Ensure the element is valid
        const bgColor = window.getComputedStyle(element).backgroundColor;
        const isDarkBackground = bgColor === 'rgb(0, 0, 0)';
        setIconColor(isDarkBackground ? 'text-white' : 'text-black');
      } else {
        setIconColor('text-white'); // Default to white if no valid element is found
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseCookies = () => {
    setShowCookies(false);
  };

  const handleGetQuote = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <section className="bg-black text-white p-6 relative h-screen w-full flex md:items-center sm:items-end">
      <div className="absolute inset-0 bg-cover bg-center brightness-110 opacity-70 sm:p-0 h-full w-full">
        <img src={heroImage} alt="" className="hidden md:block w-full h-full object-cover" />
        <img src={mobileImage} alt="" className="md:hidden w-full object-cover" />
      </div>
      <div className="relative z-10 container mx-auto px-4 flex justify-between items-center mt-12">
        <div className="">
          <h1 className="text-xl sm:text-2xl sm:mb-8 text-slate-300 tracking-wider pt-30 md:text-4xl mb-2 mt-9 text-left">
            Empower Your Business With <br /> Building <span className="text-white font-extrabold">Digital Presence</span> <br /> and <span className="text-white font-extrabold">Brand Identity</span>.
          </h1>
          <button
            className="bg-gray-900 sm:mb-32 hover:bg-gray-700 text-white text-xl font-bold py-2 px-4 mt-3 letter-spacing: 0.025em rounded"
            onClick={handleGetQuote}
          >
            Get a Quote
          </button>
        </div>
        <div className="hidden md:flex flex-col space-y-5 fixed right-0 top-1/2 transform -translate-y-1/2 mr-4">
          <SocialLink href="https://www.linkedin.com" icon={FaLinkedin} colorClass={iconColor} />
          <SocialLink href="https://www.instagram.com" icon={FaInstagram} colorClass={iconColor} />
          <SocialLink href="https://telegram.org" icon={FaTelegram} colorClass={iconColor} />
          <SocialLink href="https://www.facebook.com" icon={FaFacebook} colorClass={iconColor} />
          <SocialLink href="https://www.twitter.com" icon={FaTwitter} colorClass={iconColor} />
        </div>
      </div>
      {showCookies && <CookieNotice onClose={handleCloseCookies} />}
      {showModal && <QuoteModal onClose={handleCloseModal} />}
      <ToastContainer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp
        phoneNumber="+918930318532" // Replace with your desired phone number
        accountName="Digital Drive Solution"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    </section>
  );
};

const CookieNotice = ({ onClose }) => (
  <div className="bg-white bg-opacity-80 rounded-md flex items-center shadow-md justify-between fixed bottom-4 left-1/2 transform -translate-x-1/2 p-4 max-w-xl w-full">
    <p className="text-black text-sm">We use cookies to give you the best experience. <span className="font-bold">Cookies?</span></p>
    <button onClick={onClose} className="text-black ml-4">
      <FaTimes />
    </button>
  </div>
);

const QuoteModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d75a129d-d329-4e7e-bb7f-d58810e8c75e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    setLoading(false);
    if (data.success) {
      toast.success("Form Submitted Successfully");
      onClose();
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white text-black rounded-lg p-8 relative max-w-md w-full sm:w-80">
        <button onClick={onClose} className="absolute top-4 right-4 text-black">
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">Get a Quote</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input type="text" name="name" placeholder="Enter Your Name" className="w-full border border-gray-300 p-1 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Number</label>
            <input type="text" name="number" placeholder="+91XXXXXXXX" className="w-full border border-gray-300 p-1 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Email ID</label>
            <input type="email" name="email" className="w-full border border-gray-300 p-1 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Company</label>
            <input type="text" name="company" className="w-full border border-gray-300 p-1 rounded" />
          </div>
          <div>
            <label className="block text-sm font-medium">City</label>
            <input type="text" name="city" className="w-full border border-gray-300 p-1 rounded" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea name="message" className="w-full border border-gray-300 p-2 rounded" rows="4"></textarea>
          </div>
          <button type="submit" className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
            {loading ? <ClipLoader size={20} color="#fff" /> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
