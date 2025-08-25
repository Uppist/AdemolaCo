/** @format */

import React from "react";
import styles from "./About.module.css";

import About from "./About/About";
import Lawyers from "./Lawyers/Lawyers";

export default function Aboutus() {
  return (
    <div className={styles.bg}>
      <div className={styles.bg2}>
        <h2>About Us</h2>{" "}
      </div>

      <About />
      <Lawyers />
    </div>
  );
}
