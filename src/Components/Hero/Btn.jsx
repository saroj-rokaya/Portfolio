import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../assets/CV/CV.pdf";
import { Link } from "react-router-dom";

const Btn = () => {

  // initialize AOS for smooth scrolling and fading
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });

  return (
    <>
      <Link to={cv} target="_blank" download="saroj_Kumar_Rokaya_cv.pdf">
        <button
          className="btn btn:hover"//classes from the index.css
          data-aos="fade-up-left"
        >
          Download CV
        </button>
      </Link>
    </>
  );
};

export default Btn;
