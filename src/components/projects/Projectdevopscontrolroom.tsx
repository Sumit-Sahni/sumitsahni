"use client";

import React from "react";

// Change this if your repo name is different
const REPO_URL = "https://github.com/Sumit-Sahni/K8s-project";

const ProjectDevOpsControlRoom = () => {
  return (
    <div className="px-4 py-8 max-w-5xl mx-auto">
      {/* Card */}
      <div className="bg-white shadow-lg rounded-2xl border border-gray-200 p-6 sm:p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            DevOps Control Room: Next.js on Kubernetes with CI/CD
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
          Built a <span className="font-semibold">Next.js</span> dashboard that
          shows Kubernetes working in real time: which pod answers each request,
          how traffic is balanced, and how the cluster recovers when a pod is
          crashed on purpose. Shipped through a{" "}
          <span className="font-semibold">
            GitHub Actions → Trivy scan → GHCR → Kubernetes
          </span>{" "}
          pipeline with zero-downtime rolling updates.
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {[
            "Next.js",
            "TypeScript",
            "Docker",
            "Kubernetes",
            "Minikube",
            "Kustomize",
            "GitHub Actions",
            "Trivy",
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
              Wrote a multi-stage, non-root Dockerfile and built multi-arch
              (amd64 and arm64) images in CI after diagnosing a{" "}
              <code>no match for platform</code> pull error from pod events.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Configured a 3-replica Deployment with liveness, readiness and
              startup probes, resource limits, a ConfigMap, the Downward API
              and a PodDisruptionBudget.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Demonstrated self-healing: crashing a pod from the UI and watching
              Kubernetes restart it while the other replicas kept serving.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-green-600 text-lg">✓</span>
            <span className="text-sm sm:text-base">
              Built a CI/CD pipeline that type-checks, builds, scans the image
              with Trivy before pushing, and commits the new image tag back to
              Git for deployment.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDevOpsControlRoom;