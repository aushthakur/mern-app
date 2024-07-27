import React from "react";
import image from "../img/weblearn.jpeg";
import Navbar from "./navbar";
import Footer from "./footer";

const Weblearn = () => {
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
          Web Design and Development
          </h1>

          <p className="text-sm">
            In today's digital landscape, having a strong online presence is
            crucial for individuals and businesses alike. We specialize in
            creating custom, affordable websites that meet your unique needs and
            goals.
          </p>
          <p className="text-sm">
            Our team of expert designers and developers work together to craft a
            website that not only looks great but also provides a seamless user
            experience. From the initial design concept to the final product, we
            ensure that your website accurately reflects your brand and
            resonates with your target audience.
          </p>
          <p className="text-sm">
            Our web development service goes beyond just building a website. We
            focus on creating a comprehensive online presence that effectively
            communicates your message, engages your users, and helps you achieve
            your online objectives. Let us help you establish a strong web
            presence that sets you apart from the competition.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Weblearn;