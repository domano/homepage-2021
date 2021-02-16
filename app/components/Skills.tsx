import Image from "next/image";
import withLoadAnimation from "../lib/with_load_animation";
import {useEffect, useState} from "react";
import {randomInt} from "crypto";

function SkillItem(prop: { title: string, subtitle: string, imgPath: string, link:string }) {
    const AnimatedImage = withLoadAnimation(Image)
    return <li>
        <a href={prop.link} className="flex items-center space-x-4 lg:space-x-6
        transition duration-300 ease-in-out transform hover:scale-110">
            <div className="w-16 h-16  lg:w-20 lg:h-20 relative">
                <AnimatedImage layout={"fill"} objectFit="contain"
                       src={prop.imgPath} alt=""/>
            </div>
            <div className="font-medium text-lg leading-6 space-y-1">
                <h3>{prop.title}</h3>
                <p className="text-purple-600">{prop.subtitle}</p>
            </div>
        </a>
    </li>;
}

function SkillBadge(props: { title: string, accent: boolean }) {
    const animationClasses = "inline-flex items-center px-2.5 py-0.5 text-2xl font-mono text-gray-300 transition duration-500 ease-in-out transform scale-110 bg-purple-600 rounded-full"
    const classes = "inline-flex items-center px-2.5 py-0.5 text-2xl font-mono text-gray-800"
    return <span
        className={props.accent?animationClasses:classes}>
  {props.title}
</span>
        ;
}

function SkillCloud() {
    const [currentHightlight, setCurrentHighlight] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlight(() => randomNumber(0, secondarySkills.length))
        },1500)
        return () => clearInterval(interval)
    },[])
    return <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-purple-700">übersicht</h2>
                <p className="text-xl text-gray-500">Über die Jahre habe ich in verschiedensten Projekten gearbeitet und
                    viele Technologien schätzen gelernt.</p>
            </div>
            <div className="lg:col-span-2 flex flex-wrap justify-evenly space-x-0.5">
                {secondarySkills.map((skill,i) => <SkillBadge key={skill.title} title={skill.title}
                                                       accent={currentHightlight === i}/>)}
            </div>
        </div>
    </div>;
}

function MainSkills() {
    return <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
            <div className="space-y-5 sm:space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-purple-700">technologie<span
                    className="animate-flicker">_</span></h2>
                <p className="text-xl text-gray-500">Ich lerne gerne neues, aber habe trotzdem ein paar Technologien
                    die mir besonders viel Spaß machen.</p>
            </div>
            <div className="lg:col-span-2">
                <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                    <SkillItem link="https://golang.org/" title={"Go / Golang"} subtitle={"Programmiersprache"} imgPath={"/tech/go.png"}/>
                    <SkillItem link="https://developer.mozilla.org/en-US/docs/Web/JavaScript" title={"Javascript"} subtitle={"Programmiersprache"} imgPath={"/tech/js.png"}/>
                    <SkillItem link="https://kubernetes.io/" title={"Kubernetes"} subtitle={"Technologie"} imgPath={"/tech/k8s.png"}/>
                    <SkillItem link="https://reactjs.org/" title={"React"} subtitle={"Framework"} imgPath={"/tech/react.png"}/>
                    <SkillItem link="https://kafka.apache.org/" title={"Kafka"} subtitle={"Technologie"} imgPath={"/tech/kafka.png"}/>
                    <SkillItem link="https://cloud.google.com/" title={"Google Cloud Platform"} subtitle={"Plattform"} imgPath={"/tech/gcp.png"}/>
                </ul>
            </div>
        </div>
    </div>;
}

export default function Skills() {

    return <div className="bg-white">
        <MainSkills/>
        <SkillCloud/>
    </div>
}

const secondarySkills = [
    {title: "Go", accent: true},
    {title: "Javascript", accent: true},
    {title: "Java", accent: false},
    {title: "Spring", accent: false},
    {title: "Postgres", accent: true},
    {title: "Elasticsearch", accent: false},
    {title: "Bash", accent: false},
    {title: "Kafka", accent: true},
    {title: "Flutter", accent: false},
    {title: "Dart", accent: false},
    {title: "Typescript", accent: true},
    {title: "Robot Framework", accent: false},
    {title: "GCP", accent: true},
    {title: "AWS", accent: true},
    {title: "Docker", accent: true},
    {title: "Spock", accent: true},
    {title: "Groovy", accent: true},
    {title: "k3s", accent: false},
    {title: "Kubernetes", accent: true},
    {title: "Load Testing", accent: true},
    {title: "Firebase", accent: true},
    {title: "kSQL", accent: false},
    {title: "Websockets", accent: false},
    {title: "gRPC", accent: false},
    {title: "REST", accent: false},
    {title: "Microservices", accent: false},
]

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}