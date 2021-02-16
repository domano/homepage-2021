import Image from "next/image";
import withLoadAnimation from "../lib/with_load_animation";

export default function Contact() {
    const AnimatedImage = withLoadAnimation(Image)
    return <div className="z-50 fixed inset-0 flex  px-4 py-6 pointer-events-none sm:p-6 items-end sm:items-start justify-end">
        <div className="max-w-xs  bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="pt-3 pb-3 flex flex-col gap-5">
                <div className="flex flex-shrink ml-4 mr-4 ">
                <p className="text-2xl font-extrabold tracking-tight sm:text-4xl text-purple-600">kontakt</p>
                </div>
                    <div className="flex flex-shrink h-8 justify-evenly ">

                    <a href="https://github.com/domano" className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            <AnimatedImage src="/social/github.png" alt="github" layout="fill" objectFit="contain"/>
                    </a>
                    <a href="https://www.xing.com/profile/Dino_Omanovic2/" className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            <AnimatedImage src="/social/xing.png" alt="xing" layout="fill" objectFit="contain"/>
                    </a>
                    <a href="https://www.linkedin.com/in/dino-omanovic/" className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            <AnimatedImage src="/social/linkedin.png" alt="linkedin" layout="fill" objectFit="contain"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}