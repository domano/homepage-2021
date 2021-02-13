import Link from "next/link"
import Image from "next/image"
import Hero from "../components/Hero"
import {Transition} from "@headlessui/react"
import Skills from "../components/Skills";
import Feature from "../components/Feature";
import Roles from "../components/Roles";
import Talks from "../components/Talks";
import Contact from "../components/Contact";

type MenuProps = {
    links: NavLink[]
}

type NavLink = {
    route: string,
    name: string
}

export default function Home() {
    return (
        <div className=" bg-gray-50 overflow-hidden">
            <Contact/>
            <div className="hidden overflow-hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
                <div className="relative h-full max-w-7xl mx-auto">

                    <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                         width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse"
                                     patternTransform="rotate(12)">
                                <circle fill="#aaa" cx="1" cy="1" r="2"  className="text-gray-100" />

                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"/>
                    </svg>

                    <svg
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width="404" height="784" fill="none" viewBox="0 0 404 784">
                        <defs>
                            <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20"
                                     patternUnits="userSpaceOnUse"
                                     patternTransform="rotate(-12)">
                                <circle fill="#aaa" cx="1" cy="1" r="2"  className="text-gray-100" />
                            </pattern>
                        </defs>
                        <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
                    </svg>
                </div>
            </div>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <Hero/>
                    <Feature/>
                    <Skills/>
                    <Talks/>
                </main>
            </div>
        </div>
    )
}
