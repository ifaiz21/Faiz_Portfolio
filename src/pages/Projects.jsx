import { FolderGit2 } from "lucide-react";
import { featuredProjects, personalProjects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";

export default function Projects() {
  return (
    <section id="work" className="section-padding bg-surface-raised">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-10" />

      <div className="section-container relative">
        <AnimatedSection>
          <SectionHeading
            icon={FolderGit2}
            title="Featured"
            highlight="Projects"
            subtitle="A selection of projects showcasing my full-stack development skills."
          />
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <ProjectCard project={project} featured />
            </AnimatedSection>
          ))}
        </div>

        {/* Personal Projects */}
        <AnimatedSection delay={0.2}>
          <h3 className="mb-8 mt-20 text-center text-2xl font-bold text-white">
            Other <span className="gradient-text">Projects</span>
          </h3>
        </AnimatedSection>

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {personalProjects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.08}>
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
