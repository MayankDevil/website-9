import React from 'react'
import { Link } from 'react-router-dom'


function Li({ link, title }) {
    return <Link to={link} className="hover:underline underline-offset-4">
        <li>{title}</li>
    </Link>
}


export default function Navbar() {
    return (
        <nav className="p-4 bg-white shadow shadow-gray-500">
            <div className="flex justify-between px-4 md:px-8 w-full">
                <ul className="flex gap-4 text-lg ">
                    <Li link={"/"} title={"Home"} />
                    <Li link={"#about"} title={"About"} />
                    <Li link={"#service"} title={"Services"} />
                    <Li link={"#contact"} title={"Contact"} />
                    {/* <Li link={"/projects"} title={"Home"} /> */}
                </ul>
                <div>
                    <Link to={"/resume"} className="rounded text-gray-900 px-4 bg-blue-400 hover:bg-blue-500 py-2">
                        <button>Resume</button>
                    </Link>
                </div>
            </div>
        </nav>
    )
}
