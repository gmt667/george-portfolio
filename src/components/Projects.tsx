<<<<<<< HEAD
import React from 'react';
import { ExternalLink, Github, Users, CreditCard, BookOpen, MessageCircle, Image, Zap, Code, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Student Academic Portal',
      description: 'A comprehensive web application for managing student records, course enrollment, grades, and academic progress tracking with real-time updates.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      icon: <BookOpen size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    },
    {
      title: 'E-Ticketing System',
      description: 'Digital ticketing platform for events and transportation with QR code generation, payment integration, and real-time seat availability.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Stripe API'],
      icon: <CreditCard size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Full-stack application for tracking expenses, budgeting, and financial goal setting with interactive charts and spending analytics.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Chart.js', 'Firebase'],
      icon: <CreditCard size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    },
    {
      title: 'Alumni Chat App',
      description: 'Real-time messaging platform connecting university alumni with features like group chats, event notifications, and professional networking.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['React Native', 'Socket.io', 'Node.js', 'MongoDB'],
      icon: <MessageCircle size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    },
    {
      title: 'Renewable Energy IoT Monitor',
      description: 'IoT system for monitoring solar panel efficiency and battery levels with web dashboard for real-time data visualization and alerts.',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['Arduino', 'React', 'MQTT', 'InfluxDB'],
      icon: <Zap size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    },
    {
      title: 'Full Stack Web Portfolio',
      description: 'Modern, responsive portfolio website showcasing projects and skills with smooth animations, dark theme, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
      icon: <Globe size={20} />,
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gmt667'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Here are some of my recent projects that demonstrate my skills in full-stack development, embedded systems, and problem-solving through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform shadow-lg hover:shadow-xl group"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-blue-600 p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
                  >
                    <ExternalLink size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors duration-200 group"
                  >
                    <Github size={16} className="group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400 mb-6">Want to see more of my work?</p>
          <a
            href="https://github.com/gmt667"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
=======
import React from "react";

export default function Projects() {
  return (
    <section className="px-6 py-12 bg-black text-white" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="grid md:grid-cols-2 gap-6">
        <li className="bg-gray-800 p-4 rounded-lg">🎓 Student Academic Portal</li>
        <li className="bg-gray-800 p-4 rounded-lg">💰 Personal Finance Tracker</li>
        <li className="bg-gray-800 p-4 rounded-lg">🎫 E-Ticketing System</li>
        <li className="bg-gray-800 p-4 rounded-lg">📷 Image Gallery with Lightbox</li>
      </ul>
    </section>
  );
}
>>>>>>> 3b0da073e6d84b9595cdd7782ff34a31d244d2c4
