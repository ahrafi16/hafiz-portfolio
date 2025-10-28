import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";



export default function Home() {
  return (
    <main className="mt-20">
      <div className="max-w-3xl">
        <h2 className="text-4xl my-5 font-bold">Hey! I&#39;m <span className="text-[#a6e3a1]">Hafizur Rahman</span> </h2>
        <p className="text-xl leading-8">
          A student building and securing web infrastructure. I&#39;ve written software that is trusted by The United Nations, The Linux Foundation, Arch Linux, GNOME, Wine, FFmpeg and many others[1]. My code is used by millions of people worldwide.
          I focus on backend web development, scalable and distributed systems, DevOps, and cybersecurity, especially crafting defenses against automated threats. I enjoy leading initiatives and tackling complex technical challenges.
        </p>
      </div>
      <div className="my-5 flex items-center gap-6">
        <a className="hover:text-[#a6e3a1]" href="https://github.com/hafizflow" target="_blank">
          <span className="flex items-center gap-2">
            <TbBrandGithub className="text-lg" />
            Github
          </span>
        </a>

        <span className="text-xs text-gray-600">|</span>

        <a className="hover:text-[#a6e3a1]" href="https://www.linkedin.com/in/hafizflow/" target="_blank">
          <span className="flex items-center gap-2">
            <TbBrandLinkedin className="text-lg" />
            LinkedIn
          </span>
        </a>

        <span className="text-xs text-gray-600">|</span>

        <a className="hover:text-[#a6e3a1]" href="https://www.facebook.com/hafizur.rahman.68430" target="_blank">
          <span className="flex items-center gap-2"><FaXTwitter className="text-lg" />
          </span>
        </a>
      </div>

      <div className="flex justify-between items-center mt-20 mb-10">
        <h1 className="text-4xl flex  gap-2 items-center"><FaRegStar className="text-[#a6e3a1] text-2xl" />Featured Projects</h1>
        <p className="flex items-center gap-1 text-[#a6e3a1] cursor-pointer">view all <FaArrowRight /></p>
      </div>
      <div className="flex flex-col md:flex-row gap-7">
        <div className="group border  border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full cursor-pointer">
          <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl p-3 shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="bg-red-600 w-3 h-3 rounded-full"></div>
                  <div className="bg-yellow-600 w-3 h-3 rounded-full"></div>
                  <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                </div>
                <div>
                  13400
                </div>
              </div>
              <div className="text-xl">
                Tor project er name / <span>mara 1</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?
              </div>
              <div className="flex justify-end">
                <p>137 Contrbuters</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">Prohgfjsk khgf</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, odit reiciendis eligendi nihil soluta quis placeat dicta quasi odio!</p>
            <div className="flex items-center gap-2">
              <GoTag />
              <div className="flex gap-1">
                <p className="text-blue-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-green-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-yellow-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-red-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-orange-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
              </div>
            </div>
          </div>
        </div>
        <div className="group border  border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full cursor-pointer">
          <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl p-3 shadow-2xl">
              <div className="flex justify-between items-center">
                <div className="flex gap-1">
                  <div className="bg-red-600 w-3 h-3 rounded-full"></div>
                  <div className="bg-yellow-600 w-3 h-3 rounded-full"></div>
                  <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                </div>
                <div>
                  13400
                </div>
              </div>
              <div className="text-xl">
                Tor project er name / <span>mara 1</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?
              </div>
              <div className="flex justify-end">
                <p>137 Contrbuters</p>
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">Prohgfjsk khgf</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto vel, odit reiciendis eligendi nihil soluta quis placeat dicta quasi odio!</p>
            <div className="flex items-center gap-2">
              <GoTag />
              <div className="flex gap-1">
                <p className="text-blue-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-green-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-yellow-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-red-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
                <p className="text-orange-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">golang</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
