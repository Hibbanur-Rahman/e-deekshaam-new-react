import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Footer3 } from "../footer3";
import { Header3 } from "../header3";
import Companies from "../home/slider/companies";
import Carousel from '../carousel/Carousel';
import { Quote } from "../imagepath";
import { mission } from "../imagepath";
import { vision } from "../imagepath";
import { about } from "../imagepath";
import { process } from "../imagepath";
import "./home.css";
import {
  Blog20,
  Blog21,
  Blog22,
  Blog23,
  Blog24,
  CheckRound2,
  Course01Icon,
  Course02Icon,
  Course03Icon,
  Course04Icon,
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Pattern01,
  PatternSvg5,
  PatternSvg6,
  Time,
} from "../imagepath";
import { TopCategories2 } from "./slider/topCategories";
import { Trending3 } from "./slider/trendingCourse";
import { Testimonial3 } from "./slider/testimonial";

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
                              end={20}
                              delay={1}
                              duration={4}
                            />
                            +
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
                        <img className="img-fluid" src={Course02Icon} alt="" />
                      </div>
                      <div className="course-content-three">
                        <h4 className="text-yellow">
                          <span className="d-flex">
                            <CountUp start={0} end={8} delay={1} />+
                          </span>
                        </h4>
                        <p>NGOs</p>
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
                            <CountUp start={0} end={10} delay={1} duration={5} />
                            +
                          </span>
                        </h4>
                        <p>Prehab Professionals</p>
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
                            <CountUp start={0} end={200} delay={1} duration={2} />
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
            <div className="col-xl-6 col-lg-6 col-md-12" data-aos="fade-right">
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

      {/* Favorite Course */}
      <section className="home-three-favourite">
        <div className="container">
          <div className="row">
            <div className="container">
              <div
                className="home-three-head section-header-title"
                data-aos="fade-up"
              >
                <div className="row align-items-center d-flex justify-content-between">
                  <div className="col-lg-8 col-sm-12">
                    <h2>Choose favourite Course from top Category</h2>
                  </div>
                  <div className="col-lg-4 col-sm-12">
                    <div className="see-all">
                      <Link to="/course-details">
                        See all
                        <span className="see-all-icon">
                          <i className="fas fa-arrow-right"></i>
                        </span>
                      </Link>
                    </div>
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
                className="col-xl-6 col-lg-6 col-md-6 col-12"
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
      {/* Accelerate Cloud */}
      {/* Trending Courses Three */}
      <section className="home-three-trending">
        <div className="container">
          <div className="row">
            <div
              className="home-three-head section-header-title"
              data-aos="fade-up"
            >
              <div className="row align-items-center d-flex justify-content-between">
                <div className="col-lg-12">
                  <h2>Most Trending Courses</h2>
                </div>
              </div>
            </div>
            <Trending3 />
          </div>
          {/* Favorite Course */}
        </div>
      </section>
      {/* Trending Courses Three */}
      {/* Feature Course */}
      <section className="gallery-three">
        <div className="container">
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-sm-12">
                <h2>Courses taught by real instructor</h2>
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="see-all">
                  <Link to="/instructor-list">
                    See all
                    <span className="see-all-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="courses-gallery-three">
            <div className="row">
              {/* Col */}
              <div className="col-lg-5 col-md-5">
                <div className="row">
                  <div className="col-lg-7 col-md-7">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery1} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery2} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 col-md-5">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery3} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-7">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery4} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}

              {/* Col */}
              <div className="col-lg-3 col-md-3">
                <div className="gallery-three-img-item mb-0">
                  <div className="content-three-main">
                    <div className="gallery-img">
                      <img src={Gallery5} alt="Instructor" />
                    </div>
                    <div className="content-three-overlay">
                      <div className="content-three-text">
                        <div>
                          <h6>Patricia</h6>
                          <p>Node Js</p>
                        </div>
                        <div>
                          <Link
                            to="/instructor-list"
                            className="content-three-arrows"
                          >
                            <span>
                              <i className="fas fa-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}

              {/* Col */}
              <div className="col-lg-4 col-md-4">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div className="gallery-three-img-item">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery6} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery7} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="gallery-three-img-item mb-0">
                      <div className="content-three-main">
                        <div className="gallery-img">
                          <img src={Gallery8} alt="Instructor" />
                        </div>
                        <div className="content-three-overlay">
                          <div className="content-three-text">
                            <div>
                              <h6>Patricia</h6>
                              <p>Node Js</p>
                            </div>
                            <div>
                              <Link
                                to="/instructor-list"
                                className="content-three-arrows"
                              >
                                <span>
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Col */}
            </div>
          </div>
        </div>
      </section>
      {/* Feature Course */}

      {/* Become and Instructor */}
      <section className="home-three-become">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8" data-aos="fade-up">
              <div className="become-content-three">
                <h2>Become An Instructor</h2>
                <p>
                  Top instructors from around the world teach millions of
                  students on DreamsLMS.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4" data-aos="fade-up">
              <div className="become-button-three">
                <Link to="/register" className="btn btn-become">
                  Get Started Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Become and Instructor */}

      {/* Leading companies */}
      <section className="lead-companies-three">
        <div className="container">
          <div className="home-three-head section-header-title aos-init aos-animate">
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-12" data-aos="fade-up">
                <h2>500+ Leading Universities And Companies</h2>
              </div>
            </div>
          </div>
          <Companies />
        </div>
      </section>
      {/* Leading companies */}

      {/* Testimonial */}
      <section className="testimonial-three">
        <div className="container">
          <div className="testimonial-pattern">
            <img className="pattern-left img-fluid" alt="" src={PatternSvg5} />
            <img className="pattern-right img-fluid" alt="" src={PatternSvg6} />
          </div>
          <div className="testimonial-three-content">
            <div className="row align-items-center">
              <div
                className="col-xl-4 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                <div className="become-content">
                  <h2 className="aos-init aos-animate">They Trusted us</h2>
                  <h4 className="aos-init aos-animate">
                    We are a very happy because we have a happy customer
                  </h4>
                </div>

                {/* View all Testimonail */}
                <Link
                  to="/instructor-profile"
                  className="btn btn-action aos-init aos-animate"
                  data-aos="fade-up"
                >
                  View all Testimonial
                </Link>
                {/* View all Testimonail */}
              </div>
              <div
                className="col-xl-8 col-lg-12 col-md-12"
                data-aos="fade-down"
              >
                {/* Swiper Element */}
                <div
                  className="swiper-testimonial-three"
                  style={{ width: "100%", height: "400px" }}
                >
                  <Testimonial3 />
                </div>
                {/* <Testimonial03 /> */}
                {/* Swiper Element */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonial */}

      {/* Latest Blog */}
      <section className="latest-blog-three">
        <div className="container">
          <div
            className="home-three-head section-header-title"
            data-aos="fade-up"
          >
            <div className="row align-items-center d-flex justify-content-between">
              <div className="col-lg-6 col-md-8">
                <h2>Latest news & Events</h2>
              </div>
              <div className="col-lg-6 col-md-4">
                <div className="see-all">
                  <Link to="/blog-list">
                    See all
                    <span className="see-all-icon">
                      <i className="fas fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="latest-blog-main">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-one">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog20} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-green">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-two">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog21} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div className="row">
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-three">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog22} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-four">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog23} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-info">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12" data-aos="fade-down">
                    <div className="event-blog-three blog-three-five">
                      <div className="blog-img-three">
                        <Link to="/blog-list">
                          <img className="img-fluid" alt="" src={Blog24} />
                        </Link>
                      </div>
                      <div className="latest-blog-content">
                        <div className="event-three-title">
                          <div className="event-span-three">
                            <span className="span-name-three badge-yellow">
                              Sales
                            </span>
                          </div>
                          <Link to="/blog-list">
                            <h5>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Eget aenean accumsan bibendum gravida..Lorem
                              ipsum dolor sit amet,{" "}
                            </p>
                          </Link>
                          <div className="blog-student-count">
                            <i className="fa-solid fa-calendar-days"></i>
                            <span>Jun 15, 2022</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Latest Blog */}

      {/* Footer */}
      <Footer3 />
      {/* Footer */}
    </>
  );
};
