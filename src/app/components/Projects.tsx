import React from "react";
import { motion } from "motion/react";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "E-Learning Platform (FYP)",
    description: "A full-stack educational platform featuring RBAC, AI-powered support, and advanced search capabilities.",
    technologies: ["Next.js", "NestJS", "PostgreSQL", "MongoDB", "Elasticsearch", "Gemini AI", "Socket.IO"],
    link: "https://github.com/Bobolan123/edu-fe",
    github: "https://github.com/Bobolan123/edu-be"
  },
  {
    title: "SHB Football Club",
    description: "Ticketing and fan engagement platform with optimized UI and secure financial transaction processing.",
    technologies: ["React (Vite)", "Tailwind CSS", "Node.js", "PostgreSQL", "REST API"],
    link: "#",
    github: "#"
  }
];

export function Projects() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span 
              initial={{ rotate: -20 }}
              whileInView={{ rotate: 0 }}
              className="text-blue-600 dark:text-blue-400 text-4xl"
            >
              <FolderGit2 className="w-10 h-10" />
            </motion.span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Featured Projects</h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
              github={project.github}
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
  link: string;
  github: string;
  index: number;
  key?: React.Key;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -12 }}
      className="group bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col border border-gray-100 dark:border-gray-700 relative overflow-hidden"
    >
      {/* Decorative background circle */}
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-blue-600/5 dark:bg-blue-400/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
      
      <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map((tech, idx) => (
          <span
            key={idx}
            className="px-3 py-1 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-300 rounded-lg text-xs font-bold shadow-sm border border-gray-100 dark:border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 pt-6 border-t border-gray-100 dark:border-gray-700">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-blue-600/20"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="text-sm">Live Demo</span>
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl transition-all duration-300 font-semibold border border-gray-200 dark:border-gray-600"
        >
          <Github className="w-4 h-4" />
          <span className="text-sm">Code</span>
        </a>
      </div>
    </motion.div>
  );
}
