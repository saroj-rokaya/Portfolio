import HoverEffect from "../Ui/HoverEffect.jsx";
// import image from '../../assets/img/pngimg.png'

export function CardHoverEffectDemo() {
    return (
        <>
            <div className="bg-[#669bbc] px-2">
                <h2 className="text-4xl bg-[#011222] text-center py-5 container font-bold rounded-xl mx-auto text-white">Recent Projects</h2>
                <div className="container w-full mx-auto bg-[#669bbc]">
                    <HoverEffect items={projects} />
                </div>
            </div>
        </>
    );
}
export const projects = [
    {
        id: 1,
        title: "Portfolio",
        description:
            "My portfolio highlights a collection of projects developed using React.js and Tailwind CSS, demonstrating my expertise in front-end development. It showcases my ability to create modern, responsive web applications.",
        link: "https://portfolioo-beta-five.vercel.app/",
    },
    {
        id: 2,
        title: "ER-Skills",
        description:
            "ER-Skills is a project showcasing projects developed with React.js. IT demonstrates my expertise in frontend development, featuring applicaitons that highlight skills in React.js and Tailwind CSs and responsive design",
        link: "https://eb-site.vercel.app/",
    },
    {
        id: 3,
        title: "Dentamedi",
        description:
            "Dentamedi is a modern web application designed to streamline dental appointment scheduling and management. Built with React and Tailwind CSS, the platform provides a user-friendly interface for both patients and dental professionals..",
        link: "https://dentamedi.vercel.app/",
    },
    
];