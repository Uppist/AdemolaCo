/** @format */

import React from "react";
import image1 from "../../../assets/About/lawyer1.png";
import image2 from "../../../assets/About/lawyer2.png";
import image3 from "../../../assets/About/lawyers3.png";
import image4 from "../../../assets/About/lawyers4.png";
import image5 from "../../../assets/About/lawyers5.png";
import image6 from "../../../assets/About/lawyers6.png";
import image7 from "../../../assets/About/lawyers7.png";
import image8 from "../../../assets/About/lawyers8.png";
import image9 from "../../../assets/About/lawyers9.png";

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
        <img src={image1} alt='' />

        <img src={image2} alt='' />

        <img src={image3} alt='' />

        <img src={image4} alt='' />
        <img src={image5} alt='' />
        <img src={image6} alt='' />
        <img src={image7} alt='' />
        <img src={image8} alt='' />
        <img src={image9} alt='' />
      </div>
    </div>
  );
}
