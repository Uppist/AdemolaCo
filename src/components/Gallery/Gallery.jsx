/** @format */

import React from "react";
import styles from "./style.module.css";
import image1 from "../../assets/gallery/image1.png";
import image2 from "../../assets/gallery/image2.png";
import image3 from "../../assets/gallery/image3.png";
import image4 from "../../assets/gallery/image4.png";
import image5 from "../../assets/gallery/image5.png";
import image6 from "../../assets/gallery/image6.png";
import image7 from "../../assets/gallery/image7.png";
import image8 from "../../assets/gallery/image8.png";
import image9 from "../../assets/gallery/image9.png";
import image10 from "../../assets/gallery/image10.png";
import image11 from "../../assets/gallery/image11.png";

export default function Gallery() {
  return (
    <div>
      <div className={styles.gallery}>
        <h2>Gallery</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.container1}>
          <img src={image1} alt='' />
          <div className={styles.container2}>
            <div className={styles.container3}>
              {" "}
              <img src={image2} alt='' />
              <img src={image3} alt='' />
            </div>
            <div className={styles.container4}>
              {" "}
              <img src={image4} alt='' />
              <img src={image5} alt='' />
            </div>
          </div>
        </div>
        <div className={styles.container5}>
          {" "}
          <img src={image6} alt='' />
          <div className={styles.container6}>
            <img src={image7} alt='' />
            <img src={image8} alt='' />
          </div>
        </div>
        <div className={styles.container7}>
          {" "}
          {/* <img src={image9} alt='' /> */}
          <div className={styles.container8}>
            <img src={image10} alt='' />
            <img src={image11} alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}
