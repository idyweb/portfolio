import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Skills</h1>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category}>
          <h3 className="text-xl font-semibold mb-2">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <span
                key={skill}
                className="border border-white/10 px-3 py-1 rounded text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
