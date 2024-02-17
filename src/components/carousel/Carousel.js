import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

import sliderImage1 from './images/Banner/Frame1.jpg'
import sliderImage2 from './images/Banner/Frame2.jpg'
import sliderImage3 from './images/Banner/Frame3.jpg'
import sliderImage4 from './images/Banner/Frame4.jpg'
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
          {/* <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-32-03-200Z.compressed.png"
            }
            alt="Slide 1"
          /> */}
          <img
            crossOrigin="anonymous"
            src={
              sliderImage1}
            alt="Slide 1"
          />
        </div>
        <div className="img-Carousel">
          {/* <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T08-00-48-270Z.compressed.png"
            }
            alt="Slide 2"
          /> */}
          <img
            crossOrigin="anonymous"
            src={
              sliderImage2}
            alt="Slide 2"
          />
        </div>
        <div className="img-Carousel">
          {/* <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-47-07-624Z.compressed.png"
            }
            alt="Slide 3"
          /> */}
          <img
            crossOrigin="anonymous"
            src={
              sliderImage3}
            alt="Slide 3"
          />
        </div>
        <div className="img-Carousel">
          {/* <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-47-41-143Z.compressed.png"
            }
            alt="Slide 4"
          /> */}
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
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-49-28-753Z.compressed.png"
            }
            alt="Slide 5"
          />

        </div>
        <div className="img-Carousel">
          <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-32-03-200Z.compressed.png"
            }
            alt="Slide 6"
          />

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T08-00-48-270Z.compressed.png"
            }
            alt="Slide 7"
          /> 

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-47-07-624Z.compressed.png"
            }
            alt="Slide 8"
          />

        </div>
        <div className="img-Carousel">
        <img
            crossOrigin="anonymous"
            src={
              "https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T07-47-41-143Z.compressed.png"
            }
            alt="Slide 9"
          /> 

        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
