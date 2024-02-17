import React from "react";
import { Header3 } from "../header3";
import location from "../../assets/img/icon/location.svg"
import email from "../../assets/img/icon/email.svg"
import telephone from "../../assets/img/icon/telephone.svg"

const ContactUs = () => {
  return (
    <>
      <div className="main-wrapper">
        <Header3 />
        <div className="page-banner">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <h1 className="mb-0">Contact Us</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-7">
              <div className="support-wrap p-1" style={{width: "100%",height: "100%"}}>
                <iframe style={{width: "inherit", height: "inherit", padding: "10px"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15034.167098348324!2d78.36107973729702!3d17.430546496156715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1680255417198!5m2!1sen!2sin" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="support-wrap">
                <img className="" style={{width:"20px"}} src={location} />
                <h4 className="mt-3">Address</h4>
                <p className="lh-lg"> Department of Computer Science & Information Technology , School Of Technology, Maulana Azad National Urdu University, Gachibowli, Hyderabad,Telangana, India-500032
                  </p>
              </div>
              <div className="support-wrap mt-3">
                <img className="" style={{width:"20px"}} src={email} />
                <h4 className="mt-2">Mail Us</h4>
                <a href="mailto:edeekshaam@gmail.com"><p>edeekshaam@gmail.com</p></a>
                <img className="" style={{width:"20px"}} src={telephone} />
                <h4 className="mt-2">Call Us On</h4>
                <p className="m-0"><a href="tel:+9104023006612">+91-040-23006612</a></p>
                <p className="m-0"><a href="tel:+9104023006612">+91-040-23006621</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="page-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="support-wrap">
                  <h5>Get In Touch</h5>
                  <p>
                    If you have any queries or you want to give feedback and
                    suggestion please get in touch by filling out the form below
                  </p>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Mobile Number"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Designation"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Organization"
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Description"
                        rows={4}
                        defaultValue={""}
                      />
                    </div>
                    <button className="btn-submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
