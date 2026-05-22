import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
                My Projects
            </h1>
            <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
                {/* ── Full-Stack Projects ── */}
                <ProjectCard
                    src="/mockups/pharma.png"
                    title="MUST Pharma – Fullstack"
                    description="Comprehensive Pharmacy Management System built with ASP.NET Core Web API, React (Vite), and SQL Server. Features Inventory Management, Order Tracking, and Role-based Access Control."
                    link="https://github.com/Saifahmed3993/must-pharma-fullstack"
                    badge="Full-Stack"
                    badgeColor="from-emerald-500 to-teal-500"
                />
                <ProjectCard
                    src="/mockups/clothes_store.png"
                    title="Clothes Store – E-Commerce"
                    description="Full-featured e-commerce clothing store built with ASP.NET Core and C#, featuring product catalog, cart management, and order processing."
                    link="https://github.com/Saifahmed3993/Clouthes-Store-by-Saif"
                    badge="Full-Stack"
                    badgeColor="from-emerald-500 to-teal-500"
                />
                <ProjectCard
                    src="/mockups/sa_school.png"
                    title="SA School LMS"
                    description="Full-stack responsive LMS with admin, teacher, and student dashboards, bilingual support, course management, and attendance tracking."
                    link="https://github.com/Saifahmed3993/SA-School"
                    badge="Full-Stack"
                    badgeColor="from-emerald-500 to-teal-500"
                />

                {/* ── Backend / .NET Projects ── */}
                <ProjectCard
                    src="/mockups/stock_trading.png"
                    title="Stock Trading Portfolio Management"
                    description="Advanced C#/.NET system for managing stock trading portfolios with real-time tracking, financial analysis, and precise reporting."
                    link="https://github.com/Saifahmed3993/Stock-Trading-Portfolio-Management-System"
                    badge=".NET / C#"
                    badgeColor="from-purple-500 to-violet-500"
                />
                <ProjectCard
                    src="/mockups/product_manager.png"
                    title="Product Manager"
                    description="A robust inventory and product management application built with C# and .NET, featuring structured database integration and responsive UI."
                    link="https://github.com/Saifahmed3993/Product-Manager"
                    badge=".NET / C#"
                    badgeColor="from-purple-500 to-violet-500"
                />
                <ProjectCard
                    src="/mockups/smartdate.png"
                    title="SmartDate"
                    description="C# architecture project implementing an immutable Date value object using clean code principles, leap year logic, and tight validation."
                    link="https://github.com/Saifahmed3993/SmartDate"
                    badge=".NET / C#"
                    badgeColor="from-purple-500 to-violet-500"
                />

                {/* ── C++ / Systems Projects ── */}
                <ProjectCard
                    src="/mockups/bank_management.png"
                    title="Bank / Library Management System"
                    description="Comprehensive C++ OOP application for operations, featuring account handling, reporting, and secure authentication."
                    link="https://github.com/Saifahmed3993/LibraryManagmentSystem"
                    badge="C++ / OOP"
                    badgeColor="from-blue-500 to-cyan-500"
                />
                <ProjectCard
                    src="/mockups/employee_management.png"
                    title="Employee & Client Management"
                    description="Desktop software system built in C++ managing employee scheduling, client records, and CRM-style data handling."
                    link="https://github.com/Saifahmed3993/Softwarecompany3993"
                    badge="C++ / OOP"
                    badgeColor="from-blue-500 to-cyan-500"
                />

                {/* ── Frontend / Web Projects ── */}
                <ProjectCard
                    src="/mockups/3d_sphere.png"
                    title="3D SPHERE – Company Website"
                    description="Interactive company website for a software business with full 3D modern UI/UX design, smooth animations, and responsive service showcase."
                    link="https://github.com/Saifahmed3993/Landing-Page"
                    badge="Frontend"
                    badgeColor="from-orange-500 to-amber-500"
                />
            </div>

            {/* ════════════════════════════════════════
                Learning & Open-Source Resources Section
                ════════════════════════════════════════ */}
            <div className="w-full mt-24 px-10">
                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-[32px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                        Learning Resources & Open-Source
                    </h2>
                    <p className="text-gray-400 text-sm mt-2 text-center max-w-xl">
                        Public repositories I created to share knowledge and document my
                        learning journey with the community.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* LINQ Full Guide Demo */}
                    <a
                        href="https://github.com/Saifahmed3993/LINQ-Full-Guide-Demo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-2xl border border-[#7042f88b] bg-[#03001450] backdrop-blur-md p-8 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] cursor-pointer"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                λ
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-500 transition-all duration-300">
                                    LINQ Full Guide Demo
                                </h3>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300">
                                    C# · Educational
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            A comprehensive demo covering <strong className="text-white">LINQ (Language Integrated Query)</strong> in
                            C# — filtering, sorting, grouping, joins, aggregations, and
                            more. Perfect for developers learning data querying patterns in
                            .NET. Has <strong className="text-white">1 fork</strong> from the community.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-1">
                            {["LINQ", "C#", ".NET", "Query", "Filtering", "Grouping"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-0.5 rounded-full bg-[#7042f815] border border-[#7042f840] text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mt-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            View on GitHub →
                        </div>
                    </a>

                    {/* Learn C# */}
                    <a
                        href="https://github.com/Saifahmed3993/learn-csharp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative rounded-2xl border border-[#7042f88b] bg-[#03001450] backdrop-blur-md p-8 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(112,66,248,0.5)] cursor-pointer"
                    >
                        {/* Glow */}
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />

                        <div className="flex items-center gap-3">
                            {/* Icon */}
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                                C#
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-500 transition-all duration-300">
                                    Learn C# & .NET
                                </h3>
                                <span className="text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300">
                                    C# · MIT License
                                </span>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed">
                            A structured learning path for <strong className="text-white">C# and .NET</strong> with examples,
                            notes, and practice projects. Covers fundamentals to advanced
                            topics — ideal for anyone starting their .NET journey.
                        </p>

                        <div className="flex flex-wrap gap-2 mt-1">
                            {["C#", ".NET", "OOP", "Fundamentals", "Practice", "MIT"].map(
                                (tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs px-2 py-0.5 rounded-full bg-[#7042f815] border border-[#7042f840] text-gray-300"
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>

                        <div className="flex items-center gap-2 text-purple-400 text-sm font-medium mt-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            View on GitHub →
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;