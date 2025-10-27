import { MdOutlineFolderCopy } from "react-icons/md";
import { GoTag } from "react-icons/go";

const page = () => {

    const projects = [
        {
            id: 1,
            code: 13400,
            name: "DeepVision AI",
            version: "mara 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 137,
            title: "Prohgfjsk khgf",
            details:
                "Developed using Random Forest and XGBoost, trained on UCI dataset with 85% precision.",
            tags: ["react", "tailwind", "nextjs", "mongodb"],
        },
        {
            id: 2,
            code: 10291,
            name: "DeepVision AI",
            version: "mara 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 52,
            title: "Deepfake Detection Model",
            details:
                "Developed using Random Forest and XGBoost, trained on UCI dataset with 85% precision.",
             tags: ["react", "tailwind", "nextjs", "mongodb"],
        },
        {
            id: 3,
            code: 98324,
            name: "DeepVision AI",
            version: "mara 1",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quaerat sapiente numquam laborum praesentium nostrum delectus, nam mollitia sunt neque?",
            contributors: 88,
            title: "Heart Disease Prediction",
            details:
                "Developed using Random Forest and XGBoost, trained on UCI dataset with 85% precision.",
             tags: ["react", "tailwind", "nextjs", "mongodb"],
        },
    ];

    return (
        <div className="">
            <h2 className="flex items-center text-4xl font-bold gap-2 my-5"><MdOutlineFolderCopy className="text-[#a6e3a1]" />Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="group border border-gray-700 hover:border-[#a6e3a1] rounded-2xl w-full cursor-pointer"
                    >
                        {/* Top box */}
                        <div className="bg-[#a9b4c0] p-7 rounded-t-2xl">
                            <div className="bg-[#282a37] transition-transform duration-300 group-hover:scale-105 space-y-5 rounded-xl p-3 shadow-2xl">
                                <div className="flex justify-between items-center">
                                    <div className="flex gap-1">
                                        <div className="bg-red-600 w-3 h-3 rounded-full"></div>
                                        <div className="bg-yellow-600 w-3 h-3 rounded-full"></div>
                                        <div className="bg-green-600 w-3 h-3 rounded-full"></div>
                                    </div>
                                    <div>{project.code}</div>
                                </div>

                                <div className="text-xl">
                                    {project.name} / <span>{project.version}</span>
                                </div>
                                <div>{project.description}</div>
                                <div className="flex justify-end">
                                    <p>{project.contributors} Contributors</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom box */}
                        <div className="space-y-3 p-5">
                            <h2 className="text-xl font-semibold group-hover:text-[#a6e3a1] transition-colors duration-300">
                                {project.title}
                            </h2>
                            <p>{project.details}</p>
                            <div className="flex items-center gap-2">

                                <div className="flex items-center gap-1 flex-wrap">
                                     <GoTag className="text-lg mr-1 font-semibold"/>
                                    {project.tags.map((tag, index) => (
                                        <p
                                            key={index}
                                            className="text-xs bg-[#313244] px-2 py-1 font-semibold rounded-md text-blue-200"
                                        >
                                            {tag}
                                        </p>
                                    ))}
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