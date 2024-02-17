import React from "react";
// import config from "config";

import { Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header3";
import Home from "./components/home";
import Footer from "./components/footer3";

const AppContainer = function () {
  return (
    // <Router basename={`${config.publicPath}`}>
    <Router basename="/e-deekshaam-new">
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
