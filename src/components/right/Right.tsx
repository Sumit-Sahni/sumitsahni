"use client";

import React, { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Videos from "@/components/video/Video";
import Projects from "@/components/projects/Projects";
import PortfolioTerminal from "@/components/terminal/PortfolioTerminal";
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

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

const Right = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "videos" | "projects" | "terminal"
  >("experience");

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="
        w-full
        max-w-full
        h-auto
        overflow-x-hidden
        overflow-y-auto
        rounded-xl
        font-mono
        bg-black
        border border-emerald-500/20
        shadow-[0_0_25px_-10px_rgba(16,185,129,0.35)]
        p-4 sm:p-6
      "
    >
      {/* ---------------- Tabs ---------------- */}
      <motion.div
        variants={itemVariants}
        className="
          flex flex-row
          gap-2
          mb-15 sm:mb-10
          pt-2
          overflow-x-auto
          scrollbar-hide rounded-lg pb-4 px-1 items-center
          border-b border-emerald-500/10
        "
      >
        {[
          { id: "experience", label: "~/experience" },
          { id: "videos", label: "~/videos" },
          { id: "projects", label: "~/projects" },
          { id: "terminal", label: "~/terminal" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setActiveTab(
                tab.id as "experience" | "videos" | "projects" | "terminal"
              )
            }
            className={`
              relative
              px-4 py-2
              text-xs sm:text-sm
              font-medium
              tracking-wide
              rounded-md
              whitespace-nowrap
              transition-all
              duration-300
              cursor-pointer
              border
              ${
                activeTab === tab.id
                  ? "bg-emerald-500 text-black border-emerald-400"
                  : "bg-transparent text-emerald-500/60 border-emerald-500/20 hover:text-emerald-300 hover:border-emerald-400/50"
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
            <p className="text-[11px] text-emerald-500/50 tracking-widest mb-4 pl-1">
              &gt; cat experience.log
            </p>

            {/* Timeline Line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
              }}
              className="absolute left-3 sm:left-6 top-10 bottom-0 w-px bg-emerald-500/20"
            />

            <div className="space-y-6 sm:space-y-8 pb-6">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
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
                      top-1
                      w-3 h-3 sm:w-3.5 sm:h-3.5
                      rounded-full
                      border-2 border-[#0a0e0c]
                      z-10
                      ${
                        exp.active
                          ? "bg-blue-400 animate-pulse"
                          : "bg-gray-500"
                      }
                    `}
                  />

                  {/* Content */}
                  <div className="ml-8 sm:ml-16 flex-1 border border-emerald-500/10 hover:border-emerald-400/30 transition-colors duration-300 rounded-md p-4 bg-black/20">
                    <div className="mb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg text-emerald-300 font-semibold">
                          {exp.title}
                        </h3>
                        <span className="text-sm sm:text-md text-blue-400 font-medium">
                          @ {exp.company}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">
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
                          <span className="mt-0.5 mr-2 text-emerald-500/50 text-xs flex-shrink-0">
                            &gt;
                          </span>
                          <span className="text-sm text-gray-300 leading-relaxed">
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
            <Projects />
          </motion.div>
        )}

        {activeTab === "terminal" && (
          <div className=" p-3.5 sm:p-6">
            <motion.div
              key="terminal"
              variants={tabContentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <PortfolioTerminal />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Right;