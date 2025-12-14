"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  // Use liveUrl if available, otherwise fall back to project detail page
  const href = project.liveUrl || `/projects/${project.slug}`;
  const isExternal = !!project.liveUrl;

  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
      <Link href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noopener noreferrer" : undefined}>
        <div className="card-neo cursor-pointer group h-full flex flex-col md:flex-row gap-4">
          {/* Content column */}
          <div className="flex-1">
            <div className="mb-2">
              <h3 className="text-lg md:text-2xl font-bold text-gradient">
                {project.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-[var(--muted)] mb-4">
              {project.description}
            </p>

            {/* Metrics */}
            <div className="mb-4 space-y-2">
              {project.metrics.map((metric: string, i: number) => (
                <p key={i} className="text-sm text-[var(--muted)] flex items-start gap-3">
                  <span className="text-[var(--neo-2)] font-bold">▸</span>
                  <span>{metric}</span>
                </p>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs px-3 py-1 bg-[rgba(0,245,255,0.06)] text-[var(--neo-1)] rounded-full border border-[rgba(0,245,255,0.12)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA column - keeps CTA and compact spacing on wider screens */}
          <div className="md:w-44 flex flex-col justify-between">
            {(project.liveUrl || project.slug) && (
              <div className="mt-4 md:mt-0 flex items-center text-[var(--neo-1)] font-semibold group-hover:gap-2 transition-all">
                {project.liveUrl ? "View Live" : "View Project"}
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

