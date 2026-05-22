import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

// Lazy-load the Three.js canvas — it's heavy (~300KB JS) and not needed for first paint
const StarsCanvas = dynamic(() => import("@/components/main/StarBackground"), {
    ssr: false,
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Saif Aldin Ahmed – Full-Stack .NET Developer",
    description:
        "Portfolio of Saif Aldin Ahmed – Full-Stack .NET Developer specialising in ASP.NET Core, C#, React, and TypeScript.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden max-w-[1855px] mx-auto`}
            >
                {/* Stars canvas loaded after hydration so it doesn't block LCP */}
                <StarsCanvas />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
