import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section className="space-y-8">
      <h1 className="text-4xl font-bold">Projects</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
