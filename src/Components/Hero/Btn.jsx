import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import cv from "../../assets/CV/CV.pdf"

const Btn = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  });
  return (
    <>
      <a href={cv} target="_blank" download='saroj_Kumar_Rokaya_cv.pdf'>
        <button
          className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#011222,45%,#669bbc,55%,#011222)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:bg-[linear-gradient(110deg,#669bbc,45%,#011222,55%,#669bbc)] hover:scale-[1.05]"
          data-aos="fade-up-left"
        >
          Download CV
        </button>
      </a>
    </>
  );
};

export default Btn;
