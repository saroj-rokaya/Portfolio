import React, { useEffect } from "react";
import bgVideo from "../../assets/Videos/upDownWhite.mp4";
import Btn from "./Btn.jsx";
import { BsChevronDoubleDown } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCode } from "react-icons/fa6";

import ProfileLinks from "./ProfileLinks.jsx";

const Hero = () => {
  const scrollOnClick = () => {
    window.scroll({ top: window.innerHeight, behavior: "smooth" });
  };
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <div className="relative text-white bg-[#011222] overflow-hidden">
        {/* topbar//command */}
        <button
          className="absolute text-4xl left-[48%] top-[5%] animate-pulse"
          data-aos="fade-down"
        >
          <FaCode />
        </button>

        {/* video bg absolute */}
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
        <ProfileLinks />
        {/* below details */}

        <button
          className="absolute bottom-[5%] rounded-lg left-[48%] "
        >
          <BsChevronDoubleDown className="text-white hover:text-[#669bbc] font-extrabold animate-bounce text-4xl" />
        </button>
      </div>
    </>
  );
};

export default Hero;
