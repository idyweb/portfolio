import Reveal from "./components/Reveal";
import Link from "next/link";

export default function Home() {
  return (
    <Reveal>
      <section className="min-h-screen flex items-center pt-20">
        <div className="w-full">
          <div className="max-w-5xl mx-auto glass card-neo p-10 lg:p-16">
            <div className="flex flex-col lg:flex-row gap-8 lg:items-center">
              <div className="flex-1">
                <p className="text-sm text-muted-sm mb-3">Welcome — I'm</p>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gradient">
                  Idongesit Inyang
                </h1>

                <h2 className="mt-4 text-xl lg:text-2xl text-[var(--muted)] max-w-2xl">
                  I build production-ready systems for ML, cloud infrastructure and scalable backends.
                </h2>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="/projects">
                    <button className="btn-neo">View Projects</button>
                  </Link>

                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    <button className="btn-neo-outline">Download Resume</button>
                  </a>

                  <Link href="/contact">
                    <button className="btn-neo-outline">Get in Touch</button>
                  </Link>
                </div>
              </div>

              <div className="w-full lg:w-1/3">
                <div className="card-neo">
                  <p className="text-sm text-muted-sm">Selected stats</p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl font-bold neon">3+</p>
                      <p className="text-xs text-[var(--muted)]">Years</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl font-bold neon">10+</p>
                      <p className="text-xs text-[var(--muted)]">Projects</p>
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-lg md:text-xl font-bold neon">100%</p>
                      <p className="text-xs text-[var(--muted)] leading-tight">Satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}

