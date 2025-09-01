/** @format */

import React, { useEffect } from "react";
import styles from "./About.module.css";

import About from "./About/About";
import Lawyers from "./Lawyers/Lawyers";
import Mission from "../Home/Mission/Mission";
import Value from "./Value/Value";
import Cases from "../Home/Services/Cases";

export default function Aboutus() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={styles.bg}>
      <div className={styles.bg2}>
        <h2>About Us</h2>{" "}
      </div>

      <About />
      <Mission />
      <Value />
      <Lawyers />
      <Cases />
    </div>
  );
}
