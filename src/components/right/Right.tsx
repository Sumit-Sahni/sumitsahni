"use client";

import React, { useState } from "react";
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

/* ---------------------------------- */
/* Component */
/* ---------------------------------- */

const Right = () => {
  const [activeTab, setActiveTab] = useState<
    "experience" | "videos" | "projects"
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
        rounded-3xl px-2
        sm:px-6
        py-8 sm:py-8
      "
    >
      {/* ---------------- Tabs ---------------- */}
      <motion.div
        variants={itemVariants}
        className="
          flex
          gap-3
          mb-6 sm:mb-10
          pt-2
          overflow-x-auto
          scrollbar-hide
        "
      >
        {[
          { id: "experience", label: "Experience" },
          { id: "videos", label: "Videos" },
          { id: "projects", label: "Projects" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() =>
              setActiveTab(tab.id as "experience" | "videos" | "projects")
            }
            className={`
              relative
              px-4 py-2
              text-sm sm:text-base
              font-medium
              rounded-full
              whitespace-nowrap
              transition-all
              duration-300
              cursor-pointer
              ${
                activeTab === tab.id
                  ? "bg-neutral-900/80 text-white shadow-sm shadow-black/40"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            {/* Timeline Line */}
            <div className="absolute left-3 sm:left-6 top-2 bottom-0 w-0.5 bg-gray-300" />

            <div className="space-y-8 sm:space-y-10 pb-6">
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
                      w-3 h-3 sm:w-4 sm:h-4
                      rounded-full
                      border-4 border-white
                      shadow-md
                      z-10
                      ${
                        exp.active ? "bg-green-500 animate-spin" : "bg-blue-600"
                      }
                    `}
                  />

                  {/* Content */}
                  <div className="ml-8 sm:ml-16 flex-1">
                    <div className="mb-3">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-bold text-black">
                          {exp.title}
                        </h3>
                        <span className="text-sm sm:text-md text-blue-600 font-medium">
                          {exp.company}
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
                          <span className="mt-2 mr-3 w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                          <span className="text-sm text-gray-700 leading-relaxed">
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
      </AnimatePresence>
    </motion.div>
  );
};

export default Right;
