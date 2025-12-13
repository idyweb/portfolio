import Timeline from "../components/Timeline";

export default function Experience() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[var(--primary)] font-semibold text-lg">Background</p>
        <h1 className="section-title">Work Experience</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
          Over 3 years of professional experience building scalable systems and leading technical projects.
        </p>
      </div>

      {/* Timeline */}
      <div className="mt-16">
        <Timeline />
      </div>
    </section>
  );
}

