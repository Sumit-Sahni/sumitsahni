"use client";

import Image from "next/image";
import React from "react";
import { motion, Variants } from "framer-motion";
import award from "../../../assets/me.png";

const containerVariants: Variants = {
  hidden: {
    opacity: 1,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // ✅ cubic-bezier (premium feel)
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1], // ✅
    },
  },
};

const Left = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex flex-col items-center justify-between gap-6 pt-8 pb-12 sticky top-0 
      bg-neutral-50 shadow-md rounded-3xl border border-gray-200"
    >
      {/* Profile Image */}
      <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className="relative group"
      >
        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 shadow-2xl">
          <Image
            src={award}
            alt="Sumit Sahni"
            className="w-full h-full rounded-full object-cover ring-1 ring-white/80 shadow-lg"
            priority
          />
        </div>
      </motion.div>
      {/* Name & Title */}
      <motion.div variants={itemVariants} className="text-center px-4">
        <h2 className="text-xl font-semibold text-gray-900 leading-tight">
          Sumit Sahni
        </h2>
        <p className="text-sm text-gray-600 mt-1 font-medium">
          Cybersecurity & Software Professional
        </p>

        {/* Resume Button */}
        <motion.a
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
          href="https://drive.google.com/file/d/1Ni4juPbmGeDFoA1fjW_PSpS46HFF_vJ9/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 px-4 py-2 text-sm font-medium rounded-full 
          bg-gradient-to-r from-[#0a66c2] to-[#004182] text-white
          hover:shadow-lg hover:shadow-blue-500/30
          transition-all duration-200 border border-blue-500/50"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm11.293 3.293a1 1 0 011.414 0l2-2a1 1 0 011.414 0v7.586a1 1 0 01-.707.707h-7.586a1 1 0 010-1.414l2-2a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          Download Resume
        </motion.a>
      </motion.div>
      {/* Social Icons - LinkedIn Style */}{" "}
      <div className="flex gap-2 p-3 bg-white rounded-2xl transition-all duration-200">
        {" "}
        {[
          {
            href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
            icon: (
              <svg
                className="w-5 h-5 text-[#0A66C2] hover:text-[#004182]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />{" "}
              </svg>
            ),
            label: "LinkedIn",
          },
          {
            href: "mailto:sumit.123sahni@gmail.com?subject=Hiring",
            icon: (
              <svg
                className="w-5 h-5 text-gray-700 hover:text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M22.541 3H1.459C.652 3 0 3.667 0 4.5v15c0 .833.652 1.5 1.459 1.5h21.082c.807 0 1.459-.667 1.459-1.5V4.5c0-.833-.652-1.5-1.459-1.5zM2.058 17.083V6.917l9.942 7.292 9.942-7.292v10.166H2.058zM11.5 12.335L1.459 4.833h21.082L11.5 12.335z" />{" "}
              </svg>
            ),
            label: "Email",
          },
          {
            href: "https://github.com/Sumit-Sahni",
            icon: (
              <svg
                className="w-5 h-5 text-[#333] hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {" "}
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />{" "}
              </svg>
            ),
            label: "GitHub",
          },
        ].map(({ href, icon, label }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200 flex items-center justify-center group"
            title={label}
            aria-label={label}
          >
            {" "}
            {icon}{" "}
          </a>
        ))}{" "}
      </div>
      {/* Certifications */}
      <motion.div variants={itemVariants} className="w-full px-4 space-y-2">
        <h3 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3 pl-1">
          Certifications
        </h3>

        <div className="space-y-1.5">
          {[
            {
              text: "CompTIA Security+",
              link: "https://www.udemy.com/certificate/UC-7457ca37-4baa-437f-b078-a74931667ee7/",
              badge: "🔒",
            },
            {
              text: "CCNA 200-301",
              link: "https://www.udemy.com/certificate/UC-2c9eb698-7086-4d9f-9093-ec7435fb9680/",
              badge: "🌐",
            },
            {
              text: "Web Development Bootcamp",
              link: "https://www.udemy.com/certificate/UC-f73ada88-8d74-45bd-9ccf-a717372163d9/",
              badge: "💻",
            },
            {
              text: "College Project",
              link: "https://drive.google.com/file/d/1fYxtSDvl8sW5ePKUyCj22ESkiMMtSuyD/view",
              badge: "📚",
            },
          ].map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="flex items-center gap-2 p-3 rounded-xl bg-gradient-to-r from-gray-50 to-white 
              border border-gray-200 hover:bg-blue-50/50 hover:shadow-sm
              transition-all duration-200 text-sm"
            >
              <span className="text-lg">{cert.badge}</span>
              <span className="font-medium">{cert.text}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Left;
