import React, { useRef } from "react";
import { Briefcase, Calendar, MapPin, Terminal } from "lucide-react";
import { useLanguage } from "../context/useLanguage";
import { motion, useScroll, useSpring } from "framer-motion";

export function Experience() {
  const { t } = useLanguage();
  const experienceData = t.experience.data;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="py-24 px-4 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--color-primary),transparent_70%)] opacity-[0.05] dark:opacity-[0.05] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted dark:bg-slate-900 border border-border dark:border-slate-800 text-xs font-mono mb-4 shadow-sm">
            <Terminal className="w-3 h-3 text-blue-600 dark:text-blue-500" />
            <span>{t.experience.badge}</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            <span className="text-blue-600 dark:text-blue-500">{t.experience.titlePrefix}</span> <span className="text-amber-600 dark:text-amber-500">{t.experience.titleSuffix}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-amber-600 mx-auto rounded-full mb-8"></div>
          
          <div className="flex justify-center gap-12 text-sm font-mono mt-8">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
              <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500" />
              <span>{t.experience.roles.software}</span>
            </div>
            <div className="flex items-center gap-2 text-amber-600 dark:text-amber-400">
              <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500" />
              <span>{t.experience.roles.diverse}</span>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          {/* Central Timeline Line (Background) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border/50 dark:bg-slate-800/30 hidden md:block -translate-x-1/2" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ scaleY, originY: 0 }}
            className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-600 via-indigo-500 to-amber-600 hidden md:block -translate-x-1/2 z-0" 
          />

          <div className="space-y-12 md:space-y-0">
            {experienceData.map((exp: any, index: number) => (
              <ExperienceItem key={index} exp={exp} index={index} t={t} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ exp, index, t }: { exp: any, index: number, t: any, key?: React.Key }) {
  const isSoftware = exp.type === 'software';
  
  return (
    <motion.div 
      initial={{ opacity: 0, x: exp.type === 'diverse' ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row w-full ${exp.type === 'diverse' ? 'md:flex-row-reverse' : ''}`}
    >
      {/* Card Container */}
      <div className="w-full md:w-1/2 flex justify-center px-4 md:px-12 relative mb-8 md:mb-16">
        {/* Connector Line for Desktop */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
          style={{ originX: exp.type === 'software' ? 1 : 0 }}
          className={`absolute top-1/2 w-12 h-px bg-border dark:bg-slate-800 hidden md:block 
            ${exp.type === 'software' ? 'right-0' : 'left-0'}`} 
        />
        
        {/* Timeline Node for Desktop */}
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200, delay: 0.5 + index * 0.1 }}
          className={`absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-2 z-10 hidden md:block shadow-[0_0_10px_rgba(37,99,235,0.3)] transition-all duration-500
            ${exp.type === 'software' ? 'right-[-8px] border-blue-600 shadow-blue-500/50 hover:scale-125 hover:bg-blue-600' : 'left-[-8px] border-amber-600 shadow-amber-500/50 hover:scale-125 hover:bg-amber-600'}`} 
        />

        <ExperienceCard 
          title={exp.title}
          company={exp.company}
          location={exp.location}
          period={exp.period}
          responsibilities={exp.responsibilities}
          index={index}
          type={exp.type}
          t={t}
        />
      </div>
      {/* Spacer for the other side */}
      <div className="hidden md:block md:w-1/2" />
    </motion.div>
  );
}

function ExperienceCard({ title, company, location, period, responsibilities, index, type, t }: {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  index: number;
  type: string;
  t: any;
}) {
  const isSoftware = type === 'software';

  return (
    <div className={`w-full max-w-xl group`}>
      <div className={`bg-card dark:bg-slate-900/40 border ${isSoftware ? 'border-blue-500/20 group-hover:border-blue-500/40' : 'border-amber-500/20 group-hover:border-amber-500/40'} p-6 md:p-8 rounded-2xl transition-all duration-300 relative shadow-sm hover:shadow-md`}>
        {/* Type Badge */}
        <div className={`absolute -top-3 ${isSoftware ? 'right-6 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' : 'left-6 bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20'} px-2 py-0.5 rounded border text-[10px] font-mono uppercase tracking-wider`}>
          {isSoftware ? t.experience.types.engineering : t.experience.types.diverse}
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="space-y-1">
            <h3 className={`text-xl md:text-2xl font-bold text-foreground transition-colors ${isSoftware ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : 'group-hover:text-amber-600 dark:group-hover:text-amber-400'}`}>
              {title}
            </h3>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className={`${isSoftware ? 'text-blue-600 dark:text-blue-500' : 'text-amber-600 dark:text-amber-500'} font-medium`}>{company}</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center gap-1 text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            </div>
          </div>
          
          <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted dark:bg-slate-800/50 border border-border dark:border-slate-700 text-muted-foreground dark:text-slate-300 font-mono text-xs w-fit`}>
            <Calendar className={`w-3 h-3 ${isSoftware ? 'text-blue-600 dark:text-blue-400' : 'text-amber-600 dark:text-amber-400'}`} />
            {period}
          </div>
        </div>

        <ul className="space-y-3">
          {responsibilities.map((resp, idx) => (
            <li key={idx} className="flex items-start gap-3 text-muted-foreground dark:text-slate-400 leading-relaxed text-sm">
              <span className={`${isSoftware ? 'text-blue-600' : 'text-amber-600'} mt-1.5 font-mono text-xs`}>➔</span>
              {resp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
