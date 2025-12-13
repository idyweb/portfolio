import { skills } from "@/data/skills";
import TechIcon from "../components/TechIcon";

export default function Skills() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-sm text-muted-sm">Expertise</p>
        <h1 className="text-gradient text-4xl font-bold">Technical Expertise</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          A comprehensive overview of the technologies and tools I've mastered.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="card-neo">
            <h3 className="text-lg font-bold text-gradient mb-4">
              {category.replace(/_/g, " & ")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-[rgba(0,245,255,0.06)] text-[var(--neo-1)] rounded-md border border-[rgba(0,245,255,0.12)] text-sm font-medium hover:border-[rgba(0,245,255,0.3)] transition-all duration-300 flex items-center gap-2"
                >
                  <TechIcon tech={skill} />
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
