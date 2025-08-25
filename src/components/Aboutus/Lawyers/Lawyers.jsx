/** @format */

import React from "react";
import image1 from "../../../assets/About/lawyer1.png";
import image2 from "../../../assets/About/lawyer2.png";
import image3 from "../../../assets/About/lawyers3.png";
import styles from "./lawyer.module.css";

export default function Lawyers() {
  return (
    <div className={styles.lawyer}>
      <div className={styles.text}>
        <h2>Our Lawyers</h2>
        <span>
          Meet our team of dedicated legal professionals, committed to providing
          expert advice and tailored solutions to meet your legal needs.
        </span>
      </div>

      <div className={styles.container}>
        <div>
          <img src={image1} alt='' />
          <h3>Jackson Bauer</h3>
          <span>Finance Lawyer</span>
        </div>
        <div>
          <img src={image2} alt='' />
          <h3>Jackson Bauer</h3>
          <span>Finance Lawyer</span>
        </div>
        <div>
          <img src={image3} alt='' />
          <h3>Jackson Bauer</h3>
          <span>Finance Lawyer</span>
        </div>
      </div>
    </div>
  );
}
