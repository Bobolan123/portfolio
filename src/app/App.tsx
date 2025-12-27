import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 transition-colors duration-300">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="education"><Education /></div>
        <div id="skills"><Skills /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}
