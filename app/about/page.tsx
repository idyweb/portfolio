import Link from "next/link";

export default function About() {
  return (
    <section className="space-y-12 max-w-4xl">
      {/* Header */}
      <div className="space-y-4">
        <p className="text-[var(--primary)] font-semibold text-lg">About Me</p>
        <h1 className="section-title">Who I Am</h1>
      </div>

      {/* Main Content */}
      <div className="space-y-8 text-lg text-[var(--text-secondary)] leading-relaxed">
        <p>
          I'm a backend engineer passionate about building production-ready systems that scale. With over 3 years
          of professional experience, I've worked on everything from machine learning pipelines to distributed
          systems infrastructure.
        </p>

        <p>
          My journey started with curiosity about how complex systems work. Today, I specialize in Python, FastAPI,
          PyTorch, and cloud infrastructure. I love solving difficult problems and mentoring junior developers.
        </p>

        <h2 className="text-3xl font-bold text-[var(--text-primary)]">What I Do</h2>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Backend Development</h3>
            <p className="text-[var(--text-secondary)]">
              Building scalable APIs and microservices with FastAPI, handling complex business logic, and
              optimizing for performance.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">ML & AI</h3>
            <p className="text-[var(--text-secondary)]">
              Developing machine learning models, from computer vision to NLP. Integrating LLMs and deploying ML
              systems to production.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Cloud Infrastructure</h3>
            <p className="text-[var(--text-secondary)]">
              Designing and deploying systems on AWS, GCP, and Kubernetes. Expertise in Docker, CI/CD, and
              DevOps practices.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold text-[var(--primary)] mb-3">Problem Solving</h3>
            <p className="text-[var(--text-secondary)]">
              Tackling complex technical challenges, optimizing databases, and designing scalable architectures
              that support growth.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[var(--text-primary)] mt-12">Beyond Code</h2>

        <p>
          When I'm not coding, I enjoy exploring new technologies, contributing to open source, and mentoring
          upcoming developers. I'm passionate about continuous learning and staying at the forefront of
          backend and ML engineering.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-16 pt-12 border-t border-[var(--border-color)] flex gap-4">
        <Link href="/contact" className="btn-primary">
          Get In Touch
        </Link>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

