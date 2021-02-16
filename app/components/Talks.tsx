
import Image from "next/image";
import withLoadAnimation from "../lib/with_load_animation";

export default function Talks() {
    const AnimatedImage = withLoadAnimation(Image)
    return <section className="bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                talks
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Mir macht es Spaß, meine Erfahrungen zu teilen und darüber zu diskutieren.
            </p>
            <div className="mt-12 max-w-lg mx-auto grid  lg:grid-cols-2 gap-5 md:max-w-none">
                {talks.map((talk, i) => {
                    return <a href={talk.link} key={talk.title} id={talk.title} className=" p-6 transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                        <div className="shadow-2xl ">
                        <AnimatedImage alt={talk.title} className="rounded-xl " height={900} width={1600} layout="responsive" objectFit="cover" src={talk.img}/>
                        </div>
                    </a>
                })}

            </div>
    </div>
    </section>

}


const talks: Talk[] = [
    {
        title:"The state of Kafka and Go",
        img: "/talks/kafka_go.png",
        link: "https://www.youtube.com/watch?v=tcaPzIXwj8A"
    },
    {
        title:"Why go?",
        img: "/talks/why_go.png",
        link: "https://www.youtube.com/watch?v=BRdRm3wwvjs&t=1s"
    },
    {
        title:"Database bottleneck",
        img: "/talks/database_bottleneck.png",
        link: "https://www.youtube.com/watch?v=mGv79zsJ1K8"
    },
    {
        title:"Microservice quality",
        img: "/talks/microservices.png",
        link:"https://www.youtube.com/watch?v=jKbIDyxQmOU&t=1s"
    },
    {
        title:"Reactive Go",
        img: "/talks/reactive_go.png",
        link: "https://www.youtube.com/watch?v=DsQgf6rgS_s"
    },
    {
        title:"Serverless Go",
        img: "/talks/serverless_go.png",
        link:"https://www.youtube.com/watch?v=g-xWLYgeJ-M"
    },



]

type Talk = {
    title: string,
    link: string,
    img: string,
}