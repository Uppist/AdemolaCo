/** @format */

import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Testimonial.module.css";
import image from "../../../assets/testimonial/image1.png";
import icon from "../../../assets/testimonial/icon.svg";
import icon2 from "../../../assets/testimonial/icon2.svg";
import comma from "../../../assets/testimonial/comma.svg";

export default function Testimonial() {
  const testimonials = [
    {
      id: 0,
      image: image,
      quote:
        "The team provided exceptional legal guidance for our business restructuring. Their professionalism and attention to detail gave us the confidence to move forward seamlessly. Truly a partner we can rely on!",
      name: "Sarah Johnson",
      position: "Managing Director",
    },
    {
      image: image,
      id: 1,
      quote:
        "The team supported me with genuine care and professionalism, always keeping my best interests at heart. Their dedication gave me confidence and peace of mind throughout the process",
      name: "Tunde Sayo",
      position: "C.E.O",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  function handleForwardClick() {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleBackClick() {
    setCurrentTestimonial((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  const testimonial = testimonials[currentTestimonial];

  return (
    <div className={styles.testimonialSection}>
      <div className={styles.text}>
        {" "}
        <span className={styles.heading}>Client Testimonials</span>
        <h3>Hear from our clients about their experiences.</h3>
      </div>
      <div>
        {" "}
        <div className={styles.testimonialCard}>
          <img src={testimonial.image} alt='' />
          <div className={styles.cardContent}>
            <img src={comma} alt='' />
            <p id='quote-text' className={styles.quoteText}>
              "{testimonial.quote}"
            </p>
            <div className={styles.attribution}>
              <span className={styles.name}>{testimonial.name}</span>
            </div>
            <div className={styles.position}>
              <span>{testimonial.position}</span>
            </div>
            <div className={styles.image}>
              <img
                onClick={() => handleBackClick(testimonial.id)}
                src={icon}
                alt=''
              />
              <img
                onClick={() => handleForwardClick(testimonial.id)}
                src={icon2}
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
