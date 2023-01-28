import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Download from "./components/Download";

export default function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Languages />
      <Download />
    </div>
  );
}
