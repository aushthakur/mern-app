import React from "react";
import image from "../img/digitallearn.jpeg";
import Navbar from "./navbar";
import Footer from "./footer";

const Digitallearn = () => {
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
          Digital Marketing
          </h1>
         
          <p className="text-sm">
            In today's digital age, online marketing is crucial for businesses
            to thrive. It encompasses a range of strategies that help you reach
            and engage with your target audience through various digital
            platforms.
          </p>
          <p className="text-sm">
            From search engines like Google to social media, email, and your
            website, digital marketing allows you to connect with customers and
            potential clients in the most effective way possible.
          </p>
          <p className="text-sm">
            The key to successful marketing has always been about being in the
            right place at the right time. With the majority of people spending
            a significant amount of time online, it's essential to meet them
            where they are and tailor your marketing efforts accordingly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Digitallearn;