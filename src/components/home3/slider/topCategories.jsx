import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {
  Avatar1,
  Avatar2,
  Avatar3,
  Category4,
  Category5,
  Category6,
} from "../../imagepath";
import { Link } from "react-router-dom";

import andaman from '../stats/andaman.png'
import assam from '../stats/assam.png'
import arunachalPardesh from '../stats/ArunachalPradesh.svg'
import bihar from '../stats/bihar.svg'
import Chhattisgarh from '../stats/Chhattisgarh.svg'
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
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 5,
      },
      1170: {
        items: 5,
      },
    },
  };
  return (
    <OwlCarousel
      {...course}
      className="owl-carousel home-three-favourite-carousel owl-theme aos topCat"
    >
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={andaman}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Andaman and Nicobar</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={assam}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Assam</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={arunachalPardesh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Arunachal Pardesh</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={bihar}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Bihar</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Chhattisgarh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Chhattisgarh</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Chhattisgarh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Uttar Pradesh</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Chhattisgarh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Telangana</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Chhattisgarh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Maharastra</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">200+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">200+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category4}
              alt="NODE JS Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>NODE JS Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category5}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Laravel Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={Category6}
              alt="Docker Development"
            />
          </div>
          <div className="categories-content course-info">
            <h3>Docker Development</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info">
              <p className="me-4">Instructors</p>
              <ul className="instructors-list">
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 1"
                  >
                    <img src={Avatar1} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 2"
                  >
                    <img src={Avatar2} alt="img" />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title=""
                    data-bs-original-title="leader 3"
                  >
                    <img src={Avatar3} alt="img" />
                  </Link>
                </li>
                <li className="more-set">
                  <Link to="/">80+</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};
