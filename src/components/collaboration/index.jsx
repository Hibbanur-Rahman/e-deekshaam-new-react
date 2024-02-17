import React from "react";
import { MoreVertical } from "react-feather";
import { Link } from "react-router-dom";


import "./collaboration.css";

const Collaboration = () => {
  return (
    <div className="main-wrapper">
      <div className="page-banner mb-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-12">
              <h1 className="mb-0">Collaboration</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-0 p-0 justify-content-center ">
        <div className="col-xl-9 col-lg-8 col-md-12" >
          <div className="row m-0 p-0 " >
            <div className="col-md-12">
              <div className="settings-widget">
                <div className="settings-inner-blk p-0" style={{boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 50px'}}>
                  <div className="sell-course-head comman-space">
                    <h3>We have collaborated with different schools and NGOs.</h3>
                   
                    <p>The project team is thankful to the schools, NGOs, and professionals who have collaborated with us. The list of collaborators is continually expanding, but we would like to acknowledge those who have already been associated with us here.</p>
                  </div>
                  <div className="comman-space pb-0">
                    <div className="settings-tickets-blk course-instruct-blk table-responsive">
                      {/* Referred Users */}
                      <table className="table table-nowrap mb-0">
                        <thead>
                          <tr>
                            <th>State</th>
                            <th className="text-center">Institutions</th>
                            <th className="text-center">Students</th>
                            <th className="text-center">Rehab professional</th>
                            <th></th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Uttar Pradesh
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">10+</td>
                            <td className="text-center">92+</td>
                            <td className="text-center">15+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Jammu & Kashmir
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">4+</td>
                            <td className="text-center">25+</td>
                            <td className="text-center">6+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Tamil Nadu
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">2+</td>
                            <td className="text-center">20+</td>
                            <td className="text-center">3+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  West Bengal
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">2+</td>
                            <td className="text-center">10+</td>
                            <td className="text-center">3+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Maharastra
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">4+</td>
                            <td className="text-center">20+</td>
                            <td className="text-center">9+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Kerala
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">4+</td>
                            <td className="text-center">25+</td>
                            <td className="text-center">8+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Telangana
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">4+</td>
                            <td className="text-center">30+</td>
                            <td className="text-center">15+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Andhra Pradesh
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">3+</td>
                            <td className="text-center">19+</td>
                            <td className="text-center">10+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td className="instruct-orders-info">
                              <p>
                                <Link to="/course-details">
                                  Haryana
                                </Link>
                              </p>
                            </td>
                            <td className="text-center">2+</td>
                            <td className="text-center">15+</td>
                            <td className="text-center">3+</td>

                            <td>
                              <Link to="#;">
                                <MoreVertical size={16} className="hoverRed" />
                              </Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {/* Referred Users */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
