import React from "react";
import { motion, useScroll, useSpring } from "motion/react";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-slate-200 px-4 pt-32 pb-20 transition-colors duration-500">
      {/* Dynamic Cursor Follower */}
      <motion.div
        animate={{
          x: mousePos.x - 150,
          y: mousePos.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
        className="fixed top-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none z-0 hidden lg:block"
      />

      {/* Coding Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{ backgroundImage: 'radial-gradient(#1e293b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      {/* Animated Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-6"
            >
              <TerminalIcon className="w-3 h-3" />
              <span>system.status = "ready"</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight"
            >
              <span className="text-white">Nguyen</span><br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">Hoang Lan</span>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex items-center gap-3 mb-8 origin-left"
            >
              <div className="h-[1px] w-12 bg-blue-500/50"></div>
              <p className="text-xl md:text-2xl font-mono text-blue-400">
                &lt;SoftwareEngineer /&gt;
              </p>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed"
            >
              Software Engineer focused on building robust, scalable architectures and crafting clean, maintainable code. 
              Dedicated to solving complex problems and delivering high-quality digital experiences.
            </motion.p>

            <div className="flex flex-wrap gap-4 mb-10">
              <ContactItem icon={<Mail className="w-4 h-4" />} text="logannguyenlan@gmail.com" />
              <ContactItem icon={<MapPin className="w-4 h-4" />} text="Da Nang, VN" />
            </div>

            <div className="flex items-center gap-6">
              <SocialLink icon={<Github className="w-6 h-6" />} href="https://github.com/Bobolan123" />
              <SocialLink icon={<Linkedin className="w-6 h-6" />} href="https://linkedin.com/in/lannguyen124" />
              <div className="h-10 w-[1px] bg-slate-800 mx-2"></div>
              <motion.a 
                href="/src/public/Core Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(37, 99, 235, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-bold transition-all shadow-lg overflow-hidden"
              >
                {/* Shine effect */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                
                <FileText className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>View Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Coding Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 rounded-2xl blur-3xl transform -rotate-6"></div>
            <div className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden shadow-2xl relative">
              <div className="flex items-center gap-2 px-4 py-3 bg-[#1e293b]/50 border-b border-slate-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 text-xs font-mono text-slate-500">DeveloperPortfolio.tsx</div>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
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
                <motion.div 
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-2 h-5 bg-blue-500 ml-4 inline-block mt-2" 
                />
              </div>
            </div>
            
            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 p-4 bg-[#1e293b] border border-slate-700 rounded-2xl shadow-xl"
            >
              <Code2 className="w-8 h-8 text-blue-400" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-400 text-sm font-mono bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-800">
      <span className="text-blue-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode; href: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, color: "#60a5fa" }}
      className="text-slate-500 transition-colors"
    >
      {icon}
    </motion.a>
  );
}
