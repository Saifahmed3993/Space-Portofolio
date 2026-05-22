import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap gap-y-8">

                    {/* Social / Community */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-2">Connect</div>
                        <a
                            href="https://github.com/Saifahmed3993"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors duration-200"
                        >
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/saif-aldin-ahmed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[10px] cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                        >
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                    </div>

                    {/* Quick Links */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-2">Quick Links</div>
                        {["#about", "#skills", "#projects"].map((href) => (
                            <a
                                key={href}
                                href={href}
                                className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors duration-200"
                            >
                                <span className="text-[15px]">
                                    {href.replace("#", "").charAt(0).toUpperCase() +
                                        href.replace("#", "").slice(1)}
                                </span>
                            </a>
                        ))}
                    </div>

                    {/* Contact Info */}
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] mb-2">Contact</div>
                        <a
                            href="mailto:saifahmedelbattawy@gmail.com"
                            className="flex flex-row items-center my-[10px] cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                        >
                            <MdEmail className="text-lg" />
                            <span className="text-[14px] ml-[6px]">saifahmedelbattawy@gmail.com</span>
                        </a>
                        <a
                            href="tel:+201012034328"
                            className="flex flex-row items-center my-[10px] cursor-pointer hover:text-cyan-400 transition-colors duration-200"
                        >
                            <MdPhone className="text-lg" />
                            <span className="text-[15px] ml-[6px]">+20 101 203 4328</span>
                        </a>
                        <a
                            href="https://drive.google.com/drive/u/0/folders/1l6GBbilXVSqoC01gUTZwfEjY-__HmLUo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-row items-center my-[10px] cursor-pointer hover:text-purple-400 transition-colors duration-200"
                        >
                            <span className="text-[14px] ml-[6px]">📄 Download Resume</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] mt-6 text-[15px] text-center text-gray-400">
                    © 2025 Saif Aldin Ahmed · ❤️
                </div>
            </div>
        </div>
    );
};

export default Footer;