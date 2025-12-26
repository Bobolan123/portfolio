import React from "react";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "BSc in Computing",
    school: "University of Greenwich",
    location: "Da Nang, Viet Nam",
    year: "2022 - Now",
    description: "Final-year student focusing on software development and computing systems. GPA: 3.7/4.0"
  },
  {
    degree: "Vstep Certificate",
    school: "University of Foreign Language Studies",
    location: "Da Nang, Viet Nam",
    year: "2023",
    description: "English proficiency certification with an overall score of 7.0."
  }
];

export function Education() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title="Academic Background" icon={<GraduationCap className="w-10 h-10" />} />
        
        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="text-center mb-16">
      <div className="flex flex-col items-center gap-4 mb-4">
        <span className="text-blue-600 dark:text-blue-400">
          {icon}
        </span>
        <h2 className="text-4xl font-bold pb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">{title}</h2>
      </div>
      <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
    </div>
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
    <div className="bg-gradient-to-br from-blue-50/50 to-indigo-50/50 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100/50 dark:border-gray-700 relative overflow-hidden group">
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
        <GraduationCap className="w-24 h-24" />
      </div>

      <div className="flex flex-col h-full relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100">{degree}</h3>
          <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-sm font-bold shadow-md">
            {year}
          </span>
        </div>
        
        <div className="flex flex-wrap items-center gap-3 text-gray-600 dark:text-gray-400 mb-6 font-medium">
          <span className="text-blue-600 dark:text-blue-400 font-bold">{school}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            {location}
          </span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
          {description}
        </p>
      </div>
    </div>
  );
}
