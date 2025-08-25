/** @format */

import React from "react";
import styles from "./About.module.css";
import image from "../../../assets/About/about.png";
import { Link, useLocation } from "react-router-dom";

export default function About() {
  const location = useLocation();

  const path = location.pathname.includes("/aboutus");
  return (
    <section className={styles.about}>
      <div>
        {path ? (
          <div className={styles.global2}>
            <label htmlFor=''>About Us</label>
            <h2>What is Lorem Ipsum?</h2>
          </div>
        ) : (
          <div className={styles.global}>
            <label htmlFor=''>About Us</label>
            <h2>What is Lorem Ipsum?</h2>
          </div>
        )}

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing
        </p>

        {path ? (
          <Link to='/contactus'>
            <button className={styles.buttonGet}>
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
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Link>
        ) : (
          <Link to='/aboutus'>
            <button className={styles.button}>
              Read full details
              <svg
                width='32'
                height='32'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M2.66666 7.99992H13.3333M8.66666 3.33325L13.3333 7.99992L8.66666 12.6666'
                  stroke='#B8824F'
                  stroke-width='1'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </Link>
        )}
      </div>
      <img src={image} alt='' />
    </section>
  );
}
