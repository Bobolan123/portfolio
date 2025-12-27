import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            Nguyen Hoang Lan
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Software Engineer
          </p>
        </div>

        <div className="flex gap-6">
          <SocialIcon icon={<Github className="w-5 h-5" />} href="https://github.com/Bobolan123" label="GitHub" />
          <SocialIcon icon={<Linkedin className="w-5 h-5" />} href="https://linkedin.com/in/lannguyen124" label="LinkedIn" />
          <SocialIcon icon={<Mail className="w-5 h-5" />} href="mailto:logannguyenlan@gmail.com" label="Email" />
        </div>

        <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
          <div className="flex flex-col items-center gap-1 italic text-center">
            <p>© {currentYear} - Nguyen Hoang Lan</p>
            <p>"Talk is cheap. Show me the code."</p>
          </div>
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
      className="p-3 rounded-xl bg-gray-50 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      {icon}
    </a>
  );
}

