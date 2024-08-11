import React, { useEffect } from "react";
import EmailForm from "./EmailForm.jsx";
import Successbar from "./Successbar.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  })
  return (
    <>
      <section className=" mx-auto body-font  relative bg-[#011222]">
        {/* <Successbar/> */}
        <div className=" w-full container px-5 py-20 mx-auto md:gap-5 flex md:flex-nowrap flex-wrap">
          {/* map section */}
          <div
            className="lg:w-3/5 md:w-1/2 w-full h-[70vh] md:h-screen bg-gray-200  rounded-xl overflow-hidden p-10 flex items-end justify-start relative"
            data-aos="zoom-in-right"
          >
            <iframe
              width="100%"
              height="100%"
              className={`absolute inset-0`}
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.606744394647!2d85.37418097456681!3d27.707041525506625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a4ab434c529%3A0x2e164853495d40cd!2sGothatar%20English%20Secondary%20School!5e1!3m2!1sen!2snp!4v1723170122015!5m2!1sen!2snp"
            />
            <div className="bg-[#011222]/50  backdrop-blur-sm mx-auto text-white relative flex flex-wrap py-6 rounded-lg shadow-md"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <div className="lg:block hidden w-1/2 px-6">
                <h2 className="title-font font-bold text-sm">ADDRESS</h2>
                <p className="mt-1">Near Gothatar English Secondary School</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-bold text-sm">EMAIL</h2>
                <a className="text-blue-500 cursor-pointer hover:text-blue-600">
                  rokayasaroj188@gmail.com
                </a>
                <h2 className="title-font font-bold text-sm mt-4">PHONE</h2>
                <p className="leading-relaxed cursor-pointer">
                  +977-9849925392
                </p>
              </div>
            </div>
          </div>
          {/* form section */}
          <EmailForm />
        </div>
      </section>
    </>
  );
};

export default ContactSection;
