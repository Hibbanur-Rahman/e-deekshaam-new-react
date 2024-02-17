import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import sliderImage1 from './images/Banner/Frame1.jpg'
import sliderImage2 from './images/Banner/Frame2.jpg'
import sliderImage3 from './images/Banner/Frame3.jpg'
const Carousel = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        },
      },
    ],
  };

  return (
    <div className="carousel home-carousel">
      <Slider {...settings}>
        <div className="img-Carousel">
          
          <img
            crossOrigin="anonymous"
            src={
              sliderImage1}
            alt="Slide 1"
          />
        </div>
        <div className="img-Carousel">
         
          <img
            crossOrigin="anonymous"
            src={
              sliderImage2}
            alt="Slide 2"
          />
        </div>
        <div className="img-Carousel">
          
          <img
            crossOrigin="anonymous"
            src={
              sliderImage3}
            alt="Slide 3"
          />
        </div>

      </Slider>
    </div>
  );
};

export default Carousel;
