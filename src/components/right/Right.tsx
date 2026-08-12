"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Videos from "@/components/video/Video";
import Projects from "@/components/projects/Projects";
import { experiences } from "@/data/exp";

/* ---------------------------------- */
/* Motion Variants */
/* ---------------------------------- */

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const tabContentVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    transition: { duration: 0.25 },
  },
};

// Terminal Icons
const TerminalIcons = {
  Terminal: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  Folder: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  ),
};

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

const Right = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "videos" | "projects"
  >("experience");
  
  const [bgColor, setBgColor] = useState("bg-white");
  const [terminalCommand, setTerminalCommand] = useState("~/summary");

  const linuxCommands = [
    "~/cat",         
    "~/cd",
    "~/ls",
    "~/pwd",
    "~/echo",
    "~/grep",
    "~/find",
    "~/mkdir",
    "~/rm",
    "~/cp",
    "~/mv",
    "~/chmod",
    "~/ps",
    "~/top",
    "~/df",
    "~/du",
    "~/history",
    "~/clear",
    "~/exit",
    "~/whoami"
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;

    const startRotation = () => {
      let index = 0;
      
      // Initial change after 3 seconds
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          index = (index + 1) % linuxCommands.length;
          setTerminalCommand(linuxCommands[index]);
        }, 1000); // Change every 2 seconds
      }, 0.000); // Start after 0 seconds
    };

    startRotation();

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const handleDotClick = (color: string) => {
    setBgColor(color);
    // Reset after 3 seconds
    setTimeout(() => {
      setBgColor("bg-white");
    }, 3000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`
        w-full
        max-w-full
        h-auto
        overflow-x-hidden
        overflow-y-auto
        rounded-xl
        ${bgColor}
        border border-gray-200/80
        shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)]
        p-4 sm:p-6
        transition-colors
        duration-500
        ease-in-out
      `}
    >
      {/* ---------------- Terminal Header ---------------- */}
      <motion.div
        variants={itemVariants}
        className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200"
      >
        <span className="ml-3 text-[11px] text-gray-600 tracking-wider font-mono transition-all duration-300">
          {terminalCommand}
        </span>
      </motion.div>

      {/* ---------------- Tabs ---------------- */}
      <motion.div
        variants={itemVariants}
        className="
          flex flex-row
          gap-1
          mb-8
          pt-1
          overflow-x-auto
          scrollbar-hide
          pb-3
          px-0.5
          items-center
        "
      >
        {[
          { id: "experience", label: "~/experience" },
          { id: "videos", label: "~/videos" },
          { id: "projects", label: "~/projects" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() =>
              setActiveTab(
                tab.id as "experience" | "videos" | "projects"
              )
            }
            className={`
              relative
              px-4 py-2.5
              text-xs
              font-mono
              tracking-wide
              rounded-lg
              whitespace-nowrap
              transition-all
              duration-300
              cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white border border-blue-400"
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-50 border border-transparent hover:border-gray-200"
              }
            `}
          >
            {tab.label}
          </motion.button>
        ))}
      </motion.div>

      {/* ---------------- Content ---------------- */}
      <AnimatePresence mode="wait">
        {activeTab === "experience" && (
          <motion.div
            key="experience"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative"
          >
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono mb-5">
              <TerminalIcons.Terminal />
              <span>cat experience.log</span>
            </div>

            {/* Timeline Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-3 sm:left-6 top-12 bottom-0 w-px bg-gray-200"
            />

            <div className="space-y-8 pb-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                  className="
                    relative
                    flex
                    flex-col sm:flex-row
                    items-start
                  "
                >
                  {/* Timeline Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`
                      absolute
                      left-2 sm:left-4
                      top-1.5
                      w-3.5 h-3.5
                      rounded-full
                      border-2 border-white
                      z-10
                      ${
                        exp.active
                          ? "bg-blue-500 animate-pulse"
                          : "bg-gray-300"
                      }
                    `}
                  />

                  {/* Content */}
                  <div className="ml-10 sm:ml-16 flex-1 border border-gray-200 hover:border-blue-400 transition-colors duration-300 rounded-lg p-4 bg-gray-50/50">
                    <div className="mb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-[10px] text-gray-400 font-mono">$</span>
                        <h3 className="text-base text-gray-800 font-mono">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-blue-600 font-mono">
                          @ {exp.company}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 font-mono">
                        {exp.duration}
                      </p>
                    </div>

                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -6 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                          className="flex items-start"
                        >
                          <span className="mt-0.5 mr-3 text-gray-400 text-xs flex-shrink-0">
                            ▸
                          </span>
                          <span className="text-sm text-gray-600 leading-relaxed">
                            {detail}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === "videos" && (
          <motion.div
            key="videos"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono mb-5">
              <span>▶</span>
              <span>ls -la ./videos/</span>
            </div>
            <Videos />
          </motion.div>
        )}

        {activeTab === "projects" && (
          <motion.div
            key="projects"
            variants={tabContentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="flex items-center gap-2 text-[11px] text-gray-400 font-mono mb-5">
              <TerminalIcons.Folder />
              <span>ls -la ./projects/</span>
            </div>
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Right;