import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home} from "./components/home";
import ContactUs from "./components/contactUS/index";
import Collaboration from "./components/collaboration";
import ImportantLinks from "./components/importantLinks/ImportantLinks";
import Manuu from "./components/about/manuu/Manuu"
import Edeekshaam from "./components/about/edeekshaam/Edeekshaam";

import OtherEvents from "./components/otherEvents/index";
import Workshop from "./components/workshop/index";
import { Header} from "./components/header/index";
import { Footer} from "./components/footer/index";

const Approuter = () => {
  return (
    <BrowserRouter basename="/edeekshaam_website3.0">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/collaboration" element={<Collaboration/>} />
        <Route path="/important-links" element={<ImportantLinks/>} />
        <Route path="/about-edeeksham" element={<Edeekshaam/>} />
        <Route path="/about-manuu" element={<Manuu/>} />

        <Route path='/workshop' element={<Workshop/>}/>
        <Route path='/other-events' element={<OtherEvents/>}/>

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default Approuter;
