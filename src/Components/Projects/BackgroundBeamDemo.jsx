"use client";
import React from "react";
import { BackgroundBeams } from "../../Components/Ui/BackgroundBeams";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo.jsx";

export function BackgroundBeamsDemo() {
    return (
        <>

            <div className="w-full xl:h-[100vh] bg-black relative flex flex-col items-center justify-center antialiased">
                <div className=" mx-auto py-10 z-[99]">
                    <CardHoverEffectDemo />
                </div>
                <BackgroundBeams />
            </div>

        </>
    );
}
