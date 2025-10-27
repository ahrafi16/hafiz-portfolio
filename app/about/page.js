import Image from "next/image";
import { RiUser3Line } from "react-icons/ri";
import pp from "../../public/pp.png";
import { FaGithub } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const page = () => {
    return (
        <div >
            <h2 className="flex items-center text-4xl font-bold gap-2"><RiUser3Line className="text-[#a6e3a1]" />About Me</h2>
            <div className="flex flex-col md:flex-row gap-5 my-7">
                <Image
                    src={pp}
                    alt="Picture of the author"
                    width={900}
                    height={900}
                    className="rounded-xl transition-transform duration-300 hover:scale-105 w-full md:w-[500px] lg:w-[700px]"
                />
                <div className="">
                    <p>
                        Im Jason Cameron (@JasonLovesDoggo) — a student and programmer with 5+ YoE based out of Toronto, Canada. I like to make cool projects when im bored.

                        Some of my more notable projects are RedditVideoMakerBot 8265 where I reverse engineered TikToks TTS API and Anubis 13914, an anti AI scraper tool which is currently being used by organizations such as The Linux Foundation or the UN. Most of my work is centered around backend development or system administration. Some sites that I run include metropolis, mCTF, MCPT, foodle as well as a bunch of others.

                        Outside of software, I enjoy playing Ultimate frisbee, photography, organizing/participating at/mentoring hackathons and spending time with my dog, Bella (see below). I also have a passion for exploring the world in general! Feel free to book a chat if youd like to connect.
                    </p>
                    <div className="my-5 flex items-center gap-6">
                        <a className="hover:text-[#a6e3a1]" href=""><span className="flex items-center gap-2"><FaGithub className="text-lg" />Github</span></a>
                        <span className="text-xs text-gray-600">*</span>
                        <a className="hover:text-[#a6e3a1]" href=""><span className="flex items-center gap-2"><BsLinkedin className="text-lg" />LinkedIn</span></a>
                        <span className="text-xs text-gray-600">*</span>
                        <a className="hover:text-[#a6e3a1]" href=""><span className="flex items-center gap-2"><FaFacebook className="text-lg" />Facebook</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;