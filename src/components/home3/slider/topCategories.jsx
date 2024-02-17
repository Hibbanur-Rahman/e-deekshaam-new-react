import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";


import uttarpradesh from '../stats/up2.svg'
import jammuAndKashmir from '../stats/j_k-1.png'
import tamilNadu from '../stats/CHENNAI.svg'
import westBengal from '../stats/Emblem_of_West_Bengal_(2018-present).png'
import maharastra from '../stats/maharashtra.png'
import kerala from '../stats/kerala.svg'
import telangana from '../stats/telangana.png'
import andhra from '../stats/andhra pradesh.svg'
import haryana from '../stats/haryana.svg'
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
      {/* <div className="favourite-box" data-aos="fade-down">
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
      </div> */}
      {/* <div className="favourite-box" data-aos="fade-down">
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
      </div> */}
      {/* <div className="favourite-box" data-aos="fade-down">
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
      </div> */}
      {/* <div className="favourite-box" data-aos="fade-down">
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
      </div> */}
      <div className="favourite-box" data-aos="fade-down">
        <div className="favourite-item flex-fill">
          <div className="categories-icon">
            <img
              className="img-fluid"
              src={uttarpradesh}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Uttar Pradesh</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">92+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">10+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">15+</p>
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
              src={jammuAndKashmir }
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Jammu & Kashmir</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">25+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">4+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">6+</p>
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
              src={tamilNadu }
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Tamil Nadu</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">20+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">2+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">3+</p>
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
              src={westBengal}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>West Bengal</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">10+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">2+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">3+</p>
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
              src={maharastra}
              alt="Angular Development"
              style={{scale:'1.5'}}
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Maharastra</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">20+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">4+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">9+</p>
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
              src={kerala}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Kerala</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">25+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">4+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">8+</p>
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
              src={telangana}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Telangana</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">30+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">4+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">15+</p>
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
              src={andhra}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Andhra Pradesh</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">19+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">3+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">10+</p>
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
              src={haryana}
              alt="Angular Development"
            />
          </div>
          <div className="categories-content course-info mb-0">
            <h3>Haryana</h3>
          </div>
          <div className="course-instructors">
            <div className="instructors-info row m-0 p-0">
              <div className="border border-1 border-start-0 border-top-0 border-end-1 col-6 p-2">
                <p className="m-0 p-0 text-center w-auto">15+</p>
                <p className="text-center w-auto">Students</p>
              </div>
              <div className="border border-1 border-start-0 border-end-0 border-top-0 col-6 p-2">
                <p className="m-0 p-0 text-center">2+</p>
                <p className="text-center">Institutions</p>
              </div>
              <div className="col-12 border border-0 p-2">
                <p className="m-0 p-0 text-center">3+</p>
                <p className="m-0 p-0 text-center">Prehab professionals</p>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </OwlCarousel>
  );
};
