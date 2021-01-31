import {Transition} from "@headlessui/react";
import Image from "next/image";


export default function Hero() {
    return <Transition
        show={true}
    >
        <div className="flex flex-col lg:flex-row justify-around text-center">
            <h1 className="my-auto text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <Transition.Child
                    appear={true}
                    enter="transition duration-500 transform"
                    enterFrom="opacity-0 translate-x-72"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <span className="block">Dino Omanovic</span>
                </Transition.Child>
                <Transition.Child
                    appear={true}
                    enter="transition duration-1000 delay-500 transform"
                    enterFrom="opacity-0 translate-x-72"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <span className="block text-purple-700 ">tech consulting</span>
                </Transition.Child>
            </h1>
            <Transition.Child
                appear={true}
                enter="transition duration-1000 transform"
                enterFrom="opacity-0 rotate-180 translate-x-72"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <div className="h-96 w-96 relative mx-auto my-10">
                    <Image src="/me.jpg" layout="fill" objectFit="cover" className="rounded-full"/>
                </div>
            </Transition.Child>
        </div>
    </Transition>
}
