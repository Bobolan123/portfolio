import React, { useState, useEffect } from "react";
import { Moon, Sun, Home, GraduationCap, Code2, Briefcase, FolderGit2, Mail } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "./ui/button";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

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
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gray-200/50 dark:bg-gray-800/50 -translate-x-1/2 z-0" />

        <div className="flex flex-col items-center gap-10 pointer-events-auto">
          {navLinks.map((link, index) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <div key={link.name} className="relative group flex items-center">
                <a
                  href={link.href}
                  className={`relative z-20 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-500 ${
                    isActive 
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-600/30 -translate-x-1" 
                      : "bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400 border border-gray-100 dark:border-gray-800 hover:border-blue-400 dark:hover:border-blue-500 hover:-translate-x-1"
                  }`}
                >
                  {link.icon}
                </a>
                
                {/* Tooltip Label */}
                <div className="absolute left-16 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                  <div className="bg-gray-950 dark:bg-white text-white dark:text-gray-950 text-[10px] uppercase tracking-widest font-black py-2 px-4 rounded-full shadow-2xl whitespace-nowrap">
                    {link.name}
                  </div>
                </div>

                {/* Connection Line to Center Line */}
                <div className={`absolute right-full w-4 h-[1px] ${isActive ? 'bg-blue-600' : 'bg-gray-200/50 dark:bg-gray-800/50'} transition-colors duration-500`} />
              </div>
            );
          })}

          <div className="pt-8 flex flex-col items-center gap-4">
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-700" />
          </div>
        </div>
      </div>

      {/* Desktop Theme Toggle - Fixed to the bottom right */}
      <div className="fixed right-8 bottom-8 z-50 hidden lg:block">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="w-12 h-12 rounded-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800 shadow-2xl transition-all duration-300 hover:rotate-12 group hover:scale-110"
        >
          {theme === "dark" ? (
            <Sun className="w-5 h-5 text-yellow-500 group-hover:scale-125 transition-transform" />
          ) : (
            <Moon className="w-5 h-5 text-blue-600 group-hover:scale-125 transition-transform" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>

      {/* Mobile Top Navbar (Stays horizontal for better UX) */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            NHL.
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <div className="flex gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`w-8 h-8 flex items-center justify-center rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? "bg-blue-600 text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }`}
                >
                  {React.cloneElement(link.icon as React.ReactElement, { className: "w-4 h-4" })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
