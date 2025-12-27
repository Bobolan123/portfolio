import React, { useState, useEffect } from "react";
import { Moon, Sun, Home, GraduationCap, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "Education", href: "#education", icon: <GraduationCap className="w-5 h-5" /> },
    { name: "Skills", href: "#skills", icon: <Code2 className="w-5 h-5" /> },
    { name: "Experience", href: "#experience", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Projects", href: "#projects", icon: <FolderGit2 className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = navLinks
        .map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Desktop Vertical Navbar */}
      <div className="fixed left-8 top-0 bottom-0 z-50 hidden lg:flex flex-col items-center justify-center pointer-events-none">
        {/* Full Height Background Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-border dark:bg-slate-800/50 -translate-x-1/2 z-0" />

        <div className="flex flex-col items-center gap-8 pointer-events-auto">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <div 
                key={link.name} 
                className="relative group flex items-center"
              >
                <a
                  href={link.href}
                  className={`relative z-20 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-600/40 -translate-x-1 scale-110" 
                      : "bg-card dark:bg-slate-900/80 backdrop-blur-md text-muted-foreground border border-border dark:border-slate-800 hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:-translate-x-1 shadow-sm"
                  }`}
                >
                  {link.icon}
                  {isActive && (
                    <div 
                      className="absolute inset-0 rounded-xl bg-blue-500/20 blur-md -z-10"
                    />
                  )}
                </a>
                
                {/* Tooltip Label */}
                <div className="absolute left-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <div className="bg-card dark:bg-slate-900 border border-border dark:border-slate-800 text-blue-600 dark:text-blue-400 text-[10px] uppercase tracking-widest font-bold py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
                    {link.name}
                  </div>
                </div>

                {/* Connection Line to Center Line */}
                <div className={`absolute right-full w-4 h-[1px] ${isActive ? 'bg-blue-600' : 'bg-slate-800'} transition-colors duration-500`} />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Top Navbar */}
      <nav className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-lg border-b border-border py-3 shadow-sm" : "bg-transparent py-5"
      }`}>
        <div className="px-6 flex items-center justify-between">
          <div className="text-xl font-black tracking-tighter text-foreground">
            <span className="text-blue-600 dark:text-blue-500">NH</span>L.
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-10 h-10 rounded-xl bg-muted dark:bg-slate-900 border border-border dark:border-slate-800"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </Button>
            
            <div className="flex bg-muted/50 dark:bg-slate-900/50 backdrop-blur-md p-1 rounded-xl border border-border dark:border-slate-800">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
                    activeSection === link.href.substring(1)
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-muted-foreground"
                  }`}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { className: "w-4 h-4" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Theme Toggle Desktop */}
      <div className="fixed right-8 bottom-8 z-50 hidden lg:block">
        <div className="hover:scale-110 active:scale-95 transition-transform">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-14 h-14 rounded-2xl bg-card/80 dark:bg-slate-900/80 backdrop-blur-lg border border-border dark:border-slate-800 hover:border-blue-500/50 shadow-2xl group transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-6 h-6 text-yellow-500 transition-transform group-hover:rotate-12" />
            ) : (
              <Moon className="w-6 h-6 text-blue-600 transition-transform group-hover:rotate-12" />
            )}
          </Button>
        </div>
      </div>
    </>
  );
}
