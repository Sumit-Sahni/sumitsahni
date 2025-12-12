"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Videos from "@/components/video/Video"; // import your Videos component
import Projects from "@/components/projects/Projects"; // import your Projects component
import { experiences } from "@/data/exp";

const Right = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "videos" | "projects"
  >("experience");

  return (
    <div className="w-full lg:w-[80%] mx-auto h-auto overflow-y-auto px-2 lg:px-4">
      {/* Tabs */}
     <div className="flex gap-4 mb-8 border-b border-gray-200 pb-2 py-4 overflow-x-auto scrollbar-hide">
  {[
    { id: "experience", label: "Experience" },
    { id: "videos", label: "Videos" },
    { id: "projects", label: "Projects" },
  ].map((tab) => (
    <button
      key={tab.id}
      onClick={() =>
        setActiveTab(tab.id as "experience" | "videos" | "projects")
      }
      className={`
        relative px-5 py-2.5 text-base font-medium rounded-full 
        whitespace-nowrap flex-shrink-0
        transition-all duration-300 focus:outline-none cursor-pointer
        ${
          activeTab === tab.id
            ? `
            bg-neutral-900/80 text-white 
            border border-neutral-700 
            backdrop-blur-xl 
            shadow-sm shadow-black/40 
            hover:bg-neutral-800/90 hover:shadow-black/60
            `
            : `
            bg-gray-100 text-gray-600 
            hover:bg-gray-200
            `
        }
      `}
    >
      {tab.label}
    </button>
  ))}
</div>


      {/* Content */}
      {activeTab === "experience" && (
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-gray-300"></div>
          <div className="space-y-8 pb-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative flex items-start">
                {/* Timeline dot with active/inactive color */}
                <div
                  className={`absolute left-4 top-1 w-4 h-4 rounded-full border-4 border-white shadow-md z-10
    ${
      exp.active ? "bg-green-600  animate-spin transition-all" : "bg-blue-600"
    }`}
                ></div>

                {/* Content */}
                <div className="ml-12 sm:ml-16 flex-1">
                  <div className="mb-3">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-black ">
                        {exp.title}
                      </h3>
                      <span className="text-lg text-blue-600 font-medium">
                        {exp.company}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-medium">
                      {exp.duration}
                    </p>
                  </div>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-700 leading-relaxed inter">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "videos" && <Videos />}
      {activeTab === "projects" && <Projects />}
    </div>
  );
};

export default Right;
