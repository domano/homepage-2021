
// @ts-ignore
import KafkaTalkSVG from "../public/talks/kafka_go.svg"
// @ts-ignore
import DatabaseSVG from "../public/talks/database_bottleneck.svg"
// @ts-ignore
import MicroservicesSVG from "../public/talks/microservices.svg"
// @ts-ignore
import ReactiveGoSVG from "../public/talks/reactive_go.svg"
// @ts-ignore
import WhyGoSVG from "../public/talks/why_go.svg"
// @ts-ignore
import ServerlessGoSVG from "../public/talks/serverless_go.svg"

export default function Talks() {

    return <div className="bg-purple-600">
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
                talks
            </h2>
            <p className="mt-4 max-w-3xl text-lg text-purple-200">
                Mir macht es Spaß meine Erfahrungen zu teilen und darüber zu diskutieren.
            </p>
            <div className="mt-12 max-w-lg mx-auto grid  lg:grid-cols-2  md:max-w-none">
                {talks.map((talk, i) => {
                    return <a href={talk.link} key={talk.title} id={talk.title} className="w-full p-6 object-cover transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "> {talk.svg}</a>
                })}

            </div>
    </div>
    </div>

}


const talks: Talk[] = [
    {
        title:"The state of Kafka and Go",
        svg: <KafkaTalkSVG className="rounded-xl shadow-2xl "/>,
        link: "https://www.youtube.com/watch?v=tcaPzIXwj8A"
    },
    {
        title:"Why go?",
        svg: <WhyGoSVG className="rounded-xl shadow-2xl "/>,
        link: "https://www.youtube.com/watch?v=BRdRm3wwvjs&t=1s"
    },
    {
        title:"Database bottleneck",
        svg: <DatabaseSVG className="rounded-xl shadow-2xl "/>,
        link: "https://www.youtube.com/watch?v=mGv79zsJ1K8"
    },
    {
        title:"Microservice quality",
        svg: <MicroservicesSVG className="rounded-xl shadow-2xl "/>,
        link:"https://www.youtube.com/watch?v=jKbIDyxQmOU&t=1s"
    },
    {
        title:"Reactive Go",
        svg: <ReactiveGoSVG className="rounded-xl shadow-2xl "/>,
        link: "https://www.youtube.com/watch?v=DsQgf6rgS_s"
    },
    {
        title:"Serverless Go",
        svg: <ServerlessGoSVG className="rounded-xl shadow-2xl "/>,
        link:"https://www.youtube.com/watch?v=g-xWLYgeJ-M"
    },



]

type Talk = {
    title: string,
    svg: JSX.Element,
    link: string,
}