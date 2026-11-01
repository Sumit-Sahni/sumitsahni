"use client";

import React from "react";

const REPO_URL = "https://github.com/Sumit-Sahni/K8s-Note-app";

const ProjectNotesContainer = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Notes App: Two Containers, GitHub Actions and Kubernetes
          </h2>
          <div>
            <a
              href={REPO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 text-sm sm:text-base hover:underline"
            >
              GitHub Link
            </a>
          </div>
        </div>

        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
          Built a two-tier notes app with a{" "}
          <span className="font-semibold">Next.js 16 frontend</span> and a
          separate <span className="font-semibold">Node.js backend</span>, each
          in its own container. A{" "}
          <span className="font-semibold">GitHub Actions pipeline</span> builds
          both images in parallel and publishes them to GHCR, and the app runs
          on a local Minikube cluster where the frontend reaches the backend by
          its Service name.
        </p>

        {/* Architecture */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs sm:text-sm text-gray-600">
          {["Browser", "Frontend (Next.js)", "Backend (API)"].map((step, i) => (
            <React.Fragment key={step}>
              {i > 0 && <span>→</span>}
              <span className="px-3 py-1 bg-gray-50 rounded-lg border border-gray-300">
                {step}
              </span>
            </React.Fragment>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Next.js",
            "Node.js",
            "Docker",
            "Docker Compose",
            "GitHub Actions",
            "GHCR",
            "Kubernetes",
            "Minikube",
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
              Containerised the frontend and backend separately with multi-stage,
              non-root Dockerfiles, and ran both locally with{" "}
              <code>docker compose</code> using service-name networking.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Wrote a GitHub Actions workflow with a matrix build that builds
              both images in parallel for Intel and ARM, then pushes them to
              GHCR tagged <code>latest</code> and with the commit SHA. Pull
              requests only build, so nothing is published until merge.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Deployed both services to Kubernetes: the backend as a private{" "}
              <code>ClusterIP</code> Service and the frontend as a 2-replica{" "}
              <code>NodePort</code> Service, with readiness probes and resource
              limits.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Updated and rolled back each service independently with{" "}
              <code>kubectl rollout restart</code> and commit-tagged images, and
              added Dependabot to keep actions and packages current.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectNotesContainer;