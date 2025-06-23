import React from "react";

export default function Navigation() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-gray-900 sticky top-0 z-50">
      <h1 className="text-xl font-bold text-white">George Taumbe</h1>
      <ul className="flex space-x-4 text-sm">
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-400">Experience</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>
    </nav>
  );
}
