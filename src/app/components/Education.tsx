import React from "react";
import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Computing",
    school: "University of Greenwich",
    location: "Da Nang, Viet Nam",
    year: "2022 - 2026",
    description: "Focusing on software development and computing systems. GPA: 3.7/4.0"
  },
  {
    degree: "Vstep Certificate",
    school: "UFLS",
    location: "Da Nang, Viet Nam",
    year: "2023",
    description: "English proficiency certification with an overall score of 7.0."
  }
];

export function Education() {
  return (
    <section className="py-24 px-4 bg-background relative transition-colors duration-500">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted dark:bg-slate-900 border border-border dark:border-slate-800 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4 shadow-sm">
            <BookOpen className="w-3 h-3" />
            <span>academic.background()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">Academic <span className="text-blue-600 dark:text-blue-500">Foundation</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ degree, school, location, year, description, index }: {
  degree: string;
  school: string;
  location: string;
  year: string;
  description: string;
  index: number;
  key?: React.Key;
}) {
  return (
    <div className="bg-card dark:bg-slate-900/40 border border-border dark:border-slate-800 p-10 rounded-3xl hover:border-blue-500/30 transition-all group relative overflow-hidden shadow-sm hover:shadow-md">
      <div className="absolute -right-4 -bottom-4 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity text-foreground">
        <GraduationCap className="w-40 h-40" />
      </div>

      <div className="relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{degree}</h3>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted dark:bg-slate-800 border border-border dark:border-slate-700 text-muted-foreground dark:text-slate-300 font-mono text-xs w-fit">
            <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            {year}
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-blue-600 dark:text-blue-500 font-mono text-sm mb-6">
          <span>{school}</span>
          <span className="text-border dark:text-slate-700">•</span>
          <span className="text-muted-foreground dark:text-slate-400">{location}</span>
        </div>
        
        <p className="text-muted-foreground dark:text-slate-400 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
