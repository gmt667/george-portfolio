<<<<<<< HEAD
import React from 'react';
import { Code, Database, Cpu, Shield, Globe, Smartphone, GitBranch, Brain } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Full Stack Development',
      description: 'Frontend & Backend development with modern frameworks',
      color: 'bg-blue-500'
    },
    {
      icon: <Cpu size={24} />,
      title: 'Embedded Systems',
      description: 'Electronics, microcontrollers, and hardware integration',
      color: 'bg-green-500'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Systems',
      description: 'SQL, NoSQL, data structures & algorithms',
      color: 'bg-purple-500'
    },
    {
      icon: <Shield size={24} />,
      title: 'Network Security',
      description: 'Networking protocols and cybersecurity fundamentals',
      color: 'bg-red-500'
    },
    {
      icon: <Globe size={24} />,
      title: 'Web Design & Deployment',
      description: 'Responsive design and cloud deployment strategies',
      color: 'bg-orange-500'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI & Machine Learning',
      description: 'Artificial intelligence and ML basics',
      color: 'bg-pink-500'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'Cross-platform mobile application development',
      color: 'bg-indigo-500'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Version Control',
      description: 'Git workflows and collaborative development',
      color: 'bg-teal-500'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            I'm George Mustafa Taumbe, a passionate Computer Engineering student at UNILIA with a love for technology, engineering, and innovation. I specialize in full stack web development, electronics systems, and solving real-world problems through smart software and hardware integration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-2xl font-semibold text-white mb-4">My Mission</h3>
              <blockquote className="text-slate-300 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                "I am committed to using technology to empower my community, create solutions that matter, and help build a digital future for Malawi and Africa."
              </blockquote>
            </div>
            
            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Current Studies</h3>
              <div className="space-y-2">
                <p className="text-blue-400 font-medium">Bachelor of Science in Computer Engineering</p>
                <p className="text-slate-300">University of Livingstonia (UNILIA)</p>
                <p className="text-slate-400">Rumphi, Malawi • 3rd Year Student</p>
              </div>
            </div>

            <div className="bg-slate-700 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-white mb-3">Academic Focus</h3>
              <p className="text-slate-300 leading-relaxed">
                My studies encompass both theoretical foundations and practical applications in computer engineering, from low-level hardware design to high-level software architecture. I strive to build systems that create opportunities and drive sustainable development.
              </p>
            </div>

            {/* Additional Photo */}
            <div className="bg-slate-700 p-6 rounded-xl">
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src="/src/assets/Snapchat-2011042304.jpg"
                    alt="George at University"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-medium">Campus Life</h4>
                  <p className="text-slate-400 text-sm">Engineering student at UNILIA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-slate-700 p-6 rounded-xl hover:bg-slate-600 transition-all duration-200 hover:scale-105 transform group"
              >
                <div className={`${skill.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Collaborate?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always excited to work on innovative projects that make a positive impact. Let's build something amazing together!
            </p>
            <a
              href="mailto:cen-01-34-23@unilia.ac.mw"
              className="inline-block bg-white text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
=======
import React from "react";

export default function About() {
  return (
    <section className="px-6 py-12 bg-gray-900 text-white" id="about">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-300">
        I am George Mustafa Taumbe, a 3rd-year Computer Engineering student at the University of Livingstonia (UNILIA).
        I’m passionate about software engineering, full stack development, and electronics. I also explore networking,
        cybersecurity, database systems, hardware integration, IoT, AI, and web technologies.
      </p>
    </section>
  );
}
>>>>>>> 3b0da073e6d84b9595cdd7782ff34a31d244d2c4
