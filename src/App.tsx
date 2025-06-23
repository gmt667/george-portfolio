import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="min-h-screen text-white bg-black">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
// src/App.tsx
// This is the main entry point of the application.
// It imports all the components and renders them in a structured layout.
// The components are organized in a way that reflects the typical structure of a portfolio website.