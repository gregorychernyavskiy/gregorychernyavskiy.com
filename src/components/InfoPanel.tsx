import { useState } from "react";
import SocialIcons from "./SocialIcons";

type Tab = "about me" | "experience" | "projects";

export default function InfoPanel() {
    const [activeTab, setActiveTab] = useState<Tab>("about me");
    const [displayTab, setDisplayTab] = useState<Tab>("about me");
    const [fading, setFading] = useState(false);

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
            <div className="mb-5 flex items-center border-b border-black/10 pb-3">
                <div className="flex flex-wrap gap-5">
                    {(["about me", "experience", "projects"] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => switchTab(tab)}
                            className={`border-b-2 pb-1 text-sm capitalize transition-colors ${
                                activeTab === tab
                                    ? "border-current font-medium text-black hover:text-[#8A794B]"
                                    : "border-transparent text-gray-400 hover:text-[#8A794B]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
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
                            <p className="text-sm text-gray-500">IBM Z platform.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Incoming SWE Intern @ <a href="https://www.buildertrend.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Buildertrend</a></span>
                                <span className="text-sm">Summer 2026</span>
                            </div>
                            <p className="text-sm text-gray-500">SaaS, full-stack.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">SWE Intern @ <a href="https://www.marshalltown.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Marshalltown</a></span>
                                <span className="text-sm">05/2025 - 05/2026</span>
                            </div>
                            <p className="text-sm text-gray-500">Packing system, full-stack.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Research Assistant @ <a href="https://swapp.cs.iastate.edu/" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">SwaPP Lab</a></span>
                                <span className="text-sm">08/2024 - 01/2025</span>
                            </div>
                            <p className="text-sm text-gray-500">ML/data pipeline research.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg">Research Intern @ <a href="https://dice.cs.depaul.edu/" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">DePaul DICE Lab</a></span>
                                <span className="text-sm">05/2024 - 08/2024</span>
                            </div>
                            <p className="text-sm text-gray-500">Distributed systems research.</p>
                        </div>
                    </div>
                )}
                {displayTab === "projects" && (
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://perpendo.ai" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">perpendo.ai</a> <span className="font-normal text-base">(AI Startup)</span></span>
                            </div>
                            <p className="italic text-sm text-gray-600">TypeScript, React, Python, DynamoDB, Tailwind CSS</p>
                            <p>Contributed to an AI insurance startup.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://anchorflow.app" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">AnchorFlow</a></span>
                            </div>
                            <p className="italic text-sm text-gray-600">TypeScript, React, C#, MongoDB, TailwindCSS</p>
                            <p>Developed a crypto dashboard to visualize real-time coin prices.</p>
                        </div>
                        <hr className="text-[#8A794B]"/>
                        <div>
                            <div className="flex justify-between items-baseline">
                                <span className="text-lg font-medium"><a href="https://convertfile.me" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">convertfile.me</a></span>
                            </div>
                            <p className="italic text-sm text-gray-600">JavaScript, Node.js, Express.js, MongoDB</p>
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
