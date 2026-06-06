import { ChevronRight, Heart } from "lucide-react";
import { navLinks } from "../data/navigation";
import { profile } from "../data/profile";
import SocialLinks from "../components/ui/SocialLinks";
import { scrollToSection } from "../hooks/useScrollSpy";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleQuickLinkClick = (e, sectionId) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <footer className="border-t border-white/5 bg-surface-raised pt-16 pb-8">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white">
              {profile.firstName}
              <span className="text-cyan-400">.</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {profile.title} building modern web applications. Let's create
              something amazing together.
            </p>
            <SocialLinks size="sm" className="mt-6" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleQuickLinkClick(e, link.id)}
                    className="group flex items-center text-sm text-gray-400 transition-colors hover:text-cyan-400"
                  >
                    <ChevronRight
                      size={14}
                      className="mr-1 text-cyan-400 opacity-0 transition-opacity group-hover:opacity-100"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="transition-colors hover:text-cyan-400"
                >
                  {profile.email}
                </a>
              </li>
              <li>{profile.phone}</li>
              <li>{profile.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-gray-500">
            © {currentYear} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-sm text-gray-500">
            Built with{" "}
            <Heart size={14} className="text-red-400" fill="currentColor" />{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
