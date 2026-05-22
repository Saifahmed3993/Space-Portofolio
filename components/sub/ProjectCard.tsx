import Image from "next/image";
import React from "react";

interface Props {
    src: string;
    title: string;
    description: string;
    link?: string;
    badge?: string;
    badgeColor?: string; // tailwind gradient classes e.g. "from-emerald-500 to-teal-500"
}

const ProjectCard = ({ src, title, description, link, badge, badgeColor = "from-purple-500 to-cyan-500" }: Props) => {
    const CardContent = (
        <div className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#03001450] backdrop-blur-md h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(112,66,248,0.6)] group">
            <div className="w-full h-[220px] overflow-hidden relative">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
                {badge && (
                    <div className={`absolute top-3 left-3 z-20 text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${badgeColor} shadow-md`}>
                        {badge}
                    </div>
                )}
                <Image
                    src={src}
                    alt={title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
            </div>

            <div className="relative p-5 flex flex-col justify-between flex-grow">
                <div>
                    <h1 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300 line-clamp-2">
                        {title}
                    </h1>
                    <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-3">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );

    return link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block h-full cursor-pointer z-[20]">
            {CardContent}
        </a>
    ) : (
        <div className="h-full z-[20]">{CardContent}</div>
    );
};

export default ProjectCard;