import React from "react";
// import config from "config";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header3";
import Home from "./components/home";
import Footer from "./components/footer3";
import ContactUs from "./components/contactUS";

const AppContainer = function () {
  return (
    // <Router basename={`${config.publicPath}`}>
    <Router basename="/edeekshaam_website3.0">
      <>
        <Route render={(props) => <Header {...props} />} />
        
          {/* home */}
          <Route exact path="/" component={Home} />

        <Route render={(props) => <Footer {...props} />} />
      </>
    </Router>
  );
};

export default AppContainer;
