import React from "react";
import { Terminal, Layout, Server, Users } from "lucide-react";

const skillsData = {
  "Programming Languages": {
    icon: <Terminal />,
    skills: ["JavaScript", "TypeScript", "C#", "Python"]
  },
  "Frontend Development": {
    icon: <Layout />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Vite","Redux"]
  },
  "Backend Development": {
    icon: <Server />,
    skills: ["Node.js", "NestJS", ".NET", "PostgreSQL", "MongoDB", "REST APIs"]
  },
  "Soft Skills": {
    icon: <Users />,
    skills: ["Teamwork", "Agile/Scrum", "Problem Solving", "Communication", "Documentation"]
  }
};

export function Skills() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950/20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Skills</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(skillsData).map(([category, data], index) => (
            <SkillCard
              key={category}
              category={category}
              icon={data.icon}
              skills={data.skills}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ category, icon, skills, index }: {
  category: string;
  icon: React.ReactNode;
  skills: string[];
  index: number;
  key?: React.Key;
}) {
  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white dark:border-gray-700 group">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{category}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, skillIndex) => (
            <span
              key={skill}
              className="px-4 py-1.5 bg-blue-50/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-semibold border border-blue-100/50 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
