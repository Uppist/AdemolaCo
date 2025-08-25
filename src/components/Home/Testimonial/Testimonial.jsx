/** @format */

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./Testimonial.module.css";
import image from "../../../assets/testimonial/image1.png";

export default function Testimonial() {
  const testimonials = [
    {
      image: image,
      quote:
        "The team provided exceptional legal guidance for our business restructuring. Their professionalism and attention to detail gave us the confidence to move forward seamlessly. Truly a partner we can rely on!",
      name: "Sarah Johnson",
      position: "Managing Director",
    },
    // {
    //   quote: "I like your work",
    //   name: "MD",
    //   position: "Royal Albert Properties Limited",
    // },
    // {
    //   quote:
    //     "This is great. Many thanks to you and Ehis for your work on this case.",
    //   name: "Dr. Kene Onwugaje",
    //   position: "MD, REDUS CENTER FOR DIGESTIVE HEALTH LTD",
    // },
  ];

  // const settings = {
  //   dots: false,
  //   infinite: false,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   swipeToSlide: true,
  //   autoplay: true,
  //   autoplaySpeed: 5000,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div className={styles.testimonialSection}>
      <div>
        <span className={styles.heading}>Client Testimonials</span>
        <h3>Hear from our clients about their experiences.</h3>
      </div>
      <Slider>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.cardContent}>
              <p id='quote-text' className={styles.quoteText}>
                "{testimonial.quote}"
              </p>
              <div className={styles.attribution}>
                <span className={styles.name}>{testimonial.name}</span>
              </div>
              <div className={styles.position}>
                <span>{testimonial.position}</span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
