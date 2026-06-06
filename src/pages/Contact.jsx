import { useState } from "react";
import { Send, Mail, MapPin, Phone, Copy, Check } from "lucide-react";
import { profile } from "../data/profile";
import SocialLinks from "../components/ui/SocialLinks";
import SectionHeading from "../components/ui/SectionHeading";
import AnimatedSection from "../components/ui/AnimatedSection";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section-padding bg-surface">
      <div className="section-container">
        <AnimatedSection>
          <SectionHeading
            icon={Mail}
            title="Get In"
            highlight="Touch"
            subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
          />
        </AnimatedSection>

        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <AnimatedSection delay={0.1} className="lg:col-span-2">
            <div className="space-y-6">
              <div className="glass-card p-6">
                <h3 className="text-lg font-bold text-white">
                  Let's talk about your project
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  I'm currently available for freelance work and full-time
                  opportunities. Feel free to reach out through any channel.
                </p>
              </div>

              <div className="space-y-4">
                <button
                  onClick={handleCopyEmail}
                  className="glass-card flex w-full items-center gap-4 p-4 text-left transition-all hover:border-cyan-500/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                    {copied ? (
                      <Check size={18} className="text-emerald-400" />
                    ) : (
                      <Mail size={18} className="text-cyan-400" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="truncate text-sm font-medium text-gray-200">
                      {profile.email}
                    </p>
                  </div>
                  <Copy size={16} className="flex-shrink-0 text-gray-500" />
                </button>

                <div className="glass-card flex items-center gap-4 p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10">
                    <Phone size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-200">
                      {profile.phone}
                    </p>
                  </div>
                </div>

                <div className="glass-card flex items-center gap-4 p-4">
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

              <SocialLinks />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>

              <div className="mt-5">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition-colors focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/30"
                />
              </div>

              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
