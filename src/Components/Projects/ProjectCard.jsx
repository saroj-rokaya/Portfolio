import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { RiArrowRightLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectCard = ({ title, description, link, animationDuration }) => {
    useEffect(() => {
        AOS.init(
            {
                duration: 1000,
                easing: "ease-in-out",
                once: false,
            },
            []
        );
    });
    return (
        <>
            <div
                data-aos="fade-up"
                data-aos-duration={animationDuration}
                className="flex md:w-[50%] w-full rounded-lg sm:min-h-[40vh] bg-[#011222] text-white md:mb-0 mb-5 p-5 flex-col">
                <div className="flex items-center mb-3">
                    <h2 className="title-font font-medium text-2xl">{title}</h2>
                </div>
                <div className="flex-grow">
                    <p className="leading-relaxed text-justify ">
                        {description}
                    </p>
                    <Link
                        to={link}f
                        className="mt-3 text-green-500 font-bold animate-pulse inline-flex items-center">View More
                        <RiArrowRightLine />
                    </Link>
                </div>
            </div>

        </>
    )
}

export default ProjectCard
