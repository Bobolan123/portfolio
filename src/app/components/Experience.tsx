import React from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";

const experienceData = [
  {
    title: "Fullstack Developer Internship",
    company: "St Software",
    location: "Da Nang, Viet Nam",
    period: "Sep 2024 - Nov 2024",
    responsibilities: [
      "Optimized React (Vite) with Tailwind CSS for SHB FOOTBALL CLUB homepage to improve ticket selection UX",
      "Developed a secure VAT tax API with accurate dynamic calculations for financial transactions",
      "Architected and implemented reusable UI components in React.js to ensure consistency and maintainability",
      "Implemented a PostgreSQL soft-delete system to manage data effectively without permanent loss",
      "Collaborated efficiently within Agile/Scrum teams to deliver features on schedule"
    ]
  },
  {
    title: "Final Year Project - Full Stack Developer",
    company: "University of Greenwich",
    location: "Da Nang, Viet Nam",
    period: "Apr 2025 - Nov 2025",
    responsibilities: [
      "Developed a comprehensive E-Learning Platform using React.js, Next.js, and NestJS with RBAC",
      "Integrated a RAG AI Chatbot using Gemini and Qdrant to automate student support responses",
      "Engineered advanced course filtering with Elasticsearch, significantly reducing search time",
      "Implemented secure VNPAY payment gateway and real-time chat functionality with Socket.IO",
      "Optimized hybrid storage using PostgreSQL and MongoDB to handle concurrent user interactions"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
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
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="text-blue-600 dark:text-blue-400"
            >
              <Briefcase className="w-10 h-10" />
            </motion.span>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Professional Journey</h2>
          </div>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-indigo-600 to-blue-600 dark:from-blue-500 dark:via-indigo-500 dark:to-blue-500 transform md:-translate-x-1/2 rounded-full opacity-30"></div>
          
          <div className="space-y-16">
            {experienceData.map((exp, index) => (
              <ExperienceCard key={index} {...exp} index={index} />
            ))}
          </div>
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
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} items-center`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 md:left-1/2 top-0 md:top-8 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-blue-600 dark:border-blue-400 transform md:-translate-x-1/2 z-10 shadow-lg shadow-blue-600/20"></div>
      
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'} ml-10 md:ml-0`}>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Briefcase className="w-12 h-12" />
          </div>

          <div className="mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-bold mb-4 border border-blue-100 dark:border-blue-800/50">
              {period}
            </span>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">{title}</h3>
            <div className="flex flex-wrap items-center gap-2 text-gray-600 dark:text-gray-400 font-medium">
              <span className="text-blue-600 dark:text-blue-400">{company}</span>
              <span>•</span>
              <span>{location}</span>
            </div>
          </div>
          
          <ul className="space-y-3">
            {responsibilities.map((resp, idx) => (
              <motion.li
                key={idx}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="text-gray-700 dark:text-gray-300 pl-6 relative before:content-[''] before:absolute before:left-0 before:top-2.5 before:w-2 before:h-2 before:bg-blue-600 dark:before:bg-blue-400 before:rounded-full leading-relaxed"
              >
                {resp}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  );
}
