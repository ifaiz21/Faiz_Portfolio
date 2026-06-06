import { useState } from "react";
import { Code2 } from "lucide-react";
import { navLinks } from "../data/navigation";
import { profile } from "../data/profile";
import { useScrollSpy, scrollToSection } from "../hooks/useScrollSpy";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useScrollSpy(sectionIds);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-surface/80 backdrop-blur-xl">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="group flex items-center gap-2.5"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 transition-transform group-hover:scale-105">
              <Code2 size={18} className="text-white" />
            </div>
            <span className="hidden text-lg font-bold text-white sm:block">
              {profile.firstName}
              <span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:block" aria-label="Main navigation">
            <ul className="flex items-center gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                    className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === link.id
                        ? "text-cyan-400"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400 transition-all hover:bg-cyan-500/20 sm:inline-flex"
            >
              Resume
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-white/5 hover:text-white lg:hidden"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-surface/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="section-container py-4" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? "bg-cyan-500/10 text-cyan-400"
                      : "text-gray-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
