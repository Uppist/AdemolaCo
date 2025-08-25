/** @format */

import React, { useEffect } from "react";
import Advisory from "./Advisory/Advisory";
import Testimonial from "./Testimonial/Testimonial";
import FAQ from "./FAQ/FAQ";
import About from "../Aboutus/About/About";
import Blog from "../Blog/Blog";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Advisory />
      <About />
      {/* <Service /> */}
      <Blog />
      {/* <Testimonial /> */}
      <FAQ />
    </>
  );
}
