import React, { useEffect } from "react";

import { Footer3 } from "../footer3";
import { Header3 } from "../header3";

import Carousel from '../carousel/Carousel';
import { Quote } from "../imagepath";
import { mission } from "../imagepath";
import { vision } from "../imagepath";
import { about } from "../imagepath";
import { process } from "../imagepath";
import "./home.css";
import {

  CheckRound2,
  Course01Icon,
  Course02Icon,
  Course03Icon,
  Course04Icon,

  Pattern01,

  Time,
} from "../imagepath";
import { TopCategories2 } from "./slider/topCategories";

import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";



export const Home3 = () => {

  useEffect(() => {
    document.body.className = "home-three";

    return () => {
      document.body.className = "";
    };
  }, []);


  // const [toggle, setToggle] = useState(1);

  // const updateToggle = (id) => {
  //   setToggle(id);
  //   console.log(id);
  // };

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  // function Number({ n }) {
  //   const { number } = useSpring({
  //     from: { number: 0 },
  //     number: n,
  //     delay: 200,
  //     config: { mass: 1, tension: 20, friction: 10 },
  //   });
  //   return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  // }

  return (
    <>
      <Header3 />
      {/* Home Banner */}
      <Carousel />
      {/* Home Banner */}
      {/* Online Courses */}
      <section className="section  home-three-course mt-5">
        <div className="container">
          <div className="course-widget-three">
            <div className="row">
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course01Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-blue">
                          <span className="d-flex">
                            <CountUp
                              start={0}
                              end={5}
                              delay={1}
                              duration={4}
                            />
                            +
                          </span>
                        </h4>
                        <p>States</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course02Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-yellow">
                          <span className="d-flex">
                            <CountUp start={0} end={30} delay={1} />+
                          </span>
                        </h4>
                        <p>Institutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three">
                  <div className="align-items-center">
                    <div className="course-count-three course-count ms-0">
                      <div className="course-img">
                        <img className="img-fluid" src={Course03Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-info">
                          <span className="d-flex">
                            <CountUp start={0} end={50} delay={1} duration={5} />
                            +
                          </span>
                        </h4>
                        <p>Rehab Professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex" data-aos="fade-up">
                <div className="course-details-three mb-0">
                  <div className="align-items-center">
                    <div className="course-count-three">
                      <div className="course-img">
                        <img className="img-fluid" src={Course04Icon} alt="" />
                      </div>
                      <div className="course-content-three course-count ms-0">
                        <h4 className="text-green">
                          <span className="d-flex">
                            <CountUp start={0} end={40} delay={1} duration={2} />
                            +
                          </span>
                        </h4>
                        <p>Students</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Online Courses */}

      {/* Master Skills Career */}
      <section className="master-skill-three">
        <div className="master-three-vector">
          <img className="ellipse-right img-fluid" src={Pattern01} alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center" data-aos="fade-right">
              <div className="master-three-images">
                <div className="master-three-left">
                  <img
                    className="img-fluid"
                    src={about}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-left">
              <div className="home-three-head" data-aos="fade-up">
                <h2>About ε-Deekshaam</h2>
              </div>
              <h5 className="text-blue">Inclusive Education is our first priority</h5>

              <div className="py-4">
                <img className="quote img-fluid home3Slide" alt="" src={Quote} />
              </div>
              <div className="home-three-content" data-aos="fade-up">
                <p>
                  The highest education is that which does not merely gives information but brings our life in harmony with all existence.
                </p>
                <strong>
                  ~ Rabindranath Tagore
                </strong>
              </div>
              <div className="career-group aos" data-aos="fade-up">
                <div className="row">
                  <div className="col-lg-6 col-md-6 d-flex">
                    <div className="certified-group blur-border d-flex">
                      <div className="get-certified">
                        <div className="mission-vision mb-3">
                          <img className="" src={mission} alt="" />
                        </div>
                        <h5>Our Mission</h5>
                        <p className="m-0">
                          Our mission is to provide an adaptive assistive system to help children with intellectual disabilities to learn and succeed. We aim to offer a supportive and inclusive environment where children learn meaningfully, develop essential skills, and gain confidence in their abilities.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex">
                    <div className="certified-group blur-border d-flex">
                      <div className="get-certified">
                        <div className="mission-vision mb-3">
                          <img className="" src={vision} alt="" />
                        </div>
                        <h5>Our Vision</h5>
                        <p className="m-0">
                          Our Vision is that every child with an intellectual disability thrives and accomplishes their goals. Our adaptive assistive system will help children with intellectual disabilities overcome hurdles and reach their full potential.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Master Skills Career */}





      {/* Process */}
      <section className="testimonial-three">
        <div className="container">
          {/* Learn Anything */}
          <div className="learn-anything border-0">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12"
                data-aos="fade-up"
              >
                <div className="award-three-content-two">
                  <div className="award-list-info">
                    <div className="award-win-icon">
                      <img className="img-fluid" src={Time} alt="certified" />
                    </div>
                    <div className="award-list-content">
                      <h5 className="text-white">
                        How does it work?
                      </h5>
                      <h2>Our Process is easy to understand</h2>
                      <p>
                        Each intellectually disabled child&apos;s needs and abilities are assessed. This assessment determines learning goals, preferences, and challenges. The teacher evaluates. Based on the assessment, E-Deekshaam customizes learning plans for each child. The plan details the child-specific learning objectives, content, and activities.
                      </p>
                    </div>
                  </div>

                  <div className="award-list d-flex">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="" />
                    </span>
                    <p>
                      E-Deekshaam&apos;s interactive lessons, videos, and games are tailored to the child&apos;s needs and pace.                    </p>
                  </div>
                  <div className="award-list d-flex">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="" />
                    </span>
                    <p>
                      E-Deekshaam adjusts the child&apos;s education plan and content as they progress.
                    </p>
                  </div>
                  <div className="award-list d-flex">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="" />
                    </span>
                    <p>
                      It will help or challenge the child based on performance and feedback. It also tracks and evaluates intellectually disabled children.
                    </p>
                  </div>
                  <div className="award-list d-flex">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="" />
                    </span>
                    <p>
                      The system can track children&apos;s progress for teachers, parents, and therapists.
                    </p>
                  </div>
                  <div className="award-list d-flex">
                    <span className="award-icon">
                      <img src={CheckRound2} alt="" className="" />
                    </span>
                    <p>
                      E-Deekshaam reports and analyses the child&apos;s strengths, weaknesses, and progress. These reports help teachers and staff make data-driven decisions. Progress tracking and assessment enable individualized instructional strategies and support for the child.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-6 col-lg-6 col-md-6 col-12 d-flex justify-content-center"
                data-aos="fade-right"
              >
                <div className="award-three-images-two">
                  <img
                    className="img-fluid"
                    src={process}
                    alt="image-banner"
                    title="image-banner"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Learn Anything */}

          {/* Development Career */}

          {/* Development Career */}
        </div>
      </section>

      {/* Favorite Course */}
      <section className="home-three-favourite mt-5 pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="container">
              <div
                className="home-three-head section-header-title"
                data-aos="fade-up"
              >
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-lg-8 col-sm-12">
                    <h2>ε-Deekshaam Stats</h2>
                  </div>

                </div>
              </div>
              <TopCategories2 />
            </div>
          </div>
          {/* Favorite Course */}
        </div>
      </section>
      {/* Favorite Course */}

      {/* Footer */}
      <Footer3 />
      {/* Footer */}
    </>
  );
};
