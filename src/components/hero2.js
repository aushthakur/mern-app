import React from 'react';
import Slider from 'react-slick';
import logo1 from '../img/1.png';
import logo2 from '../img/2.png';
import logo3 from '../img/3.png';
import logo4 from '../img/4.png';
import logo5 from '../img/5.png';
import logo6 from '../img/6.png';
import logo7 from '../img/7.png';
import logo8 from '../img/8.png';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function LogoCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 5, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
  };

  function CustomArrow(props) {
    const { className, onClick, style } = props;
    return (
      <div
        className={className}
        onClick={onClick}
        style={{ ...style, color: 'black', fontSize: '30px' }}
      />
    );
  }

  return (
    <div className="flex items-center overflow-hidden my-8">
      {/* Static "Certification" label on the left */}
      <div className="w-64 ml-10 flex-shrink-0 text-xl text-gray-700">
        Working Partners
      </div>
      
      {/* Logo slider */}
      <div className="w-full">
        <Slider {...settings} className="flex  items-center">
          {[logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8].map((logo, index) => (
            <div key={index} className="flex  items-center justify-center p-2">
              <img
                src={logo}
                alt={`Logo ${index + 1}`}
                className="w-52 h-20 object-contain" // Adjust as needed
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LogoCarousel;
