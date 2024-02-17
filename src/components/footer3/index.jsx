import React, { useState } from "react";
import { Mail, Phone } from "react-feather";
import { Link } from "react-router-dom";
import logoPng from './image/edeekshaam-footer-logo.png';

export const Footer3 = () => {
  const [isAboutSubMenuOpen, setAboutSubMenuOpen] = useState(false);
  const [isEventSubMenuOpen, setEventSubMenuOpen] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
  const toggleEventSubMenu = () => {
    setEventSubMenuOpen(!isEventSubMenuOpen);
    setAboutSubMenuOpen(false)
  };

  const toggleAboutSubMenu = () => {
    setAboutSubMenuOpen(!isAboutSubMenuOpen);
    setEventSubMenuOpen(false);
  };
  const openMobileSubMenu3 = (e) => {
    e.preventDefault();
    setMobileSubMenu3(!mobileSubMenu3);
  };

  const styles = {
    submenu: {
      display: 'none',
      listStyleType: 'none',
      paddingLeft: '5px',
      opacity: 0,
      transition: 'opacity 0.3s ease-in-out',
    }, aboutSubmenuVisible: {
      display: 'block',
      opacity: 1,
    },
    eventSubmenuVisible: {
      display: 'block',
      opacity: 1
    },

    submenuLinks: {
      color: 'white',
      textDecoration: 'none',
      listStyleType: 'none',
    },
  }
  return (
    <footer className="footer footer-three">
      {/* Footer Top */}
      <div className="footer-three-top" data-aos="fade-up">
        <div className="container">
          <div className="footer-three-top-content">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-5 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-about">
                  <div className="footer-three-logo">
                    <img className="img-fluid" src={logoPng} alt="logo" style={{ width: '33%' }} />
                  </div>
                  <div className="footer-three-about">
                    <p>
                      Adaptive Assistive System for Children with Moderate Intellectual Disability{" "}
                    </p>
                  </div>
                
                </div>
                {/* Footer Widget */}
              </div>

              <div className="col-lg-3 col-md-3 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-menu-three footer-three-right">
                  <h6 className="footer-three-title">Quick Links</h6>
                  <ul>
                    <li>
                      <Link to="/instructor-profile">Home</Link>
                    </li>
                    <li className="has-submenu">
                      <Link onClick={toggleAboutSubMenu} className="text-white">About <i
                        className="fas fa-chevron-down"
                        onClick={openMobileSubMenu3}
                      ></i></Link>
                      <ul style={isAboutSubMenuOpen ? { ...styles.submenu, ...styles.aboutSubmenuVisible } : styles.submenu} className="ms-3">
                        <ul style={isAboutSubMenuOpen ? { ...styles.submenu, ...styles.aboutSubmenuVisible } : styles.submenu}>
                          <li style={{ listStyleType: 'none' }}><Link href="/Edeeksham" style={styles.submenuLinks}>e-Deekshaam</Link></li>
                          <li style={{ listStyleType: 'none' }}><Link href="/Manuu" style={styles.submenuLinks}>MANUU</Link></li>
                          <li style={{ listStyleType: 'none' }}><Link href="#" style={styles.submenuLinks}>Our team</Link></li>
                          <li style={{ listStyleType: 'none' }}><Link href="#" style={styles.submenuLinks}>Experts</Link></li>
                        </ul>
                      </ul>
                    </li>
                    <li>
                      {/* <Link to="/login" >Events</Link> */}
                      <Link onClick={toggleEventSubMenu} className="text-white">Events <i
                        className="fas fa-chevron-down"
                        onClick={openMobileSubMenu3}
                      ></i></Link>
                      <ul style={isEventSubMenuOpen ? { ...styles.submenu, ...styles.eventSubmenuVisible } : styles.submenu} className="ms-3">
                        <li style={{ listStyleType: 'none' }}><a href="/Workshop" style={styles.submenuLinks}>Workshops</a></li>
                        <li style={{ listStyleType: 'none' }}><a href="#" style={styles.submenuLinks}>Training</a></li>
                        <li style={{ listStyleType: 'none' }}><a href="/other-events" style={styles.submenuLinks}>Other events</a></li>
                      </ul>
                    </li>

                    <li>
                      <Link to="/register">Collaboration</Link>
                    </li>
                    <li>
                      <Link to="/instructor-list">Important links</Link>
                    </li>
                    <li>
                      <Link to="/deposit-instructor-dashboard">Contact Us</Link>
                    </li>
                  </ul>
                </div>
                {/* Footer Widget */}
              </div>

              <div className="col-lg-4 col-md-4 col-12">
                {/* Footer Widget */}
                <div className="footer-widget-three footer-menu-three">
                  <h6 className="footer-three-title">Contact us</h6>
                  <p className="text-light">                Dept of CS & IT, School Of Technology, Maulana Azad National Urdu University, Gachibowli, Hyderabad, India-500032
                  </p>
                  <div className="row m-0 p-0">

                    <Mail style={{ color: 'white', width: 'auto', margin: '0px', padding: '0px' }} />
                    <Link href="mailto:meity.p@manuu.edu.in" style={{ color: '#ffffff', textDecoration: 'none', width: 'auto' }}>
                      meity.p@manuu.edu.in</Link>
                  </div>
                  <div className="row m-0 p-0 mt-3">

                    <Phone style={{ color: 'white', width: 'auto', margin: '0px', padding: '0px' }} />
                    <Link href="tel:04023006612" style={{ color: '#ffffff', textDecoration: 'none', width: 'auto' }}>040-23006612</Link>
                    <Link href="tel:04023003621" style={{ color: '#ffffff', textDecoration: 'none', marginLeft: '0px', width: 'auto' }}>040-23003621</Link>

                  </div>

                </div>
                {/* Footer Widget */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Top */}

      {/* Footer Bottom */}
      <div className="footer-three-bottom">
        <div className="container">
          {/* Copyright */}
          <div className="copyright-three">
            <div className="row">
              <div className="col-md-12">
                
                <div className="privacy-policy-three">
                  <ul>
                    <li>
                      <Link to="/#">Terms & Condition</Link>
                    </li>
                    <li>
                      <Link to="/#">Privacy Policy</Link>
                    </li>
                   
                  </ul>
                </div>
                <div className="copyright-text-three">
                  <p className="mb-0">
                    &copy; 2024 ε-Deekshaam. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Copyright */}
        </div>
      </div>
      {/* Footer Bottom */}
    </footer>
  );
};
