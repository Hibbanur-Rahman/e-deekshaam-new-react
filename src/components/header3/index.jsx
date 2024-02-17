import React, { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Grid, Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import "./index.css";

export const Header3 = () => {
  // change header background on scroll
  const [navbar, setNavbar] = useState(false);

  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  // Mobile Menu toggle
  const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);

  const openMobileMenu = () => {
    document.body.classList.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body.classList.remove("menu-opened");
  };

  const openMobileSubMenu2 = (e) => {
    e.preventDefault();
    setMobileSubMenu2(!mobileSubMenu2);
  };

  const openMobileSubMenu3 = (e) => {
    e.preventDefault();
    setMobileSubMenu3(!mobileSubMenu3);
  };

  window.addEventListener("scroll", changeHeaderBackground);
  return (
    <div className="row m-0 p-0">


      <header className="header-three p-0">
        <div className="row m-0 p-0 mb-2">
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "10px",
              "@media (max-width: 500px)": {
                paddingLeft: "20px",
                paddingRight: "20px",
              },
            }}
          >
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={4} sm={2} className="ministry-logo">
                <Hidden smDown>
                  <a
                    href="https://www.meity.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      crossOrigin="anonymous"
                      src="https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T05-20-45-378Z.compressed.png"
                      className="ministry-logo-1"
                      alt="Banner 1"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </a>
                </Hidden>

                {/* Show the second image on mobile devices */}
                <Hidden smUp>
                  <a
                    href="https://www.meity.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      crossOrigin="anonymous"
                      src="https://i.ibb.co/v1svfNL/ashoka-chakra.png"
                      alt="ashoka-chakra"
                      className="ministry-logo-2"
                      style={{ width: "23%", height: "auto" }}
                    />
                  </a>
                </Hidden>
              </Grid>

              <Grid item sm={1} xs={4} className="e-deekshaam-logo">
                <Link to="/" rel="noopener noreferrer">
                  <img
                    crossOrigin="anonymous"
                    src="https://api.edeekshaam.in/v1/media/meityp/single/image/2023-06-23T10-42-19-812Z.compressed.png"
                    alt="Banner 2"
                    style={{
                      width: "100%",
                      height: "auto",
                      "@media (max-width: 600px)": {
                        width: "70%",
                      },
                    }}
                  />
                </Link>
              </Grid>

              <Hidden smDown>
                <Grid item sm={6} className="top-header-text">
                  <Typography
                    variant="h6"
                    align="center"
                    sx={{
                      "@media (max-width: 768px)": {
                        fontSize: "14px",
                      },
                    }}
                  >
                    Adaptive Assistive System for Children with Moderate
                    Intellectual Disability
                  </Typography>
                </Grid>
              </Hidden>

              <Grid
                item
                xs={4}
                sm={2}
                justifyContent="flex-end"
                className="manuu-logo"
              >
                {/* Hide the first image on mobile devices */}
                <Hidden smDown>
                  <a
                    href="https://manuu.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <img
                      crossOrigin="anonymous"
                      src="https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-05T05-16-46-251Z.compressed.png"
                      className="manuu-logo-1"
                      alt="Banner 4"
                      style={{ width: "70%", height: "auto" }}
                    />
                  </a>
                </Hidden>

                {/* Show the second image on mobile devices */}
                <Hidden smUp>
                  <a
                    href="https://manuu.edu.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <img
                      crossOrigin="anonymous"
                      src="https://i.ibb.co/jL2q6sq/manuu-plain.png"
                      alt="manuu-plain"
                      className="manuu-logo-2"
                      style={{ width: "28%", height: "auto", marginTop: "-8px" }}
                    />
                  </a>
                </Hidden>
              </Grid>
            </Grid>
          </Box>
        </div>
        <div className="header-fixed-three header-fixed">
          <nav
            className={`navbar navbar-expand-lg header-nav-three ${navbar ? "fixed z-3 top-0 add-header-bg" : "bg-transparent"
              }`}
          >
            <div className="container">
              <div className="navbar-header d-lg-none">
                <Link id="mobile_btn" to="#;" onClick={openMobileMenu}>
                  <span className="bar-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </Link>
              </div>
              <div className="main-menu-wrapper">
                <div className="menu-header">
                  <Link to="/" className="menu-logo">
                    <img src="https://api.edeekshaam.in/v1/media/meityp/single/image/2023-07-04T05-20-45-378Z.compressed.png"
                      className="img-fluid" alt="Logo" />
                  </Link>
                  <Link
                    id="menu_close"
                    className="menu-close"
                    to="#;"
                    onClick={hideMobileMenu}
                  >
                    <i className="fas fa-times"></i>
                  </Link>
                </div>
                <ul className="main-nav">
                  <li className="has-submenu active">
                    <Link to="/">Home </Link>
                  </li>
                  <li className="has-submenu">
                    <Link to="/">
                      About{" "}
                      <i
                        className="fas fa-chevron-down"
                        onClick={openMobileSubMenu2}
                      ></i>
                    </Link>
                    <ul
                      className={
                        mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                      }
                    >
                      <li>
                        <Link to="/instructor-dashboard">e-Deeskshaam</Link>
                      </li>
                      <li>
                        <Link to="/instructor-dashboard">MANUU</Link>
                      </li>
                      <li>
                        <Link to="/instructor-course">Our team</Link>
                      </li>
                      <li>
                        <Link to="/instructor-reviews">Experts</Link>
                      </li>
                    </ul>
                  </li>
                  <li className="has-submenu">
                    <Link to="/students-list">
                      Events{" "}
                      <i
                        className="fas fa-chevron-down"
                        onClick={openMobileSubMenu3}
                      ></i>
                    </Link>
                    <ul
                      className={
                        mobileSubMenu3
                          ? "submenu first-submenu submenuShow"
                          : "submenu first-submenu"
                      }
                    >
                      <li>
                        <Link to="/setting-edit-profile">Workshops</Link>
                      </li>
                      <li>
                        <Link to="/setting-student-security">Trainings</Link>
                      </li>
                      <li>
                        <Link to="/setting-student-social-profile">
                          Other events
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link to="/">Collaboration </Link>
                  </li>
                  <li>
                    <Link to="/">Important-Links </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact US </Link>
                  </li>
                  <li className="login-link">
                    <Link to="/login">Login / Signup</Link>
                  </li>
                </ul>
              </div>
              <ul className="nav header-navbar-rht align-items-center">
                <li className="nav-item">
                  <Link
                    className="nav-link login-three-head button"
                    to="/login"
                  >
                    <span>Login</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link signin-three-head" to="/register">
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
