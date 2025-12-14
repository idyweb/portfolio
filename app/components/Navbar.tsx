"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="glass max-w-6xl mx-auto px-4 sm:px-8 py-3 flex justify-between items-center min-h-[64px]">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
        >
          Idyvalour.space
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/"
            className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            About
          </Link>
          <Link
            href="/experience"
            className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Experience
          </Link>
          <Link
            href="/projects"
            className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors rounded-lg hover:bg-[rgba(0,245,255,0.06)]"
          >
            Skills
          </Link>
          <Link href="/contact" className="ml-4">
            <button className="btn-neo">Contact</button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-[var(--muted)] hover:text-[var(--neo-1)]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div id="mobile-menu" className="md:hidden glass mx-4 mt-2 p-4 rounded-lg">
          <div className="flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)} className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] rounded-lg">Home</Link>
            <Link href="/about" onClick={() => setOpen(false)} className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] rounded-lg">About</Link>
            <Link href="/experience" onClick={() => setOpen(false)} className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] rounded-lg">Experience</Link>
            <Link href="/projects" onClick={() => setOpen(false)} className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] rounded-lg">Projects</Link>
            <Link href="/skills" onClick={() => setOpen(false)} className="px-3 py-2 text-[var(--muted)] hover:text-[var(--neo-1)] rounded-lg">Skills</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-2">
              <button className="btn-neo w-full">Contact</button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

