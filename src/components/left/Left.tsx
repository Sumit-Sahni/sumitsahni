"use client";

import Image from "next/image";
import React from "react";
import { motion,Variants } from "framer-motion";
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

      {/* Social Icons */}
      <motion.div
        variants={itemVariants}
        className="flex gap-2 p-3 bg-white rounded-2xl"
      >
        {[
          {
            href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
            icon: "LinkedIn",
          },
          {
            href: "mailto:sumit.123sahni@gmail.com?subject=Hiring",
            icon: "Email",
          },
          {
            href: "https://github.com/Sumit-Sahni",
            icon: "GitHub",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl hover:bg-gray-100 transition-all duration-200"
          >
            {/* keep your existing SVGs here */}
          </motion.a>
        ))}
      </motion.div>

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
