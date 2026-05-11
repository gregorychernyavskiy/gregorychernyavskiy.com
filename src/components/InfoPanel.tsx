import { useState, useEffect } from "react";
import SocialIcons from "./SocialIcons";

type Tab = "about me" | "experience" | "projects";

export default function InfoPanel() {
    const [activeTab, setActiveTab] = useState<Tab>("about me");
    const [displayTab, setDisplayTab] = useState<Tab>("about me");
    const [fading, setFading] = useState(false);
    const [isDark, setIsDark] = useState(
        () => document.documentElement.classList.contains('dark')
    );

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDark]);

    function switchTab(tab: Tab) {
        if (tab === activeTab) return;
        setFading(true);
        setTimeout(() => {
            setDisplayTab(tab);
            setActiveTab(tab);
            setFading(false);
        }, 150);
    }

    return (
        <section className="flex h-full w-full max-w-[42rem] flex-col">
            <div className="mb-5 flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-3">
                <div className="flex flex-wrap gap-5">
                    {(["about me", "experience", "projects"] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => switchTab(tab)}
                            className={`cursor-pointer border-b-2 pb-1 text-sm capitalize transition-colors ${
                                activeTab === tab
                                    ? "border-current font-medium text-black dark:text-[#ede7db] hover:text-[#8A794B] dark:hover:text-[#8A794B]"
                                    : "border-transparent text-gray-400 hover:text-[#8A794B]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <button
                    onClick={() => setIsDark(d => !d)}
                    className="cursor-pointer text-current hover:text-[#8A794B] transition-colors ml-4 shrink-0"
                    title={isDark ? "Switch to light mode" : "Switch to dark mode"}
                    aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
                >
                    {isDark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,40a8,8,0,0,0-8,8V16a8,8,0,0,0-16,0V40a8,8,0,0,0,16,0Zm-.34,29.66,16-16a8,8,0,0,0-11.32-11.32l-16,16a8,8,0,0,0,11.32,11.32Zm11.32,116.68-16-16a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM40,128a8,8,0,0,0-8-8H8a8,8,0,0,0,0,16H32A8,8,0,0,0,40,128Zm208-8H224a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                            <path d="M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23Z"/>
                        </svg>
                    )}
                </button>
            </div>

            <div
                className={`min-h-[320px] flex-1 overflow-y-auto pr-1 text-[1.02rem] leading-8 transition-opacity duration-150 lg:min-h-[520px] ${fading ? "opacity-0" : "opacity-100"}`}
            >
                {displayTab === "about me" && (
                    <div className="flex flex-col gap-4">
                        <p className="text-xl">
                            Hi! I'm <span style={{color: "#8A794B"}}>Gregory Chernyavskiy</span>.
                        </p>
                        <hr className="text-[#8A794B]"/>
                        <p>
                                CS student & incoming SWE, passionate about building full-stack products and exploring AI.
                                Based in <span style={{color: "#8A794B"}}>Ames, IA</span>.
                        </p>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <ul className="space-y-2">
                                <li>Incoming SWE @ <a href="https://www.ibm.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">IBM</a></li>
                                <li>Incoming SWE Intern @ <a href="https://www.buildertrend.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Buildertrend</a></li>
                                <li>Prev SWE Intern @ <a href="https://www.marshalltown.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Marshalltown</a></li>
                            </ul>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <ul className="space-y-2">
                                <li>Incoming M.S. in AI @ <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Georgia Institute of Technology</a></li>
                                <li>Computer Science @ <a href="https://www.iastate.edu" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Iowa State University</a></li>
                            </ul>
                        </div>
                    </div>
                )}
                {displayTab === "experience" && (
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Incoming SWE @ <a href="https://www.ibm.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">IBM</a></span>
                                <span className="text-sm">Aug 2026</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">IBM Z platform.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Incoming SWE Intern @ <a href="https://www.buildertrend.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Buildertrend</a></span>
                                <span className="text-sm">Summer 2026</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">SaaS, full-stack.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">SWE Intern @ <a href="https://www.marshalltown.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Marshalltown</a></span>
                                <span className="text-sm">05/2025 - 05/2026</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Packing system, full-stack.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Research Assistant @ <a href="https://swapp.cs.iastate.edu/" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">SwaPP Lab</a></span>
                                <span className="text-sm">08/2024 - 01/2025</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">ML/data pipeline research.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Research Intern @ <a href="https://dice.cs.depaul.edu/" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">DePaul DICE Lab</a></span>
                                <span className="text-sm">05/2024 - 08/2024</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-300">Distributed systems research.</p>
                        </div>
                    </div>
                )}
                {displayTab === "projects" && (
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://perpendo.ai" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">perpendo.ai</a> <span className="font-normal text-base">(AI Startup)</span></span>
                            </div>
                            <p className="italic text-sm text-gray-600 dark:text-gray-300">TypeScript, React, Python, DynamoDB, Tailwind CSS</p>
                            <p>Contributed to an AI insurance startup.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://anchorflow.app" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">AnchorFlow</a></span>
                            </div>
                            <p className="italic text-sm text-gray-600 dark:text-gray-300">TypeScript, React, C#, MongoDB, TailwindCSS</p>
                            <p>Developed a crypto dashboard to visualize real-time coin prices.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://convertfile.me" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">convertfile.me</a></span>
                            </div>
                            <p className="italic text-sm text-gray-600 dark:text-gray-300">JavaScript, Node.js, Express.js, MongoDB</p>
                            <p>Built a file-conversion web service.</p>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex justify-end pt-5">
                <SocialIcons />
            </div>
        </section>
    );
}
