import Roles from "./Roles";

function GrowthIcon() {
    return <svg className="h-6 w-6 animate-wiggle" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
    </svg>;
}

function BuildIcon() {
    return <svg className="h-6 w-6 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
    </svg>;
}

function PrototypeIcon() {
    return <svg className="h-6 w-6 animate-bounce" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
    </svg>;
}

function ConceptIcon() {
    return <svg className="h-6 w-6 animate-swell" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>;
}

function FeatureItem(item: Item) {
    return <div className="flex">
        <div className="flex-shrink-0">
            <div
                className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600  text-white">
                {item.icon}
            </div>
        </div>
        <div className="ml-4">
            <dt className="text-lg leading-6 font-medium text-gray-900">
                {item.title}
            </dt>
            <dd className="mt-2 text-base text-gray-500">
                {item.text}
            </dd>
        </div>
    </div>
}

type Item = {
    title: string,
    text: string,
    icon: JSX.Element,
}


const items: Item[] = [
    {
        title: "Konzeption",
        text: "Durch meine Architektur-, Technologie- und Organisationserfahrung kann ich frühzeitig Fehler erkennen und Aufwände verhindern, indem ich helfe das richtige Vorgehen und die richtige Architektur zu wählen.",
        icon: ConceptIcon(),
    }, {
        title: "Prototyping",
        text: "Durch frühe Verprobung können Risiken und Kostenfallen aufgedeckt werden. Mit Pragmatismus kann ich frühzeitig anfassbare Ergebnisse liefern, anstatt über theoretische Anforderungen zu diskutieren.",
        icon: PrototypeIcon(),
    }, {
        title: "Handwerk",
        text: "Damit aus einem Experiment ein erfolgreiches Produkt wird, ist harte Arbeit notwendig. Mit einem hohen Anspruch nutze ich die besten Werkzeuge um zuverlässige Software zu bauen - auch in Randfällen und Lastsituationen.",
        icon: BuildIcon(),
    }, {
        title: "Wachstum",
        text: "Um erfolgreiche Ideen nicht im Wachstum auszubremsen, muss Skalierung von Technik und Methodik sichergestellt werden. In mehreren großen Projekten habe ich erfahren, was notwendig ist, um auch langfristig erfolgreich zu sein.",
        icon: GrowthIcon(),
    },
]

function FeatureHeader() {
    return <div className="lg:text-center">
        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Idee. Experiment. Software.
        </p>
        <div className="flex flex-col lg:flex-row">
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Ob es um Technologie, Zusammenarbeit oder Methoden geht - ich bin überzeugt davon, dass
                Kreativität, Selbstreflektion und ein hoher Qualitätsanspruch notwendig sind um zuverlässig
                Erfolge zu erzielen.
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Mit den verschiedenen Projekt-, Rollen- und Technologieerfahrungen die ich gemacht habe, kann ich mich
                auf jede Situation einstellen.
            </p>
        </div>
    </div>;
}

function FeatureItems() {
    return <div className="mt-10">
        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {items.map(item => <FeatureItem key={item.title} {...item}/>)}
        </dl>
    </div>;
}

export default function Feature() {
    return <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureHeader/>
            <Roles/>
            <FeatureItems/>
        </div>
    </div>

}