import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project, featured = false }) {
  const hasImage = project.imageUrl;

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card transition-all duration-500 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 ${
        featured ? "md:col-span-1" : ""
      }`}
    >
      {/* Image / Gradient Header */}
      <div className={`relative h-48 overflow-hidden ${featured ? "h-56" : "h-44"}`}>
        {hasImage ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} ${hasImage ? "hidden" : "flex"} items-center justify-center`}
        >
          <span className="text-4xl font-bold text-white/90">
            {project.title.charAt(0)}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-surface-card via-surface-card/60 to-transparent" />

        {project.status && (
          <span className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-cyan-300 backdrop-blur-sm">
            {project.status}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {project.category && (
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-cyan-400">
            {project.category}
          </p>
        )}
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
          {project.title}
        </h3>
        {project.subtitle && (
          <p className="mt-1 text-sm text-gray-400">{project.subtitle}</p>
        )}
        <p className="mt-3 text-sm leading-relaxed text-gray-400 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-5 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
            >
              <Github size={16} />
              Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-cyan-400"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
