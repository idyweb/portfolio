import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-sm text-muted-sm">Portfolio</p>
        <h1 className="text-gradient text-4xl font-bold">Featured Projects</h1>
        <p className="text-[var(--muted)] max-w-2xl">
          Highlights of work across backend systems, ML pipelines, and cloud infrastructure.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center pt-12">
        <p className="text-[var(--muted)] mb-6">
          Interested in more? Explore my full work on GitHub.
        </p>
        <a
          href="https://github.com/idyweb"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="btn-neo">View GitHub Profile</button>
        </a>
      </div>
    </section>
  );
}

