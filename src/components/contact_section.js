import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    interest: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/send', formData);
      setStatus(response.data);
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message');
    }
  };

  return (
    <div className="bg-white text-white py-16 px-6 flex flex-col md:flex-row justify-between items-start w-full">
    {/* Got a project Section */}
    <div className=" sm:mt-4  bg-[#ff3131] rounded-lg p-10 text-left flex-1 mb-8 md:mb-0 md:mr-4 min-h-[500px] order-2 md:order-1">
      <h2 className="text-2xl font-bold mb-4">Join Our Business Podcast</h2>
      <h3 className="text-3xl font-extrabold">Ready to Launch Your Business?</h3>
      <p className="text-lg mt-4">
        Our podcast is dedicated to helping aspiring entrepreneurs and startups navigate the world of business. 
        We feature interviews with successful founders, provide insights, and inspire newcomers to make their mark.
      </p>
      <br />
      <button className="mt-16 bg-black text-white px-4 py-2 rounded">Listen Now</button>
    </div>
  
    {/* Contact Form Section */}
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-10 rounded-lg flex-1 w-full max-w-md order-1 md:order-2"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-4 rounded bg-gray-700 text-white outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-4 rounded bg-gray-700 text-white outline-none"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="p-4 rounded bg-gray-700 text-white outline-none"
        />
        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="p-4 rounded bg-gray-700 text-white outline-none"
        />
      </div>
  
      <select
        name="interest"
        value={formData.interest}
        onChange={handleChange}
        required
        className="w-full p-4 mb-4 rounded bg-gray-700 text-white outline-none"
      >
        <option value="">Interested In...</option>
        <option value="Podcast">Podcast Features</option>
        <option value="Business Insights">Business Insights</option>
        <option value="Startups">Startups</option>
        <option value="Entrepreneurship">Entrepreneurship</option>
        <option value="Marketing Tips">Marketing Tips</option>
      </select>
  
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full p-4 mb-4 rounded bg-gray-700 text-white outline-none"
      />
  
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mr-2"
        />
        <label className="text-sm text-gray-400">
          I consent to my data being processed according to the{' '}
          <a href="/privacy-policy" className="text-orange-500">
            Privacy Policy
          </a>.
        </label>
      </div>
  
      <button
        type="submit"
        className="w-full py-3 bg-[#ff3131] rounded text-white font-bold hover:bg-white hover:text-[#ff3131] transition duration-300"
      >
        Send Message
      </button>
  
      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </form>
  </div>
  
  );
};

export default ContactForm;
