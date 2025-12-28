import React from "react";
import { Terminal, Layout, Server, Users, Code2, Zap, Globe, Wrench } from "lucide-react";
import { useLanguage } from "../context/useLanguage";

export function Skills() {
  const { t } = useLanguage();

  const getIcon = (category: string) => {
    switch (category) {
      case "programming": return <Terminal className="w-5 h-5" />;
      case "frontend": return <Layout className="w-5 h-5" />;
      case "backend": return <Server className="w-5 h-5" />;
      case "tools": return <Wrench className="w-5 h-5" />;
      case "softSkills": return <Users className="w-5 h-5" />;
      case "languages": return <Globe className="w-5 h-5" />;
      default: return <Code2 className="w-5 h-5" />;
    }
  };

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden transition-colors duration-500">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-10 dark:opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-4">
            <Zap className="w-3 h-3" />
            <span>{t.skills.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">{t.skills.titlePrefix}  <span className="text-blue-600 dark:text-blue-500">{t.skills.titleSuffix}</span></h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {t.skills.data.map((item: any, index: number) => (
            <SkillCard
              key={item.category}
              category={(t.skills.categories as any)[item.category]}
              icon={getIcon(item.category)}
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
    <div className="group bg-card dark:bg-slate-900/50 border border-border dark:border-slate-800 p-6 rounded-2xl hover:border-blue-500/50 transition-all duration-300 relative hover:-translate-y-1 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.07)] dark:shadow-none hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] dark:hover:shadow-none">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-muted dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform shadow-sm dark:shadow-none">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-foreground transition-colors">{category}</h3>
      </div>
      
      <div className="space-y-3">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex items-center gap-3 group/item">
            <div className="w-1.5 h-1.5 rounded-full bg-border dark:bg-slate-700 group-hover/item:bg-blue-500 transition-colors"></div>
            <span className="text-sm text-muted-foreground dark:text-slate-400 group-hover/item:text-foreground transition-colors font-mono">{skill}</span>
          </div>
        ))}
      </div>

      {/* Code-like corner decoration */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Code2 className="w-4 h-4 text-muted dark:text-slate-700" />
      </div>
    </div>
  );
}
