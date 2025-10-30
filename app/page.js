import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaAppStore, FaXTwitter } from "react-icons/fa6";
import { LuTag } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import p1 from "../public/project1.jpg";
import Link from "next/link";



export default function Home() {
  return (
    <main className="mt-20">
      <div className="max-w-3xl">
        <h2 className="text-4xl my-5 font-bold">Hey! I&#39;m <span className="text-[#a6e3a1]">Hafizur Rahman</span> </h2>
        <p className="text-xl leading-8">
          I&#39;m an iOS developer with a strong passion for creating intuitive and user-centered applications using Swift and SwiftUI. I enjoy transforming innovative ideas into real-world digital solutions that make a meaningful impact. Over time, I&#39;ve built several practical apps that solve everyday problems and are actively used by many users. My focus is on writing clean, maintainable code and delivering smooth, visually appealing user experiences that bring ideas to life.
        </p>
      </div>
      <div className="my-5 flex flex-col md:flex-row items-center gap-6">
        <div className="flex items-center gap-4 md:gap-6 ">
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

          <a className="hover:text-[#a6e3a1]" href="https://x.com/hafizflow" target="_blank">
            <span className="flex items-center gap-2"><FaXTwitter className="text-lg" />
            </span>
          </a>

          <span className="text-xs text-gray-600">|</span>
        </div>

        <Link className="hover:text-[#a6e3a1]" href="/about">
          <span className="flex items-center group gap-2">More about me <FaArrowRight className="transition-translate duration-100 group-hover:translate-x-1" />
          </span>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-20 mb-10">
        <h1 className="text-2xl md:text-4xl flex font-semibold  gap-2 items-center">
          <FaRegStar className="text-[#a6e3a1] text-2xl" />
          Featured Projects
        </h1>

        <Link className="text-[#a6e3a1] hidden md:block" href="/project">
          <span className="flex items-center group gap-2">View all <FaArrowRight className="transition-translate duration-100 group-hover:translate-x-1" />
          </span>
        </Link>

      </div>
      {/* featured projects */}
      <div className="flex flex-col md:flex-row gap-7">
        {/* project 1 */}
        <div className="group border  border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full cursor-pointer">
          <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl shadow-2xl">

              <Image
                src={p1}
                alt="Picture of the author"
                width={900}
                height={900}
                className="rounded-xl w-full md:w-[500px] lg:w-[700px]"
              />

            </div>
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl flex justify-between items-center font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">

              <span> DIU Routine</span>
              <span className="flex items-center gap-3">
                <a href="https://apps.apple.com/us/app/diu-routine/id6748752277" target="_blank" rel="noopener noreferrer">
                  <FaAppStore className="text-xl hover:text-[#a6e3a1]" />
                </a>
                <a href="https://github.com/hafizflow/DiuRoutine" target="_blank" rel="noopener noreferrer">
                  <TbBrandGithub className="text-xl hover:text-[#a6e3a1]" />
                </a>
              </span>

            </h2>
            <p>DIU Routine is a modern iOS app designed to help students and teachers of Daffodil International University easily access class routines and campus room information. It offers a clean UI, smooth performance, and real-time updates to make academic scheduling simple and efficient.</p>
            <div className="flex items-center mt-4 gap-2">
              <LuTag className="text-lg" />
              <div className="flex gap-3 md:gap-1 overflow-hidden whitespace-nowrap max-w-full">
                <p className="text-blue-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">Swift</p>
                <p className="text-green-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">SwiftUI</p>
                <p className="text-yellow-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">SwiftData</p>
                <p className="text-red-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">PDFkit</p>
                <p className="text-orange-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">Laravel</p>
              </div>
            </div>
          </div>
        </div>
        {/* projects 2 */}
        <div className="group border  border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full cursor-pointer">
          <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl shadow-2xl">

              {/* <Image
                src={p1}
                alt="Picture of the author"
                width={900}
                height={900}
                className="rounded-xl w-full md:w-[500px] lg:w-[700px]"
              /> */}
              <div className="p-31 flex justify-center items-center text-gray-500">
                Comming Soon...
              </div>
            </div>
          </div>
          <div className="space-y-3 p-5">
            <h2 className="text-xl flex justify-between items-center font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">
              <span>GradeX</span>
              <a href="https://github.com/hafizflow/GradeX" target="_blank" rel="noopener noreferrer">
                <TbBrandGithub className="text-xl hover:text-[#a6e3a1]" />
              </a>
            </h2>
            <p>GradeX is a powerful and intuitive iOS app built with Swift that helps students calculate and manage their CGPA with ease. The app allows users to input GPA and credits for each course, automatically computing the overall CGPA with accurate results.
            </p>
            <div className="flex items-center mt-4 gap-2">
              <LuTag className="text-lg" />
              <div className="flex gap-3 md:gap-1  overflow-hidden whitespace-nowrap max-w-full">
                <p className="text-blue-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">Swift</p>
                <p className="text-green-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">SwiftUI</p>
                <p className="text-yellow-200 text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">SwiftData</p>
                <p className="text-red-200 flex text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md">PDFkit</p>
              </div>
            </div>
          </div>
        </div>
        <Link className="text-[#a6e3a1] mx-auto block md:hidden" href="/project">
          <span className="flex items-center group gap-2">View all Projects<FaArrowRight className="transition-translate duration-100 group-hover:translate-x-1" />
          </span>
        </Link>

      </div>
    </main>
  );
}
