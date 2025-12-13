"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  // Use liveUrl if available, otherwise fall back to project detail page
  const href = project.liveUrl || `/projects/${project.slug}`;
  const isExternal = !!project.liveUrl;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        <div className="card-neo cursor-pointer group h-full flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gradient">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-[var(--muted)] flex-grow mb-4">
            {project.description}
          </p>

          {/* Metrics */}
          <div className="mb-6 space-y-2">
            {project.metrics.map((metric: string, i: number) => (
              <p key={i} className="text-sm text-[var(--muted)] flex items-start gap-3">
                <span className="text-[var(--neo-2)] font-bold">▸</span>
                <span>{metric}</span>
              </p>
            ))}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.stack.map((tech: string) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 bg-[rgba(0,245,255,0.06)] text-[var(--neo-1)] rounded-full border border-[rgba(0,245,255,0.12)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Arrow indicator - only show if there's a valid link */}
          {(project.liveUrl || project.slug) && (
            <div className="mt-6 flex items-center text-[var(--neo-1)] font-semibold group-hover:gap-2 transition-all">
              {project.liveUrl ? "View Live" : "View Project"}
              <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

