import GithubSVG from "../public/social/github.svg"
import XingSVG from "../public/social/xing.svg"
import LinkedInSVG from "../public/social/linkedin.svg"

export default function Contact() {
    return <div className="z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        <div className="max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="pt-3 pb-3">
                <div className="flex flex-shrink h-8 justify-evenly ">
                <p className="text-2xl font-extrabold tracking-tight sm:text-4xl text-purple-700">kontakt</p>
                    <GithubSVG className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/>
                    <XingSVG className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/>
                    <LinkedInSVG className="transition duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/>
                </div>
            </div>
        </div>
    </div>
}