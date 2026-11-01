"use client";

import React from "react";

type SkillGroup = { title: string; skills: string[] };

const GROUPS: SkillGroup[] = [
  {
    title: "Cloud Platforms",
    skills: ["AWS", "Cloud Infrastructure", "IAM", "VPC", "Subnets", "Security Groups"],
  },
  {
    title: "DevOps & CI/CD",
    skills: ["CI/CD Pipelines", "Git", "GitHub", "Build and Deployment Automation"],
  },
  {
    title: "Infrastructure as Code (IaC)",
    skills: ["Terraform", "Infrastructure Provisioning", "Configuration Management"],
  },
  {
    title: "Containers & Orchestration",
    skills: ["Docker", "Kubernetes"],
  },
  {
    title: "Operating Systems & Scripting",
    skills: ["Linux", "Bash/Shell Scripting", "C++"],
  },
  {
    title: "Networking",
    skills: ["TCP/IP", "OSI Model", "UDP", "Subnetting", "DNS", "VPC Networking", "OSPF", "BGP"],
  },
  {
    title: "Security",
    skills: ["IAM", "Security Groups", "Firewalls", "VPN", "Zero Trust Architecture (ZTA)"],
  },
  {
    title: "Monitoring & Troubleshooting",
    skills: ["Wireshark", "Linux Troubleshooting", "Log Analysis", "Incident Diagnosis"],
  },
  {
    title: "APIs & Data Formats",
    skills: ["REST APIs", "JSON", "CRUD Operations"],
  },
  {
    title: "AI-Assisted DevOps",
    skills: ["AI-Assisted Troubleshooting", "Infrastructure Code Generation and Review", "CI/CD Debugging"],
  },
];

const SkillsSection = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 sm:p-8">
       
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-gray-200 bg-gray-50 p-4"
            >
              <h3 className="text-sm sm:text-base font-semibold mb-3">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs sm:text-sm bg-white text-gray-700 rounded-md border border-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;