import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="text-white bg-slate-900">
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