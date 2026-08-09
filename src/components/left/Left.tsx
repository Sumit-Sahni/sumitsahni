"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import award from "../../../assets/me.png";

// -------------------- TERMINAL CARD --------------------
const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Dark terminal surface */}
      <div className="absolute inset-0 rounded-xl bg-[#0a0e0c] border border-emerald-500/20 shadow-[0_0_25px_-10px_rgba(16,185,129,0.35)]" />
      {/* Faint scanline texture */}
      <div
        className="absolute inset-0 rounded-xl opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #10b981 0px, #10b981 1px, transparent 1px, transparent 3px)",
        }}
      />
      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

// -------------------- ICONS --------------------
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
    <div className=" w-full flex flex-col items-center justify-between gap-2  pb-12 sticky lg:top-0 font-mono">
      {/* Main Terminal Card */}
      <GlassCard className="p-8 ">
        <div className="relative z-20">
          {/* Hover Scan Effect */}
          <div
            className="absolute inset-0 overflow-hidden rounded-xl"
            onMouseMove={handleMouseMove}
          >
            <div
              className="absolute w-[1800px] h-[50px] bg-emerald-500/5 rounded-full blur-3xl"
              style={{
                left: hoverPosition.x,
                top: hoverPosition.y,
                transform: "translate(-50%, -50%)",
              }}
            />
          </div>

          {/* Terminal top bar */}
          <div className="flex items-center gap-1.5 mb-6 opacity-70">
            <span className="w-2 h-2 rounded-full bg-emerald-500/40" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/40" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/40" />
            <span className="ml-2 text-[10px] tracking-widest text-emerald-500/60">
              session --whoami
            </span>
          </div>

          {/* Profile Image */}
          <div className="relative mb-8 group">
            <div className="relative w-40 h-40 mx-auto ">
              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl opacity-40 " />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full p-1 border border-emerald-500/40 group-hover:border-emerald-400 transition-colors duration-300">
                <div className="absolute inset-0 rounded-full bg-black/40" />
                <Image
                  src={award}
                  alt="Sumit Sahni"
                  className="w-full h-full rounded-full object-cover relative z-10"
                  priority
                />
              </div>

              {/* Corner brackets */}
              <span className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-emerald-500/50" />
              <span className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-emerald-500/50" />
              <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-emerald-500/50" />
              <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-emerald-500/50" />
            </div>
          </div>

          {/* Name & Title */}
          <div
            className="relative text-center mb-8 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.2s" }}
          >
            <p className="text-[11px] text-emerald-500/50 tracking-widest mb-1">
              &gt; whoami
            </p>
            <h2 className="text-xl font-bold text-emerald-400 tracking-wide relative inline-block">
              Sumit.A.Sahni
              <span className="inline-block w-0.5 h-4 bg-emerald-400/70 ml-1 align-middle animate-pulse" />
              <hr className="mt-2 border-emerald-500/20" />
            </h2>

            <p className="text-xs text-gray-400 tracking-wide py-1">
              <span className="text-emerald-500/60">role:</span> Engineer{" "}
              <span className="text-emerald-500/60">@</span> Microsoft
            </p>
          </div>

          {/* Resume Button */}
          <div
            className="mb-10 opacity-0 animate-fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            <button className="relative w-full px-6 py-3 bg-black text-emerald-400 border border-emerald-500/40 rounded-md text-sm font-medium tracking-wide flex items-center justify-center gap-2 hover:bg-emerald-500 hover:text-black transition-all duration-300">
              <PremiumIcons.Download />
              <span>./download-resume.sh</span>
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
              <GlassCard className="p-4 opacity-0 animate-fadeInUp">
                <div className="flex items-center justify-center gap-3">
                  {[
                    {
                      href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
                      icon: <PremiumIcons.Linkedin />,
                    },
                    {
                      href: "mailto:sumit.123sahni@gmail.com?subject=Hello",
                      icon: <PremiumIcons.Email />,
                    },
                    {
                      href: "https://github.com/",
                      icon: <PremiumIcons.Github />,
                    },
                  ].map(({ href, icon }, i) => (
                    <a
                      key={i}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-md border border-emerald-500/20 text-emerald-500/70 hover:text-emerald-300 hover:border-emerald-400/60 transition-all duration-300"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </GlassCard>

              {/* Certifications - Terminal List */}
              <div className="space-y-4">
                <h3
                  className="text-[11px] font-semibold text-emerald-500/60 uppercase tracking-widest text-center opacity-0 animate-fadeInUp"
                  style={{ animationDelay: "0.8s" }}
                >
                  &gt; ls ./certifications
                </h3>

                <div className="space-y-2">
                  {[
                    {
                      text: "CompTIA Security+",
                      link: "https://www.udemy.com/certificate/UC-7457ca37-4baa-437f-b078-a74931667ee7/",
                      tag: "sec",
                      delay: 0.9,
                    },
                    {
                      text: "CCNA 200-301",
                      link: "https://www.udemy.com/certificate/UC-2c9eb698-7086-4d9f-9093-ec7435fb9680/",
                      tag: "net",
                      delay: 1.0,
                    },
                    {
                      text: "Web Development Bootcamp",
                      link: "https://www.udemy.com/certificate/UC-f73ada88-8d74-45bd-9ccf-a717372163d9/",
                      tag: "dev",
                      delay: 1.1,
                    },
                    {
                      text: "College Project",
                      link: "https://drive.google.com/file/d/1fYxtSDvl8sW5ePKUyCj22ESkiMMtSuyD/view",
                      tag: "doc",
                      delay: 1.2,
                    },
                  ].map((cert, i) => (
                    <a
                      key={i}
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-md bg-black/30 border border-emerald-500/10 hover:border-emerald-400/50 transition-all duration-300 group cursor-pointer opacity-0 animate-fadeInUp"
                      style={{ animationDelay: `${cert.delay}s` }}
                    >
                      <span className="text-[10px] font-bold text-emerald-500/60 border border-emerald-500/30 rounded px-1.5 py-0.5 tracking-wider">
                        {cert.tag}
                      </span>
                      <span className="text-sm text-gray-300 group-hover:text-emerald-300 transition-colors">
                        {cert.text}
                      </span>
                      <span className="ml-auto text-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        &gt;
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          className="mt-4 w-full max-w-xs mx-auto active:scale-95 transition-transform"
        >
          <GlassCard className="py-4 px-6">
            <div className="flex items-center justify-center gap-3 text-emerald-400/80">
              <span className="text-sm font-medium tracking-wide">
                {open ? "collapse --all" : "expand --all"}
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
      <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-emerald-500/5 rounded-full blur-3xl -z-10" />

      {/* Animations */}
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