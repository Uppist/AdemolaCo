/** @format */

import React from "react";
import styles from "./style.module.css";
import value from "./value.json";

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
        <ol className={styles.container}>
          {value.map((data, index) => (
            <li key={index}>
              {data.li}
              <br /> <span>{data.span}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
