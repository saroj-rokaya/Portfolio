"use client";
import image from '../../assets/img/pngimg.png';
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../Ui/useOutsideClick";

export function ExpandableCardDemo() {
    const [active, setActive] = useState(null);
    const id = useId();
    const ref = useRef(null);

    useEffect(() => {
        function onKeyDown(event) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed bg-white/10 backdrop-blur-lg inset-0 grid place-items-center z-[100]">

                        {/* //popup close button code and style */}
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-10 right-60 lg:hidden items-center justify-center bg-green-500 rounded-full h-10 w-10"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>

                        {/* //popup model code and style */}
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-blue-500 dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            {/* //popup image code and style */}
                            <motion.div layoutId={`image-${active.title}-${id}`}>

                                <img
                                    priority
                                    width={200}
                                    height={200}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"

                                />
                            </motion.div>

                            {/* heading and subheading and button (visit) code and styling */}
                            <div>
                                <div className="flex justify-between items-start p-4">
                                    {/* //heading and subheading in popup card section  */}
                                    <div className="">
                                        {/* //heading code in popup card */}
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        {/* subheading code in popup card */}
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    {/* //popup visit button code and style */}
                                    <motion.a
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-red-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>

                                    {/* description in popup card code and style */}
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>

            {/* card section */}
            <div className='bg-[#669bbc]'>
                <ul className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 py-10 items-start gap-5">
                    {cards.map((card) => (
                        <motion.div
                            layoutId={`card-${card.title}-${id}`}
                            key={card.title}
                            onClick={() => setActive(card)}
                            className="p-4 flex flex-col hover:bg-[#4b4b2e] bg-[#011222] rounded-xl cursor-pointer"
                        >
                            <div className="flex gap-4 flex-col w-full">
                                <motion.div layoutId={`image-${card.title}-${id}`}>
                                    <img
                                        width={100}
                                        height={100}
                                        src={card.src}
                                        alt={card.title}
                                        className="h-60 w-full rounded-lg object-cover object-top"
                                    />
                                </motion.div>
                                <div className="flex justify-center items-center flex-col">
                                    <motion.h3
                                        layoutId={`title-${card.title}-${id}`}
                                        className="font-medium text-white text-center md:text-left text-base"
                                    >
                                        {card.title}
                                    </motion.h3>
                                    <motion.p
                                        layoutId={`description-${card.description}-${id}`}
                                        className="text-white text-center md:text-left text-base"
                                    >
                                        {card.description}
                                    </motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </ul>
            </div>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: "Lana Del Rey",
        title: "Summertime Sadness",
        src: image,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Lana Del Rey, an iconic American singer-songwriter, is celebrated for
                    her melancholic and cinematic music style. Born Elizabeth Woolridge
                    Grant in New York City, she has captivated audiences worldwide with
                    her haunting voice and introspective lyrics. <br /> <br /> Her songs
                    often explore themes of tragic romance, glamour, and melancholia,
                    drawing inspiration from both contemporary and vintage pop culture.
                    With a career that has seen numerous critically acclaimed albums, Lana
                    Del Rey has established herself as a unique and influential figure in
                    the music industry, earning a dedicated fan base and numerous
                    accolades.
                </p>
            );
        },
    },
    {
        description: "Babbu Maan",
        title: "Mitran Di Chhatri",
        src: image,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Babu Maan, a legendary Punjabi singer, is renowned for his soulful
                    voice and profound lyrics that resonate deeply with his audience. Born
                    in the village of Khant Maanpur in Punjab, India, he has become a
                    cultural icon in the Punjabi music industry. <br /> <br /> His songs
                    often reflect the struggles and triumphs of everyday life, capturing
                    the essence of Punjabi culture and traditions. With a career spanning
                    over two decades, Babu Maan has released numerous hit albums and
                    singles that have garnered him a massive fan following both in India
                    and abroad.
                </p>
            );
        },
    },

    {
        description: "Metallica",
        title: "For Whom The Bell Tolls",
        src: image,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Metallica, an iconic American heavy metal band, is renowned for their
                    powerful sound and intense performances that have left an indelible
                    mark on the world of rock music. Formed in Los Angeles in 1981, the
                    band quickly rose to prominence with their aggressive style and
                    thought-provoking lyrics. <br /> <br /> With a career spanning over
                    four decades, Metallica has released numerous critically acclaimed
                    albums, including 'Master of Puppets' and 'The Black Album,' which
                    have cemented their status as one of the greatest and most influential
                    bands in the history of rock. Their music continues to inspire and
                    captivate fans around the world, making them a true force to be
                    reckoned with in the realm of heavy metal.
                </p>
            );
        },
    },

    {
        description: "Coldplay",
        title: "Fix You",
        src: image,
        ctaText: "Visit",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Coldplay, a British rock band formed in 1996, has become one of the
                    most successful and beloved bands of the 21st century. Known for their
                    emotive and anthemic sound, Coldplay has captured the hearts of
                    millions of fans worldwide with their heartfelt lyrics and captivating
                    melodies. <br /> <br /> With hit songs like 'Fix You,' 'Yellow,' and
                    'Viva La Vida,' they have consistently topped the charts and earned
                    numerous awards and accolades. Coldplay's music is characterized by
                    its uplifting and inspirational themes, making them a band that
                    continues to resonate with audiences of all ages.
                </p>
            );
        },
    },
];
