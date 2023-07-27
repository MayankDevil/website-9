import React from 'react'
import { Link } from 'react-router-dom'
import { BsDownload, BsFolder2Open } from 'react-icons/bs';

function Button({ icon, title }) {
    return <div className="flex gap-2 items-center rounded border px-4 py-2 border-black hover:bg-blue-400 hover:border-none hover:text-white">
        <span>{icon}</span>
        <button>{title}</button>
    </div>
}

export default function Home() {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <div className="border-x border-slate-800 px-6">
                <div className="flex flex-col text-center justify-center items-center w-full">
                    <div className="flex flex-col mb-3">
                        <h1 className="text-2xl">Hello,</h1>
                        <h1 className="text-6xl my-4">I am Kartik.</h1>
                    </div>
                    <p className="text-neutral-500 text-lg md:w-2/3">I am a frontend web developer based in Chandigarh, India.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, culpa maxime provident laboriosam asperiores debitis aliquid modi harum esse magnam temporibus obcaecati suscipit iure officiis fugiat labore blanditiis itaque aperiam.
                    </p>
                </div>


                <div className="flex w-full justify-center items-center gap-x-5 my-16">
                    <Button icon={<BsDownload />} title={"Download Resume"} />
                    <Button icon={<BsFolder2Open />} title={"View Projects"} />
                </div>
            </div>
        </section>
    )
}
