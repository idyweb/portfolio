import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass max-w-6xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Idongesit
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-2">
          <Link
            href="/"
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/10"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/10"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/10"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/10"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="px-4 py-2 text-[var(--text-secondary)] hover:text-[var(--primary)] transition-colors rounded-lg hover:bg-[var(--primary)]/10"
          >
            Skills
          </Link>
          <Link href="/contact" className="ml-2">
            <button className="btn-neo">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

