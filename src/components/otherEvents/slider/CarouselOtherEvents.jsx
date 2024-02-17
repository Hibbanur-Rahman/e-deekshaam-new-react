import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { slider1 } from "../../imagepath";
import { slider2 } from "../../imagepath";
import { slider3 } from "../../imagepath";
import { slider4 } from "../../imagepath";
import { slider5 } from "../../imagepath";
import { slider6 } from "../../imagepath";

export const CarouselOtherEventsFirst = () => {
  var course = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  return (
    <OwlCarousel
      {...course}
      className="owl-carousel home-three-favourite-carousel owl-theme aos topCat"
    >
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={slider1}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={slider2}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export const CarouselOtherEventsSecond = () => {
  var course = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  return (
    <OwlCarousel
      {...course}
      className="owl-carousel home-three-favourite-carousel owl-theme aos topCat"
    >
            <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={slider6}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>

      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={slider4}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

export const CarouselOtherEventsThird = () => {
  var course = {
    //autoWidth: true,
    items: 2,
    margin: 25,
    dots: true,
    nav: true,
    navText: [
      '<i className="fas fa-arrow-left"></i>',
      '<i className="fas fa-arrow-right"></i>',
    ],

    loop: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1170: {
        items: 1,
      },
    },
  };
  return (
    <OwlCarousel
      {...course}
      className="owl-carousel home-three-favourite-carousel owl-theme aos topCat"
    >
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={slider3}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              src={slider5}
              className="img-fluid"
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};

