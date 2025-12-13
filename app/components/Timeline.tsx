import { experience } from "../../data/experience";

export default function Timeline() {
  return (
    <div className="space-y-12">
      {experience.map((job, index) => (
        <div
          key={index}
          className="border-l border-white/20 pl-6 space-y-2"
        >
          <h3 className="text-xl font-semibold text-neon-accent neon-glow">
            {job.role} · {job.company}
          </h3>

          <p className="text-sm text-neon-muted">
            {job.location} · {job.period}
          </p>

          <ul className="list-disc list-inside text-neon-muted space-y-1">
            {job.highlights.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
