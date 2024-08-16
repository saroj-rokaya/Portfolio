import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsappSquare,
  FaTelegram,
  FaGithub,
} from "react-icons/fa";//icon from react-icons

//social media link style initialization
const linkStyle = "hover:text-[#669bbc] duration-300 hover:scale-[1.2] active:scale-[1.2] cursor-pointer"

const ProfileLinks = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col gap-5 text-3xl absolute top-[30%] right-[5%] sm:right-[2%]">
        <p data-aos="fade-left" data-aos-duration="1000">
          <FaGithub className={linkStyle} />
        </p>
        <p data-aos="fade-left" data-aos-duration="1200">
          <FaLinkedin className={linkStyle} />
        </p>
        <p data-aos="fade-left" data-aos-duration="1400">
          <FaFacebook className={linkStyle} />
        </p>
        <p data-aos="fade-left" data-aos-duration="1600">
          <FaInstagram className={linkStyle} />
        </p>
        <p data-aos="fade-left" data-aos-duration="1800">
          <FaWhatsappSquare className={linkStyle} />
        </p>
        <p data-aos="fade-left" data-aos-duration="2000">
          <FaTelegram className={linkStyle} />
        </p>
      </div>
    </>
  );
};

export default ProfileLinks;
