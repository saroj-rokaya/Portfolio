import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
import Successbar from "./Successbar.jsx";

const EmailForm = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  });
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_m0rk5hp", "template_bhkfpam", form.current, {
        publicKey: "Pj-ohpPmvkUE-Dj21",
      })
      .then(
        () => {
          //   console.log("SUCCESS!");
          window.confirm("Message Sent!");
        },
        (error) => {
          //   console.log("FAILED...", error.text);
          window.alert("FAILED!....", error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <form
        ref={form}
        onSubmit={sendEmail}
        data-aos="zoom-in-left"
        className="lg:w-2/5 px-5 rounded-lg md:w-1/2 bg-white flex flex-col md:ml-auto w-full py-10 mt-8 md:mt-0"
      >
        <h2 className="text-lg mb-1 font-bold">Let's Connect</h2>
        <p className="leading-relaxed mb-5 ">
          Interested in working together? Feel free to drop me a message, I'm
          just a click away.
        </p>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            className="w-full bg-white rounded border border-[#669bbc]  focus:ring-2 focus:ring-[#011222] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            className="w-full bg-white rounded border border-[#669bbc]  focus:ring-2 focus:ring-[#011222] text-base outline-none py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm font-semibold">
            Message <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            className="w-full bg-white rounded border border-[#669bbc] focus:ring-2 focus:ring-[#011222] h-32 text-base outline-none py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          type="submit"
          value="Send"
          //   onClick={}
          className="border-0 py-2 inline-flex h-12 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#011222,45%,#669bbc,55%,#011222)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors hover:bg-[linear-gradient(110deg,#669bbc,45%,#011222,55%,#669bbc)]"
        >
          Send Message
        </button>
      </form>
    </>
  );
};

export default EmailForm;
