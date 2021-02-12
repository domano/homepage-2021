import {Transition} from "@headlessui/react";
import Image from "next/image";
import {useEffect, useState} from "react";


export default function Hero() {

    return  <div className="flex flex-col lg:flex-row justify-around text-center">
        <h1 className="my-auto text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <Transition
                    show
                    // @ts-ignore
                    appear="true"
                    enter="transition duration-500 transform"
                    enterFrom="opacity-0 translate-x-72"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="block">
                    <span>Dino Omanovic</span>
                </Transition>
                <Transition
                    show
                    // @ts-ignore
                    appear="true"
                    enter="transition duration-1000 delay-500 transform"
                    enterFrom="opacity-0 translate-x-72"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                    className="block text-purple-700 ">
                    <span>tech consulting</span>
                </Transition>
            </h1>
            <div className="h-56 w-56 md:h-96 md:w-96  relative mx-auto my-10">
            <Image src="/me.jpg" layout="fill" priority objectFit="cover" className="rounded-full "/>
            </div>


        </div>
}
