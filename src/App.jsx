/** @format */

import React from "react";
import NavBar from "./components/NavBar/NavBar";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./components/Home/Home";
import Aboutus from "./components/Aboutus/Aboutus";
import Footer from "./components/Footer/Footer";
// import Services from "./components/Service/Services";
import Contactus from "./components/Contact/Contactus";
import Service from "./components/Home/Services/Service";
import Blog from "./components/Blog/Blog";

export default function App() {
  return (
    <HashRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/services' element={<Service />} />
        <Route path='blogs' element={<Blog />} />
        <Route path='/contactus' element={<Contactus />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}
