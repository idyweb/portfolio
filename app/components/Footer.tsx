"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-color)] bg-[var(--bg-secondary)]/50 backdrop-blur mt-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Idongesit</h3>
            <p className="text-[var(--text-tertiary)] text-sm">
              Building production-ready systems with Python, ML, and cloud infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
              <li>
                <Link href="/about" className="hover:text-[var(--primary)] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[var(--primary)] transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/experience" className="hover:text-[var(--primary)] transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[var(--primary)] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[var(--text-tertiary)]">
              <li>
                <a
                  href="https://github.com/idyvalour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--primary)] transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h4 className="font-semibold text-[var(--text-primary)] mb-4">Get In Touch</h4>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">
              Interested in working together? Let's talk.
            </p>
            <Link href="/contact" className="btn-primary text-sm inline-block">
              Send Email
            </Link>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-[var(--border-color)] pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-[var(--text-tertiary)]">
            <p>&copy; {currentYear} Idongesit Inyang. All rights reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[var(--primary)] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[var(--primary)] transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
