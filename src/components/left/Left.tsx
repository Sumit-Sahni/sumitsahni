"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import award from "../../../assets/me.png";

// -------------------- GLASS EFFECT COMPONENT --------------------
const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Glass background with gradient border */}
      <div className="absolute inset-0 rounded-3xl border-0 sm:border-0 shadow-2xl" />
      {/* Subtle inner shadow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-transparent via-transparent to-white/5" />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// -------------------- PREMIUM ICONS --------------------
const PremiumIcons = {
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
};

// -------------------- COMPONENT --------------------
const Left = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setHoverPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className=" w-full flex flex-col items-center justify-between gap-2  pb-12 sticky lg:top-0">
      {/* Main Glass Card */}
      <GlassCard className="p-8 ">
        <div className="relative z-20">
          {/* Hover Light Effect */}
          <div
            className="absolute inset-0 overflow-hidden rounded-3xl"
            onMouseMove={handleMouseMove}
          >
            <div
              className="absolute w-[1800px] h-[50px] bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
              style={{
                left: hoverPosition.x,
                top: hoverPosition.y,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Profile Image with Floating Effect */}
          <div className="relative mb-8 group">
            <div className="relative w-40 h-40 mx-auto">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 blur-xl opacity-30" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 group-hover:scale-105 transition-transform duration-300">
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm" />
                <Image
                  src={award}
                  alt="Sumit Sahni"
                  className="w-full h-full rounded-full object-cover relative z-10"
                  priority
                />
              </div>

              {/* Floating Particles */}
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400/50 rounded-full animate-float"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${20 + i * 20}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Name & Title */}
          <div
            className="relative text-center mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <h2 className="text-3xl caveat font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 relative inline-block">
              Sumit.A.Sahni
              {/* HR positioned exactly at the bottom of the text */}
              <hr className="absolute left-1/2 -translate-x-1/2 top-full w-38 border-gray-400" />
            </h2>

            <p className="text-sm text-gray-600 font-light tracking-wide py-1">
              Engineer <span className="font-extrabold">@ </span>Microsoft
            </p>
          </div>

          {/* Premium Resume Button */}
          <div
            className="mb-10 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative group block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
              <button className="relative w-full px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-full text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-700/50 group-hover:scale-102">
                <PremiumIcons.Download />
                <span>Download Resume</span>
              </button>
            </div>
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
              {/* Social Icons - Premium Glass Style */}
              <GlassCard className="p-4 opacity-0 animate-fadeInUp">
                <div className="flex items-center justify-center gap-3">
                  {[
                    {
                      href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
                      icon: <PremiumIcons.Linkedin />,
                      color: "text-[#0A66C2] hover:bg-blue-500/10",
                    },
                    {
                      href: "mailto:sumit.123sahni@gmail.com?subject=Hello",
                      icon: <PremiumIcons.Email />,
                      color: "text-gray-700 hover:bg-gray-500/10",
                    },
                    {
                      href: "https://github.com/",
                      icon: <PremiumIcons.Github />,
                      color: "text-gray-900 hover:bg-gray-900/10",
                    },
                  ].map(({ href, icon, color }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl ${color} transition-all duration-300 hover:shadow-lg hover:scale-110`}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </GlassCard>

              {/* Certifications - Premium List */}
              <div className="space-y-4">
                <h3
                  className="text-xs font-semibold text-gray-500 uppercase tracking-wider text-center opacity-0 animate-fadeInUp"
                  style={{ animationDelay: "0.8s" }}
                >
                  Certifications
                </h3>

                <div className="space-y-3">
                  {[
                    {
                      text: "CompTIA Security+",
                      link: "https://www.udemy.com/certificate/UC-7457ca37-4baa-437f-b078-a74931667ee7/",
                      badge: "🔒",
                      gradient: "from-blue-500/5 to-blue-500/10",
                      delay: 0.9,
                    },
                    {
                      text: "CCNA 200-301",
                      link: "https://www.udemy.com/certificate/UC-2c9eb698-7086-4d9f-9093-ec7435fb9680/",
                      badge: "🌐",
                      gradient: "from-purple-500/5 to-purple-500/10",
                      delay: 1.0,
                    },
                    {
                      text: "Web Development Bootcamp",
                      link: "https://www.udemy.com/certificate/UC-f73ada88-8d74-45bd-9ccf-a717372163d9/",
                      badge: "💻",
                      gradient: "from-cyan-500/5 to-cyan-500/10",
                      delay: 1.1,
                    },
                    {
                      text: "College Project",
                      link: "https://drive.google.com/file/d/1fYxtSDvl8sW5ePKUyCj22ESkiMMtSuyD/view",
                      badge: "📚",
                      gradient: "from-emerald-500/5 to-emerald-500/10",
                      delay: 1.2,
                    },
                  ].map((cert, i) => (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 rounded-xl bg-gradient-to-r ${cert.gradient} border border-white/20 hover:border-white/40 transition-all duration-300 group cursor-pointer opacity-0 animate-fadeInUp hover:translate-x-2 hover:scale-102`}
                      style={{ animationDelay: `${cert.delay}s` }}
                    >
                      <span className="text-xl">{cert.badge}</span>
                      <span className="font-medium text-gray-800 group-hover:text-gray-900">
                        {cert.text}
                      </span>
                      <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Mobile Toggle Button - POSITIONED OUTSIDE THE GLASS CARD */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 w-full max-w-xs mx-auto active:scale-95 transition-transform"
        >
          <GlassCard className="py-4 px-6">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <span className="text-sm font-medium tracking-wide">
                {open ? "Show Less" : "Explore More"}
              </span>
              <div
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              >
                <PremiumIcons.Chevron />
              </div>
            </div>
          </GlassCard>
        </button>
      )}

      {/* Floating Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl -z-10" />

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(-10px) translateX(-10px);
          }
        }

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

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .group:hover .group-hover\\:scale-102 {
          transform: scale(1.02);
        }

        .hover\\:scale-110:hover {
          transform: scale(1.1);
        }

        .hover\\:translate-x-2:hover {
          transform: translateX(8px);
        }
      `}</style>
    </div>
  );
};

export default Left;
