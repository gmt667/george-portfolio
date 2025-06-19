import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead a team of 5 developers in building scalable web applications. Implemented CI/CD pipelines and reduced deployment time by 60%.',
      achievements: [
        'Led the development of a microservices architecture serving 100K+ users',
        'Mentored junior developers and conducted code reviews',
        'Improved application performance by 40% through optimization'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications using React and Node.js. Collaborated with design teams to implement pixel-perfect UIs.',
      achievements: [
        'Built 15+ responsive web applications from scratch',
        'Integrated third-party APIs and payment systems',
        'Reduced bug reports by 50% through comprehensive testing'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2018 - 2020',
      description: 'Focused on frontend development using React and modern JavaScript. Worked closely with UX designers to create intuitive user interfaces.',
      achievements: [
        'Developed reusable component library used across 8 projects',
        'Improved mobile user experience and increased engagement by 35%',
        'Collaborated with backend team to design efficient APIs'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-300">
            My professional journey and the impact I've made along the way.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-xl p-8 hover:bg-slate-600 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                  <p className="text-blue-400 font-medium mb-2">{exp.company}</p>
                </div>
                <div className="flex flex-col md:items-end space-y-2">
                  <div className="flex items-center space-x-2 text-slate-300">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-slate-300">
                    <MapPin size={16} />
                    <span className="text-sm">{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-slate-300 text-sm">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;