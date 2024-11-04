import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const testimonials = [
    {
      id: 1,
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Alexa Denial',
      position: 'CEO / Director',
      image: 'https://via.placeholder.com/150', // Replace with your image URL
    },
    {
      id: 2,
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Alexa Denial',
      position: 'CEO / Director',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Title Here',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      name: 'Alexa Denial',
      position: 'CEO / Director',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[#ff3131] text-lg font-semibold">Testimonial</h2>
        <h3 className="text-3xl font-bold text-gray-800 mt-2">What our Customers Say</h3>
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="flex items-start mb-4">
                  <div className="text-[#ff3131] text-3xl">“</div>
                </div>
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{testimonial.title}</h4>
                <p className="text-gray-600 mb-6">{testimonial.description}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 border-2 border-[#ff3131]"
                  />
                  <div>
                    <h5 className="text-[#ff3131] font-semibold">{testimonial.name}</h5>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default TestimonialSlider;
