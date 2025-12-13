"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({ project }: any) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="block border border-white/10 rounded-lg p-6 hover:border-white/30 transition"
      >
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-400 mt-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4 text-xs text-gray-300">
          {project.stack.map((tech: string) => (
            <span
              key={tech}
              className="border border-white/10 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.div>
  );
}
