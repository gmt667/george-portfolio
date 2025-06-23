<<<<<<< HEAD
import React from 'react';
import { Github, Mail, Heart, GraduationCap, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/gmt667', label: 'GitHub' },
    { icon: <Mail size={20} />, href: 'mailto:georgetaumbe@gmail.com', label: 'Email' },
    { icon: <Phone size={20} />, href: 'tel:+265885362150', label: 'Phone' }
  ];

  return (
    <footer className="bg-slate-800 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-blue-500">
                <img
                  src="/src/assets/FB_IMG_1731884055918.jpg"
                  alt="George Mustafa Taumbe"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">George Mustafa Taumbe</h3>
                <p className="text-slate-400 text-sm">Computer Engineering Student</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <GraduationCap size={16} />
              <span className="text-sm">3rd Year at UNILIA</span>
            </div>
            <div className="flex items-center space-x-2 text-slate-400">
              <MapPin size={16} />
              <span className="text-sm">Rumphi, Malawi</span>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Mission</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Committed to using technology to empower my community, create solutions that matter, and help build a digital future for Malawi and Africa.
            </p>
          </div>

          {/* Contact Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform bg-slate-700 p-3 rounded-lg"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
            <div className="space-y-1 text-slate-400 text-sm">
              <p>
                <a 
                  href="mailto:georgetaumbe@gmail.com" 
                  className="hover:text-blue-400 transition-colors"
                >
                  georgetaumbe@gmail.com
                </a>
              </p>
              <p>
                <a 
                  href="tel:+265885362150" 
                  className="hover:text-blue-400 transition-colors"
                >
                  +265 885 362 150
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 flex items-center space-x-2">
              <span>© 2025 George Mustafa Taumbe. Built with</span>
              <Heart size={16} className="text-red-500" />
              <span>using React & Tailwind CSS</span>
            </p>
            <p className="text-slate-500 text-sm">
              University of Livingstonia (UNILIA) • Computer Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
=======
import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 py-4 text-center bg-gray-800 text-gray-400">
      © {new Date().getFullYear()} George Mustafa Taumbe | UNILIA | Computer Engineering
    </footer>
  );
}
>>>>>>> 3b0da073e6d84b9595cdd7782ff34a31d244d2c4
