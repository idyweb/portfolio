import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-white/10 sticky top-0 bg-black/95 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-200">
          idyvalour.space
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
            About
          </Link>
          <Link href="/experience" className="text-gray-300 hover:text-white transition-colors duration-200">
            Experience
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
            Projects
          </Link>
          <Link href="/skills" className="text-gray-300 hover:text-white transition-colors duration-200">
            Skills
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 px-4 py-2 border border-white/20 rounded hover:border-white/50">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
