import Hero from "../components/Hero"
import Skills from "../components/Skills";
import Feature from "../components/Feature";
import Talks from "../components/Talks";
import Contact from "../components/Contact";
import Head from "next/head";

export default function Home() {
    return (
            <div className=" bg-gray-50 overflow-hidden">
                <Head>
                    <title>Dino Omanovic - tech consulting</title>
                    <meta property="og:title" content="Dino Omanovic - tech consulting" key="title" />
                    <meta name="description" content="Dino Omanovic, tech consulting. Idee. Experiment. Software." key="description" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
            <Contact/>
            <BackgroundPattern/>

            <div className="relative pt-6 pb-16 sm:pb-24">
                <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
                    <Hero/>
                    <Feature/>
                    <Skills/>
                    <Talks/>
                </main>
            </div>
            <p className="text-gray-600 text-center">Impressum: Dino Omanovic, Röckumstr. 98, 53121 Bonn</p>
        </div>
    )
}

function BackgroundPattern() {
    return <div className=" overflow-hidden block absolute inset-y-0 h-full w-full"
                aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">

            <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
                 width="404" height="784" fill="none" viewBox="0 0 404 784">
                <defs>
                    <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20"
                             patternUnits="userSpaceOnUse"
                             patternTransform="rotate(12)">
                        <circle fill="#aaa" cx="1" cy="1" r="2" className="text-gray-100"/>

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
                        <circle fill="#aaa" cx="1" cy="1" r="2" className="text-gray-100"/>
                    </pattern>
                </defs>
                <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"/>
            </svg>
        </div>
    </div>;
}
