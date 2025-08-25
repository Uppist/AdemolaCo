/** @format */

import React from "react";
import image from "../../../assets/Home/home.png";
import styles from "./Advisory.module.css";
import { Link } from "react-router-dom";

export default function Advisory() {
  return (
    <section className={styles.advisory}>
      <div className={styles.bg}>
        {" "}
        <div className={styles.img}>
          <div>
            <div className={styles.div}>
              <h2>Your Partner on the Path to Justice.</h2>

              <span>
                We stand by your side, providing expert legal guidance and
                unwavering support to protect your rights and ensure justice is
                served.
              </span>
            </div>
            <Link to='/services'>
              <div className={styles.div2}>
                <span>Book a Consultation </span>
              </div>
            </Link>
          </div>

          <img src={image} alt='' />
        </div>
      </div>
    </section>
  );
}
