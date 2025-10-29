import { MdOutlineFolderCopy } from "react-icons/md";
import { LuTag } from "react-icons/lu";
import { FaAppStore } from "react-icons/fa";
import Image from "next/image";
import p1 from "../../public/project1.jpg";
import p3 from "../../public/project3.jpg";
import p4 from "../../public/project4.jpg";
import p5 from "../../public/project5.jpg";
import p6 from "../../public/project6.jpg";
import { TbBrandGithub } from "react-icons/tb";

const page = () => {

    const projects = [
        {
            id: 1,
            code: p1,
            name: "DIU Routine",
            version: "https://github.com/hafizflow/DiuRoutine",
            description:
                "DIU Routine is a modern iOS app designed to help students and teachers of Daffodil International University easily access class routines and campus room information. It offers a clean UI, smooth performance, and real-time updates to make academic scheduling simple and efficient.",
            contributors: "https://apps.apple.com/us/app/diu-routine/id6748752277",
            title: "DIU Routine",
            details:
                "DIU Routine is a modern iOS app designed to help students and teachers of Daffodil International University easily access class routines and campus room information. It offers a clean UI, smooth performance, and real-time updates to make academic scheduling simple and efficient.",
            tags: ["Swift", "SwiftUI", "Swift Data", "PDFKit"],
        },
        {
            id: 2,
            code: null,
            name: "GradeX ",
            version: "https://github.com/hafizflow/GradeX",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 52,
            title: "GradeX",
            details:
                "GradeX is a powerful and intuitive iOS app built with Swift that helps students calculate and manage their CGPA with ease. The app allows users to input GPA and credits for each course, automatically computing the overall CGPA with accurate results.",
            tags: ["Swift", "SwiftUI", "Swift Data", "PDFKit"],
        },
        {
            id: 3,
            code: p3,
            name: "Cover Crafter",
            version: "https://github.com/hafizflow/Cover-Crafter",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 88,
            title: "Cover Crafter",
            details:
                "Cover Crafter is a Flutter-based mobile application designed to help students effortlessly create beautiful and professional university assignment and lab report cover pages in seconds",
            tags: ["Flutter", "Dart", "GetX", "MVC"],
        },
        {
            id: 4,
            code: p4,
            name: "Cover Crafter",
            version: "https://github.com/hafizflow/DIU-Result.",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 88,
            title: "DIU Result",
            details:
                "The DIU Result App is a Flutter-based mobile application designed for Daffodil International University (DIU) students to easily access and view their academic results. The app provides a user-friendly interface and a seamless experience to check semester-wise results and overall CGPA.",
            tags: ["Flutter", "Dart", "GetX", "MVC", "API"],
        },
        {
            id: 5,
            code: p5,
            name: "We Chat",
            version: "https://github.com/hafizflow/We-Chat",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 88,
            title: "We Chat",
            details:
                "A real-time chat application built with Flutter and Firebase, offering push notifications, Google Sign-In, and editable user profiles with photos, last-seen, and about info. It supports message read status, deleting & editing messages, copying text, sharing multiple images, saving images to the gallery, member search, and comes with a clean, modern Material UI for a seamless chatting experience.",
            tags: ["Flutter", "Dart", "GetX", "Firebase"],
        },
        {
            id: 6,
            code: p6,
            name: "We Chat",
            version: "https://github.com/hafizflow/Infinity-Buy",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 88,
            title: "Infinity Buy",
            details:
                "A Flutter-based e-commerce app with a clean architecture and GetX for state management. Features include product browsing, search, filtering, and sorting with dynamic data from REST APIs. The app offers a modern, responsive UI, smooth navigation, optimized performance, and efficient API integration for a seamless shopping experience",
            tags: ["Flutter", "Dart", "GetX", "Firebase"],
        },
    ];

    return (
        <div className="">
            <h2 className="flex items-center  text-4xl font-semibold gap-2 my-7"><MdOutlineFolderCopy className="text-[#a6e3a1]" />Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group border border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full h-full flex flex-col cursor-pointer"
                    >

                        {/* Top box */}
                        <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
                            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl shadow-2xl">
                                {
                                    project.code != null ? <Image
                                        src={project.code}
                                        alt="Picture of the author"
                                        width={900}
                                        height={900}
                                        className="rounded-xl h-45 w-full md:w-[500px] lg:w-[700px]"
                                    /> : <div className="p-20">
                                        Comming Soon...
                                    </div>
                                }
                            </div>
                        </div>

                        {/* Bottom box */}
                        <div className="flex flex-col gap-3 flex-1 p-5">
                            <h2 className="text-xl flex justify-between items-center font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">
                                <span>{project.title}</span>
                                <span className="flex items-center gap-3">
                                    {
                                        project.id == 1 ? <a href={project.contributors} target="_blank" rel="noopener noreferrer">
                                            <FaAppStore className="text-xl hover:text-[#a6e3a1]" />
                                        </a> : null
                                    }
                                    <a href={project.version} target="_blank" rel="noopener noreferrer">
                                        <TbBrandGithub className="text-xl hover:text-[#a6e3a1]" />
                                    </a>
                                </span>
                            </h2>
                            <p className="grow">{project.details.length >= 90 ? project.details.slice(0, 90) + "..." : project.details}</p>

                            <div className="flex items-center gap-2">

                                <div className="flex items-center gap-1 mt-4 flex-wrap">
                                    <LuTag className="text-lg mr-1 font-semibold" />
                                    {project.tags.map((tag, index) => {
                                        const colorMap = {
                                            swift: "text-blue-200",
                                            swiftui: "text-yellow-200",
                                            mvc: "text-red-200",
                                            swiftdata: "text-green-200",
                                            pdfkit: "text-coral-200",
                                            flutter: "text-pink-200",
                                            dart: "text-teal-200",
                                            getx: "text-orange-200",
                                        };

                                        const color = colorMap[tag.toLowerCase()] || "text-blue-200";

                                        return (
                                            <p
                                                key={index}
                                                className={`text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md ${color}`}
                                            >
                                                {tag}
                                            </p>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default page;