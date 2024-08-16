import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin } from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <footer className="bg-[#669bbc]">
                <div className="mx-auto w-[90%] p-4 py-6 lg:py-8">
                    {/* upper footer section  */}
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a href="/" className="flex items-center">
                                <span className="self-center text-2xl font-bold text-[#011222] whitespace-nowrap">Saroj Rokaya</span>
                            </a>
                        </div>
                        {/* //right footer section  */}
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            {/* page links  */}
                            <div>
                                <h2 className="mb-6 font-bold text-[#011222] text-lg uppercase">Links</h2>
                                <ul className="text-[#011222] font-medium flex flex-col gap-3">
                                    <li>
                                        <a href="/" className="hover:underline">Home</a>
                                    </li>
                                    <li>
                                        <a href="/about" className="hover:underline">About Me</a>
                                    </li>
                                    <li>
                                        <a href="/projects" className="hover:underline">Projects</a>
                                    </li>
                                    <li>
                                        <a href="/skills" className="hover:underline">Skills</a>
                                    </li>
                                    <li>
                                        <a href="/contact" className="hover:underline">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            {/* social links */}
                            <div>
                                <h2 className="mb-6 text-lg font-bold text-[#011222] uppercase">Follow Me</h2>
                                <ul className="text-[#011222] font-medium flex flex-col gap-3">
                                    <li>
                                        <a href="https://github.com/saroj-rokaya" className="hover:underline ">Github</a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/sarojrokaya" className="hover:underline">Linkedin</a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/saroj.rokaya.5686" className="hover:underline">Facebook</a>
                                    </li>
                                </ul>
                            </div>
                            {/* legal links */}
                            <div>
                                <h2 className="mb-6 text-lg font-bold text-[#011222] uppercase">Legal</h2>
                                <ul className="text-[#011222] flex flex-col gap-3 font-medium">
                                    <li>
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-[#011222] sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-[#011222] sm:text-center">© 2024 <a href="https://github.com/saroj-rokaya" className="hover:underline">Saroj Rokaya</a>. All Rights Reserved.
                        </span>
                        <div className="flex gap-3 mt-4 sm:justify-center sm:mt-0">
                            <a href="#" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaFacebookSquare />
                            </a>
                            <a href="#" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaGithub />
                            </a>
                            <a href="#" className="text-[#011222] hover:scale-[1.2] duration-300 text-xl">
                                <FaLinkedin />
                            </a>


                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer





