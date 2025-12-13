"use client";

import { experience } from "@/data/experience";
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
          transition={{ duration: 0.5 }}
          className="border-l border-white/20 pl-6 space-y-2"
        >
          <h3 className="text-xl font-semibold">
            {job.role} · {job.company}
          </h3>

          <p className="text-sm text-gray-400">
            {job.location} · {job.period}
          </p>

          <ul className="list-disc list-inside text-gray-300 space-y-1">
            {job.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
