import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";
const ProfileLinks = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 text-3xl absolute top-[30%] right-[5%] sm:right-[2%]">
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
    </>
  );
};

export default ProfileLinks;
