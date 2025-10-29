import Image from "next/image";
import { RiUser3Line } from "react-icons/ri";
import pp from "../../public/pp.png";
import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaAppStore, FaXTwitter } from "react-icons/fa6";

const page = () => {
    return (
        <div >
            <h2 className="flex items-center text-4xl font-bold gap-2"><RiUser3Line className="text-[#a6e3a1]" />About Me</h2>
            <div className="flex flex-col  md:flex-row gap-5 my-7">
                <div className="md:w-1/3">
                    <Image
                        src={pp}
                        alt="Picture of the author"
                        width={900}
                        height={900}
                        className="rounded-xl  transition-transform duration-300 hover:scale-105 w-full md:w-[500px] lg:w-[700px]"
                    />
                </div>
                <div className="md:w-2/3">
                    <p className="text-xl">
                        I am a final-year BSc Computer Science student with a passion for mobile app development. I started my journey learning Dart and Flutter, building several exciting applications along the way.
                        <br /> <br />
                        Recently, I have been diving into Swift, and I find iOS development increasingly fascinating. I love coding, creating apps, and solving problems through programming. From the beginning, I have been drawn to building intuitive mobile experiences, sometimes integrating Laravel as a backend for my applications.
                        <br /> <br />
                        I am continuously learning, exploring new technologies, and improving my skills to create impactful apps.
                    </p>
                    <div className="my-7 flex items-center gap-6">
                        <a className="hover:text-[#a6e3a1]" href="https://github.com/hafizflow"><span className="flex items-center gap-2"><TbBrandGithub className="text-lg" />Github</span></a>
                        <span className="text-xs text-gray-600">*</span>
                        <a className="hover:text-[#a6e3a1]" href="https://www.linkedin.com/in/hafizflow/"><span className="flex items-center gap-2"><TbBrandLinkedin className="text-lg" />LinkedIn</span></a>
                        <span className="text-xs text-gray-600">*</span>
                        <a className="hover:text-[#a6e3a1]" href="https://x.com/hafizflow"><span className="flex items-center gap-2"><FaXTwitter className="text-lg" /></span></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;