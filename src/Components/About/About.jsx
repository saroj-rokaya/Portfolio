import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image from "../../assets/img/pngimg.png";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";

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
      <section className="overflow-hidden py-5 bg-gray-200">
        <div className="w-[90%] bg-[#011222] rounded-2xl text-white p-5 sm:p-10 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h1 className="text-3xl font-medium mb-4" data-aos="fade-right">
              ABOUT ME
            </h1>
            <p
              className="leading-relaxed mb-4 text-justify"
              data-aos="fade-right"
              data-aos-duration="1200"
            >
              I am a skilled Web Application Developer focused on creating
              innovative web applications. I keep up with industry trends and
              best practices to deliver high-quality solutions. support fellow
              developers by sharing knowledge and guiding them, and I thrive on
              tackling new challenges in web development.
            </p>
            <ul className="flex flex-wrap gap-3 my-10">
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="500">React Js</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="600">Next JS</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="700">Node JS</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="800">Tailwind CSS</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="900">HTML5</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="1000">CSS3</li>
              <li className="border-2 p-1 rounded-lg " data-aos="fade-right" data-aos-delay="1100">Bootstrap</li>
            </ul>
            <h1
              className="text-3xl font-medium mb-4"
              data-aos="fade-right"
              data-aos-duration="1400"
            >
              Web Development
            </h1>
            <div className="flex w-full py-5 gap-10 text-4xl">
              {/* /* From Uiverse.io by Ashe-T */}
              <button
                href="/"
                class="group flex justify-center text-white font-semibold hover:translate-y-3 transition-all duration-500 "
                data-aos="fade-right"
                data-aos-duration="1500"
              >
                <FaReact className="text-cyan-500" />
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  React
                </span>
              </button>
              <button
                href="/"
                class="group flex justify-center text-white font-semibold hover:translate-y-3 transition-all duration-500 "
                data-aos="fade-right"
                data-aos-duration="1700"
              >
                <RiTailwindCssFill className="text-cyan-500" />
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Tailwind
                </span>
              </button>
              <button
                href="/"
                class="group flex justify-center text-white font-semibold hover:translate-y-3 transition-all duration-500 "
                data-aos="fade-right"
                data-aos-duration="1900"
              >
                <FaNodeJs className="text-green-500" />
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Node JS
                </span>
              </button>
              <button
                href="/"
                class="group flex justify-center text-white font-semibold hover:translate-y-3 transition-all duration-500 "
                data-aos="fade-right"
                data-aos-duration="2100"
              >
                <RiNextjsLine />
                <span class="absolute opacity-0 group-hover:opacity-100 group-hover:text-white group-hover:text-sm group-hover:-translate-y-10 duration-700">
                  Next JS
                </span>
              </button>
            </div>
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
