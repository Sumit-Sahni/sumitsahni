import Image from "next/image";
import React from "react";
import award from "../../../assets/me.png";
import { Linkedin, Mail, Github } from "lucide-react";

const Left = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 pt-10 pb-14 sticky top-0">

      {/* Profile Image */}
      <Image
        src={award}
        alt="Profile"
        className="w-40 h-40 rounded-full object-cover shadow-lg border border-gray-200"
      />

      {/* Name & Title */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold tracking-tight">Sumit Sahni</h2>
        <p className="text-gray-600 text-sm mt-1">
          Cybersecurity & Software Professional
        </p>

        <span className="inline-block mt-3 px-4 py-1.5 text-sm bg-green-100 text-green-700 rounded-full font-medium shadow-sm">
          Open To Work
        </span>
      </div>

      {/* Social Icons */}
      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/sumit-sahni-852756204/"
          target="_blank"
          className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition-colors"
        >
          <Linkedin className="w-5 h-5" />
        </a>

        <a
          href="mailto:sumit.123sahni@gmail.com?subject=Hiring"
          className="p-2 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/Sumit-Sahni"
          target="_blank"
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-800 hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
        </a>
      </div>

      {/* Certifications */}
      <div className="w-full px-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold text-gray-700 mb-1">Certifications</h3>

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

      {/* Resume Button */}
      <a
        href="https://drive.google.com/file/d/1Ni4juPbmGeDFoA1fjW_PSpS46HFF_vJ9/view?usp=sharing"
        target="_blank"
        className="mt-4 px-6 py-2.5 text-sm font-medium rounded-full text-white 
        bg-gradient-to-r from-cyan-600 to-gray-700 hover:opacity-90 shadow-md transition"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Left;
