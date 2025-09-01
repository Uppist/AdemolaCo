/** @format */

import React from "react";
import mission from "../../../assets/Home/mission.png";
import styles from "./style.module.css";
import icon from "../../../assets/Home/mission.svg";

export default function Mission() {
  return (
    <div className={styles.mission}>
      <img src={mission} alt='' />
      <div className={styles.container}>
        <div>
          <img src={icon} alt='' />
          <h3>Our Mission</h3>
          <span>
            Our first obligation is to protect our clients’ interest in line
            with the required principles of the profession (law), we do this by
            being passionate about the briefs handled on-behalf of our clients.
          </span>
        </div>
        <div>
          {" "}
          <img src={icon} alt='' />
          <h3>Our Vision</h3>
          <span>
            To be a formidable and nationally recognized law firm, excelling
            through integrity, innovation, and commitment to justice. Guided by
            legal principles and the fear of God, we deliver client-centered
            solutions that shape the future of law with fairness, excellence,
            and lasting impact.
          </span>
        </div>
      </div>
    </div>
  );
}
