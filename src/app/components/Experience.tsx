import React from "react";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin, Terminal } from "lucide-react";

const experienceData = [
  {
    title: "Fullstack Developer Internship",
    company: "St Software",
    location: "Da Nang, Viet Nam",
    period: "2024.09 - 2024.11",
    responsibilities: [
      "Optimized React (Vite) with Tailwind CSS for SHB FOOTBALL CLUB homepage",
      "Developed a secure VAT tax API with dynamic calculations",
      "Architected and implemented reusable UI components in React.js",
      "Implemented a PostgreSQL soft-delete system",
      "Collaborated efficiently within Agile/Scrum teams"
    ]
  },
  {
    title: "Final Year Project - Full Stack Developer",
    company: "University of Greenwich",
    location: "Da Nang, Viet Nam",
    period: "2025.04 - 2025.11",
    responsibilities: [
      "Developed a comprehensive E-Learning Platform using Next.js and NestJS",
      "Integrated a RAG AI Chatbot using Gemini and Qdrant",
      "Engineered advanced course filtering with Elasticsearch",
      "Implemented secure VNPAY payment gateway and real-time chat",
      "Optimized hybrid storage using PostgreSQL and MongoDB"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-24 px-4 bg-[#020617] relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-4">
            <Terminal className="w-3 h-3" />
            <span>career.history()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Professional <span className="text-blue-500">Journey</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <ExperienceCard 
              key={index}
              title={exp.title}
              company={exp.company}
              location={exp.location}
              period={exp.period}
              responsibilities={exp.responsibilities}
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, location, period, responsibilities, index }: {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  index: number;
  key?: React.Key;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[1px] before:bg-slate-800"
    >
      {/* Timeline Node */}
      <div className="absolute left-[-5px] top-2 w-[11px] h-[11px] rounded-full bg-blue-600 border-4 border-[#020617] shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
      
      <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/30 transition-colors group">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{title}</h3>
            <div className="flex items-center gap-2 text-blue-500 font-mono text-sm mt-1">
              <span>{company}</span>
              <span className="text-slate-700">•</span>
              <span className="text-slate-400">{location}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 font-mono text-xs h-fit">
            <Calendar className="w-3 h-3 text-blue-400" />
            {period}
          </div>
        </div>

        <ul className="space-y-3">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm">
              <span className="text-blue-600 mt-1.5 font-mono text-xs">➔</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
