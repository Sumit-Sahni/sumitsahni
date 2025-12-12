import Image from "next/image";
import React from "react";
import award from "../../../assets/me.png";

const Left = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 pt-10 pb-14 sticky top-0">
      {/* Profile Image */}
      <Image
        src={award}
        alt="Profile"
        className="
          w-40 h-40 rounded-full object-cover
          shadow-xl border border-white/20
          backdrop-blur-2xl
        "
      />

      {/* Name & Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Sumit Sahni</h2>
        <p className="text-gray-500 text-sm mt-1">
          Cybersecurity & Software Professional
        </p>

        {/* Premium Mini Glass Button */}
        <a
          href="https://drive.google.com/file/d/1Ni4juPbmGeDFoA1fjW_PSpS46HFF_vJ9/view?usp=sharing"
          target="_blank"
          className="
    inline-block mt-3 px-5 py-1.5 text-xs
    rounded-full font-medium
    bg-neutral-900/80 text-white
    border border-neutral-700
    backdrop-blur-xl
    shadow-sm shadow-black/40
    hover:bg-neutral-800/90 hover:shadow-black/60
    transition-all duration-300
  "
        >
          Download Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="flex gap-3">
        {[
          {
            href: "https://www.linkedin.com/in/sumit-sahni-852756204/",
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                <path
                  d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 
                0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 
                1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 
                7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 
                2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 
                2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"
                />
              </svg>
            ),
          },
          {
            href: "mailto:sumit.123sahni@gmail.com?subject=Hiring",
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#D14836">
                <path
                  d="M24 5.457v13.909c0 .904-.732 1.636-1.636 
                1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 
                1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 
                1.636-1.636h.909L12 11.71l9.455-7.889h.909A1.636 1.636 0 0 1 24 5.457z"
                />
              </svg>
            ),
          },
          {
            href: "https://github.com/Sumit-Sahni",
            icon: (
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#333">
                <path
                  d="M12 0C5.374 0 0 5.373 0 12 
                0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 
                1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 
                1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 
                0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 
                0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 
                5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 
                3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 
                3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 
                5.624-5.479 5.921.43.372.823 1.102.823 
                2.222v3.293c0 .319.192.694.801.576C20.566 
                21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
                />
              </svg>
            ),
          },
        ].map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/60 hover:bg-white shadow-sm
              transition backdrop-blur-md border border-white/30"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Certifications */}
      <div className="w-full px-4 flex flex-col gap-1 mt-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">
          Certifications
        </h3>

        {[
          {
            text: "CompTia Security+",
            link: "https://www.udemy.com/certificate/UC-7457ca37-4baa-437f-b078-a74931667ee7/",
          },
          {
            text: "CCNA 200-301",
            link: "https://www.udemy.com/certificate/UC-2c9eb698-7086-4d9f-9093-ec7435fb9680/",
          },
          {
            text: "Web-Dev Bootcamp 2021",
            link: "https://www.udemy.com/certificate/UC-f73ada88-8d74-45bd-9ccf-a717372163d9/",
          },
          {
            text: "College Project",
            link: "https://drive.google.com/file/d/1fYxtSDvl8sW5ePKUyCj22ESkiMMtSuyD/view",
          },
        ].map(({ text, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            className="text-blue-700 text-sm hover:underline hover:text-blue-900"
          >
            • {text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Left;
