/** @format */

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import LogoNav from "./LogoNav";
import { Link } from "react-router-dom";

export default function NavBar({}) {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [active, setActive] = useState(null);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/AdemolaCo'>
          <LogoNav />
        </Link>

        <ul className={styles.navul}>
          <Link to='/'>
            <li
              className={`${active === "home" ? styles.active : styles.lists}`}
              onClick={() => setActive("home")}
            >
              Home
            </li>
          </Link>
          <Link to='/aboutus'>
            <li
              className={`${active === "about" ? styles.active : styles.lists}`}
              onClick={() => setActive("about")}
            >
              About Us
            </li>
          </Link>

          <Link to='/services'>
            <li
              className={`${
                active === "service" ? styles.active : styles.lists
              }`}
              onClick={() => setActive("service")}
            >
              Services{" "}
            </li>
          </Link>

          <Link to='/gallery'>
            {" "}
            <li
              className={`${
                active === "gallery" ? styles.active : styles.lists
              }`}
              onClick={() => setActive("gallery")}
            >
              Gallery
            </li>
          </Link>

          <Link to='/blogs'>
            <li
              className={`${active === "blog" ? styles.active : styles.lists}`}
              onClick={() => setActive("blog")}
            >
              Blog
            </li>
          </Link>
          <Link to='/contactus'>
            <li
              className={styles.listcontact}
              onClick={() => setActive("contact")}
            >
              Contact Us
            </li>
          </Link>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='white'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='white'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='white'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <div
          className={`${styles.sidebar} ${
            isSidebarVisible ? styles.active : styles["fade-out"]
          }`}
        >
          <div className={styles.imageclose}>
            <Link to='/AdemolaCo'>
              <LogoNav />
            </Link>

            <a className='dropdown-close' onClick={onClose}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </div>

          <ul className={styles.sidebarmenu}>
            <Link to='/AdemolaCo'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  onClose();
                }}
              >
                Home{" "}
              </li>
            </Link>

            <Link to='/aboutus'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  onClose();
                }}
              >
                About Us
              </li>
            </Link>

            <Link to='/services'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  onClose();
                }}
              >
                Services{" "}
              </li>
            </Link>

            <Link to='/gallery'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  onClose();
                }}
              >
                Gallery{" "}
              </li>
            </Link>

            <Link to='/blogs'>
              <li
                className={styles.sidebarlist}
                onClick={() => {
                  onClose();
                }}
              >
                Blog{" "}
              </li>
            </Link>

            <Link to='/contactus'>
              <li
                className={styles.sidebarcontact}
                onClick={() => {
                  onClose();
                }}
              >
                Contact Us{" "}
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
