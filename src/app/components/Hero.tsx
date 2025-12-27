import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Terminal as TerminalIcon, Code2, FileText, ArrowRight } from "lucide-react";

export function Hero() {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background text-foreground px-4 pt-32 pb-20 transition-colors duration-500">
      {/* Dynamic Cursor Follower */}
      <div
        style={{
          transform: `translate(${mousePos.x - 150}px, ${mousePos.y - 150}px)`,
        }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block transition-transform duration-300 ease-out"
      />

      {/* Coding Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-20" 
           style={{ backgroundImage: 'radial-gradient(var(--foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/[0.05] dark:bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/[0.05] dark:bg-indigo-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono mb-6">
              <TerminalIcon className="w-3 h-3" />
              <span>system.status = "ready"</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
              <span className="text-foreground">Nguyen</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Hoang Lan</span>
            </h1>

            <div className="flex items-center gap-3 mb-8 origin-left">
              <div className="h-[1px] w-12 bg-blue-500/50"></div>
              <p className="text-xl md:text-2xl font-mono text-blue-600 dark:text-blue-400">
                &lt;SoftwareEngineer /&gt;
              </p>
            </div>

            <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
              Software Engineer focused on building robust, scalable architectures and crafting clean, maintainable code. 
              Dedicated to solving complex problems and delivering high-quality digital experiences.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <ContactItem icon={<Mail className="w-4 h-4" />} text="logannguyenlan@gmail.com" />
              <ContactItem icon={<MapPin className="w-4 h-4" />} text="Da Nang, VN" />
            </div>

            <div className="flex items-center gap-6">
              <SocialLink icon={<Github className="w-6 h-6" />} href="https://github.com/Bobolan123" />
              <SocialLink icon={<Linkedin className="w-6 h-6" />} href="https://linkedin.com/in/lannguyen124" />
              <div className="h-10 w-[1px] bg-border mx-2"></div>
              <a 
                href="/src/public/Core Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-600 dark:to-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg overflow-hidden hover:scale-105 active:scale-95"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="bg-slate-900 dark:bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
              <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/50 dark:bg-slate-900/50 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-slate-400 dark:text-slate-500">DeveloperPortfolio.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden text-slate-300">
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">01</span>
                  <p><span className="text-pink-500">const</span> <span className="text-blue-400">developer</span> = &#123;</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">02</span>
                  <p className="ml-4"><span className="text-slate-400">name:</span> <span className="text-green-400">"Nguyen Hoang Lan"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">03</span>
                  <p className="ml-4"><span className="text-slate-400">role:</span> <span className="text-green-400">"Software Engineer"</span>,</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">04</span>
                  <p className="ml-4"><span className="text-slate-400">skills:</span> [</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">05</span>
                  <p className="ml-8">
                  <span className="text-green-400">"TypeScript"</span>, 
                  <span className="text-green-400">"C#"</span>, 
                  <span className="text-green-400">"Python"</span>, 
                  <span className="text-green-400">"Node.js"</span>, 
                  <span className="text-green-400">"React"</span>, 
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">06</span>
                  <p className="ml-8">
                  <span className="text-green-400">"Next.js"</span>, 
                  <span className="text-green-400">".NET"</span>,
                  <span className="text-green-400">"NestJS"</span>, 
                  <span className="text-green-400">"PostgreSQL"</span>, 
                  <span className="text-green-400">"MongoDB"</span>, 
                  </p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">07</span>
                  <p className="ml-4">],</p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">08</span>
                  <p className="ml-4"><span className="text-slate-400">status:</span> <span className="text-green-400">"Ready for impact"</span></p>
                </div>
                <div className="flex gap-4">
                  <span className="text-slate-600 select-none">09</span>
                  <p>&#125;;</p>
                </div>
                <div className="w-2 h-5 bg-blue-500 ml-4 inline-block mt-2 animate-pulse" />
              </div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-6 -right-6 p-4 bg-card dark:bg-slate-900 border border-border dark:border-slate-800 rounded-2xl shadow-xl">
              <Code2 className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground text-sm font-mono bg-muted/50 dark:bg-slate-900/50 px-3 py-1.5 rounded-lg border border-border dark:border-slate-800">
      <span className="text-blue-600 dark:text-blue-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-colors hover:-translate-y-1 hover:text-blue-600 dark:hover:text-blue-400"
    >
      {icon}
    </a>
  );
}
