/** @format */

/** @format */

import React, { useState, useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "react-toastify/dist/ReactToastify.css";
import styles from "./style.module.css";
import image from "../../assets/Contact/contact.png";
import { Link } from "react-router-dom";

// import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_ka4dxif",
  //       "template_3wm4105",
  //       form.current,
  //       "Dr_TDKK9HAWTw7qNU"
  //     )
  //     .then(
  //       () => {
  //         toast.success("Message sent!");
  //       },
  //       (error) => {
  //         console.log("emailjs", error);
  //         toast.error("Failed to send email. Please try again.");
  //       }
  //     );
  // }
  const [selectedOption, setSelectedOption] = useState(""); // Store a string
  const [options] = useState([
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
  ]);
  const [isOpen, setIsOpen] = useState(false); // Use a single boolean

  function handleSelect(option) {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown
  }

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.image}>
        <img src={image} alt='' />
      </div>
      <div className={styles.touch}>
        <div className={styles.form}>
          <h2 htmlFor=''>Get In Touch</h2>
          <span>Use the form below to contact us</span>
        </div>
        {/* <form onSubmit={sendEmail} ref={form}> */}
        <form>
          <div className={styles.text}>
            <div className={styles.input}>
              <label htmlFor=''>Name</label>
              <input type='text' placeholder='Full name' name='from_name' />
            </div>
            <div className={styles.input}>
              <label htmlFor=''>Phone Number</label>
              <input
                type='phonenumber'
                placeholder='Phone number'
                name='from_number'
              />
            </div>
            <div className={styles.input}>
              <label htmlFor=''>Email</label>
              <input
                type='email'
                placeholder='Email address'
                name='from_email'
              />
            </div>
            <div className={styles.input}>
              <label htmlFor=''>Service</label>
              <div className={`${styles.service} ${styles.select}`}>
                <div
                  className={`${styles.list} ${isOpen ? "select-clicked" : ""}`}
                  onClick={toggleDropdown}
                >
                  <span className={styles.selected}>
                    {selectedOption || "Select"}
                  </span>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                      stroke='currentColor'
                      strokeOpacity='0.8'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {isOpen && (
                  <ul className={styles.menu}>
                    {options.map((option) => (
                      <li
                        key={option}
                        className={`menu-item ${
                          selectedOption === option ? "active" : ""
                        }`}
                        onClick={() => handleSelect(option)}
                        role='option'
                        name='from_service'
                      >
                        {option}
                        {/* <hr /> */}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <input type='hidden' name='from_service' value={selectedOption} />
            </div>
            <div className={styles.input}>
              <label htmlFor=''>Message</label>
              <textarea placeholder='Message' name='message'></textarea>
            </div>
          </div>
          <button type='submit' className={styles.submit}>
            Request Consultation
          </button>
        </form>
      </div>

      {/* <Image /> */}
      {/* <ToastContainer /> */}
    </div>
  );
}
