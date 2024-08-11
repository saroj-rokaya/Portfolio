import HoverEffect from "../Ui/HoverEffect.jsx";

export function CardHoverEffectDemo() {
    return (
        <>
            <div className="bg-[#669bbc] px-2">
                <h2 className="text-4xl bg-[#011222] text-center py-5 container font-bold rounded-2xl mx-auto text-white">Card Hover Effect</h2>
                <div className="w-full mx-auto bg-[#669bbc]">
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
            "A technology company that builds economic infrastructure for the internet.",
        // link: "https://stripe.com",
    },
    {
        id: 2,
        title: "ER-Skills",
        description:
            "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
        // link: "https://netflix.com",
    },
    {
        id: 3,
        title: "Dentamedi",
        description:
            "A multinational technology company that specializes in Internet-related services and products.",
        // link: "https://google.com",
    },
    {
        id: 4,
        title: "Meta",
        description:
            "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
        // link: "https://meta.com",
    },
    {
        id: 5,
        title: "Amazon",
        description:
            "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        // link: "https://amazon.com",
    },
    {
        id: 6,
        title: "Microsoft",
        description:
            "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
        // link: "https://microsoft.com",
    },
];
