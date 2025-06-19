import React from 'react';
import { ChevronDown, Github, Mail, Code, Cpu } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              George Mustafa Taumbe
            </h1>
            
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
                Computer Engineering Student at UNILIA | Full Stack Developer | Electronics & Software Enthusiast
              </p>
              <p className="text-lg text-slate-400">
                3rd Year Bachelor of Science in Computer Engineering
              </p>
              <p className="text-base text-blue-400 font-medium">
                University of Livingstonia (UNILIA), Rumphi, Malawi
              </p>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6">
              <a
                href="https://github.com/gmt667"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 transform group"
              >
                <Github size={24} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href="mailto:cen-01-34-23@unilia.ac.mw"
                className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-200 hover:scale-110 transform group"
              >
                <Mail size={24} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={scrollToAbout}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-200 hover:scale-105 transform shadow-lg hover:shadow-xl"
              >
                Explore My Work
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-500 to-purple-600 shadow-2xl">
                <img
                  src="/src/assets/IMG-20240701-WA0009.jpg"
                  alt="George Mustafa Taumbe"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Code size={24} className="text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Cpu size={16} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={32} className="text-slate-400" />
      </button>
    </section>
  );
};

export default Hero;