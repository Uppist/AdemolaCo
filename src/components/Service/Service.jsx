/** @format */

import React from "react";
import styles from "./Service.module.css";
import service from "./Service.json";
import service1 from "../../assets/Home/Service/Service1.png";
import service2 from "../../assets/Home/Service/Service2.png";
import service3 from "../../assets/Home/Service/Service3.png";
import service4 from "../../assets/Home/Service/Service4.png";
import service5 from "../../assets/Home/Service/Service5.png";
import service6 from "../../assets/Home/Service/Service6.png";
import service7 from "../../assets/Home/Service/Service7.png";
import service8 from "../../assets/Home/Service/service8.png";
import icon1 from "../../assets/Home/Purpose/Icon1.svg";
import icon2 from "../../assets/Home/Purpose/Icon2.svg";
import icon3 from "../../assets/Home/Purpose/Icon3.svg";
import icon4 from "../../assets/Home/Purpose/Icon4.svg";
import icon5 from "../../assets/Home/Purpose/Icon5.svg";
import icon6 from "../../assets/Home/Purpose/Icon6.svg";
import icon7 from "../../assets/Home/Purpose/Icon7.svg";
import icon8 from "../../assets/Home/Purpose/Icon8.svg";
import Mark from "./Mark";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function Service() {
  const location = useLocation();
  const serviceRefs = useRef({});
  const otherServicesRef = useRef({});

  // Store refs for each service
  service.forEach((data) => {
    serviceRefs.current[data.title] = useRef(null);
  });

  useEffect(() => {
    if (location.state?.serviceid) {
      const targetElement = serviceRefs.current[location.state.serviceid];

      if (targetElement) {
        const isMobile = window.innerWidth <= 768;
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: isMobile ? "start" : "center",
        });
      } else if (otherServicesRef.current) {
        otherServicesRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }
  }, [location.state]);

  // const services = ["Immigration", "Finance & capital markets", "Tax advisory"];
  const imageMap = {
    "service1.png": service1,
    "service2.png": service2,
    "service3.png": service3,
    "service4.png": service4,
    "service5.png": service5,
    "service6.png": service6,
    "service7.png": service7,
    "service8.png": service8,
  };

  const IconMap = {
    "Icon1.svg": icon1,
    "Icon2.svg": icon2,
    "Icon3.svg": icon3,
    "Icon4.svg": icon4,
    "Icon5.svg": icon5,
    "Icon6.svg": icon6,
    "Icon7.svg": icon7,
    "Icon8.svg": icon8,
  };
  return (
    <div className={styles.bg1}>
      <div className={styles.bg2}>
        <section className={styles.service}>
          <div className={styles.texts}>
            <h2>Services</h2>
          </div>
          {service.map((data, index) => (
            <div
              className={styles.details}
              ref={(el) => (serviceRefs.current[data.title.split(" ")[0]] = el)}
              key={data.title}
            >
              <div className={styles.detail} key={index}>
                {/* <img className={styles.icon} src={IconMap[data.svg]} alt='' /> */}
                <h2>{data.title}</h2>
                <span>{data.subtitle}</span>
                <p>{data.p1}</p>
                <p>{data.p2}</p>

                <div className={styles.lists}>
                  {[
                    data.li1,
                    data.li2,
                    data.li3,
                    data.li4,
                    data.li5,
                    data.li6,
                    data.li7,
                    data.li8,
                  ]
                    .filter((li) => li)
                    .map((li, idx) => (
                      <div className={styles.mark} key={idx}>
                        <Mark />
                        <span>{li}</span>
                      </div>
                    ))}
                </div>
              </div>
              <img src={imageMap[data.image]} alt='' />
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
