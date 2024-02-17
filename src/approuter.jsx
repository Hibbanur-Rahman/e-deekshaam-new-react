import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Home3 } from "./components/home3";


const Approuter = () => {
  return (
    <BrowserRouter basename="/e-deekshaam-new-react">
      <Routes>
        <Route path="/" element={<Home3 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Approuter;
