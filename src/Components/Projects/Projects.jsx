import React from 'react'
import ProjectCard from './ProjectCard.jsx';


const Projects = () => {
    return (
        <>
            <section className="text-white py-10 bg-[#669bbc] body-font w-full">
                <div>
                    <div className="flex flex-col text-center w-full mb-10">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font text-white bg-[#011222] w-[90%] mx-auto rounded-xl p-5">
                            Recent Projects
                        </h1>
                    </div>
                    <div className=" gap-10 md:flex w-[90%] mx-auto">

                        <ProjectCard
                            title="Portfolio"
                            description="My portfolio highlights a collection of projects developed using React.js and Tailwind CSS, demonstrating my expertise in front-end development. It showcases my ability to create modern, responsive web applications."
                            link="https://portfolioo-beta-five.vercel.app/" 
                            animationDuration="1000"/>
                        <ProjectCard
                            title="ER-Skills"
                            description="ER-Skills is a project showcasing projects developed with React.js. IT demonstrates my expertise in frontend development, featuring applicaitons that highlight skills in React.js and Tailwind CSs and responsive design."
                            link="https://eb-site.vercel.app/" 
                            animationDuration="1300"/>
                        <ProjectCard
                            title="Dentamedi"
                            description="Dentamedi is a modern web application designed to streamline dental appointment scheduling and management. Built with React and Tailwind CSS, the platform provides a user-friendly interface for both patients and dental professionals.."
                            link="https://dentamedi.vercel.app/" 
                            animationDuration="1600"/>

                    </div>
                </div>
            </section>
            <section>
                <div>
                    popup model
                </div>
            </section>
        </>
    )
}

export default Projects
