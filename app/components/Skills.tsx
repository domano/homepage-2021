import Image from "next/image";

function SkillItem(prop: { title: string, subtitle: string, imgPath: string }) {
    return <li>
        <div className="flex items-center space-x-4 lg:space-x-6
        transition duration-300 ease-in-out transform hover:scale-110">
            <div className="w-16 h-16  lg:w-20 lg:h-20 relative">
                <Image layout={"fill"} objectFit="contain"
                       src={prop.imgPath} alt=""/>
            </div>
            <div className="font-medium text-lg leading-6 space-y-1">
                <h3>{prop.title}</h3>
                <p className="text-purple-600">{prop.subtitle}</p>
            </div>
        </div>
    </li>;
}

function SkillBadge(prop: { title: string, accent?: boolean }) {
    return <span
        className="inline-flex transition duration-300 ease-in-out transform hover:scale-110 items-center px-2.5 py-0.5 text-2xl font-mono hover:bg-purple-200 text-gray-800 hover:text-black">
  {prop.title}
</span>
        ;
}

export default function Skills() {
    return <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-purple-700">technologie_</h2>
                    <p className="text-xl text-gray-500">Ich lerne gerne neues, aber habe trotzdem ein paar Technologien
                        die mir besonders viel Spaß machen.</p>
                </div>
                <div className="lg:col-span-2">
                    <ul className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8">
                        <SkillItem title={"Go / Golang"} subtitle={"Programmiersprache"} imgPath={"/tech/go.png"}/>
                        <SkillItem title={"Javascript"} subtitle={"Programmiersprache"} imgPath={"/tech/js.png"}/>
                        <SkillItem title={"Kubernetes"} subtitle={"Technologie"} imgPath={"/tech/k8s.png"}/>
                        <SkillItem title={"React"} subtitle={"Framework"} imgPath={"/tech/react.png"}/>
                        <SkillItem title={"Kafka"} subtitle={"Technologie"} imgPath={"/tech/kafka.png"}/>
                        <SkillItem title={"Google Cloud Platform"} subtitle={"Plattform"} imgPath={"/tech/gcp.png"}/>
                    </ul>
                </div>
            </div>
        </div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="space-y-5 sm:space-y-4">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-purple-700">übersicht</h2>
                    <p className="text-xl text-gray-500">Über die Jahre habe ich in verschiedensten Projekten gearbeitet und viele Technologien zu schätzen gelernt.</p>
                </div>
                <div className="lg:col-span-2 flex flex-wrap justify-evenly space-x-0.5">
                    {secondarySkills.map(skill => <SkillBadge title={skill.title} accent={skill.accent}/>)}
                </div>
            </div>
        </div>
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
    {title: "Docker", accent: true},
    {title: "Google Cloud Platform", accent: true},
    {title: "Amazon Web Services", accent: true},
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