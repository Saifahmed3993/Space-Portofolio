import dynamic from "next/dynamic";
import Hero from "@/components/main/Hero";

// Lazy-load heavy below-the-fold sections so the hero renders instantly
const About = dynamic(() => import("@/components/main/About"), {
    ssr: false,
});
const Skills = dynamic(() => import("@/components/main/Skills"), {
    ssr: false,
});
const Projects = dynamic(() => import("@/components/main/Projects"), {
    ssr: false,
});

export default function Home() {
    return (
        <main className="h-full w-full">
            <div className="flex flex-col gap-20">
                {/* Hero is always SSR – first paint is instant */}
                <Hero />
                <About />
                <Skills />
                <Projects />
            </div>
        </main>
    );
}