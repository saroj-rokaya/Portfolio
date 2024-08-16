import React from 'react'
import image from '../../assets/Projects/erskill.png'
import { IoIosCloseCircleOutline } from "react-icons/io";
const PopupLink = () => {
    
    return (
        <>
            <section className={`z-[999] fixed inset-0 h-full flex justify-center items-center bg-[#669bbc]/10 backdrop-blur-lg`}>

                <div className='bg-[#011222] w-[90%] sm:w-[50%] h-[90%]  flex flex-col gap-5 p-5 justify-center items-center relative rounded-xl'>
                    {/* close button  */}
                    <IoIosCloseCircleOutline className="absolute right-0 cursor-pointer hover:scale[1.1] top-0 size-8 " />
                    {/* image  */}
                    <img src={image} alt="image" className="object-cover w-full rounded-lg h-[55%]" />
                    {/* heading  */}
                    <h1 className='text-xl font-bold text-center'>heading</h1>
                    {/* description  */}
                    <p>My portfolio highlights a collection of projects developed using React.js and Tailwind CSS, demonstrating my expertise in front-end development. It showcases my ability to create modern, responsive web applications.</p>
                    {/* button  */}
                    <div className='flex gap-2'>
                        <button
                            className="inline-flex px-10 py-3 animate-shimmer items-center justify-center rounded-md  bg-[linear-gradient(110deg,#011222,45%,#669bbc,55%,#011222)] bg-[length:200%_100%]  font-medium text-white transition-colors hover:bg-[linear-gradient(110deg,#669bbc,45%,#011222,55%,#669bbc)] hover:scale-[1.05]"
                        >
                            Visit
                        </button>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopupLink
