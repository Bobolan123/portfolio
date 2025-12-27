import React from "react";
import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github, Code2, Cpu } from "lucide-react";

const projectsData = [
  {
    title: "E-Learning Platform (FYP)",
    description: "A full-stack educational platform featuring RBAC, AI-powered support, and advanced search capabilities.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "MongoDB", "Elasticsearch"],
    github: "https://github.com/Bobolan123/edu-be"
  },
  {
    title: "URL Shortener (.NET)",
    description: "A robust URL shortening service built with ASP.NET Core MVC, featuring database integration and Docker support.",
    technologies: ["ASP.NET Core", "C#", "PostgreSQL", "Entity Framework", "Docker"],
    github: "https://github.com/Bobolan123/amd-dotnet"
  },
  {
    title: "SHB Football Club",
    description: "Ticketing and fan engagement platform with optimized UI and secure financial transaction processing.",
    technologies: ["React (Vite)", "Tailwind CSS", "Node.js", "PostgreSQL", "REST API"],
    github: "https://github.com/Bobolan123/SHB-Football-Club"
  }
];

export function Projects() {
  return (
    <section className="py-24 px-4 bg-[#020617] relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Cpu className="w-3 h-3" />
            <span>projects.exec()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Featured <span className="text-blue-500">Projects</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, description, technologies, link, github, index }: {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github: string;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-slate-900/40 border border-slate-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all flex flex-col"
    >
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-6">
          <div className="p-3 rounded-xl bg-slate-800 text-blue-400">
            <FolderGit2 className="w-6 h-6" />
          </div>
          <div className="flex gap-3">
            <a href={github} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            {link && (
              <a href={link} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors">
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded bg-slate-800/50 border border-slate-700 text-slate-400 text-[10px] font-mono uppercase tracking-wider"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {/* Interactive Bottom Bar */}
      <div className="px-8 py-4 bg-slate-900/60 border-t border-slate-800 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-slate-500 uppercase">Status: Production</span>
        <Code2 className="w-4 h-4 text-slate-600" />
      </div>
    </motion.div>
  );
}
