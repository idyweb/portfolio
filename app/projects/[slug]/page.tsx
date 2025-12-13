import { projects } from "@/data/projects";

type Props = {
  params: { slug: string };
};

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return <p>Project not found</p>;

  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">{project.title}</h1>

      <p className="text-gray-400 max-w-2xl">
        {project.description}
      </p>

      <div>
        <h3 className="text-xl font-semibold mb-2">Key Metrics</h3>
        <ul className="list-disc list-inside text-gray-300">
          {project.metrics.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border border-white/10 px-2 py-1 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
