import { GraduationCap } from "lucide-react";
import { educationData } from "../data/education";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";

export default function Education() {
  return (
    <section id="education" className="section-padding bg-surface-raised">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            icon={GraduationCap}
            title="My"
            highlight="Education"
            subtitle="Academic foundation in computer science and software engineering."
          />
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl gap-6">
          {educationData.map((edu, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <article className="glass-card group flex flex-col items-center gap-6 p-6 transition-all duration-300 hover:border-cyan-500/20 sm:flex-row sm:p-8">
                <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3">
                  <img
                    src={edu.logoUrl}
                    alt={`${edu.institution} logo`}
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="hidden h-full w-full items-center justify-center">
                    <GraduationCap size={32} className="text-cyan-400" />
                  </div>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
                    <h3 className="text-xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                      {edu.status}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-medium text-cyan-400">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    {edu.location} · {edu.date}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
