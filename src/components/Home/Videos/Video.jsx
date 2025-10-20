/** @format */

import React from "react";
import video from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";
import styles from "./style.module.css";

export default function Video() {
  return (
    <div className={styles.video}>
      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src='https://www.youtube.com/embed/quMODz5fslU'
          title='YouTube video player'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>

      <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
        <iframe
          src='https://www.youtube.com/embed/xbFDts4TR84'
          title='YouTube video player'
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
