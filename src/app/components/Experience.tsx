import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, Calendar, MapPin, Terminal } from "lucide-react";

const experienceData = [
  {
    title: "English Tutor",
    company: "Edupia Tutor",
    location: "Vietnam",
    period: "2025.06 - Present",
    type: "diverse",
    responsibilities: [
      "Delivering personalized online lessons focusing on vocabulary and communication",
      "Creating motivating learning environments tailored to student levels",
      "Tracking progress and providing feedback for long-term improvement",
      "Utilizing digital tools to make online learning dynamic and effective"
    ]
  },
  {
    title: "Final Year Project - Full Stack Developer",
    company: "University of Greenwich",
    location: "Da Nang, Viet Nam",
    period: "2025.04 - 2025.11",
    type: "software",
    responsibilities: [
      "Developed a comprehensive E-Learning Platform with AI-powered support",
      "Integrated a RAG AI Chatbot using Gemini and Qdrant for student queries",
      "Engineered advanced course filtering with Elasticsearch",
      "Implemented secure VNPAY payment gateway and Socket.IO real-time chat",
      "Optimized hybrid storage using PostgreSQL and MongoDB"
    ]
  },
  {
    title: "Customer Service Representative",
    company: "Win",
    location: "Remote",
    period: "2025.01 - 2025.06",
    type: "diverse",
    responsibilities: [
      "Provided expert assistance for financial inquiries and account resolutions",
      "Consistently achieved a 95% customer satisfaction rate through high-quality support",
      "Reduced average handling time by 15%, boosting overall team efficiency",
      "Maintained secure processes for sensitive banking transaction verifications"
    ]
  },
  {
    title: "Fullstack Developer Internship",
    company: "ST UNITED",
    location: "Da Nang, Viet Nam",
    period: "2024.09 - 2024.11",
    type: "software",
    responsibilities: [
      "Developed the SHB Football Club Ticket Selling Website using React and NestJS",
      "Redesigned the homepage with Ant Design (Antd) and Tailwind CSS for better UX",
      "Implemented a dynamic VAT calculation API and database soft-delete system",
      "Integrated Role-Based Access Control (RBAC) to secure sensitive routes",
      "Collaborated in an Agile environment with daily stand-ups and sprint reviews"
    ]
  }
];

export function Experience() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 px-4 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.05)_0%,transparent_70%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono mb-4 shadow-sm">
            <Terminal className="w-3 h-3 text-blue-500" />
            <span className="text-blue-500">career</span>
            <span className="text-slate-500">.</span>
            <span className="text-amber-500">history()</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            <span className="text-blue-500">Professional</span> <span className="text-amber-500">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full mb-8"></div>
          
          <div className="flex justify-center gap-12 text-sm font-mono mt-8">
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500" />
              <span>Software Engineer</span>
            </div>
            <div className="flex items-center gap-2 text-amber-400">
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500" />
              <span>Diverse Roles</span>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line with Scroll Animation */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800/50 hidden md:block -translate-x-1/2" />
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-indigo-500 to-amber-500 hidden md:block -translate-x-1/2 z-10"
          />

          <div className="space-y-12 md:space-y-0">
            {experienceData.map((exp, index) => (
              <div key={index} className={`flex flex-col md:flex-row w-full ${exp.type === 'diverse' ? 'md:flex-row-reverse' : ''}`}>
                {/* Card Container */}
                <div className="w-full md:w-1/2 flex justify-center px-4 md:px-12 relative mb-8 md:mb-16">
                  {/* Connector Line for Desktop */}
                  <div className={`absolute top-1/2 w-12 h-px bg-slate-800 hidden md:block 
                    ${exp.type === 'software' ? 'right-0' : 'left-0'}`} />
                  
                  {/* Timeline Node for Desktop */}
                  <div className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#020617] border-2 z-10 hidden md:block shadow-[0_0_10px_rgba(37,99,235,0.3)]
                    ${exp.type === 'software' ? 'right-[-8px] border-blue-600 shadow-blue-500/50' : 'left-[-8px] border-amber-600 shadow-amber-500/50'}`} />

                  <ExperienceCard 
                    title={exp.title}
                    company={exp.company}
                    location={exp.location}
                    period={exp.period}
                    responsibilities={exp.responsibilities}
                    index={index}
                    type={exp.type}
                  />
                </div>
                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ title, company, location, period, responsibilities, index, type }: {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  index: number;
  type: string;
}) {
  const isSoftware = type === 'software';

  return (
    <motion.div
      initial={{ opacity: 0, x: isSoftware ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`w-full max-w-xl group`}
    >
      <div className={`bg-slate-900/40 border ${isSoftware ? 'border-blue-500/20 group-hover:border-blue-500/40' : 'border-amber-500/20 group-hover:border-amber-500/40'} p-6 md:p-8 rounded-2xl transition-all duration-300 relative`}>
        {/* Type Badge */}
        <div className={`absolute -top-3 ${isSoftware ? 'right-6 bg-blue-500/10 text-blue-400 border-blue-500/20' : 'left-6 bg-amber-500/10 text-amber-400 border-amber-500/20'} px-2 py-0.5 rounded border text-[10px] font-mono uppercase tracking-wider`}>
          {isSoftware ? 'Engineering' : 'Diverse'}
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="space-y-1">
            <h3 className={`text-xl md:text-2xl font-bold text-white transition-colors ${isSoftware ? 'group-hover:text-blue-400' : 'group-hover:text-amber-400'}`}>
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className={`${isSoftware ? 'text-blue-500' : 'text-amber-500'} font-medium`}>{company}</span>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1 text-slate-500">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-300 font-mono text-xs w-fit`}>
            <Calendar className={`w-3 h-3 ${isSoftware ? 'text-blue-400' : 'text-amber-400'}`} />
            {period}
          </div>
        </div>

        <ul className="space-y-3">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm">
              <span className={`${isSoftware ? 'text-blue-600' : 'text-amber-600'} mt-1.5 font-mono text-xs`}>➔</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
