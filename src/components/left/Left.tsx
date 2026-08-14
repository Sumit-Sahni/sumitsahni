"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import award from "../../../assets/me.png";

// -------------------- CARD --------------------
const TerminalCard = ({
  children,
  className = "",
  bgColor = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      <div className={`absolute inset-0 rounded-xl ${bgColor} border border-gray-200/80 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.06)] transition-colors duration-500 ease-in-out`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// -------------------- ICONS --------------------
const TerminalIcons = {
  Linkedin: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
        fill="currentColor"
      />
    </svg>
  ),
  Email: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
        fill="currentColor"
      />
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fill="currentColor"
      />
    </svg>
  ),
  Download: () => (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  ),
  Chevron: () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  ),
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
  File: () => (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 1-2 2v16a2 2 0 0 1 2 2h12a2 2 0 0 1 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
    </svg>
  ),
};

// -------------------- COMPONENT --------------------
const Left = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [cardBg, setCardBg] = useState("bg-white");

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleDotClick = (color: string) => {
    setCardBg(color);
    setTimeout(() => {
      setCardBg("bg-white");
    }, 3000);
  };

  return (
    <div className="w-full flex flex-col items-center justify-between gap-2 pb-12 sticky lg:top-0">
      <TerminalCard className="p-8 w-full" bgColor={cardBg}>
        <div className="relative z-20">
          {/* Terminal top bar */}
          <div className="flex items-center gap-1.5 mb-6">
            <button
              onClick={() => handleDotClick("bg-red-50/80")}
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-red-400/50"
              title="Switch to red theme"
            />
            <button
              onClick={() => handleDotClick("bg-amber-50/80")}
              className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              title="Switch to yellow theme"
            />
            <button
              onClick={() => handleDotClick("bg-emerald-50/80")}
              className="w-3 h-3 rounded-full bg-[#27c93f] hover:scale-110 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400/50"
              title="Switch to green theme"
            />
            <span className="ml-3 text-[11px] text-gray-400 tracking-wider font-mono">
              ~/portfolio
            </span>
            <span className="ml-auto text-[10px] text-gray-400 font-mono">bash</span>
          </div>

          {/* Rest of the component remains the same */}
          {/* Prompt Line */}
          <div className="mb-8 flex items-center gap-2 text-[13px] font-mono text-gray-500">
            <span className="text-blue-600">user@portfolio</span>
            <span>:</span>
            <span className="text-amber-600">~</span>
            <span>$</span>
            <span className="text-gray-400">./whoami</span>
          </div>

          {/* Profile Image */}
          <div className="relative mb-8 group">
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 rounded-full border-2 border-gray-200 group-hover:border-blue-400 transition-colors duration-300" />
              <div className="relative w-full h-full rounded-full p-0.5">
                <Image
                  src={award}
                  alt="Sumit Sahni"
                  className="w-full h-full rounded-full object-cover"
                  priority
                />
              </div>
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gray-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gray-300" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gray-300" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gray-300" />
            </div>
          </div>

          {/* Name & Title */}
          <div
            className="relative text-center mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-mono mb-2">
              <TerminalIcons.Terminal />
              <span>cat about.me</span>
            </div>
            
            <h2 className="text-2xl font-light text-gray-800 tracking-wide relative inline-block">
              sumit sahni
            </h2>
            
            <div className="mt-3 flex items-center justify-center gap-2 text-sm font-mono text-gray-500">
              <span className="text-blue-600">role:</span>
              <span className="text-gray-700">Engineer</span>
              <span className="text-blue-600">@</span>
              <span className="text-gray-700">Microsoft</span>
            </div>
          </div>

          {/* Resume Button */}
          <div
            className="mb-10 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="relative w-full px-6 py-3.5 bg-gray-900 text-white border border-gray-200 rounded-lg text-sm font-mono flex items-center justify-center gap-3 hover:bg-gray-800 hover:border-blue-400 transition-all duration-300 group shadow-sm">
              <TerminalIcons.Download />
              <span className="tracking-wide">wget -O resume.pdf</span>
              <span className="text-gray-400 text-xs group-hover:text-blue-400">↓</span>
            </button>
          </div>

          {/* Collapsible Content */}
          <div
            style={{
              height: isMobile ? (open ? "auto" : "0") : "auto",
              opacity: isMobile ? (open ? 1 : 0) : 1,
              overflow: "hidden",
              transition: "all 0.4s ease-in-out",
            }}
          >
            <div className="space-y-8">
              {/* Social Icons */}
              <div className="p-4 border border-gray-200 rounded-lg bg-gray-50/50">
                <div className="flex items-center justify-center gap-2">
                  <span className="text-[10px] text-gray-400 tracking-wider font-mono">$ social --connect</span>
                </div>
                <div className="flex items-center justify-center gap-3 mt-3">
                  {[
                    {
                      href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
                      icon: <TerminalIcons.Linkedin />,
                    },
                    {
                      href: "mailto:sumit.123sahni@gmail.com?subject=Hello",
                      icon: <TerminalIcons.Email />,
                    },
                    {
                      href: "https://github.com/Sumit-Sahni",
                      icon: <TerminalIcons.Github />,
                    },
                  ].map(({ href, icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg border border-gray-200 text-gray-500 hover:text-blue-600 hover:border-blue-400 transition-all duration-300 bg-white"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-mono">
                  <TerminalIcons.Folder />
                  <span className="tracking-wider">ls -la ./certs/</span>
                </div>

                <div className="space-y-2">
                  {[
                    {
                      text: "CompTIA Security+",
                      link: "https://www.udemy.com/certificate/UC-7457ca37-4baa-437f-b078-a74931667ee7/",
                      tag: "SEC",
                      delay: 0.9,
                    },
                    {
                      text: "CCNA 200-301",
                      link: "https://www.udemy.com/certificate/UC-2c9eb698-7086-4d9f-9093-ec7435fb9680/",
                      tag: "NET",
                      delay: 1.0,
                    },
                    {
                      text: "Web Development Bootcamp",
                      link: "https://www.udemy.com/certificate/UC-f73ada88-8d74-45bd-9ccf-a717372163d9/",
                      tag: "DEV",
                      delay: 1.1,
                    },
                    {
                      text: "College Project",
                      link: "https://drive.google.com/file/d/1fYxtSDvl8sW5ePKUyCj22ESkiMMtSuyD/view",
                      tag: "DOC",
                      delay: 1.2,
                    },
                  ].map((cert, i) => (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200 hover:border-blue-400 hover:bg-gray-100 transition-all duration-300 group cursor-pointer opacity-0 animate-fadeInUp"
                      style={{ animationDelay: `${cert.delay}s` }}
                    >
                      <TerminalIcons.File />
                      <span className="text-[10px] font-mono text-blue-600 border border-gray-300 rounded px-2 py-0.5 tracking-wider">
                        {cert.tag}
                      </span>
                      <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                        {cert.text}
                      </span>
                      <span className="ml-auto text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        →
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </TerminalCard>

      {/* Mobile Toggle */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 w-full max-w-xs mx-auto active:scale-95 transition-transform"
        >
          <TerminalCard className="py-4 px-6">
            <div className="flex items-center justify-center gap-3 text-gray-500">
              <TerminalIcons.Terminal />
              <span className="text-sm font-mono tracking-wide">
                {open ? "exit" : "ls -la"}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <TerminalIcons.Chevron />
              </div>
            </div>
          </TerminalCard>
        </button>
      )}

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Left;