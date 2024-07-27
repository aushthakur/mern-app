import React from "react";
import image from "../img/brandlearn.jpeg";
import Navbar from "./navbar";
import Footer from "./footer";

const Brandlearn = () => {
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
          <h1 className="md:text-6xl sm:text-3xl font-bold text-black">
            Brand Identity and Strategy
          </h1>
         
          <p className="text-sm">
            "At Digital Drive Solution, we believe that every organization has a
            unique story to tell. Our approach to corporate brand identity is
            centered around understanding your values, strengths, and goals. We
            help you craft a compelling narrative that resonates with your
            audience and sets you apart from the competition.
          </p>
          <p className="text-sm">
            Through a combination of graphic design, visual storytelling, and
            strategic messaging, we create a cohesive brand identity that
            reflects your organization's quality and integrity. Our goal is to
            help you build a strong brand presence that drives results and
            inspires loyalty."
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Brandlearn;