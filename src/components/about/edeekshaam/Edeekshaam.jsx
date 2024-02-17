import React from "react";
import { Quote } from "../../imagepath";
import { mission } from "../../imagepath";
import { vision } from "../../imagepath";

import features from "../../../assets/img/about/features.jpg";
import { TopCategories2 } from "./slider/Carousel";

const Edeekshaam = () => {
  return (
    <div className="main-wrapper">
      <div className="page-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h1 className="mb-0"><span style={{ fontSize: "3rem" }}>ε</span>-Deekshaam</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div>
          <h2>Inclusive Education is our first priority</h2>
          <p className="lh-lg">
            E-Deekshaam is an adaptable, assistive learning framework that can
            be used in both online and blended modes in two parts: the web-based
            system and a mobile application to accompany it. The framework would
            include content for children aged 6 to 18. The system will help
            teachers and parents by generating personalized individualized
            Education Programs which the teachers can later modify to suit the
            child&apos;s needs. Topics in domains ranging from motor training to
            social community interactions will be prepared in all possible
            formats and uploaded to the system. Authorized schools and special
            educators can access the content free of cost. In all, it will be a
            platform wherein the students&apos; performance, behaviors, and
            progress can be tracked, and a holistic learning environment is
            provided.
          </p>
        </div>
        <div>
          <TopCategories2/>
        </div>
        <div className="d-flex justify-content-center">
          <div>
            <div className="py-4">
              <img className="quote img-fluid home3Slide" alt="" src={Quote} />
            </div>
            <div className="home-three-content">
              <blockquote
                style={{
                  color: "#777",
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  lineHeight: 1.4,
                  margin: 0,
                  maxWidth: "900px",
                  padding: "0.5rem",
                  position: "relative",
                }}
              >
                The highest education is that which does not merely gives
                information but brings our life in harmony with all existence.
              </blockquote>
              <p
                style={{
                  fontFamily: "Nunito,sans-serif",
                  color: "#777",
                  textAlign: "center",
                }}
              >
                ~ Rabindranath Tagore
              </p>
            </div>
          </div>
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
                    Our mission is to provide an adaptive assistive system to
                    help children with intellectual disabilities to learn and
                    succeed. We aim to offer a supportive and inclusive
                    environment where children learn meaningfully, develop
                    essential skills, and gain confidence in their abilities.
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
                    Our Vision is that every child with an intellectual
                    disability thrives and accomplishes their goals. Our
                    adaptive assistive system will help children with
                    intellectual disabilities overcome hurdles and reach their
                    full potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <img src={features} />
        </div>
      </div>
    </div>
  );
};

export default Edeekshaam;
