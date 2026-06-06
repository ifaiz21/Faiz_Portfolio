import { Briefcase } from "lucide-react";
import { experienceData } from "../data/experience";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            icon={Briefcase}
            title="Work"
            highlight="Experience"
            subtitle="My professional journey building web applications and delivering solutions."
          />
        </AnimatedSection>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent sm:block" />

          <div className="space-y-8">
            {experienceData.map((exp, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <article className="relative sm:pl-16">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-6 hidden h-4 w-4 -translate-x-1/2 rounded-full border-2 border-cyan-400 bg-surface sm:block" />

                  <div className="glass-card p-6 transition-all duration-300 hover:border-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/5 sm:p-8">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <span className="tech-tag mb-3 inline-block text-cyan-400">
                          {exp.type}
                        </span>
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-gray-400">
                          {exp.company}
                        </p>
                      </div>
                      <time className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-mono text-gray-400">
                        {exp.period}
                      </time>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-gray-400">
                      {exp.description}
                    </p>

                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400" />
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {exp.tech.map((t) => (
                        <span key={t} className="tech-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
