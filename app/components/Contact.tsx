// @ts-ignore
import GithubSVG from "../public/social/github.svg"
// @ts-ignore
import XingSVG from "../public/social/xing.svg"
// @ts-ignore
import LinkedInSVG from "../public/social/linkedin.svg"

export default function Contact() {
    return <div className="z-50 fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-start sm:justify-end">
        <div className="max-w-xs w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="pt-3 pb-3">
                <div className="flex flex-shrink h-8 justify-evenly ">
                <p className="text-2xl font-extrabold tracking-tight sm:text-4xl text-purple-700">kontakt</p>
                    <a href="https://github.com/domano" ><GithubSVG  className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/></a>
                    <a href="https://www.xing.com/profile/Dino_Omanovic2/" ><XingSVG className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/></a>
                    <a href="https://www.linkedin.com/in/dino-omanovic/" ><LinkedInSVG className="transition w-9 duration-200 ease-in-out transform hover:-translate-y-1 hover:scale-110 "/></a>
                </div>
            </div>
        </div>
    </div>
}