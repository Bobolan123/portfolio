import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 px-4 pt-32 pb-20 transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/10 dark:bg-blue-600/10 rounded-full blur-[100px]"
        />
        <div
          className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full p-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-2xl relative group"> 
            <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800 relative z-10">
              <img 
                src="/src/public/avatar.jpg" 
                alt="Nguyen Hoang Lan" 
                className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 pb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Nguyen Hoang Lan
          </h1>

          <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-8">
             Software Engineer
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Final-year Computing student at the University of Greenwich with a solid foundation in building scalable web applications. 
            Eager to apply practical experience and end-to-end development skills to contribute to innovative projects.
          </p>

          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <ContactItem icon={<Mail className="w-5 h-5" />} text="logannguyenlan@gmail.com" />
            <ContactItem icon={<Phone className="w-5 h-5" />} text="+84 778 900 551" />
            <ContactItem icon={<MapPin className="w-5 h-5" />} text="Da Nang, Viet Nam" />
          </div>

          <div className="flex justify-center gap-6">
            <SocialLink icon={<Github className="w-6 h-6" />} href="https://github.com/Bobolan123" label="GitHub" />
            <SocialLink icon={<Linkedin className="w-6 h-6" />} href="https://linkedin.com/in/lannguyen124" label="LinkedIn" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 transition-all duration-300 group">
      <span className="text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{icon}</span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

function SocialLink({ icon, href, label }: { icon: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-14 h-14 rounded-2xl bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
    >
      {icon}
    </a>
  );
}
