"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
    return (
        <section
            id="about"
            className="flex flex-col md:flex-row relative items-center justify-center min-h-screen w-full h-full"
        >
            <div className="md:absolute w-auto h-auto md:top-[80px] z-[5]">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromTop}
                            className="text-[40px] pt-[5rem] pb-3 md:p-0 font-medium text-center text-gray-200 z-50"
                        >
                            About
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                                {" "}
                                Me{" "}
                            </span>
                        </motion.div>
                    )}
                </InView>
            </div>

            <div className="flex flex-col items-center justify-start relative md:mt-[90px] lg:mt-12 z-[20] w-auto h-auto">
                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromLeft(0.5)}
                            className="flex flex-col items-center w-auto h-auto rounded-full overflow-hidden border-[6px] border-[#7042f88b] bg-gradient-to-r from-purple-500 to-cyan-500"
                        >
                            <img src="https://avatars.githubusercontent.com/u/184687226?s=400&u=32744173182db4c56f2da7d6f3cab3051bbf21f4&v=4" alt="profile" width={300} />
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromRight(0.5)}
                            className="Welcome-box px-[15px] py-[8px] z-[20] border my-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <h1 className="Welcome-text text-[20px] font-bold">
                                Saif Ahmed
                            </h1>
                        </motion.div>
                    )}
                </InView>

                <InView triggerOnce={false}>
                    {({ inView, ref }) => (
                        <motion.div
                            ref={ref}
                            initial="hidden"
                            animate={inView ? "visible" : "hidden"}
                            variants={slideInFromBottom}
                            className="Welcome-box px-[15px] w-[95%] md:w-3/4 py-[15px] z-[20] border mb-[20px] border-[#7042f88b] opacity-[0.9]"
                        >
                            <div className="Welcome-text text-[16px] w-full text-justify flex flex-col gap-4">
                                <p>
                                    As a passionate Information Systems student and Full Stack Developer, I bridge the gap between technology and business needs. My expertise centers around the **.NET Ecosystem (ASP.NET Core, C#)**, alongside strong frontend skills in React, Next.js, and TypeScript.
                                </p>

                                <div className="mt-2">
                                    <h3 className="font-bold text-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-2">Experience & Leadership</h3>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li><span className="font-semibold text-white">.NET Team Leader</span> — Digital Egypt Pioneers</li>
                                        <li><span className="font-semibold text-white">Frontend Developer Intern</span> — Elevo Pathway & Haya Karima Initiative</li>
                                        <li><span className="font-semibold text-white">Database Designer Intern</span> — mylerz.co</li>
                                        <li><span className="font-semibold text-white">Public Relations & AI Head</span> — FDAI</li>
                                        <li><span className="font-semibold text-white">Programming Head</span> — Student Activities</li>
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </InView>
            </div>
            <div className="absolute z-[20] bottom-[-4rem] md:bottom-[10px] px-[5px]">
                <div className="cursive text-[20px] font-medium text-center text-gray-300">
                    Shaping Tomorrow with Code and Creativity
                </div>
            </div>

            <div className="w-full hidden md:flex items-start justify-center absolute top-[1px]">
                <video
                    loop
                    muted
                    autoPlay
                    playsInline
                    preload="none"
                    className="h-full"
                    src="/encryption.webm"
                />
            </div>
        </section>
    );
};

export default About;