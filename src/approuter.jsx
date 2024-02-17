import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home3 } from "./components/home3";
import ContactUs from "./components/contactUS/index";
import Collaboration from "./components/collaboration";
import ImportantLinks from "./components/importantLinks/ImportantLinks";
import Manuu from "./components/about/manuu/Manuu"
import Edeekshaam from "./components/about/edeekshaam/Edeekshaam";

import OtherEvents from "./components/otherEvents/index";
import Workshop from "./components/workshop/index";
import { Header3 } from "./components/header3/index";
import { Footer3 } from "./components/footer3/index";

const Approuter = () => {
  return (
    <BrowserRouter basename="/edeekshaam_website3.0">
      <Header3/>
      <Routes>
        <Route path="/" element={<Home3 />} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/collaboration" element={<Collaboration/>} />
        <Route path="/important-links" element={<ImportantLinks/>} />
        <Route path="/about-edeeksham" element={<Edeekshaam/>} />
        <Route path="/about-manuu" element={<Manuu/>} />

        <Route path='/workshop' element={<Workshop/>}/>
        <Route path='/other-events' element={<OtherEvents/>}/>

      </Routes>
      <Footer3/>
    </BrowserRouter>
  );
};

export default Approuter;
