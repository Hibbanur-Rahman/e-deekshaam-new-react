import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import sliderImage1 from './images/Banner/Frame1.jpg'
import sliderImage2 from './images/Banner/Frame2.jpg'
import sliderImage3 from './images/Banner/Frame3.jpg'
import sliderImage4 from './images/Banner/Frame4.jpg'
import sliderImage5 from './images/Banner/slider-1.png';
import sliderImage6 from './images/Banner/slider-2.png'
import sliderImage7 from './images/Banner/slider-3.png'
import sliderImage8 from './images/Banner/slider-4.png'
import sliderImage9 from './images/Banner/slider-5.png'
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
        <div className="img-Carousel">
          
          <img
            crossOrigin="anonymous"
            src={
              sliderImage4}
            alt="Slide 4"
          />
        </div>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              sliderImage5
            }
            alt="Slide 5"
          />

        </div>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              sliderImage6
            }
            alt="Slide 6"
          />

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              sliderImage7
            }
            alt="Slide 7"
          /> 

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              sliderImage8
            }
            alt="Slide 8"
          />

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              sliderImage9
            }
            alt="Slide 9"
          /> 

        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
