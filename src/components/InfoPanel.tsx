import { useState } from "react";
import SocialIcons from "./SocialIcons";

type Tab = "about me" | "experience" | "projects";

export default function InfoPanel() {
    const [activeTab, setActiveTab] = useState<Tab>("about me");

    return (
        <div className="w-[420px] h-[500px] flex flex-col flex-shrink-0">
            <div className="flex items-center mb-4">
                <div className="flex gap-6">
                    {(["about me", "experience", "projects"] as Tab[]).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm capitalize pb-1 transition-colors ${
                                activeTab === tab
                                    ? "border-b-2 border-current font-medium hover:text-[#8A794B]"
                                    : "text-gray-400 hover:text-[#8A794B]"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex-1 overflow-y-auto">
                {activeTab === "about me" && (
                    <div className="flex flex-col gap-4">
                        <p></p>
                        <p className="text-xl">
                            Hi! I'm <span style={{color: "#8A794B"}}>Gregory Chernyavskiy</span>.
                        </p>
                        <hr className="text-[#8A794B]"/>
                        <p>
                                CS student & incoming SWE, passionate about building full-stack products and exploring AI.
                                Based in <span style={{color: "#8A794B"}}>Ames, IA</span>.
                        </p>
                        <hr className="text-[#8A794B]"/>
                        <p>
                            <ul>
                                <li>Incoming SWE @ <a href="https://www.ibm.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">IBM</a></li>
                                <li>Incoming SWE Intern @ <a href="https://www.buildertrend.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Buildertrend</a></li>
                                <li>Prev SWE Intern @ <a href="https://www.marshalltown.com" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Marshalltown</a></li>
                            </ul>
                        </p>
                        <hr className="text-[#8A794B]"/>
                        <p>
                            <ul>
                                <li>Incoming M.S. in AI @ <a href="https://www.gatech.edu" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Georgia Institute of Technology</a></li>
                                <li>Computer Science @ <a href="https://www.iastate.edu" target="_blank" rel="noreferrer" className="underline text-[#8A794B]">Iowa State University</a></li>
                            </ul>
                        </p>
                    </div>
                )}
                {activeTab === "experience" && (
                    <div className="flex flex-col gap-4">
                        <p></p>
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
                {activeTab === "projects" && (
                    <div className="flex flex-col gap-4">
                        <p></p>
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
            <div className="flex justify-end pt-3">
                <SocialIcons />
            </div>
        </div>
    );
}
