/** @format */
import React, { useState } from "react";
import styles from "./Faq.module.css";
import faq from "./Faq.json";
import faqimage from "../../../assets/FAQ/faq.png";

export default function FAQ() {
  const [faqState, setFaqState] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
  });

  function toggleFaq(index) {
    setFaqState((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <section className={styles.faq}>
      <div className={styles.faqh2}>
        <h2>FAQs</h2>
        <span>
          We’ve compiled responses to the questions we hear most often to help
          you better understand our approach and offerings.
        </span>
      </div>
      <div className={styles.faqimage}>
        <img src={faqimage} alt='' />

        <div className={styles.divs}>
          {faq.map((data, index) => (
            <div
              key={index}
              className={`${styles.extra} ${
                faqState[index] ? styles.active : ""
              }`}
            >
              <div className={styles.div} onClick={() => toggleFaq(index)}>
                <span>{data.question}</span>
                <div
                  className={`${styles.svg} ${
                    faqState[index] ? styles.rotate : ""
                  }`}
                >
                  <svg
                    width='11'
                    height='19'
                    viewBox='0 0 11 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M1.5 18L9.71927 9.74341L1.5 1.48682'
                      stroke={faqState[index] ? "#fff" : "#B8824F"}
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
              {faqState[index] && <p>{data.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
