import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="py-12 px-4 bg-background border-t border-border transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-foreground mb-1">
            Nguyen Hoang Lan
          </h2>
          <p className="text-muted-foreground font-mono text-sm">
            {t.hero.role}
          </p>
        </div>

        <div className="flex gap-4">
          <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com/Bobolan123" label="GitHub" />
          <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com/in/lannguyen124" label="LinkedIn" />
          <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:logannguyenlan@gmail.com" label="Email" />
        </div>

        <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm font-mono">
          <p>© {currentYear} - Nguyen Hoang Lan</p>
          <p className="italic opacity-70">"{t.footer.quote}"</p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2 rounded-lg bg-muted dark:bg-slate-900 border border-border dark:border-slate-800 text-muted-foreground hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
    >
      {icon}
    </a>
  );
}

