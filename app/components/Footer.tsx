"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/idyweb", icon: "GH" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/idongesit/", icon: "LI" },
    { name: "Email", url: "mailto:hello@idyvalour.space", icon: "✉" },
  ];

  return (
    <footer className="glass card-neo rounded-none mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="mb-8 pb-8 border-b border-[rgba(255,255,255,0.06)]">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Brand & Social */}
            <div>
              <h3 className="text-2xl font-bold text-gradient mb-4">Idongesit</h3>
              <p className="text-[var(--muted)] text-sm mb-6">
                Building production-ready systems with Python, ML, and cloud infrastructure.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target={link.url.startsWith("mailto") ? undefined : "_blank"}
                    rel={link.url.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    className="w-10 h-10 flex items-center justify-center bg-[rgba(0,245,255,0.06)] border border-[rgba(0,245,255,0.12)] rounded-lg text-[var(--neo-1)] hover:border-[var(--neo-1)] hover:bg-[rgba(0,245,255,0.1)] transition-all duration-300"
                    title={link.name}
                  >
                    <span className="text-xs font-bold">{link.icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Nav */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-bold text-[var(--neo-1)] mb-3">Navigation</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/experience" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      Experience
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--neo-1)] mb-3">Work</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/projects" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/skills" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      Skills
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-bold text-[var(--neo-1)] mb-3">Connect</h4>
                <ul className="space-y-2">
                  <li>
                    <Link href="/contact" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="https://github.com/idyweb" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--muted)] hover:text-[var(--neo-1)] transition-colors">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[var(--muted)]">
          <p>&copy; {currentYear} Idongesit Inyang. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
