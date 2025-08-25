/** @format */

import React from "react";
import styles from "./Service.module.css";
import service1 from "../../../assets/Home/Service/Service11.png";
import service2 from "../../../assets/Home/Service/Service22.png";
import service3 from "../../../assets/Home/Service/Service33.png";
import service4 from "../../../assets/Home/Service/Service44.png";
import service5 from "../../../assets/Home/Service/Service55.png";
import service6 from "../../../assets/Home/Service/Service66.png";
import service7 from "../../../assets/Home/Service/Service77.png";
import service8 from "../../../assets/Home/Service/Service88.png";
import icon1 from "../../../assets/Home/Purpose/Icon1.svg";
import icon2 from "../../../assets/Home/Purpose/Icon2.svg";
import icon3 from "../../../assets/Home/Purpose/Icon3.svg";
import icon4 from "../../../assets/Home/Purpose/Icon4.svg";
import icon5 from "../../../assets/Home/Purpose/Icon5.svg";
import icon6 from "../../../assets/Home/Purpose/Icon6.svg";
import icon7 from "../../../assets/Home/Purpose/Icon7.svg";
import icon8 from "../../../assets/Home/Purpose/Icon8.svg";
import service from "./Service.json";
import { Link } from "react-router-dom";
import Cases from "./Cases";

export default function Service() {
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
    <div className={styles.background1}>
      <div className={styles.background2}>
        <div className={styles.background3}>
          <section className={styles.service}>
            <div className={styles.texts}>
              <h2>Services</h2>
            </div>
            <div className={styles.services}>
              {service.map((service, index) => (
                <div key={index} className={styles.one}>
                  <img src={imageMap[service.image]} alt={service.title} />
                  <div>
                    <img
                      className={styles.icon}
                      src={IconMap[service.svg]}
                      alt=''
                    />

                    <h2>{service.title}</h2>
                    <span>{service.description}</span>
                    {/* <Link to='/services'> */}
                    <Link
                      to='/services'
                      state={{
                        serviceid:
                          service.title.split(" ")[0] || "Other Services",
                      }}
                    >
                      <button className={styles.button} type='button'>
                        Get Started{" "}
                        <svg
                          width='32'
                          height='32'
                          viewBox='0 0 16 16'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666'
                            stroke='white'
                            stroke-width='1'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <Cases />
          </section>
        </div>
      </div>
    </div>
  );
}
