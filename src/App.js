import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="page">
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}
