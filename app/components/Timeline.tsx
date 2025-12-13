"use client";

import { experience } from "../../data/experience";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Timeline() {
  const [expanded, setExpanded] = useState(false);
  const visibleCount = expanded ? experience.length : 3;

  return (
    <div className="space-y-6">
      {experience.slice(0, visibleCount).map((job, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="card-neo"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-3">
            <div>
              <h3 className="text-xl font-bold text-gradient">{job.role}</h3>
              <p className="text-[var(--neo-1)] font-semibold mt-1">
                {job.company}
              </p>
            </div>
            <p className="text-xs text-[var(--muted)] whitespace-nowrap">
              {job.period}
            </p>
          </div>

          <p className="text-xs text-[var(--muted)] mb-3">
            {job.location}
          </p>

          <ul className="space-y-2">
            {job.highlights.map((point, i) => (
              <li
                key={i}
                className="text-[var(--muted)] flex gap-3 text-sm leading-relaxed"
              >
                <span className="text-[var(--neo-2)] font-bold flex-shrink-0">▸</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}

      {experience.length > 3 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="btn-neo-outline"
          >
            {expanded ? "Show Less" : `Show ${experience.length - 3} More`}
          </button>
        </div>
      )}
    </div>
  );
}
