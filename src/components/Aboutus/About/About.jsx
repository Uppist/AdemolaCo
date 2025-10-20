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
            <h2>Who We Are?</h2>
          </div>
        ) : (
          <div className={styles.global}>
            <label htmlFor=''>About Us</label>
            <h2>Who We Are?</h2>
          </div>
        )}

        <p>
          Olabiyi Ademola J. & Co is committed to delivering effective legal
          services that provide you with clear, convincing results while
          upholding the highest standards of the legal profession. Our foremost
          obligation is to safeguard our clients’ interests in strict adherence
          to the principles and ethics of the law. We approach every brief with
          passion, dedication, and a results-driven mindset, ensuring that each
          matter is handled with the utmost professionalism and care.
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
