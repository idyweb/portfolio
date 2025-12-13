import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass max-w-6xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center min-h-[64px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Idongesit.dev
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="px-4 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Skills
          </Link>
          <Link href="/contact" className="ml-4">
            <button className="btn-neo">Contact</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

