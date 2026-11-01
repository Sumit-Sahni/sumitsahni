"use client";

import React from "react";

// Change this to your real repo name for the mini project
const REPO_URL = "https://github.com/Sumit-Sahni/mini-k8s";

const ProjectKubernetesMini = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Kubernetes Mini Demo: Load Balancing and Self-Healing
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
          Built a small dependency-free{" "}
          <span className="font-semibold">Node.js</span> app that makes
          Kubernetes visible: each pod answers with its own colour, so traffic
          spreading across replicas can be seen live. Images are built and
          published by{" "}
          <span className="font-semibold">GitHub Actions → GHCR</span>, and the
          app runs on a local Minikube cluster.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Node.js",
            "Docker",
            "Kubernetes",
            "Minikube",
            "GitHub Actions",
            "GHCR",
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
              Deployed a 3-replica Deployment behind a NodePort Service with a
              readiness probe, using a single commented <code>k8s.yaml</code>.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Practised rolling updates and rollbacks with{" "}
              <code>kubectl set image</code> and <code>rollout undo</code>,
              using versioned image tags.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Showed self-healing by crashing a pod from the UI and watching
              Kubernetes replace it without downtime.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Set up a short GitHub Actions workflow that builds a multi-arch
              image and pushes it to GitHub Container Registry on every push.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectKubernetesMini;