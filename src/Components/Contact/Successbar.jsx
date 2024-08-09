import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Successbar = () => {
  return (
    <>
      <div
        className={`sticky z-10 top-0 left-0 flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl  bg-white
      `}
      >
        <div className="flex flex-1 flex-col p-2 border-l-8 border-green-600">
          <span className="text-xl font-semibold">Success</span>
          <span className="text-xs font-semibold">
            Thank you for your message. we'll be in touch soon.
          </span>
        </div>
        <button className=" px-4 flex font-semibold items-center text-4xl active:text-3xl uppercase tracking-wide bg-green-600 text-white">
          <IoClose />
        </button>
      </div>
    </>
  );
};

export default Successbar;
