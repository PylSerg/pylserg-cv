import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Langauges";

export default function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Projects />
      <Skills />
      <Languages />
    </div>
  );
}
