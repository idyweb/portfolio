"use client";

import { experience } from "../../data/experience";
import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <div className="space-y-12">
      {experience.map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="border-l-2 border-[var(--primary)] pl-8 space-y-3"
        >
          {/* Job Title and Company */}
          <div>
            <h3 className="text-2xl font-bold text-[var(--primary)]">
              {job.role}
            </h3>
            <p className="text-lg text-[var(--text-primary)] font-semibold mt-1">
              {job.company}
            </p>
          </div>

          {/* Location and Period */}
          <p className="text-sm text-[var(--text-tertiary)]">
            {job.location} • {job.period}
          </p>

          {/* Highlights */}
          <ul className="space-y-2 mt-4">
            {job.highlights.map((point, i) => (
              <li
                key={i}
                className="text-[var(--text-secondary)] flex gap-3 text-sm leading-relaxed"
              >
                <span className="text-[var(--primary)] font-bold mt-1">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
