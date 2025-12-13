import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[var(--primary)] font-semibold text-lg">Expertise</p>
        <h1 className="section-title">Technical Skills</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
          A comprehensive overview of the technologies and tools I've mastered over the years.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-12 mt-16">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="space-y-4">
            <h3 className="text-2xl font-semibold text-gradient">
              {category.replace(/_/g, " & ")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-[var(--primary)]/10 text-[var(--primary)] rounded-lg border border-[var(--primary)]/30 hover:border-[var(--primary)] hover:bg-[var(--primary)]/20 transition-all duration-300 text-sm font-medium cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="mt-20 pt-12 border-t border-[var(--border-color)]">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <h4 className="text-lg font-semibold text-[var(--primary)] mb-2">Backend</h4>
            <p className="text-[var(--text-tertiary)]">
              Expert in Python, FastAPI, and async architectures. Building scalable, production-grade backends.
            </p>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold text-[var(--primary)] mb-2">Machine Learning</h4>
            <p className="text-[var(--text-tertiary)]">
              PyTorch, TensorFlow, and LLM integration. Specializing in computer vision and geospatial ML.
            </p>
          </div>
          <div className="card">
            <h4 className="text-lg font-semibold text-[var(--primary)] mb-2">Infrastructure</h4>
            <p className="text-[var(--text-tertiary)]">
              Docker, Kubernetes, AWS, GCP. Proficient in DevOps and cloud-native deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
