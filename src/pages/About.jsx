import { User, Mail, MapPin, Download } from "lucide-react";
import { profile } from "../data/profile";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";


export default function About() {
  return (
    <section id="about" className="section-padding relative bg-surface-raised">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="section-container relative">
        <AnimatedSection>
          <SectionHeading
            icon={User}
            title="About"
            highlight="Me"
            subtitle={profile.headline}
          />
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-5 lg:gap-16">
          {/* Image */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="group relative mx-auto max-w-sm">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 opacity-40 blur transition-opacity group-hover:opacity-60" />
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-surface-card">
                <img
                  src={profile.avatarUrl}
                  alt={profile.name}
                  className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div className="hidden aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-cyan-600 to-violet-700">
                  <span className="text-7xl font-bold text-white">MF</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Hi, I'm{" "}
              <span className="gradient-text">{profile.firstName}</span> — a{" "}
              {profile.title}
            </h3>

            <p className="mt-6 text-base leading-relaxed text-gray-400">
              {profile.bio}
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              {profile.bioExtended}
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-400">
              {profile.bioClosing}
            </p>

            {/* Key Skills */}
            <div className="mt-8">
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                Key Skills
              </h4>
              <div className="grid gap-4 sm:grid-cols-2">
                {profile.keySkills.map((group) => (
                  <div key={group.category} className="glass-card p-4">
                    <p className="mb-2 text-sm font-semibold text-white">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span key={item} className="tech-tag">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="glass-card flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Mail size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm font-medium text-gray-200 hover:text-cyan-400 transition-colors"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
              <div className="glass-card flex items-center gap-3 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                  <MapPin size={18} className="text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">Location</p>
                  <p className="text-sm font-medium text-gray-200">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8"
            >
              <Download size={18} />
              Download Resume
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
