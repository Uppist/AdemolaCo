/** @format */

import React, { useEffect } from "react";
import styles from "./style.module.css";
import styles2 from "../Aboutus/About/About.module.css";
import service1 from "../../assets/Home/Service/Service1.png";
import service2 from "../../assets/Home/Service/Service2.png";
import service3 from "../../assets/Home/Service/Service3.png";
import service4 from "../../assets/Home/Service/Service4.png";
import service5 from "../../assets/Home/Service/Service5.png";
import service6 from "../../assets/Home/Service/Service6.png";
import service7 from "../../assets/Home/Service/Service7.png";
import service8 from "../../assets/Home/Service/Service8.png";
import icon1 from "../../assets/Home/Purpose/Icon1.svg";
import icon2 from "../../assets/Home/Purpose/Icon2.svg";
import icon3 from "../../assets/Home/Purpose/Icon3.svg";
import icon4 from "../../assets/Home/Purpose/Icon4.svg";
import icon5 from "../../assets/Home/Purpose/Icon5.svg";
import icon6 from "../../assets/Home/Purpose/Icon6.svg";
import icon7 from "../../assets/Home/Purpose/Icon7.svg";
import icon8 from "../../assets/Home/Purpose/Icon8.svg";
import imageblog from "../../assets/blog/image1.png";

import { Link, useLocation, useNavigate } from "react-router-dom";
import blog from "./Blog.json";

export default function Blog() {
  const ImageMap = {
    "image1.jpg": service1,
    "landlord.jpg": service2,
    "estate.jpg": service3,
    "fixed.jpg": service4,
    "deed.jpg": service5,
    "joint1.jpg": service6,
    "board1.jpg": service7,
    "tax1.jpg": service8,
    // "transfer1.jpg": transfer1,
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

  const BlogMap = {
    "image3.png": imageblog,
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();

  function goToDetails(data) {
    navigate("/blog-details", { state: { data, link: blog } });
  }

  const location = useLocation();

  const path = location.pathname.includes("/blog");

  const recent = blog[0];

  return (
    <section>
      {path ? (
        <div className={styles.banner}>
          <h1>Blog</h1>
          <div className={styles.recentPost}>
            <img src={BlogMap[recent.image3]} alt='' />
            <div>
              <span className={styles.post}>Recent Post</span>
              <label htmlFor=''>{recent.date}</label>
              <div className={styles.blogh3}>
                <h3>{recent.title2}</h3>
                <Link to='/blog-details' state={{ recent }}>
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
                </Link>
              </div>
              <span className={styles.span}>{recent.text2}</span>
            </div>
          </div>
          <h2 className={styles.allpost}>All Posts</h2>
          <div className={styles.container}>
            {blog.map((data, index) => (
              <div className={styles.container1} key={index}>
                <img
                  className={styles.image}
                  src={BlogMap[data.image3]}
                  alt=''
                />
                <div>
                  <label htmlFor=''>{data.date}</label>
                  <div className={styles.blogh3}>
                    <h3>{data.title2}</h3>
                    <Link to='/blog-details' state={{ data }}>
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
                    </Link>
                  </div>

                  <span>{data.text2}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.blog}>
          <div className={styles.texts}>
            <label htmlFor=''>Who are we servicing?</label>
            <h2>Services We Provide</h2>
          </div>
          <div className={styles.containerService}>
            {blog.map((data, index) => (
              <div className={styles.container1Service} key={index}>
                <img
                  className={styles.image}
                  src={ImageMap[data.image]}
                  alt=''
                />
                <div>
                  <img className={styles.icon} src={IconMap[data.svg]} alt='' />
                  {/* <label htmlFor=''>{data.date}</label> */}
                  <div className={styles.h3}>
                    <h3>{data.title}</h3>
                  </div>

                  <span>{data.text}</span>
                  <Link
                    to='/services'
                    state={{
                      serviceid: data.title.split(" ")[0] || "Other Services",
                    }}
                  >
                    <button className={styles2.button}>
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
                    </button>{" "}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
