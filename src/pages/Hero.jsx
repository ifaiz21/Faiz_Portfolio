import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "../components/ui/SocialLinks";
import { scrollToSection } from "../hooks/useScrollSpy";

function Typewriter({ words, speed = 80 }) {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[index];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(currentWord.substring(0, displayText.length + 1));
          if (displayText === currentWord) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(currentWord.substring(0, displayText.length - 1));
          if (displayText === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? speed / 2 : speed
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, index, words, speed]);

  return (
    <span className="font-mono text-cyan-400">
      {displayText}
      <span className="animate-blink text-cyan-400">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-surface"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="section-container relative z-10 w-full pt-28 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-center lg:text-left"
          >
            {profile.openToWork && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm font-medium text-emerald-400"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to Work
              </motion.div>
            )}

            <p className="mb-3 font-mono text-sm uppercase tracking-widest text-gray-500">
              Hello, World! I'm
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Muhammad{" "}
              <span className="gradient-text">{profile.firstName}</span>
            </h1>

            <div className="mt-4 text-xl sm:text-2xl lg:text-3xl">
              <Typewriter words={profile.roles} />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg lg:mx-0">
              {profile.tagline}. Based in{" "}
              <span className="inline-flex items-center gap-1 text-gray-300">
                <MapPin size={14} className="text-cyan-400" />
                {profile.location}
              </span>
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap justify-center gap-8 lg:justify-start">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <button
                onClick={() => scrollToSection("work")}
                className="btn-primary"
              >
                View Projects
                <ArrowRight size={18} />
              </button>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={18} />
                Download Resume
              </a>
            </div>

            <SocialLinks className="mt-10 justify-center lg:justify-start" />
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 blur-2xl" />
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 opacity-60" />

              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-surface sm:h-72 sm:w-72 lg:h-80 lg:w-80">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden h-full w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-violet-700">
                  <span className="text-6xl font-bold text-white">MF</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <button
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to about section"
            className="flex flex-col items-center gap-2 text-gray-500 transition-colors hover:text-cyan-400"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-5 rounded-full border-2 border-current p-1">
              <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-current" />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
