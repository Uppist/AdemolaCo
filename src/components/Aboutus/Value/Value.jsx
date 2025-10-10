/** @format */

import React from "react";
import styles from "./style.module.css";
import value from "./value.json";
import icon from "../../../assets/Home/mission.svg";

export default function Value() {
  return (
    <div className={styles.value}>
      <div className={styles.text}>
        <h2>Our Core Values</h2>
        <span>
          At Olabiyi Ademola J. & Co., our core values are the guiding
          principles that define who we are, how we work, and the standards we
          uphold in serving our clients and society.
        </span>
      </div>

      <div className={styles.lists}>
        <ul className={styles.container}>
          {value.map((data, index) => (
            <>
              <li key={index}>
                <div>
                  <img src={icon} alt='' />
                  <span> {data.li}</span>
                </div>
                <span>{data.span}</span>
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
