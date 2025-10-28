import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <footer className="bg-[#11111b] my-8 rounded-lg py-4 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
                {/* Left Section */}
                <div className="flex flex-col md:flex-row text-md items-center gap-6">
                    <span className="text-gray-400">© 2025 Hafizur Rahman</span>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-400">All Services Nominal</span>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-6">
                    {/* Social Icons */}
                    <div className="flex items-center gap-3">
                        <a href="https://github.com/hafizflow" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <TbBrandGithub className="text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/hafizflow/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <TbBrandLinkedin className="text-xl" />
                        </a>
                        <a href="https://www.facebook.com/hafizur.rahman.68430" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                            <FaXTwitter className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;