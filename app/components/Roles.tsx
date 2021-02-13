import {useEffect, useState} from "react";

// @ts-ignore
import RocketSVG from "../public/undraw/rocket.svg"
// @ts-ignore
import ArchitectSVG from "../public/undraw/architect.svg"
// @ts-ignore
import DeveloperSVG from "../public/undraw/developer.svg"
// @ts-ignore
import ProductOwnerSVG from "../public/undraw/product_owner.svg"

export default function Roles() {
    const [currentHightlight, setCurrentHighlight] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHighlight(currentHightlight => currentHightlight === roles.length - 1 ? 0 : currentHightlight + 1)
        },1500)
        return () => clearInterval(interval)
    },[])
    return <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
            <div className="bg-white h-1/3 sm:h-2/3"/>
        </div>
        <div className="relative max-w-7xl mx-auto">
            <div className="mt-12 max-w-lg mx-auto grid gap-5 md:grid-cols-2 lg:grid-cols-4 md:max-w-none">
                {roles.map((role, i) => {
                    return <div key={role.title} id={role.title} className={i===currentHightlight?"animate-grow":""}><RoleCard {...role} /></div>
                })}

            </div>
        </div>
    </div>

}


const roles: Role[] = [
    {
        title:"Consultant",
        content: "In frühen Phasen bei der Ideenfindung unterstützen und mit iterativen Prototypen für alle greifbar machen.",
        svg: <RocketSVG className="h-48 w-full object-cover"/>
    },
    {
        title:"Architekt",
        content: "Den Erfolg für neue Systeme ebnen und bestehende Systeme verbessern. Coaching für Teams und IT-Abteilungen.",
        svg: <ArchitectSVG className="h-48 w-full object-cover"/>
    },
    {
        title:"Developer",
        content: "Mit den besten Technologien Plattformen und Produkte bauen. Vom Frontend bis zum Betrieb.",
        svg: <DeveloperSVG className="h-48 w-full object-cover"/>
    },
    {
        title:"Product Owner",
        content: "Fachlichkeit und Technik verbinden. Die richtige Priorisierung und Vorgehensweise finden um mit hoher Geschwindigkeit vorranzukommen.",
        svg: <ProductOwnerSVG className="h-48 w-full object-cover"/>
    },
]
type Role = {
    title: string,
    content: string,
    svg: JSX.Element
}



function RoleCard(role:Role) {
    return <div className="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
        <div className="flex-shrink-0">
            {role.svg}
        </div>
        <div className="flex-1 bg-white p-6 flex flex-col justify-between">
            <div className="flex-1 block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                        {role.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                        {role.content}
                    </p>
            </div>
        </div>
    </div>;
}

