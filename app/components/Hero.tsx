import Image from "next/image";
import {useState} from "react";
import withLoadAnimation from "../lib/with_load_animation";

export default function Hero() {
    const AnimatedImage = withLoadAnimation(Image)
    return <div className="flex flex-col lg:flex-row justify-around text-center">
        <h1 className="my-auto text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl ">
            <div className="block">
                <span>Dino Omanovic</span>
            </div>
            <div className="block text-purple-700 ">
                <span>tech consulting</span>
            </div>
        </h1>
        <div className={"h-56 w-56 md:h-96 md:w-96 relative mx-auto my-10 "}>
            <AnimatedImage src="/me.jpg" layout="fill" objectFit="cover" className={"rounded-full"}/>
        </div>


    </div>
}
