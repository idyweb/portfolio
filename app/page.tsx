import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <Reveal>
      <section className="space-y-12">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Idongesit Inyang
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl">
            Backend Developer building production-ready systems with FastAPI, PyTorch, and cloud infrastructure.
          </p>

          <div className="flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-white text-black rounded-md font-medium"
            >
              View Projects
            </a>

            <a
              href="/resume"
              className="px-6 py-3 border border-white/20 rounded-md"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
