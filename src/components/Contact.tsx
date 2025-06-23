<<<<<<< HEAD
import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, User, GraduationCap, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: 'Phone',
      value: '+265 885 362 150',
      href: 'tel:+265885362150'
    },
    {
      icon: <Mail size={20} />,
      label: 'Email',
      value: 'georgetaumbe@gmail.com',
      href: 'mailto:georgetaumbe@gmail.com'
    },
    {
      icon: <Mail size={20} />,
      label: 'Academic Email',
      value: 'cen-01-34-23@unilia.ac.mw',
      href: 'mailto:cen-01-34-23@unilia.ac.mw'
    },
    {
      icon: <Github size={20} />,
      label: 'GitHub Profile',
      value: 'github.com/gmt667',
      href: 'https://github.com/gmt667'
    },
    {
      icon: <MapPin size={20} />,
      label: 'Location',
      value: 'Rumphi, Malawi',
      href: null
    },
    {
      icon: <GraduationCap size={20} />,
      label: 'University',
      value: 'UNILIA - 3rd Year',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects, discuss technology, or explore opportunities that can make a positive impact in Malawi and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-slate-800 p-8 rounded-xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-500">
                  <img
                    src="/src/assets/FB_IMG_1731883976501.jpg"
                    alt="George Mustafa Taumbe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-white">George Mustafa Taumbe</h3>
                  <p className="text-blue-400">Computer Engineering Student</p>
                </div>
              </div>
              <p className="text-slate-300 mb-6 leading-relaxed">
                Computer Engineering student passionate about using technology to solve real-world problems. Currently in my 3rd year at UNILIA, focusing on full-stack development and embedded systems.
              </p>
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-lg">
                <p className="text-white font-medium">Open to:</p>
                <ul className="text-blue-100 text-sm mt-2 space-y-1">
                  <li>• Internship opportunities</li>
                  <li>• Collaborative projects</li>
                  <li>• Technical discussions</li>
                  <li>• Mentorship connections</li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4 bg-slate-800 p-4 rounded-lg hover:bg-slate-700 transition-colors">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold text-white mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-colors"
                  placeholder="Tell me about your project, idea, or just say hello..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 transform"
              >
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
=======
import React from "react";

export default function Contact() {
  return (
    <section className="px-6 py-12 bg-black text-white" id="contact">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>
      <p>Email: <a className="text-blue-400" href="mailto:georgetaumbe@gmail.com">georgetaumbe@gmail.com</a></p>
      <p>Alternative Email: <a className="text-blue-400" href="mailto:georgetaumbe@hotmail.com">georgetaumbe@hotmail.com</a></p>
      <p>Phone: <a className="text-blue-400" href="tel:+265885362150">+265 885 362 150</a>, <a className="text-blue-400" href="tel:+265996736711">+265 996 736 711</a></p>
    </section>
  );
}
>>>>>>> 3b0da073e6d84b9595cdd7782ff34a31d244d2c4
