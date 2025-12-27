import React from "react";
import { motion } from "motion/react";
import { Terminal, Layout, Server, Users, Code2, Zap } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Terminal className="w-5 h-5" />,
    skills: ["JavaScript", "TypeScript", "C#", "Python"],
  },
  {
    category: "Frontend",
    icon: <Layout className="w-5 h-5" />,
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux", "Vite"],
  },
  {
    category: "Backend",
    icon: <Server className="w-5 h-5" />,
    skills: ["Node.js", "NestJS", ".NET", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-5 h-5" />,
    skills: ["Teamwork", "Agile/Scrum", "Problem Solving", "Documentation"],
  }
];

export function Skills() {
  return (
    <section className="py-24 px-4 bg-[#020617] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Zap className="w-3 h-3" />
            <span>capabilities.list()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Technical <span className="text-blue-500">Skills</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((item, index) => (
            <SkillCard
              key={item.category}
              category={item.category}
              icon={item.icon}
              skills={item.skills}
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
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group bg-slate-900/50 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 relative"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-slate-800 text-blue-400 group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors">{category}</h3>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover/item:bg-blue-500 transition-colors"></div>
            <span className="text-sm text-slate-400 group-hover/item:text-slate-200 transition-colors font-mono">{skill}</span>
          </div>
        ))}
      </div>

      {/* Code-like corner decoration */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Code2 className="w-4 h-4 text-slate-700" />
      </div>
    </motion.div>
  );
}
