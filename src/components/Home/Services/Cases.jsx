/** @format */

import React from "react";
import cases from "../../../assets/Home/Purpose/Image.png";
import styles from "./Service.module.css";

export default function Cases() {
  return (
    <div className={styles.cases}>
      <img src={cases} alt='' />
      <div className={styles.caseContainer}>
        <div className={styles.caseText}>
          <span>1200</span>
          <label htmlFor=''>Satisfied Clients</label>
        </div>
        <div className={styles.caseText}>
          <span>98%</span>
          <label htmlFor=''>Successful Cases</label>
        </div>
        <div className={styles.caseText}>
          {" "}
          <span>10</span>
          <label htmlFor=''> Years Of Experience</label>
        </div>
        <div className={styles.caseText}>
          {" "}
          <span>1800</span>
          <label htmlFor=''>Case Closed</label>
        </div>
      </div>
    </div>
  );
}
