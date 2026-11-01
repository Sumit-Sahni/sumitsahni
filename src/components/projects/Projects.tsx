" use client";

import React from "react";

const Projects = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
     
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-4">
 <h2 className="text-xl sm:text-2xl font-semibold ">
          Vulnerable Web App with Centralized Log Monitoring
        </h2>
        <div>
            {/* <a href="https://github.com/Sumit-Sahni/Threat-Analysis" className=" text-blue-700">Link</a> */}
        </div>
        </div>
       

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          Built a deliberately vulnerable web application using{" "}
          <span className="font-semibold">Next.js</span> to simulate security
          issues like reflected XSS and insecure query handling. Integrated
          centralized logging using{" "}
          <span className="font-semibold">
            Filebeat → Elasticsearch → Kibana
          </span>{" "}
          for real-time monitoring and visualization.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Next.js",
            "Node.js",
            "Pino",
            "Filebeat",
            "Elasticsearch",
            "Kibana",
            "Docker",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs sm:text-sm bg-gray-100 text-gray-700 rounded-full border border-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bullet Points */}
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Developed multiple vulnerable API endpoints (<code>/api/search</code>,{" "}
              <code>/api/greet</code>) to simulate security threats.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Implemented structured logging with JSON format using Pino.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Configured Filebeat to ship logs to Elasticsearch and visualized
              them in Kibana.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Tested with curl payloads and observed real-time ingestion in Kibana.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;
