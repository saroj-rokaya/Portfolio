import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/img/pngimg.png"
const About = () => {
  useEffect(() => {
    AOS.init(
      {
        duration: 1000,
        easing: "ease-in-out",
      },
      []
    );
  });
  return (
    <>
      <section className="overflow-hidden py-5">
        <div className="w-[90%] bg-[#011222] rounded-2xl text-white p-5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-3xl font-medium mb-4" data-aos="fade-right">ABOUT ME</h1>
            <p className="leading-relaxed mb-4 text-justify" data-aos="fade-right" data-aos-duration="1200">
              I am a skilled Web Application Developer focused on creating
              innovative web applications. I keep up with industry trends and
              best practices to deliver high-quality solutions. support fellow
              developers by sharing knowledge and guiding them, and I thrive on
              tackling new challenges in web development.
            </p>
            <h1 className="text-3xl font-medium mb-4" data-aos="fade-right" data-aos-duration="1400">Main Used</h1>
          </div>
          <img
            alt="img"
            data-aos="zoom-in"
            data-aos-duration="1400"
            className="lg:w-1/2 w-full lg:h-auto p-20  object-cover object-center rounded-lg"
            src={image}
          />
        </div>
      </section>
    </>
  );
};

export default About;
