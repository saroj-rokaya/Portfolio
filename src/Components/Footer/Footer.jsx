import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <footer className="bg-[#669bbc]">
                <div className="mx-auto w-[90%] p-4 py-6 lg:py-8">
                    {/* upper footer section  */}
                    <div className="md:flex md:justify-between">
                        
                        {/* left footer section  */}
                        <div className="mb-6 md:mb-0">
                            <Link to="/" className="flex items-center">
                                <span className="self-center text-2xl font-bold text-[#011222] whitespace-nowrap">Saroj Rokaya</span>
                            </Link>
                        </div>

                        {/* //right footer section  */}
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                            {/* page links  */}
                            <div>
                                <h2 className="mb-6 font-bold text-[#011222] text-lg uppercase">Links</h2>
                                <ul className="text-[#011222] font-medium flex flex-col gap-3">
                                    <li>
                                        <Link to="/" className="hover:underline">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/about" className="hover:underline">About Me</Link>
                                    </li>
                                    <li>
                                        <Link to="/projects" className="hover:underline">Projects</Link>
                                    </li>
                                    <li>
                                        <Link to="/skills" className="hover:underline">Skills</Link>
                                    </li>
                                    <li>
                                        <Link to="/contact" className="hover:underline">Contact</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* social links */}
                            <div>
                                <h2 className="mb-6 text-lg font-bold text-[#011222] uppercase">Follow Me</h2>
                                <ul className="text-[#011222] font-medium flex flex-col gap-3">
                                    <li>
                                        <Link to="https://github.com/saroj-rokaya" className="hover:underline ">Github</Link>
                                    </li>
                                    <li>
                                        <Link to="https://linkedin.com/in/sarojrokaya" className="hover:underline">Linkedin</Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.facebook.com/saroj.rokaya.5686" className="hover:underline">Facebook</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* legal links */}
                            <div>
                                <h2 className="mb-6 text-lg font-bold text-[#011222] uppercase">Legal</h2>
                                <ul className="text-[#011222] flex flex-col gap-3 font-medium">
                                    <li>
                                        <Link to="/" className="hover:underline">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="/" className="hover:underline">Terms &amp; Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* horizontal line between upper and lower footer  */}
                    <hr className="my-6 border-[#011222] sm:mx-auto dark:border-gray-700 lg:my-8" />

                    {/* lower footer  */}
                    <div className="sm:flex sm:items-center sm:justify-between">

                        {/* left section of lower footer  */}
                        <span className="text-sm text-[#011222] sm:text-center">© 2024 <Link to="https://github.com/saroj-rokaya" className="hover:underline">Saroj Rokaya</Link>. All Rights Reserved.
                        </span>

                        {/* right section of lower footer  */}
                        <div className="flex gap-3 mt-4 sm:justify-center sm:mt-0">
                            <Link to="https://www.facebook.com/saroj.rokaya.5686" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaFacebookSquare />
                            </Link>
                            <Link to="https://github.com/saroj-rokaya" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaGithub />
                            </Link>
                            <Link to="https://github.com/saroj-rokaya" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaLinkedin />
                            </Link>


                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer





