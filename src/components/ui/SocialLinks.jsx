import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { socialLinks } from "../../data/profile";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
  Instagram: Instagram,
  WhatsApp: MessageCircle,
};

export default function SocialLinks({ size = "md", className = "" }) {
  const sizeClasses = {
    sm: "h-9 w-9",
    md: "h-11 w-11",
    lg: "h-12 w-12",
  };

  const iconSizes = {
    sm: 18,
    md: 20,
    lg: 22,
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = iconMap[link.name];
        if (!Icon) return null;

        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={`${sizeClasses[size]} flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10`}
          >
            <Icon size={iconSizes[size]} />
          </a>
        );
      })}
    </div>
  );
}
