import React, { useEffect } from "react";
import bgVideo from "../../assets/Videos/upDownWhite.mp4";
import Btn from "./Btn.jsx";
import { BsChevronDoubleDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa6";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";

const Hero = () => {
  const scrollOnClick = () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  // useEffect(() => {
  //   document.body.style.overflow = "hidden";
  // }, []);
  return (
    <>
      <div className="relative text-white overflow-hidden">
        {/* topbar//command */}
        <button
          className="absolute text-4xl left-[48%] top-[5%] animate-pulse"
          data-aos="fade-down"
        >
          <FaCode />
        </button>

        <video
          src={bgVideo}
          autoPlay
          loop
          muted
          className="object-cover h-[100vh] w-[100%]"
        ></video>
        {/* naming intro */}
        <div className=" absolute top-[30%] lg:top-[35%] left-[5%] lg:left-[10%] flex justify-center  flex-col gap-4 w-[50%] items-start">
          <h1 className="text-4xl font-bold" data-aos="fade-up-right">
            SAROJ KUMAR ROKAYA
          </h1>
          <p className="text-2xl font-semibold" data-aos="fade-up-right">
            Frontend Web Developer
          </p>
          <Btn />
        </div>
        {/* social media links */}
        <div className=" flex justify-center items-center flex-col gap-5 text-3xl absolute top-[30%] right-[5%] sm:right-[2%]">
          <p data-aos="fade-left" data-aos-duration="1000">
            <FaGithub className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
          <p data-aos="fade-left" data-aos-duration="1200">
            <FaLinkedin className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
          <p data-aos="fade-left" data-aos-duration="1400">
            <FaFacebook className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
          <p data-aos="fade-left" data-aos-duration="1600">
            <FaInstagram className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
          <p data-aos="fade-left" data-aos-duration="1800">
            <FaWhatsappSquare className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
          <p data-aos="fade-left" data-aos-duration="2000">
            <FaTelegram className="hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer" />
          </p>
        </div>
        {/* below details */}

        <button
          className="absolute bottom-[5%] rounded-lg left-[48%] "
          onClick={scrollOnClick}
          
        >
          <BsChevronDoubleDown className="text-white hover:text-[#669bbc] font-extrabold animate-bounce text-4xl" />
        </button>
      </div>
    </>
  );
};

export default Hero;
