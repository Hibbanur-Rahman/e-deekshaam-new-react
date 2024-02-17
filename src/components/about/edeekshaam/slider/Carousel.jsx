import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import crouseledeekhsaam1 from "../../../../assets/img/about/crouseledeekhsaam1.png";
import crouseledeekhsaam2 from "../../../../assets/img/about/crouseledeekhsaam2.png";
import crouseledeekhsaam3 from "../../../../assets/img/about/crouseledeekhsaam3.png";
import crouseledeekhsaam5 from "../../../../assets/img/about/crouseledeekhsaam5.png";
import crouseledeekhsaam6 from "../../../../assets/img/about/crouseledeekhsaam5.png";

export const TopCategories2 = () => {
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
        items: 3,
      },
      1170: {
        items: 3,
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
              src={crouseledeekhsaam1}
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
              src={crouseledeekhsaam2}
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
              src={crouseledeekhsaam3}
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
              src={crouseledeekhsaam3}
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
              src={crouseledeekhsaam6}
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
              src={crouseledeekhsaam6}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content mb-0">
            <h3></h3>
          </div>
        </div>
      </div>
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={crouseledeekhsaam5}
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
              src={crouseledeekhsaam6}
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              src={crouseledeekhsaam1}
              className="img-fluid"
              alt="Angular Development"
            />
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};
