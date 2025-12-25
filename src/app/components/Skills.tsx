import React from "react";
import { motion } from "motion/react";
import { Code2, Database, Cloud, Wrench } from "lucide-react";

const skillsData = {
  "Frontend": {
    icon: <Code2 />,
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Responsive Design"]
  },
  "Backend": {
    icon: <Database />,
    skills: ["Node.js", "NestJS", "Express.js", "PostgreSQL", "MongoDB", "Elasticsearch"]
  },
  "AI & Specialized": {
    icon: <Cloud />,
    skills: ["Gemini AI", "Qdrant (Vector DB)", "RAG Architecture", "Socket.IO", "VNPAY Integration"]
  },
  "Languages & Tools": {
    icon: <Wrench />,
    skills: ["JavaScript", "TypeScript", "Python", "Git", "Agile/Scrum", "REST APIs"]
  }
};

export function Skills() {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950/20 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Technical Expertise</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white dark:border-gray-700 group"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:rotate-6 transition-transform">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">{category}</h3>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill, skillIndex) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
              className="px-4 py-1.5 bg-blue-50/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-xl text-sm font-semibold border border-blue-100/50 dark:border-blue-800/50 hover:bg-blue-100 dark:hover:bg-blue-800/50 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
