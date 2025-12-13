import { projects } from "@/data/projects";
import ProjectCard from "../components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[var(--primary)] font-semibold text-lg">Portfolio</p>
        <h1 className="section-title">Featured Projects</h1>
        <p className="text-xl text-[var(--text-secondary)] max-w-3xl">
          Here are some of my recent projects. Each showcases different aspects of my expertise in backend development, machine learning, and cloud infrastructure.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-20 pt-12 border-t border-[var(--border-color)] text-center">
        <p className="text-[var(--text-secondary)] mb-6">
          Want to see more? Check out my GitHub for additional projects and contributions.
        </p>
        <a
          href="https://github.com/idyvalour"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-block"
        >
          Visit GitHub
        </a>
      </div>
    </section>
  );
}

