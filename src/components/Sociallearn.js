import React from "react";
import image from "../img/Sociallearn.jpeg";
import Navbar from "./navbar";
import Footer from "./footer";

const Sociallearn = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap md:flex-nowrap mt-32 items-center justify-between gap-11 p-10">
        <div className="sm:w-full md:w-1/2 order-1 md:order-1">
          <img
            src={image}
            alt="Specialised Social Media Marketing"
            width={500}
            height={500}
            className="md:w-full"
          />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-5 order-2 md:order-2">
          <h1 className="md:text-6xl sm:text-3xl font-bold text-black">Social Media</h1>
          <p className="md:text-lg sm:text-[15px] font-semibold">
            "Your brand isn't what you say it is. Your consumer's opinions
            define your brand."
          </p>
          <p className="text-sm">
            Social Media allows you to strike conversation with your consumers on
            daily basis and build powerful brand stories that touch their lives. And
            we create such stories around your brand. Simply put, word of mouse is
            equivalent to word of mouth.
          </p>
          <p className="text-sm">
            Marketing today is undergoing a paradigm shift. Social Media
            platforms like Facebook, Twitter, Instagram, Pinterest and many
            emerging ones have become an eternal part of our social existence
          </p>
          <p className="text-sm">
            While having many options is good, choosing the right platform to
            promote your brand and services is very crucial. And it is more crucial
            to come up with interactive and interesting content for your brand on
            me to rescue with our exceptionally
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Sociallearn;