import { motion } from "framer-motion";
import { Wrench } from "lucide-react";
import { skillCategories, skillTags } from "../data/skills";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";

function SkillBar({ name, level, delay }) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-gray-200">{name}</span>
        <span className="font-mono text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            icon={Wrench}
            title="Skills &"
            highlight="Technologies"
            subtitle="Technologies I work with to bring ideas to life."
          />
        </AnimatedSection>

        {/* Skill Tags Cloud */}
        <AnimatedSection delay={0.1}>
          <div className="mx-auto mb-14 flex max-w-3xl flex-wrap justify-center gap-3">
            {skillTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/10 hover:text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill Categories with Progress Bars */}
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
          {skillCategories.map((category, catIndex) => (
            <AnimatedSection key={category.category} delay={catIndex * 0.1}>
              <div className="glass-card h-full p-6 sm:p-8">
                <h3 className="mb-6 text-lg font-bold text-white">
                  {category.category}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={catIndex * 0.1 + skillIndex * 0.05}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
